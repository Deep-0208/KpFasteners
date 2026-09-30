import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

type Variant = 'hero' | 'section' | 'subsection' | 'card';
type Level = 'h1' | 'h2' | 'h3' | 'h4';

const VARIANT_CLASSES: Record<Variant, string> = {
  hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
  section: 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight',
  subsection: 'text-xl sm:text-2xl md:text-3xl font-semibold',
  card: 'text-lg sm:text-xl font-semibold',
};

interface HeadingProps {
  as: Level;
  variant: Variant;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Heading({ as: Tag, variant, children, className, id }: HeadingProps) {
  return (
    <Tag id={id} className={cn(VARIANT_CLASSES[variant], 'text-brand-steel', className)}>
      {children}
    </Tag>
  );
}
