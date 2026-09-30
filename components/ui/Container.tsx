import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

type Width = 'narrow' | 'default' | 'wide';

const WIDTH: Record<Width, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-[88rem]',
};

export function Container({
  children,
  className,
  width = 'default',
}: {
  children: ReactNode;
  className?: string;
  width?: Width;
}) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', WIDTH[width], className)}>
      {children}
    </div>
  );
}
