import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { headerNav } from '@/data/navigation';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { company } from '@/data/company';

/**
 * Sticky header. Logo left, primary nav centre-right, mobile hamburger.
 * MegaMenu is CSS-hover-only for the top-level items that have sub-groups.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85">
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
            <span className="text-lg font-bold tracking-tight text-brand-steel">
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
                      className="rounded text-sm font-medium text-ink hover:text-brand-gold-strong"
                    >
                      {item.label}
                    </Link>
                    {isProducts && (
                      <div
                        className="pointer-events-none absolute left-1/2 top-full z-30 hidden w-[min(80vw,56rem)] -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:block group-focus-within:opacity-100"
                      >
                        <div className="rounded-lg border border-border bg-surface p-6 shadow-card-hover">
                          <MegaMenu />
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
