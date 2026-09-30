'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...payload, consent: form.get('consent') === 'on' }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label htmlFor="c-name" className="grid gap-1">
        <span className="text-sm font-medium text-ink">Full name *</span>
        <input id="c-name" name="fullName" required autoComplete="name" className="min-h-[48px] rounded-md border border-border p-3" />
      </label>
      <label htmlFor="c-email" className="grid gap-1">
        <span className="text-sm font-medium text-ink">Email *</span>
        <input id="c-email" type="email" name="email" required autoComplete="email" className="min-h-[48px] rounded-md border border-border p-3" />
      </label>
      <label htmlFor="c-msg" className="grid gap-1">
        <span className="text-sm font-medium text-ink">Message *</span>
        <textarea id="c-msg" name="message" required rows={5} className="rounded-md border border-border p-3" />
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
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'ok' && <p role="status" className="text-success">Message sent — we will reply soon.</p>}
      {status === 'error' && <p role="status" className="text-danger">Something went wrong. Please try again.</p>}
    </form>
  );
}
