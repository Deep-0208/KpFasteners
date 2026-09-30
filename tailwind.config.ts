import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
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
        'brand-steel': 'var(--color-brand-steel)',
        'brand-steel-soft': 'var(--color-brand-steel-soft)',
        focus: 'var(--color-focus)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
      },
    },
  },
  plugins: [],
};

export default config;
