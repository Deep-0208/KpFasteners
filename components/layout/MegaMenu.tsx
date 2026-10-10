import Link from 'next/link';
import {
  ArrowRight,
  Layers,
  Wrench,
  FileText,
  Phone,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { company } from '@/data/company';

/**
 * Clean, intuitive B2B product mega menu for KP Fasteners.
 * Organized by natural fastener categories with clear visual hierarchy,
 * eliminating confusing internal jargon and visual clutter.
 */
export function MegaMenu({ onClose }: { onClose?: () => void }) {
  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

  return (
    <div className="space-y-5">
      {/* Directory Sub-Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-600" />
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
            Fastener Products &amp; Technical Catalog
          </p>
        </div>
        <Link
          href="/products/"
          onClick={onClose}
          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 hover:underline"
        >
          <span>View All 9 Product Categories</span>
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Anchors & Structural Rods */}
        <div>
          <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Building2 aria-hidden="true" className="h-4 w-4 text-amber-600" />
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-800">
              Anchors &amp; Rods
            </p>
          </div>
          <ul className="space-y-1">
            {[
              {
                href: '/products/foundation-bolts/',
                label: 'Foundation Bolts',
                desc: 'IS 5624 · J, L, U & Hooked Anchors',
              },
              {
                href: '/products/stud-bolts/',
                label: 'Stud Bolts',
                desc: 'ASTM A193 B7 / B8 / B8M Flange Studs',
              },
              {
                href: '/products/sag-rods/',
                label: 'Sag Rods',
                desc: 'PEB Purlin & Solar Bracing Rods',
              },
              {
                href: '/products/tie-rods/',
                label: 'Tie Rods',
                desc: 'D15 / D20 Civil Formwork Rods',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2.5 py-2 transition-colors hover:bg-slate-50"
                >
                  <p className="font-heading text-xs font-bold text-slate-900 group-hover:text-amber-700">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Bolts & Hardware */}
        <div>
          <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Wrench aria-hidden="true" className="h-4 w-4 text-amber-600" />
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-800">
              Bolts &amp; Hardware
            </p>
          </div>
          <ul className="space-y-1">
            {[
              {
                href: '/products/hex-bolts-nuts/',
                label: 'Hex Bolts & Nuts',
                desc: 'DIN 933 / 934 · Property Class 4.6–10.9',
              },
              {
                href: '/products/csk-allen-bolts/',
                label: 'CSK Allen Bolts',
                desc: 'DIN 7991 · Flush Socket Screws',
              },
              {
                href: '/products/solar-accessories/',
                label: 'Solar Accessories',
                desc: 'MMS Flange Bolts & Module Clamps',
              },
              {
                href: '/products/scaffold-accessories/',
                label: 'Scaffold Accessories',
                desc: 'Wing Nuts, Waller Plates & Nut Sets',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2.5 py-2 transition-colors hover:bg-slate-50"
                >
                  <p className="font-heading text-xs font-bold text-slate-900 group-hover:text-amber-700">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Custom & Metallurgy */}
        <div>
          <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Layers aria-hidden="true" className="h-4 w-4 text-amber-600" />
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-800">
              Custom &amp; Materials
            </p>
          </div>
          <ul className="space-y-1">
            {[
              {
                href: '/products/custom-fasteners/',
                label: 'Custom Fasteners',
                desc: 'Drawing-to-Print Special Fabrication',
              },
              {
                href: '/materials/high-tensile-fasteners/',
                label: 'High-Tensile Steel',
                desc: 'Class 8.8, 10.9 & 12.9 Alloy Steels',
              },
              {
                href: '/materials/stainless-steel-fasteners/',
                label: 'Stainless Steel Fasteners',
                desc: 'SS 304 (A2-70) & SS 316 (A4-70)',
              },
              {
                href: '/tools/',
                label: 'Fastener Calculators',
                desc: 'Weight, Torque & Pitch Engineering Tools',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2.5 py-2 transition-colors hover:bg-slate-50"
                >
                  <p className="font-heading text-xs font-bold text-slate-900 group-hover:text-amber-700">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick RFQ Callout Card */}
        <div className="flex flex-col justify-between rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 to-white p-4 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                <FileText aria-hidden="true" className="h-4 w-4" />
              </div>
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-amber-950">
                Direct Project RFQ
              </p>
            </div>
            <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
              Have a bill of materials or custom technical drawing? We quote within 24 hours with exact standards, coatings, and MTC 3.1 availability.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
              <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Drawings accepted: PDF, CAD, DWG</span>
            </div>
          </div>

          <div className="mt-4 space-y-2 pt-2 border-t border-amber-200/50">
            <Link
              href="/request-quote/"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-gradient-to-b from-amber-600 to-amber-700 py-2.5 px-3 font-heading text-xs font-bold text-white shadow-xs transition-all hover:from-amber-500 hover:to-amber-600 active:scale-[0.98]"
            >
              <span>Request Quote / Upload BOQ</span>
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-amber-200" />
            </Link>
            <a
              href={tel}
              className="flex items-center justify-center gap-1.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-amber-800"
            >
              <Phone aria-hidden="true" className="h-3 w-3 text-amber-600" />
              <span>Call: {company.telephones[0]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Clean Bottom Trust Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Ahmedabad Plant Manufacturing &amp; Dispatch</span>
          </span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span className="hidden sm:inline">EN 10204 3.1 MTC on request</span>
        </div>
        <Link
          href="/contact/"
          onClick={onClose}
          className="font-heading font-semibold text-slate-700 hover:text-amber-700 hover:underline"
        >
          Contact Sales Team →
        </Link>
      </div>
    </div>
  );
}
