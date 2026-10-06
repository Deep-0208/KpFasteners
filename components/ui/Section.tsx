import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'alt';
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  as?: 'section' | 'aside' | 'div';
}

export function Section({
  children,
  variant = 'default',
  className,
  id,
  as: Tag = 'section',
  ...rest
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'py-8 md:py-10 lg:py-12',
        variant === 'alt' ? 'bg-slate-100/70 border-y border-slate-200/80' : 'bg-transparent',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
