import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

type Variant = 'default' | 'featured' | 'trust';
type Padding = 'sm' | 'md' | 'lg';

const VARIANT: Record<Variant, string> = {
  default:
    'border-border bg-surface hover:border-border-strong hover:shadow-card-hover',
  featured:
    'border-brand-gold bg-surface shadow-card hover:shadow-card-hover',
  trust:
    'border-brand-steel-soft bg-brand-steel-soft/40',
};

const PADDING: Record<Padding, string> = {
  sm: 'p-4',
  md: 'p-5 md:p-6',
  lg: 'p-6 md:p-8',
};

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  padding?: Padding;
}) {
  return (
    <div
      className={cn(
        'rounded-lg border shadow-card transition-all duration-150',
        VARIANT[variant],
        PADDING[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
