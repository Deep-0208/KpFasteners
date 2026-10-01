import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

/**
 * Card visual language mirrors the client-approved demo.
 *   default  → hairline border, subtle shadow, gold-tinted hover.
 *   glass    → `.glass-panel` (same visual, kept as an explicit alias).
 *   metallic → `.metallic-card` with the gold top strip.
 *   featured → legacy alias, retained; renders `.metallic-card`.
 *   trust    → steel wash card for quality / trust modules.
 */
type Variant = 'default' | 'glass' | 'metallic' | 'featured' | 'trust';
type Padding = 'sm' | 'md' | 'lg';

const BASE: Record<Variant, string> = {
  default:  'glass-panel',
  glass:    'glass-panel',
  metallic: 'metallic-card',
  featured: 'metallic-card',
  trust:
    'rounded-[14px] border border-brand-steel-soft bg-brand-steel-soft/40 shadow-card',
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
  return <div className={cn(BASE[variant], PADDING[padding], className)}>{children}</div>;
}
