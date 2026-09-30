'use client';

import { useState, type FormEvent } from 'react';

export function RFQForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...payload, consent: form.get('consent') === 'on' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('ok');
      setMessage('Thank you — we will reply within one business day.');
    } catch {
      setStatus('error');
      setMessage('Sorry, something went wrong. Please try again or WhatsApp us directly.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <Field label="Full name" name="fullName" required autoComplete="name" />
      <Field label="Company" name="company" required autoComplete="organization" />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <Field label="Phone (with country code)" name="phone" type="tel" autoComplete="tel" />
      <Field label="Product / category" name="productCategory" required />
      <Field label="Material / grade" name="material" />
      <Field label="Coating" name="coating" />
      <Field label="Size / range" name="size" />
      <Field label="Quantity / tonnage" name="quantity" />
      <Field label="Delivery pin code" name="deliveryPin" inputMode="numeric" />
      <label className="grid gap-1">
        <span className="text-sm font-medium text-ink">Additional notes</span>
        <textarea name="notes" rows={4} className="rounded-md border border-border p-3" />
      </label>
      <label className="flex items-start gap-2 text-sm text-ink">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>I agree to be contacted about this enquiry.</span>
      </label>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-white hover:bg-brand-gold-hover disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send RFQ'}
      </button>
      {status !== 'idle' && status !== 'submitting' && (
        <p role="status" className={status === 'ok' ? 'text-success' : 'text-danger'}>
          {message}
        </p>
      )}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: 'text' | 'numeric';
}) {
  const id = `f-${name}`;
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
        className="min-h-[48px] rounded-md border border-border p-3"
      />
    </label>
  );
}
