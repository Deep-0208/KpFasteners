import Link from 'next/link';
import { ArrowRight, Factory, Truck, Layers, ShieldCheck } from 'lucide-react';

/**
 * 4-column industrial mega menu for Products.
 * Accepts optional onClose callback to dismiss menu on link selection.
 */
export function MegaMenu({ onClose }: { onClose?: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {/* Column 1: OEM In-House Fasteners */}
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <Factory aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
              OEM Fasteners
            </p>
          </div>
          <p className="mb-2.5 text-[11px] text-ink-muted">Manufactured in Ahmedabad</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link
                href="/products/foundation-bolts/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Foundation Bolts
              </Link>
            </li>
            <li>
              <Link
                href="/products/stud-bolts/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Stud Bolts
              </Link>
            </li>
            <li>
              <Link
                href="/products/sag-rods/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Sag Rods
              </Link>
            </li>
            <li>
              <Link
                href="/products/custom-fasteners/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Custom Fasteners
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Distribution Range Hardware */}
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <Truck aria-hidden="true" className="h-4 w-4 text-brand-steel" />
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-steel">
              Distribution Range
            </p>
          </div>
          <p className="mb-2.5 text-[11px] text-ink-muted">Vetted primary partners</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link
                href="/products/hex-bolts-nuts/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Hex Bolts &amp; Nuts
              </Link>
            </li>
            <li>
              <Link
                href="/products/csk-allen-bolts/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                CSK Allen Bolts
              </Link>
            </li>
            <li>
              <Link
                href="/products/tie-rods/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Tie Rods
              </Link>
            </li>
            <li>
              <Link
                href="/products/scaffold-accessories/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Scaffold Accessories
              </Link>
            </li>
            <li>
              <Link
                href="/products/solar-accessories/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Solar Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Materials & Metallurgy */}
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <Layers aria-hidden="true" className="h-4 w-4 text-brand-steel" />
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-steel">
              Materials
            </p>
          </div>
          <p className="mb-2.5 text-[11px] text-ink-muted">Metallurgical grades</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link
                href="/materials/high-tensile-fasteners/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                High-Tensile (8.8, 10.9)
              </Link>
            </li>
            <li>
              <Link
                href="/materials/stainless-steel-fasteners/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Stainless Steel (304, 316)
              </Link>
            </li>
          </ul>
          <Link
            href="/tools/"
            onClick={onClose}
            className="mt-3.5 block rounded-md border border-border bg-surface-alt p-2 transition-colors hover:border-brand-gold/40 hover:bg-surface"
          >
            <p className="text-xs font-medium text-brand-steel hover:text-brand-gold-strong">Engineering Tools &amp; MTC</p>
            <p className="text-[11px] text-ink-muted">Weight, torque &amp; 3.1 certs →</p>
          </Link>
        </div>

        {/* Column 4: Industries Served */}
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-brand-steel" />
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-steel">
              Industries
            </p>
          </div>
          <p className="mb-2.5 text-[11px] text-ink-muted">Application stacks</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link
                href="/industries/construction-infrastructure/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Construction &amp; PEB
              </Link>
            </li>
            <li>
              <Link
                href="/industries/solar-mounting-fasteners/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Solar Mounting Arrays
              </Link>
            </li>
            <li>
              <Link
                href="/industries/automotive-heavy-engineering/"
                onClick={onClose}
                className="block rounded py-0.5 text-ink hover:text-brand-gold-strong"
              >
                Heavy Engineering &amp; OEMs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MegaMenu Bottom Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs">
        <Link
          href="/products/"
          onClick={onClose}
          className="inline-flex items-center gap-1 font-semibold text-brand-gold-strong hover:underline"
        >
          View All 9 Product Categories <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </Link>
        <span className="hidden text-ink-muted sm:inline">Ahmedabad Manufacturing &amp; Pan-India Dispatch</span>
        <Link
          href="/request-quote/"
          onClick={onClose}
          className="font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
        >
          Submit Drawing for RFQ →
        </Link>
      </div>
    </div>
  );
}
