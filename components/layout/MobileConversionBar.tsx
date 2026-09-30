'use client';

import Link from 'next/link';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { company } from '@/data/company';

export function MobileConversionBar() {
  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent(company.whatsapp.prefill)}`;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface md:hidden">
      <div className="grid grid-cols-3">
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
          className="flex min-h-[56px] items-center justify-center gap-2 border-x border-border text-sm font-medium text-brand-steel"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" /> WhatsApp
        </a>
        <Link
          href="/request-quote/"
          className="flex min-h-[56px] items-center justify-center gap-2 bg-brand-gold text-sm font-semibold text-white"
        >
          <FileText aria-hidden="true" className="h-5 w-5" /> RFQ
        </Link>
      </div>
    </div>
  );
}
