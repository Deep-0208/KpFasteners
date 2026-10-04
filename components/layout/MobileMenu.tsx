'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, FileText, Phone, MessageCircle } from 'lucide-react';
import { headerNav, footerGroups } from '@/data/navigation';
import { company } from '@/data/company';

/**
 * Full-screen mobile drawer.
 *   - Esc closes.
 *   - Focus is trapped inside the drawer while open.
 *   - Scroll lock on <body> while open.
 *   - Bottom padding prevents overlap with MobileConversionBar.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent(company.whatsapp.prefill)}`;

  useEffect(() => {
    if (!open) return;

    const opener = openerRef.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    // Focus first link after open
    requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    });

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
      opener?.focus();
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={openerRef}
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-md text-brand-steel focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="fixed inset-0 top-16 z-50 overflow-y-auto bg-surface pb-28 shadow-2xl"
        >
          <nav aria-label="Mobile primary" className="px-4 py-6">
            {/* Top Quick Actions */}
            <div className="mb-6 space-y-3 rounded-xl border border-border bg-surface-alt p-4">
              <Link
                href="/request-quote/"
                onClick={() => setOpen(false)}
                className="btn btn-primary flex w-full items-center justify-center gap-2 py-3 text-center"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                Request a Quote
              </Link>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={tel}
                  className="flex items-center justify-center gap-1.5 rounded-md border border-border bg-surface py-2.5 font-semibold text-brand-steel hover:text-brand-gold-strong"
                >
                  <Phone aria-hidden="true" className="h-3.5 w-3.5 text-brand-gold-strong" />
                  Call Sales
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-md border border-border bg-surface py-2.5 font-semibold text-brand-steel hover:text-accent-green"
                >
                  <MessageCircle aria-hidden="true" className="h-3.5 w-3.5 text-accent-green" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Primary Navigation Links */}
            <ul className="flex flex-col gap-1">
              {headerNav.map((item) => (
                <li key={`nav-${item.href}`}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface-alt"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Categorized Product & Material Links */}
            <div className="mt-6 grid gap-6 border-t border-border pt-6">
              {footerGroups
                .filter((g) => g.label === 'Products' || g.label === 'Materials' || g.label === 'Industries')
                .map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((i) => (
                        <li key={`sub-${group.label}-${i.href}`}>
                          <Link
                            href={i.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm text-ink hover:bg-surface-alt"
                          >
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
