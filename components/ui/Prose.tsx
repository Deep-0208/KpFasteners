import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('max-w-prose text-base leading-7 text-ink', className)}>
      {children}
    </div>
  );
}
