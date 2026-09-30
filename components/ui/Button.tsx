import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

type Variant = 'primary' | 'secondary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold ' +
  'transition-colors transition-shadow duration-150 ' +
  'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

const SIZE: Record<Size, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-sm',
  md: 'min-h-[48px] px-5 py-3 text-sm',
  lg: 'min-h-[52px] px-6 py-3.5 text-base',
};

const VARIANT: Record<Variant, string> = {
  primary:
    'bg-brand-gold text-white shadow-card hover:bg-brand-gold-hover active:translate-y-px',
  secondary:
    'bg-brand-steel text-white shadow-card hover:bg-[color:var(--color-ink)] active:translate-y-px',
  ghost:
    'border border-border-strong bg-transparent text-brand-steel hover:bg-surface-alt',
  link:
    'text-brand-gold-strong underline underline-offset-4 hover:text-brand-gold-hover',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  loading?: boolean;
}

type AnchorProps = CommonProps & { href: string; target?: string; rel?: string };
type ButtonNativeProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { href?: undefined };

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button(props: AnchorProps | ButtonNativeProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    loading = false,
  } = props;

  const classes = cn(BASE, SIZE[size], VARIANT[variant], className);

  if ('href' in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {loading && <Spinner />}
        {children}
      </Link>
    );
  }

  const { href: _href, loading: _l, variant: _v, size: _s, className: _c, ...rest } =
    props as ButtonNativeProps;
  void _href; void _l; void _v; void _s; void _c;
  return (
    <button className={classes} disabled={loading || rest.disabled} {...rest}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}
