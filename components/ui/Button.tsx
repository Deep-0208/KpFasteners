import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

/**
 * Visual variants map to the `.btn *` classes defined in globals.css so that
 * the KP-approved gold-gradient / white-card / green-whatsapp treatments are
 * available from a single component. Ghost + link remain Tailwind-only so
 * they can layer over dark or coloured surfaces.
 */
type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

const SIZE: Record<Size, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-sm',
  md: '',                              // .btn already sets 48px min-h + padding
  lg: 'min-h-[52px] px-7 py-3.5 text-base',
};

const BTN_VARIANT: Record<Variant, string> = {
  primary:   'btn btn-primary',
  secondary: 'btn btn-secondary',
  whatsapp:  'btn btn-whatsapp',
  ghost:
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-border-strong bg-transparent px-5 py-3 font-heading text-sm font-semibold text-brand-steel transition-colors hover:bg-surface-alt focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold',
  link:
    'inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong underline underline-offset-4 hover:text-brand-gold-hover focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold',
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

  const classes = cn(BTN_VARIANT[variant], SIZE[size], className);

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
