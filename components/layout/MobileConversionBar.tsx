'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { company } from '@/data/company';

const STORAGE_KEY = 'kp-mobilebar-dismissed';

export function MobileConversionBar() {
  // Initialise from sessionStorage lazily (safe: the module is 'use client').
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1');
        } catch { /* ignore */ }
        setDismissed(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  if (dismissed) return null;

  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent(company.whatsapp.prefill)}`;

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch { /* ignore */ }
    setDismissed(true);
  };

  return (
    <div
      role="complementary"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface shadow-card-hover md:hidden"
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_auto]">
        <a
          href={tel}
          className="flex min-h-[56px] items-center justify-center gap-2 text-sm font-medium text-brand-steel"
          aria-label="Call KP Fasteners"
        >
          <Phone aria-hidden="true" className="h-5 w-5" /> Call
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[56px] items-center justify-center gap-2 border-x border-border bg-[#16A34A] text-sm font-semibold text-white hover:bg-[#15803D]"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" /> WhatsApp
        </a>
        <Link
          href="/request-quote/"
          className="flex min-h-[56px] items-center justify-center gap-2 bg-[image:var(--gold-gradient)] text-sm font-semibold text-white shadow-gold"
        >
          <FileText aria-hidden="true" className="h-5 w-5" /> RFQ
        </Link>
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss quick-contact bar"
          className="flex min-h-[56px] w-10 items-center justify-center border-l border-border text-ink-muted"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
