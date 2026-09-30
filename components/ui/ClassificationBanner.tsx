import { Factory, Truck, AlertTriangle } from 'lucide-react';
import type { ProductClassification } from '@/data/products/index';

const COPY: Record<
  ProductClassification,
  { label: string; body: string; className: string }
> = {
  oem: {
    label: 'Manufactured in-house',
    body: 'Made at our Ahmedabad plant. KP Fasteners is the manufacturer of record for this product line.',
    className: 'border-l-brand-gold bg-brand-gold-soft/40 text-ink',
  },
  trading: {
    label: 'Distribution range',
    body: 'Part of our distribution range — sourced from vetted partners. Brand and country of origin vary by SKU.',
    className: 'border-l-brand-silver bg-brand-silver-soft/60 text-ink',
  },
  ambiguous: {
    label: 'Manufactured & supplied — SKU-specific',
    body: 'Some SKUs are manufactured in-house; others are supplied through distribution. Confirm on the quote line.',
    className: 'border-l-warning bg-brand-gold-soft/25 text-ink',
  },
};

const ICON: Record<ProductClassification, typeof Factory> = {
  oem: Factory,
  trading: Truck,
  ambiguous: AlertTriangle,
};

export function ClassificationBanner({
  classification,
}: {
  classification: ProductClassification;
}) {
  const c = COPY[classification];
  const Icon = ICON[classification];
  return (
    <div
      role="note"
      className={
        'flex items-start gap-3 rounded-md border-l-4 p-4 text-sm ' + c.className
      }
    >
      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <div>
        <strong className="mr-1">{c.label}.</strong>
        <span>{c.body}</span>
      </div>
    </div>
  );
}
