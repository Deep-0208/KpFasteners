'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, FileText, Phone, MessageCircle } from 'lucide-react';
import { headerNav, footerGroups } from '@/data/navigation';
import { company } from '@/data/company';

const emptySubscribe = () => () => {};

/**
 * Full-screen mobile drawer.
 *   - Portaled to document.body so ancestor transforms/backdrop-filters cannot clip it.
 *   - Esc closes.
 *   - Auto-closes when window resized to desktop.
 *   - Focus is trapped inside the drawer while open.
 *   - Scroll lock on <body> while open.
 *   - Bottom padding prevents overlap with mobile conversion bars.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent(company.whatsapp.prefill)}`;

  // Auto-close on resize to desktop breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
    <div className="lg:hidden">
      <button
        ref={openerRef}
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>

      {open && mounted && createPortal(
        <div
          id="mobile-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto bg-white pb-36 shadow-2xl transition-all lg:hidden"
        >
          <nav aria-label="Mobile primary" className="mx-auto max-w-lg px-4 py-5">
            {/* Top Quick Actions */}
            <div className="mb-5 space-y-2.5 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
              <Link
                href="/request-quote/"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-amber-600 to-amber-700 py-3 font-heading text-sm font-bold text-white shadow-sm transition-all hover:from-amber-500 hover:to-amber-600"
              >
                <FileText aria-hidden="true" className="h-4 w-4 text-amber-200" />
                <span>Request a Fastener RFQ</span>
              </Link>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={tel}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2.5 font-heading font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-800"
                >
                  <Phone aria-hidden="true" className="h-3.5 w-3.5 text-amber-600" />
                  Call Direct
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2.5 font-heading font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <MessageCircle aria-hidden="true" className="h-3.5 w-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Primary Navigation Links */}
            <ul className="flex flex-col gap-1.5">
              {headerNav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.label === 'Products' && pathname.startsWith('/products')) ||
                  (item.label === 'Materials' && pathname.startsWith('/materials')) ||
                  (item.label === 'Industries' && pathname.startsWith('/industries')) ||
                  (item.label === 'Tools' && pathname.startsWith('/tools')) ||
                  (item.label === 'About' && pathname.startsWith('/about')) ||
                  (item.label === 'Contact' && pathname.startsWith('/contact'));

                return (
                  <li key={`nav-${item.href}`}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-[48px] items-center rounded-xl px-4 py-3 text-base font-semibold transition-all duration-150 ${
                        isActive
                          ? 'bg-amber-50 text-amber-900 border border-amber-200/90 shadow-xs'
                          : 'text-slate-800 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-200/90 border border-transparent'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Categorized Product & Material Links */}
            <div className="mt-6 grid gap-6 border-t border-slate-200 pt-6">
              {footerGroups
                .filter((g) => g.label === 'Products' || g.label === 'Materials' || g.label === 'Industries')
                .map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((i) => (
                        <li key={`sub-${group.label}-${i.href}`}>
                          <Link
                            href={i.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
        </div>,
        document.body
      )}
    </div>
  );
}
