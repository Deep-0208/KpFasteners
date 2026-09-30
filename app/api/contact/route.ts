import { NextResponse } from 'next/server';
import { z } from 'zod';
import { check } from '@/lib/ratelimit';

export const runtime = 'nodejs';

const schema = z
  .object({
    fullName: z.string().min(2).max(120),
    email: z.string().email(),
    message: z.string().min(5).max(4000),
    consent: z.literal(true),
    company_website: z.string().optional().or(z.literal('')),
  })
  .strict();

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? '';

function isAllowedOrigin(req: Request): boolean {
  if (!SITE_URL) return true;
  const origin = req.headers.get('origin') ?? req.headers.get('referer') ?? '';
  try {
    return origin.includes(new URL(SITE_URL).host);
  } catch {
    return true;
  }
}

export async function POST(req: Request) {
  if (req.headers.get('content-type')?.includes('application/json') !== true) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 415 });
  }
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anon';
  if (!check(ip, 5, 15 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
  }
  if (parsed.data.company_website && parsed.data.company_website.length > 0) {
    return NextResponse.json({ status: 'ok' });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;
  if (!key || !to) {
    console.warn('[contact] would send message (no RESEND_API_KEY / CONTACT_NOTIFICATION_EMAIL)');
    return NextResponse.json({ status: 'ok' });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(key);
    await resend.emails.send({
      from: 'KP Fasteners <noreply@kpfasteners.com>',
      to,
      subject: `New contact — ${parsed.data.fullName}`,
      text: `${parsed.data.fullName} <${parsed.data.email}>\n\n${parsed.data.message}`,
    });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ error: 'Send failed' }, { status: 500 });
  }

  return NextResponse.json({ status: 'ok' });
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
