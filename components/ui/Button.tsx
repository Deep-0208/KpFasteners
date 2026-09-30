import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

type Variant = 'primary' | 'secondary' | 'ghost';

const BASE =
  'inline-flex min-h-[48px] items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2';

const VARIANT: Record<Variant, string> = {
  primary: 'bg-brand-gold text-white hover:bg-brand-gold-hover',
  secondary: 'bg-brand-steel text-white hover:opacity-90',
  ghost: 'text-brand-steel hover:bg-surface-alt',
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function Button({
  href,
  variant = 'primary',
  className,
  children,
  ...rest
}: CommonProps & ({ href: string } | { href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)) {
  const classes = cn(BASE, VARIANT[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
