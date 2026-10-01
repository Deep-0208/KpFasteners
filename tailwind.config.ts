import type { Config } from 'tailwindcss';

/**
 * KP Fasteners — Tailwind v4 token bridge.
 * Every colour maps to a CSS variable declared in app/globals.css so that
 * we have a single source of truth for the palette. No dark-mode variants.
 *
 * Two naming schemes are exposed:
 *   • Semantic aliases (bg, surface, ink, brand-gold, brand-steel, …) — Phase-B
 *     names kept for backwards compatibility with existing utility classes.
 *   • Ramp names (gold-50…800, steel-50…900) — the new client-approved palette
 *     lifted from the kpfastner_old demo. Prefer these for new code.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic aliases (Phase-B; still valid — they resolve to ramp tokens).
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink-muted)',
        'ink-soft': 'var(--color-ink-soft)',
        'brand-gold': 'var(--color-brand-gold)',
        'brand-gold-hover': 'var(--color-brand-gold-hover)',
        'brand-gold-soft': 'var(--color-brand-gold-soft)',
        'brand-gold-strong': 'var(--color-brand-gold-strong)',
        'brand-steel': 'var(--color-brand-steel)',
        'brand-steel-soft': 'var(--color-brand-steel-soft)',
        'brand-silver': 'var(--color-brand-silver)',
        'brand-silver-soft': 'var(--color-brand-silver-soft)',
        focus: 'var(--color-focus)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',

        // Ramp names (new — preferred for future work).
        gold: {
          50:  'var(--gold-50)',
          100: 'var(--gold-100)',
          200: 'var(--gold-200)',
          300: 'var(--gold-300)',
          400: 'var(--gold-400)',
          500: 'var(--gold-500)',
          600: 'var(--gold-600)',
          700: 'var(--gold-700)',
          800: 'var(--gold-800)',
        },
        steel: {
          50:  'var(--steel-50)',
          100: 'var(--steel-100)',
          200: 'var(--steel-200)',
          300: 'var(--steel-300)',
          400: 'var(--steel-400)',
          500: 'var(--steel-500)',
          600: 'var(--steel-600)',
          700: 'var(--steel-700)',
          800: 'var(--steel-800)',
          900: 'var(--steel-900)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      spacing: {
        section: '3rem',
        'section-md': '4rem',
        'section-lg': '6rem',
      },
      fontSize: {
        hero: ['clamp(1.875rem, 5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        section: ['clamp(1.5rem, 3.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        subsection: ['clamp(1.25rem, 2.6vw, 1.875rem)', { lineHeight: '1.2' }],
        card: ['1.125rem', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-metal': 'var(--gradient-metal)',
        'gradient-gold': 'var(--gold-gradient)',
        'gradient-gold-shine': 'var(--gold-gradient-shine)',
        'gradient-gold-soft': 'var(--gold-gradient-soft)',
        'gradient-chrome': 'var(--chrome-gradient)',
      },
      boxShadow: {
        card: 'var(--shadow-sm)',
        'card-hover': 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        gold: 'var(--shadow-gold)',
      },
      transitionDuration: {
        DEFAULT: '160ms',
      },
    },
  },
  plugins: [],
};

export default config;
