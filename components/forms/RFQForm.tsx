'use client';

import Link from 'next/link';
import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, Phone, UploadCloud } from 'lucide-react';

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/jpg',
  'application/acad',
  'image/vnd.dwg',
  'image/x-dwg',
  'application/dwg',
  'application/x-dwg',
  'application/dxf',
  'image/vnd.dxf',
  'application/octet-stream', // DWG/DXF often arrive as octet-stream
]);

const WA_NUMBER = '919898230448';

type FieldErrors = Partial<Record<string, string>>;

export interface RFQFormProps {
  productOptions: { value: string; label: string }[];
}

export function RFQForm({ productOptions }: RFQFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'validation' | 'network'>(
    'idle',
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [summary, setSummary] = useState<string>('');
  const [snapshot, setSnapshot] = useState<Record<string, string>>({});

  const waFallback = useMemo(() => {
    const text =
      `Hello KP Fasteners, I would like a quote.\n` +
      Object.entries(snapshot)
        .filter(([k, v]) => v && k !== 'consent' && k !== 'company_website')
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text || 'Hello KP Fasteners, I would like a quote.')}`;
  }, [snapshot]);

  function validate(form: FormData): FieldErrors {
    const errs: FieldErrors = {};
    const req = (k: string, label: string) => {
      if (!(form.get(k) ?? '').toString().trim()) errs[k] = `${label} is required.`;
    };
    req('fullName', 'Full name');
    req('company', 'Company');
    req('productCategory', 'Product / category');

    const email = (form.get('email') ?? '').toString().trim();
    const phone = (form.get('phone') ?? '').toString().trim();
    if (!email && !phone) {
      errs.email = 'Please provide an email or phone.';
      errs.phone = 'Please provide an email or phone.';
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email.';
    }

    const pin = (form.get('deliveryPin') ?? '').toString().trim();
    if (pin && !/^\d{6}$/.test(pin)) errs.deliveryPin = 'Pin code must be 6 digits.';

    if (!form.get('consent')) errs.consent = 'Please tick the consent checkbox.';

    const file = form.get('drawing');
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_UPLOAD_BYTES) {
        errs.drawing = 'File must be 8 MB or smaller.';
      } else if (file.type && !ALLOWED_MIME.has(file.type)) {
        // Accept by extension fallback
        const ext = file.name.toLowerCase().split('.').pop() ?? '';
        if (!['pdf', 'dwg', 'dxf', 'png', 'jpg', 'jpeg'].includes(ext)) {
          errs.drawing = 'File must be PDF, DWG, DXF, PNG or JPG.';
        }
      }
    }
    return errs;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);

    // Snapshot (strings) for WhatsApp fallback
    const snap: Record<string, string> = {};
    for (const [k, v] of form.entries()) {
      if (typeof v === 'string') snap[k] = v;
    }
    setSnapshot(snap);

    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus('validation');
      setSummary(`Please fix ${Object.keys(errs).length} field(s) and try again.`);
      return;
    }
    setErrors({});
    setStatus('submitting');
    setSummary('');

    try {
      const res = await fetch('/api/quote', { method: 'POST', body: form });
      if (res.ok) {
        setStatus('ok');
        return;
      }
      if (res.status === 400) {
        const data = (await res.json().catch(() => ({}))) as { fieldErrors?: FieldErrors };
        setErrors(data.fieldErrors ?? {});
        setStatus('validation');
        setSummary('Server rejected the submission. Please review the fields.');
        return;
      }
      setStatus('network');
      setSummary(
        res.status === 429
          ? 'Too many requests. Please try again in a few minutes.'
          : 'The server could not accept the RFQ right now.',
      );
    } catch {
      setStatus('network');
      setSummary('Network error — the request did not reach our server.');
    }
  }

  if (status === 'ok') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[14px] border border-[color:var(--gold-300)] bg-brand-gold-soft/40 p-6 shadow-card"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-6 w-6 text-success" />
          <div>
            <p className="font-heading text-lg font-semibold text-brand-steel">
              Thanks — your RFQ is with our sales desk.
            </p>
            <p className="mt-2 text-sm text-ink">
              We&apos;ve logged your enquiry. You&apos;ll receive an email summary; our team
              replies within one working day with material availability, lead time and MTC
              options.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li>1. Check your inbox for a confirmation from <code>sales@kpfasteners.com</code> (and spam, just in case).</li>
              <li>2. For anything urgent, WhatsApp or call us with your reference details.</li>
              <li>3. Reply to the confirmation email to add drawings or extra context.</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={waFallback}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp us
              </a>
              <a href="tel:+919898230448" className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4" />
                &nbsp;Call +91 98982 30448
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate encType="multipart/form-data" className="grid gap-5">
      {/* Honeypot — must stay empty */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-10000px] h-0 w-0 opacity-0"
      />

      {status === 'validation' && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-md border border-[color:var(--accent-red)] bg-white p-3 text-sm text-danger"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4" />
          <span>{summary}</span>
        </div>
      )}

      {status === 'network' && (
        <div
          role="alert"
          className="flex flex-col gap-2 rounded-md border border-[color:var(--accent-red)] bg-white p-3 text-sm text-ink"
        >
          <div className="flex items-start gap-2 text-danger">
            <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4" />
            <span>{summary}</span>
          </div>
          <p className="text-ink-muted">
            Your form is still filled in — try again, or send the same details via WhatsApp:
          </p>
          <a
            href={waFallback}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-fit"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            &nbsp;Open WhatsApp with your details
          </a>
        </div>
      )}

      {/* Step 1: Fastener Requirements */}
      <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white">1</span>
            Fastener Specifications &amp; Blueprint
          </p>
          <span className="text-[11px] font-medium text-slate-500">BOQ / Drawing</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            label="Product / category"
            name="productCategory"
            required
            options={productOptions}
            error={errors.productCategory}
          />
          <Field label="Size / dimension" name="size" placeholder="e.g., M20 × 300 mm" error={errors.size} />
          <Field label="Grade / material" name="material" placeholder="e.g., 8.8, SS 316, B7" error={errors.material} />
          <Field label="Coating / finish" name="coating" placeholder="e.g., HDG, Zinc yellow, PTFE" error={errors.coating} />
          <Field label="Quantity / tonnage" name="quantity" placeholder="e.g., 500 pcs / 200 kg" error={errors.quantity} />
        </div>
        <div className="pt-2">
          <FileField label="Engineering Drawing / BOQ" name="drawing" error={errors.drawing} />
        </div>
      </div>

      {/* Step 2: Commercial Delivery & Contact Information */}
      <div className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold text-white">2</span>
            Contact &amp; Delivery Destination
          </p>
          <span className="text-[11px] font-medium text-slate-500">24-hr Quote SLA</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="fullName" required autoComplete="name" error={errors.fullName} />
          <Field label="Company" name="company" required autoComplete="organization" error={errors.company} />
          <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} help="Email or phone — at least one." />
          <Field label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} help="With country code — +91…" />
          <Field
            label="Delivery pin code"
            name="deliveryPin"
            inputMode="numeric"
            placeholder="6-digit PIN"
            error={errors.deliveryPin}
          />
          <Field label="City / country" name="country_city" placeholder="e.g., Ahmedabad / India" error={errors.country_city} />
        </div>
      </div>

      <label className="grid gap-1">
        <span className="text-sm font-medium text-ink">Additional notes</span>
        <textarea
          name="notes"
          rows={4}
          className="min-h-[48px] rounded-md border border-border p-3 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-[color:var(--gold-glow)]"
        />
      </label>

      <label className="flex items-start gap-2 text-sm text-ink">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-5 w-5"
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          aria-invalid={errors.consent ? 'true' : undefined}
        />
        <span>
          I agree to be contacted by KP Fasteners about this enquiry. See our{' '}
          <Link href="/privacy-policy/" className="underline">
            privacy policy
          </Link>
          .
        </span>
      </label>
      {errors.consent && (
        <p id="consent-error" className="text-sm text-danger">
          {errors.consent}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              &nbsp;Sending…
            </>
          ) : (
            'Send RFQ'
          )}
        </button>
      </div>

      <div role="status" aria-live="polite" className="sr-only">
        {status === 'submitting' ? 'Sending your RFQ…' : ''}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
  inputMode,
  placeholder,
  error,
  help,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: 'text' | 'numeric';
  placeholder?: string;
  error?: string;
  help?: ReactNode;
}) {
  const id = `f-${name}`;
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;
  const describedBy = [error ? errorId : null, help ? helpId : null].filter(Boolean).join(' ');
  return (
    <label htmlFor={id} className="grid gap-1">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy || undefined}
        className="min-h-[48px] rounded-md border border-border p-3 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-[color:var(--gold-glow)]"
      />
      {help && !error && (
        <span id={helpId} className="text-xs text-ink-muted">
          {help}
        </span>
      )}
      {error && (
        <span id={errorId} className="text-xs text-danger">
          {error}
        </span>
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  error?: string;
}) {
  const id = `f-${name}`;
  const errorId = `${id}-error`;
  return (
    <label htmlFor={id} className="grid gap-1">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <select
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        defaultValue=""
        className="min-h-[48px] rounded-md border border-border bg-white p-3 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-[color:var(--gold-glow)]"
      >
        <option value="" disabled>
          Select a product…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <span id={errorId} className="text-xs text-danger">
          {error}
        </span>
      )}
    </label>
  );
}

function FileField({
  label,
  name,
  error,
}: {
  label: string;
  name: string;
  error?: string;
}) {
  const id = `f-${name}`;
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;
  return (
    <div className="grid gap-1.5">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
        <span>{label}</span>
        <span className="font-normal text-slate-500">Optional · Max 8 MB</span>
      </div>
      <label
        htmlFor={id}
        className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-5 text-center transition-all hover:border-amber-500 hover:bg-amber-50/40"
      >
        <UploadCloud aria-hidden="true" className="h-8 w-8 text-slate-400 group-hover:text-amber-600 transition-colors" />
        <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-amber-950">
          Click to upload or drag &amp; drop drawing / BOQ
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          PDF, DWG, DXF, PNG or JPG (Kept strictly confidential)
        </p>
        <input
          id={id}
          name={name}
          type="file"
          accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : helpId}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </label>
      {error && (
        <span id={errorId} className="text-xs text-danger">
          {error}
        </span>
      )}
    </div>
  );
}
