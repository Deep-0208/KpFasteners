import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { headerNav } from '@/data/navigation';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { company } from '@/data/company';

/**
 * Sticky header. Logo left · nav centred · gold-gradient "Get Quote" CTA
 * right (with a secondary phone / mobile-menu affordance). Backdrop blur on
 * scroll is handled by `bg-surface/85 backdrop-blur` — no client JS needed.
 */
export function Header() {
  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-glass backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg-glass)]">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded"
            aria-label={`${company.legalName} — home`}
          >
            <Image
              src="/brand/logo.jpg.jpeg"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded object-cover"
            />
            <span className="font-heading text-lg font-bold tracking-tight text-brand-steel">
              KP Fasteners
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {headerNav.map((item) => {
                const isProducts = item.href === '/products/';
                return (
                  <li key={item.href} className={isProducts ? 'group relative' : ''}>
                    <Link
                      href={item.href}
                      className="rounded font-heading text-sm font-semibold text-steel-800 transition-colors hover:text-brand-gold-strong"
                    >
                      {item.label}
                    </Link>
                    {isProducts && (
                      <div className="pointer-events-none absolute left-1/2 top-full z-30 hidden w-[min(80vw,56rem)] -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:block group-focus-within:opacity-100">
                        <div className="rounded-[14px] border border-border bg-surface p-6 shadow-lg">
                          <MegaMenu />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={tel}
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-steel transition-colors hover:text-brand-gold-strong"
              aria-label={`Call ${company.telephones[0]}`}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {company.telephones[0]}
            </a>
            <Link href="/request-quote/" className="btn btn-primary">
              Get Quote
            </Link>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
