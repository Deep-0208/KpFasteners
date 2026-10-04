import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { headerNav } from '@/data/navigation';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { company } from '@/data/company';

/**
 * Sticky header. Logo left · nav centred · gold-gradient "Get Quote" CTA
 * right (with secondary phone + mobile-menu affordance).
 * CSS backdrop blur with solid fallback.
 */
export function Header() {
  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-glass backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg-glass)]">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo only — text removed to match Honeywell reference */}
          <Link
            href="/"
            className="flex items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={`${company.legalName} — Home`}
          >
            <Image
              src="/brand/logo.webp"
              alt="KP Fasteners"
              width={134}
              height={96}
              priority
              className="h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden h-full items-center md:flex">
            <ul className="flex h-full items-center gap-1 lg:gap-2">
              {headerNav.map((item) => {
                const isProducts = item.href === '/products/';
                return (
                  <li
                    key={item.href}
                    className={`relative flex h-full items-center ${isProducts ? 'group' : ''}`}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center rounded-md px-3 py-2 font-heading text-sm font-semibold text-steel-800 transition-colors hover:text-brand-gold-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                    >
                      {item.label}
                      {isProducts && (
                        <ChevronDown
                          aria-hidden="true"
                          className="ml-1 h-3.5 w-3.5 text-steel-500 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                        />
                      )}
                    </Link>

                    {/* Desktop Mega Menu for Products */}
                    {isProducts && (
                      <div className="invisible pointer-events-none absolute left-1/2 top-full z-40 w-[min(90vw,62rem)] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                        <div className="rounded-[14px] border border-border bg-surface p-6 shadow-card-hover">
                          <MegaMenu />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Affordances */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={tel}
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-brand-steel transition-colors hover:text-brand-gold-strong"
              aria-label={`Call ${company.telephones[0]}`}
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
              <span className="hidden lg:inline">{company.telephones[0]}</span>
            </a>
            <Link href="/request-quote/" className="btn btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Drawer Toggle */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
