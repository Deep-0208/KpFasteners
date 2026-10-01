import { NextResponse } from 'next/server';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { check } from '@/lib/ratelimit';

export const runtime = 'nodejs';

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;

const schema = z
  .object({
    fullName: z.string().min(2).max(120),
    company: z.string().min(1).max(200),
    email: z.string().email().optional().or(z.literal('')),
    phone: z.string().max(40).optional().or(z.literal('')),
    country_city: z.string().max(120).optional().or(z.literal('')),
    productCategory: z.string().min(1).max(120),
    material: z.string().max(120).optional().or(z.literal('')),
    coating: z.string().max(120).optional().or(z.literal('')),
    size: z.string().max(200).optional().or(z.literal('')),
    quantity: z.string().max(120).optional().or(z.literal('')),
    deliveryPin: z.string().max(10).optional().or(z.literal('')),
    notes: z.string().max(4000).optional().or(z.literal('')),
    consent: z.union([z.literal('on'), z.literal('true'), z.boolean()]),
    company_website: z.string().optional().or(z.literal('')),
  })
  .refine((d) => Boolean(d.email) || Boolean(d.phone), {
    message: 'Email or phone required.',
    path: ['email'],
  })
  .refine((d) => !d.deliveryPin || /^\d{6}$/.test(d.deliveryPin), {
    message: 'Pin code must be 6 digits.',
    path: ['deliveryPin'],
  });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get('origin') ?? req.headers.get('referer') ?? '';
  if (!origin) return true; // same-origin fetch may omit
  try {
    const host = new URL(origin).host;
    if (host === 'localhost:3000' || host.endsWith('.vercel.app')) return true;
    if (SITE_URL) {
      const siteHost = new URL(SITE_URL).host;
      return host === siteHost;
    }
    return true;
  } catch {
    return false;
  }
}

// Magic-byte sniff — accept PDF, PNG, JPEG, DWG, DXF (text).
function sniffAllowed(bytes: Uint8Array, filename: string): boolean {
  const sig = Array.from(bytes.slice(0, 8))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  // PDF: 25 50 44 46
  if (sig.startsWith('25504446')) return true;
  // PNG: 89 50 4E 47
  if (sig.startsWith('89504e47')) return true;
  // JPEG: FF D8 FF
  if (sig.startsWith('ffd8ff')) return true;
  // DWG: 'AC' + 4-char version (AC1012, AC1024, etc.) → 41 43 31
  if (sig.startsWith('414331')) return true;
  // DXF (ASCII) starts with "  0\nSECTION" or similar — permit by extension
  const ext = filename.toLowerCase().split('.').pop() ?? '';
  if (ext === 'dxf') {
    const head = new TextDecoder().decode(bytes.slice(0, 32)).trim().toUpperCase();
    if (head.includes('SECTION') || /^\d+/.test(head)) return true;
  }
  return false;
}

export async function POST(req: Request) {
  const reqId = randomUUID();
  const ct = req.headers.get('content-type') ?? '';
  if (!ct.includes('multipart/form-data')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 });
  }
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anon';
  if (!check(ip, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'retry-after': '900' } },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const raw: Record<string, unknown> = {};
  for (const [k, v] of form.entries()) {
    if (typeof v === 'string') raw[k] = v;
  }
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? '_';
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 });
  }

  // Honeypot — behave as success without actually sending
  if (parsed.data.company_website && parsed.data.company_website.length > 0) {
    console.warn(JSON.stringify({ evt: 'quote.honeypot', reqId }));
    return NextResponse.json({ status: 'ok' });
  }

  // Upload validation
  const file = form.get('drawing');
  let attachment: { filename: string; content: Buffer } | null = null;
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { error: 'Validation failed', fieldErrors: { drawing: 'File too large (max 8 MB).' } },
        { status: 400 },
      );
    }
    const buf = Buffer.from(await file.arrayBuffer());
    if (!sniffAllowed(buf, file.name)) {
      return NextResponse.json(
        { error: 'Validation failed', fieldErrors: { drawing: 'Unsupported file type.' } },
        { status: 400 },
      );
    }
    attachment = { filename: file.name, content: buf };
  }

  const d = parsed.data;
  const salesTo = process.env.SALES_NOTIFICATION_EMAIL ?? 'sales@kpfasteners.com';
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    // Dev / no-email mode: structured "would send" line + success
    console.log(
      JSON.stringify({
        evt: 'quote.would_send',
        reqId,
        to: salesTo,
        productCategory: d.productCategory,
        company: d.company,
        hasAttachment: Boolean(attachment),
        attachmentBytes: attachment?.content.length ?? 0,
      }),
    );
    return NextResponse.json({ status: 'ok', reqId });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(key);

    const salesText =
      `New RFQ (${reqId})\n\n` +
      [
        ['Name', d.fullName],
        ['Company', d.company],
        ['Email', d.email || '—'],
        ['Phone', d.phone || '—'],
        ['City', d.country_city || '—'],
        ['Product', d.productCategory],
        ['Grade / material', d.material || '—'],
        ['Coating', d.coating || '—'],
        ['Size', d.size || '—'],
        ['Quantity', d.quantity || '—'],
        ['Dispatch pin', d.deliveryPin || '—'],
        ['Notes', d.notes || '—'],
      ]
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');

    await resend.emails.send({
      from: 'KP Fasteners <noreply@kpfasteners.com>',
      to: salesTo,
      subject: `New RFQ — ${d.productCategory} — ${d.company}`,
      text: salesText,
      attachments: attachment
        ? [{ filename: attachment.filename, content: attachment.content }]
        : undefined,
    });

    if (d.email) {
      const buyerText =
        `Hi ${d.fullName.split(' ')[0]},\n\n` +
        `Thanks for sending your RFQ to KP Fasteners. Here's what we received:\n\n` +
        `Product: ${d.productCategory}\n` +
        `Grade / material: ${d.material || '—'}\n` +
        `Coating: ${d.coating || '—'}\n` +
        `Size: ${d.size || '—'}\n` +
        `Quantity: ${d.quantity || '—'}\n` +
        `Dispatch pin code: ${d.deliveryPin || '—'}\n` +
        `Drawing attached: ${attachment ? 'yes' : 'no'}\n` +
        `Notes: ${d.notes || '—'}\n\n` +
        `We'll reply from sales@kpfasteners.com within one working day.\n\n` +
        `If it's urgent, WhatsApp us on +91 98982 30448 (Mon–Sat 09:30–19:00 IST)\n` +
        `and quote reference ${reqId}.\n\n` +
        `Regards,\nKP Fasteners\n23/4 Ghanshyam Industrial Estate, Ahmedabad 380024\nGST 24ARDPP9803A1Z3\n`;

      await resend.emails.send({
        from: 'KP Fasteners <sales@kpfasteners.com>',
        to: d.email,
        subject: `We've received your RFQ — KP Fasteners`,
        text: buyerText,
      });
    }
  } catch (err) {
    console.error(JSON.stringify({ evt: 'quote.send_failed', reqId, err: String(err) }));
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }

  return NextResponse.json({ status: 'ok', reqId });
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
