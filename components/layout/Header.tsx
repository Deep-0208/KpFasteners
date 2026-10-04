'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { headerNav } from '@/data/navigation';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { company } from '@/data/company';

/**
 * Sticky header with interactive MegaMenu.
 * Styled after Honeywell SEO design system:
 * - Logo-only branding (no redundant text)
 * - Centered navigation with active route indication
 * - Smooth 200ms debounced hover/focus MegaMenu anchored to the container
 * - Full keyboard (Escape/Enter) and outside-click accessibility
 */
export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

  /* Reset open menu on route change (idiomatic React state adjustment during render) */
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
  }

  /* Close on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* Hover handlers with 200ms debounce */
  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  }, []);

  const handleCloseMega = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(null);
  }, []);

  /* Keyboard accessibility */
  const handleNavKeyDown = useCallback(
    (e: React.KeyboardEvent, label: string) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpenMenu((prev) => (prev === label ? null : label));
      }
    },
    [],
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-border bg-glass backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg-glass)]"
    >
      <Container className="relative">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Logo only — prominent, high-res & properly sized */}
          <Link
            href="/"
            className="flex items-center rounded py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={`${company.legalName} — Home`}
          >
            <Image
              src="/brand/logo.webp"
              alt="KP Fasteners"
              width={400}
              height={294}
              priority
              className="h-12 w-auto object-contain md:h-16 lg:h-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden h-full items-center md:flex">
            <ul className="flex h-full items-center gap-1 lg:gap-2">
              {headerNav.map((item) => {
                const isProducts = item.href === '/products/';
                const isMenuOpen = openMenu === 'Products' && isProducts;
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));

                return (
                  <li
                    key={item.href}
                    className="flex h-full items-center"
                    onMouseEnter={() => isProducts && handleMouseEnter('Products')}
                    onMouseLeave={() => isProducts && handleMouseLeave()}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={isProducts ? isMenuOpen : undefined}
                      aria-haspopup={isProducts ? 'true' : undefined}
                      aria-controls={isProducts ? 'products-mega-menu' : undefined}
                      onKeyDown={(e) => isProducts && handleNavKeyDown(e, 'Products')}
                      className={`inline-flex items-center rounded-md px-3 py-2 font-heading text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                        isActive || isMenuOpen
                          ? 'text-brand-gold-strong'
                          : 'text-steel-800 hover:text-brand-gold-strong'
                      }`}
                    >
                      {item.label}
                      {isProducts && (
                        <ChevronDown
                          aria-hidden="true"
                          className={`ml-1 h-3.5 w-3.5 text-steel-500 transition-transform duration-200 ${
                            isMenuOpen ? 'rotate-180 text-brand-gold-strong' : ''
                          }`}
                        />
                      )}
                    </Link>
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

        {/* Desktop Mega Menu for Products — Anchored to Header Container */}
        {openMenu === 'Products' && (
          <div
            id="products-mega-menu"
            role="region"
            aria-label="Products directory"
            onMouseEnter={() => handleMouseEnter('Products')}
            onMouseLeave={handleMouseLeave}
            className="absolute left-1/2 top-full z-50 w-[min(calc(100vw-2rem),62rem)] -translate-x-1/2 pt-2 transition-all duration-200"
          >
            <div className="overflow-hidden rounded-[14px] border border-border bg-surface p-6 shadow-card-hover">
              <div className="mb-4 h-[2px] w-full rounded-full bg-gradient-to-r from-brand-gold via-brand-steel to-brand-gold" />
              <MegaMenu onClose={handleCloseMega} />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
