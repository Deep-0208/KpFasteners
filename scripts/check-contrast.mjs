#!/usr/bin/env node
/**
 * WCAG contrast checker for the KP Fasteners palette.
 *
 * Iterates the foreground x background combinations the site actually uses,
 * computes WCAG 2.1 contrast, and prints PASS/FAIL against:
 *   4.5:1 (AA body text)
 *   3:1   (AA large text + UI / non-text)
 *
 * Also writes the final table to docs/design-contrast-report.md.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Tokens (kept in one place; must mirror app/globals.css)
// Palette updated 2026-09-30 to match the client-approved kpfastner_old demo.
const T = {
  bg:                '#F8FAFC', // --bg-main
  surface:           '#FFFFFF',
  surfaceAlt:        '#F1F5F9', // --bg-card-hover / steel-200
  border:            '#E2E8F0', // --border-subtle / steel-300
  borderStrong:      '#64748B', // deviation: steel-600 for 3:1 UI (task-approved nudge)
  ink:               '#0F172A', // steel-900
  inkMuted:          '#475569', // steel-700
  inkSoft:           '#64748B', // steel-600
  brandGold:         '#B45309', // gold-600 (nudged from gold-500 for AA on white)
  brandGoldHover:    '#92400E', // gold-700
  brandGoldSoft:     '#FEF3C7', // gold-100
  brandGoldStrong:   '#92400E', // gold-700
  brandSteel:        '#334155', // steel-800
  brandSteelSoft:    '#F1F5F9', // steel-200
  brandSilver:       '#94A3B8', // steel-500
  brandSilverSoft:   '#E2E8F0', // steel-300
  focus:             '#0284C7', // accent-cyan
  success:           '#047857', // nudged from #059669 for 4.5:1 on white
  warning:           '#92400E', // gold-700 (badge-gold text colour)
  danger:            '#DC2626', // accent-red
  white:             '#FFFFFF',
};

function hex2rgb(h) {
  const s = h.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16));
}
function chan(c) {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
function luminance(hex) {
  const [r, g, b] = hex2rgb(hex);
  return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);
}
function ratio(a, b) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/**
 * type = 'body'  → threshold 4.5
 * type = 'large' → threshold 3   (>=18pt / 24px+ display headings, CTA button labels are typically 14-16px bold; kept at 4.5)
 * type = 'ui'    → threshold 3   (non-text UI, focus ring, border adjacent to background)
 * type = 'aaa'   → threshold 7   (informational — not enforced)
 */
const pairs = [
  // Body text on backgrounds
  { fg: 'ink',            bg: 'bg',           type: 'body', use: 'Body text on page bg' },
  { fg: 'ink',            bg: 'surface',      type: 'body', use: 'Body text on card surface' },
  { fg: 'ink',            bg: 'surfaceAlt',   type: 'body', use: 'Body text on alt band' },
  { fg: 'inkMuted',       bg: 'bg',           type: 'body', use: 'Muted secondary on bg' },
  { fg: 'inkMuted',       bg: 'surface',      type: 'body', use: 'Muted secondary on surface' },
  { fg: 'inkSoft',        bg: 'bg',           type: 'large', use: 'Soft meta / caption on bg (large only)' },
  { fg: 'inkSoft',        bg: 'surface',      type: 'large', use: 'Soft meta on surface (large only)' },

  // Headings & brand steel text
  { fg: 'brandSteel',     bg: 'bg',           type: 'body', use: 'Heading on bg' },
  { fg: 'brandSteel',     bg: 'surface',      type: 'body', use: 'Heading on surface' },
  { fg: 'brandSteel',     bg: 'surfaceAlt',   type: 'body', use: 'Heading on alt band' },
  { fg: 'brandSteel',     bg: 'brandGoldSoft', type: 'body', use: 'Steel text on gold wash (banner)' },
  { fg: 'brandSteel',     bg: 'brandSilverSoft', type: 'body', use: 'Steel text on silver wash (banner)' },

  // Gold as accent text (must reach 4.5:1 as body colour on light bg)
  { fg: 'brandGold',      bg: 'bg',           type: 'body', use: 'Gold accent text on bg' },
  { fg: 'brandGold',      bg: 'surface',      type: 'body', use: 'Gold accent text on surface' },
  { fg: 'brandGoldStrong', bg: 'bg',          type: 'body', use: 'Gold-strong text on bg' },
  { fg: 'brandGoldStrong', bg: 'surface',     type: 'body', use: 'Gold-strong text on surface' },
  { fg: 'brandGoldStrong', bg: 'brandGoldSoft', type: 'body', use: 'Gold-strong text on gold wash' },

  // CTA button labels
  { fg: 'white',          bg: 'brandGold',    type: 'body', use: 'CTA label (white) on brand gold' },
  { fg: 'white',          bg: 'brandGoldHover', type: 'body', use: 'CTA label (white) on brand gold hover' },
  { fg: 'white',          bg: 'brandSteel',   type: 'body', use: 'Secondary button label (white) on steel' },

  // Warning / success / danger
  { fg: 'warning',        bg: 'bg',           type: 'body', use: 'Warning text on bg' },
  { fg: 'warning',        bg: 'surface',      type: 'body', use: 'Warning text on surface' },
  { fg: 'warning',        bg: 'brandGoldSoft', type: 'body', use: 'Warning text on gold wash' },
  { fg: 'success',        bg: 'bg',           type: 'body', use: 'Success text on bg' },
  { fg: 'danger',         bg: 'bg',           type: 'body', use: 'Danger text on bg' },

  // Focus ring / UI borders (3:1 UI target)
  { fg: 'focus',          bg: 'bg',           type: 'ui', use: 'Focus ring on bg' },
  { fg: 'focus',          bg: 'surface',      type: 'ui', use: 'Focus ring on surface' },
  { fg: 'brandGold',      bg: 'surface',      type: 'ui', use: 'Gold border / underline on surface (UI)' },
  { fg: 'borderStrong',   bg: 'bg',           type: 'ui', use: 'Interactive border on bg' },
  { fg: 'borderStrong',   bg: 'surface',      type: 'ui', use: 'Interactive border on surface' },
];

