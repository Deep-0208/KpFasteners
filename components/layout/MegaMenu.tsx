import Link from 'next/link';
import { ArrowRight, Factory, Truck, Layers, ShieldCheck, FileText, Wrench } from 'lucide-react';

/**
 * 4-column industrial mega menu for Products.
 * Accepts optional onClose callback to dismiss menu on link selection.
 */
export function MegaMenu({ onClose }: { onClose?: () => void }) {
  return (
    <div className="space-y-5">
      {/* Directory Sub-Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-600" />
          <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900">
            Industrial Fastener Engineering Directory
          </p>
        </div>
        <p className="hidden text-xs text-slate-500 sm:block">
          9 Product Families · Verified Technical Specifications · Pan-India Dispatch
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: OEM In-House Fasteners (Highlighted) */}
        <div className="rounded-xl border border-amber-200/70 bg-amber-50/40 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Factory aria-hidden="true" className="h-4 w-4 text-amber-700" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                OEM Fasteners
              </p>
            </div>
            <span className="rounded bg-amber-200/80 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">
              Ahmedabad
            </span>
          </div>
          <p className="mb-3 text-[11px] text-amber-900/70">
            Manufactured in-house at our plant
          </p>
          <ul className="space-y-1">
            {[
              {
                href: '/products/foundation-bolts/',
                label: 'Foundation Bolts',
                desc: 'IS 5624 · J, L, U & Anchors',
              },
              {
                href: '/products/stud-bolts/',
                label: 'Stud Bolts',
                desc: 'ASTM A193 B7 / B8 / B8M',
              },
              {
                href: '/products/sag-rods/',
                label: 'Sag Rods',
                desc: 'PEB Purlin & Structural Bracing',
              },
              {
                href: '/products/custom-fasteners/',
                label: 'Custom Fasteners',
                desc: 'Drawing-to-Print Fabrication',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2.5 py-1.5 transition-colors hover:bg-amber-100/70"
                >
                  <p className="font-heading text-xs font-bold text-slate-900 group-hover:text-amber-900">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-600 group-hover:text-amber-800">
                    {item.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Distribution Range Hardware */}
        <div className="p-1">
          <div className="mb-2 flex items-center gap-1.5">
            <Truck aria-hidden="true" className="h-4 w-4 text-slate-700" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Distribution Range
            </p>
          </div>
          <p className="mb-3 text-[11px] text-slate-500">
            Vetted partner inventory · Single PO
          </p>
          <ul className="space-y-1">
            {[
              {
                href: '/products/hex-bolts-nuts/',
                label: 'Hex Bolts & Nuts',
                desc: 'DIN 933 / 934 · Gr 4.6 to 10.9',
              },
              {
                href: '/products/csk-allen-bolts/',
                label: 'CSK Allen Bolts',
                desc: 'DIN 7991 · Socket Screws',
              },
              {
                href: '/products/tie-rods/',
                label: 'Tie Rods',
                desc: 'D15 / D20 Civil Formwork',
              },
              {
                href: '/products/scaffold-accessories/',
                label: 'Scaffold Accessories',
                desc: 'Wing Nuts & Waller Plates',
              },
              {
                href: '/products/solar-accessories/',
                label: 'Solar Accessories',
                desc: 'MMS Flange Bolts & Clamps',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2 py-1 transition-colors hover:bg-slate-100"
                >
                  <p className="font-heading text-xs font-semibold text-slate-800 group-hover:text-amber-800">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Materials & Metallurgy */}
        <div className="p-1">
          <div className="mb-2 flex items-center gap-1.5">
            <Layers aria-hidden="true" className="h-4 w-4 text-slate-700" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Materials
            </p>
          </div>
          <p className="mb-3 text-[11px] text-slate-500">
            Certified chemical &amp; tensile grades
          </p>
          <ul className="space-y-1">
            {[
              {
                href: '/materials/high-tensile-fasteners/',
                label: 'High-Tensile Steel',
                desc: 'Property Class 8.8, 10.9 & 12.9',
              },
              {
                href: '/materials/stainless-steel-fasteners/',
                label: 'Stainless Steel',
                desc: 'SS 304 & Marine-Grade SS 316',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2 py-1 transition-colors hover:bg-slate-100"
                >
                  <p className="font-heading text-xs font-semibold text-slate-800 group-hover:text-amber-800">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Quick Engineering Tools Card */}
          <Link
            href="/tools/"
            onClick={onClose}
            className="mt-4 block rounded-lg border border-slate-200 bg-slate-50 p-2.5 transition-all hover:border-amber-300 hover:bg-amber-50/50"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Wrench aria-hidden="true" className="h-3.5 w-3.5 text-amber-600" />
              <span>Engineering Tools &amp; MTC</span>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-600">
              Weight, torque &amp; 3.1 cert specs →
            </p>
          </Link>
        </div>

        {/* Column 4: Industries Served */}
        <div className="p-1">
          <div className="mb-2 flex items-center gap-1.5">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-slate-700" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Industries
            </p>
          </div>
          <p className="mb-3 text-[11px] text-slate-500">
            Sector-aligned fastener BOMs
          </p>
          <ul className="space-y-1">
            {[
              {
                href: '/industries/construction-infrastructure/',
                label: 'Construction & PEB',
                desc: 'Base Plates, Anchor Cages & Frames',
              },
              {
                href: '/industries/solar-mounting-fasteners/',
                label: 'Solar Mounting Arrays',
                desc: 'Rooftop MMS & Ground Mounts',
              },
              {
                href: '/industries/automotive-heavy-engineering/',
                label: 'Heavy Engineering & OEMs',
                desc: 'Machinery & Equipment Fasteners',
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block rounded-lg px-2 py-1 transition-colors hover:bg-slate-100"
                >
                  <p className="font-heading text-xs font-semibold text-slate-800 group-hover:text-amber-800">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MegaMenu Bottom Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3.5 text-xs">
        <Link
          href="/products/"
          onClick={onClose}
          className="inline-flex items-center gap-1 font-heading font-bold text-amber-700 hover:text-amber-800 hover:underline"
        >
          View All 9 Product Categories <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
        <span className="hidden items-center gap-1 text-slate-500 sm:flex">
          <FileText aria-hidden="true" className="h-3.5 w-3.5 text-amber-600" />
          <span>Drawings accepted as PDF / DWG · EN 10204 3.1 MTC on request</span>
        </span>
        <Link
          href="/request-quote/"
          onClick={onClose}
          className="font-heading font-bold text-slate-800 hover:text-amber-700 hover:underline"
        >
          Submit Drawing for RFQ →
        </Link>
      </div>
    </div>
  );
}
