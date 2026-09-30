import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-lg border border-border bg-surface p-5 md:p-6 shadow-sm', className)}>
      {children}
    </div>
  );
}