const results = pairs.map((p) => {
  const r = ratio(T[p.fg], T[p.bg]);
  const threshold = p.type === 'body' ? 4.5 : 3.0;
  const pass = r >= threshold;
  return { ...p, hexFg: T[p.fg], hexBg: T[p.bg], ratio: r, threshold, pass };
});

const failing = results.filter((r) => !r.pass);
let allPass = failing.length === 0;

for (const r of results) {
  const tag = r.pass ? 'PASS' : 'FAIL';
  console.log(
    `${tag}  ${r.ratio.toFixed(2).padStart(5)}:1  (min ${r.threshold})  ` +
    `${r.fg} on ${r.bg}  ${r.hexFg} / ${r.hexBg}   — ${r.use}`,
  );
}

console.log('');
if (allPass) {
  console.log('ALL PAIRS PASS');
} else {
  console.log(`FAIL — ${failing.length} pair(s) below threshold. Adjust tokens.`);
}

// Write report
const docsDir = join(root, 'docs');
if (!existsSync(docsDir)) mkdirSync(docsDir, { recursive: true });

const md = `# Contrast report — KP Fasteners palette

**Generated:** ${new Date().toISOString().slice(0, 10)}
**Standard:** WCAG 2.1 AA
**Thresholds:** 4.5:1 body text, 3:1 large text + non-text UI

## Result: ${allPass ? '**ALL PAIRS PASS**' : '**FAILURES PRESENT**'}

## Palette tested

| Token | Hex |
|---|---|
${Object.entries(T).map(([k, v]) => `| \`--color-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}\` | \`${v}\` |`).join('\n')}

## Pair-by-pair result

| Pair | Foreground | Background | Ratio | Threshold | Result |
|---|---|---|---|---|---|
${results.map((r) => `| ${r.use} | \`${r.hexFg}\` (${r.fg}) | \`${r.hexBg}\` (${r.bg}) | ${r.ratio.toFixed(2)}:1 | ${r.threshold}:1 | ${r.pass ? 'PASS' : 'FAIL'} |`).join('\n')}

## Notes

- Gold at \`#886428\` is the mid-gold hue extracted from the KP wordmark. It passes 4.5:1 body-text contrast on the off-white \`--color-bg\` and pure-white \`--color-surface\`, so it can carry inline accent text as well as decorative underlines.
- The white-on-gold CTA label uses \`#886428\` (not the draft \`#B8862B\`) precisely because the lighter draft failed 4.5:1 for white text.
- \`--color-brand-gold-strong\` (\`#5A421A\`) is reserved for the rare cases where gold text sits on a gold-soft wash and still needs body-text contrast.
- \`--color-ink-soft\` is only used for meta / large captions (>= 18px). It is not used for standard body copy.
- Silver (\`#ACACAC\`) is a decorative brand hue; it is **never** used for text against \`--color-bg\`. It is used for borders and iconography where the 3:1 UI threshold applies to icon-vs-surface contrast, or in the trading-mode banner background paired with dark ink text.
`;

writeFileSync(join(docsDir, 'design-contrast-report.md'), md);

process.exit(allPass ? 0 : 1);
