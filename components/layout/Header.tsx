'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Clock,
  MessageCircle,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { headerNav } from '@/data/navigation';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { company } from '@/data/company';

/**
 * Enterprise B2B Industrial Header
 * - Top Utility Strip: Factory verification, GST/MTC 3.1 credentials, operating hours, direct WhatsApp
 * - Main Nav: Tactile engineered navigation tabs, active state indicators, prominent brand anchor
 * - Conversion Area: Direct sales hotline pill + industrial RFQ action button
 * - MegaMenu: Architectural 4-column directory for standard & custom fastener lines
 */
export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const waUrl =
    'https://wa.me/' +
    company.whatsapp.number.replace(/[^\d]/g, '') +
    '?text=' +
    encodeURIComponent(company.whatsapp.prefill);

  /* Reset open menu on route change */
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
    <header ref={headerRef} className="sticky top-0 z-40 w-full">
      {/* 1. Top Industrial Utility Bar */}
      <div className="relative border-t-[2.5px] border-amber-600 bg-slate-900 text-slate-300 text-xs">
        <Container>
          <div className="flex h-9 items-center justify-between gap-4">
            {/* Left: Manufacturing Credentials */}
            <div className="flex items-center gap-3 overflow-hidden text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                <span className="font-semibold text-white">Ahmedabad Plant:</span>
                <span className="hidden sm:inline">23/4 Ghanshyam Ind. Estate</span>
              </span>
              <span className="hidden md:inline text-slate-600" aria-hidden="true">|</span>
              <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>GST: 24ARDPP9803A1Z3 · MTC 3.1 Traceable</span>
              </span>
            </div>

            {/* Right: Operational Status & Rapid Hotlines */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <span className="hidden xl:flex items-center gap-1.5 text-slate-400">
                <Clock aria-hidden="true" className="h-3.5 w-3.5 text-amber-500" />
                <span>Mon–Sat 09:30–19:00 IST</span>
              </span>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                aria-label="Direct WhatsApp RFQ"
              >
                <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                <span>WhatsApp RFQ</span>
              </a>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">|</span>
              <a
                href={tel}
                className="hidden sm:flex items-center gap-1.5 font-medium text-slate-200 transition-colors hover:text-white"
                aria-label={`Call ${company.telephones[0]}`}
              >
                <Phone aria-hidden="true" className="h-3.5 w-3.5 text-amber-500" />
                <span>{company.telephones[0]}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="border-b border-slate-200/90 bg-white/98 shadow-[0_2px_12px_rgba(15,23,42,0.06)] backdrop-blur-md">
        <Container className="relative">
          <div className="flex h-[72px] md:h-20 items-center justify-between gap-4">
            {/* Brand Logo Zone with Vertical Divider */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label={`${company.legalName} — Home`}
              >
                <Image
                  src="/brand/logo.webp"
                  alt="KP Fasteners"
                  width={986}
                  height={651}
                  priority
                  className="h-12 w-auto object-contain md:h-14 lg:h-[62px]"
                />
              </Link>
              <div
                className="hidden lg:block h-8 w-px bg-slate-200 ml-5 mr-1"
                aria-hidden="true"
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav aria-label="Primary" className="hidden h-full items-center md:flex">
              <ul className="flex h-full items-center gap-1">
                {headerNav.map((item) => {
                  const isProducts = item.href === '/products/';
                  const isMenuOpen = openMenu === 'Products' && isProducts;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));

                  return (
                    <li
                      key={item.href}
                      className="relative flex h-full items-center"
                      onMouseEnter={() => isProducts && handleMouseEnter('Products')}
                      onMouseLeave={() => isProducts && handleMouseLeave()}
                    >
                      <Link
                        href={item.href}
                        aria-expanded={isProducts ? isMenuOpen : undefined}
                        aria-haspopup={isProducts ? 'true' : undefined}
                        aria-controls={isProducts ? 'products-mega-menu' : undefined}
                        onKeyDown={(e) => isProducts && handleNavKeyDown(e, 'Products')}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-heading text-[14.5px] font-semibold tracking-tight transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                          isActive || isMenuOpen
                            ? 'bg-amber-50 text-amber-900 border border-amber-200/80 shadow-xs'
                            : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 border border-transparent'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isProducts && (
                          <ChevronDown
                            aria-hidden="true"
                            className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                              isMenuOpen ? 'rotate-180 text-amber-800' : 'group-hover:text-slate-700'
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
              {/* Direct Sales Hotline */}
              <a
                href={tel}
                className="group hidden items-center gap-2.5 rounded-lg border border-slate-200/90 bg-slate-50/70 px-3 py-1.5 transition-all hover:border-amber-300 hover:bg-amber-50/50 lg:flex"
                aria-label={`Call ${company.telephones[0]}`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Phone aria-hidden="true" className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Direct Sales
                  </span>
                  <span className="font-heading text-xs font-bold text-slate-800 group-hover:text-amber-900 tracking-tight">
                    {company.telephones[0]}
                  </span>
                </div>
              </a>

              {/* Primary RFQ Action */}
              <Link
                href="/request-quote/"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-amber-600 to-amber-700 px-4 py-2.5 font-heading text-xs lg:text-sm font-bold tracking-tight text-white shadow-sm hover:from-amber-500 hover:to-amber-600 hover:shadow transition-all active:scale-[0.98] border border-amber-700/80"
              >
                <FileText aria-hidden="true" className="h-4 w-4 text-amber-200" />
                <span>Request RFQ</span>
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-amber-200/80" />
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
              className="absolute inset-x-0 top-full z-50 mx-auto w-[min(calc(100vw-2rem),64rem)] pt-2"
            >
              <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xl transition-all">
                <MegaMenu onClose={handleCloseMega} />
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}
