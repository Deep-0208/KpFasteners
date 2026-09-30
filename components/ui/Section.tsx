import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'alt';
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
}

export function Section({ children, variant = 'default', className, id, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-12 md:py-16 lg:py-24',
        variant === 'alt' ? 'bg-surface' : 'bg-bg',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
