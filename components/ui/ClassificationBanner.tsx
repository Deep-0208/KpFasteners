import type { ReactNode } from 'react';
import { Factory, Truck, AlertTriangle } from 'lucide-react';
import type { ProductClassification } from '@/data/products/index';

/**
 * OEM  → `.badge-gold` on a gold-tinted card (KP-manufactured).
 * Trading → `.badge-steel` on a steel-tinted card (distribution range).
 * Ambiguous → inverted gold treatment (some in-house, some distributed).
 */
const COPY: Record<
  ProductClassification,
  { badge: string; badgeClass: string; body: string; cardClass: string }
> = {
  oem: {
    badge: 'Manufactured in-house',
    badgeClass: 'badge badge-gold',
    body: 'Made at our Ahmedabad plant. KP Fasteners is the manufacturer of record for this product line.',
    cardClass:
      'border-[color:var(--gold-300)] bg-brand-gold-soft/60 text-ink',
  },
  trading: {
    badge: 'Distribution range',
    badgeClass: 'badge badge-steel',
    body: 'Part of our distribution range - sourced from vetted partners. Brand and country of origin vary by SKU.',
    cardClass:
      'border-[color:var(--steel-300)] bg-brand-steel-soft/60 text-ink',
  },
  ambiguous: {
    badge: 'Manufactured & supplied - SKU-specific',
    badgeClass: 'badge badge-gold',
    body: 'Some SKUs are manufactured in-house; others are supplied through distribution. Confirm on the quote line.',
    cardClass:
      'border-[color:var(--gold-400)] bg-[color:var(--gold-50)] text-ink',
  },
};

const ICON: Record<ProductClassification, typeof Factory> = {
  oem: Factory,
  trading: Truck,
  ambiguous: AlertTriangle,
};

export function ClassificationBanner({
  classification,
  customBody,
  children,
}: {
  classification: ProductClassification;
  customBody?: ReactNode;
  children?: ReactNode;
}) {
  const c = COPY[classification];
  const Icon = ICON[classification];
  return (
    <div
      role="note"
      className={
        'flex items-start gap-3 rounded-[14px] border p-4 text-sm shadow-card ' +
        c.cardClass
      }
    >
      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <div>
        <span className={`${c.badgeClass} mr-2 align-middle`}>{c.badge}</span>
        <span className="align-middle">{children ?? customBody ?? c.body}</span>
      </div>
    </div>
  );
}
