import type { Config } from 'tailwindcss';

/**
 * KP Fasteners — Tailwind v4 token bridge.
 * Every colour maps to a CSS variable declared in app/globals.css so that
 * we have a single source of truth for the palette. No dark-mode variants.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      spacing: {
        section: '3rem',       // baseline for py-12 sections
        'section-md': '4rem',  // py-16
        'section-lg': '6rem',  // py-24
      },
      fontSize: {
        // Design-doc ramp (mobile → desktop handled by responsive prefixes at the callsite)
        hero: ['clamp(1.875rem, 5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        section: ['clamp(1.5rem, 3.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        subsection: ['clamp(1.25rem, 2.6vw, 1.875rem)', { lineHeight: '1.2' }],
        card: ['1.125rem', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-metal': 'var(--gradient-metal)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(27,29,34,0.04), 0 1px 3px rgba(27,29,34,0.06)',
        'card-hover': '0 4px 12px rgba(27,29,34,0.08), 0 2px 4px rgba(27,29,34,0.04)',
      },
      transitionDuration: {
        DEFAULT: '160ms',
      },
    },
  },
  plugins: [],
};

export default config;
