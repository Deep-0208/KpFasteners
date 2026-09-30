#!/usr/bin/env node
/**
 * Extract dominant colour swatches from the KP Fasteners logo.
 *
 * Approach:
 *  1. Load `logo.jpg.jpeg` at full size via sharp, decode raw RGBA.
 *  2. Bin every pixel into a coarse HSL bucket (H×S×L quantised).
 *  3. Classify each bucket into one of:
 *       - off-white / background   (L >= 0.90, S <= 0.15)
 *       - light-grey map-dots      (0.70 <= L < 0.90, S <= 0.10)
 *       - warm gold                (H in 30-55, S >= 0.35, 0.30 <= L <= 0.75)
 *       - dark gold / strong gold  (H in 30-55, S >= 0.35, L < 0.30)
 *       - silver / steel-grey      (S <= 0.15, 0.40 <= L < 0.70)
 *       - dark ink                 (L < 0.20, S <= 0.20)
 *  4. Report the highest-weight hex in each class.
 *
 * Output: JSON to stdout, also written to `docs/design-palette-extraction.md`.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const source = join(root, 'logo.jpg.jpeg');

if (!existsSync(source)) {
  console.error(`Logo not found at ${source}`);
  process.exit(1);
}

// Decode logo -> raw RGB
const { data, info } = await sharp(source)
  .removeAlpha()
  .resize({ width: 800, withoutEnlargement: true })
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

function rgb2hsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h, s, l };
}

function hex(r, g, b) {
  const to = (n) => n.toString(16).padStart(2, '0');
  return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}

const classes = {
  offWhite: new Map(),
  lightGrey: new Map(),
  gold: new Map(),
  goldStrong: new Map(),
  silver: new Map(),
  ink: new Map(),
};

function classify(r, g, b) {
  const { h, s, l } = rgb2hsl(r, g, b);
  if (l >= 0.90 && s <= 0.15) return 'offWhite';
  if (l >= 0.70 && l < 0.90 && s <= 0.10) return 'lightGrey';
  if (h >= 25 && h <= 55 && s >= 0.30 && l >= 0.30 && l <= 0.75) return 'gold';
  if (h >= 25 && h <= 55 && s >= 0.30 && l < 0.30) return 'goldStrong';
  if (s <= 0.15 && l >= 0.40 && l < 0.70) return 'silver';
  if (l < 0.20 && s <= 0.30) return 'ink';
  return null;
}

const bin = (v, step) => Math.min(255, Math.round(v / step) * step);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const cls = classify(r, g, b);
    if (!cls) continue;
    // Bin to reduce jitter, then track weight
    const key = `${bin(r, 4)},${bin(g, 4)},${bin(b, 4)}`;
    const map = classes[cls];
    map.set(key, (map.get(key) || 0) + 1);
  }
}

function topOf(map) {
  let best = null, bestN = 0;
  for (const [k, n] of map) {
    if (n > bestN) { bestN = n; best = k; }
  }
  if (!best) return null;
  const [r, g, b] = best.split(',').map(Number);
  return { hex: hex(r, g, b), r, g, b, weight: bestN };
}

function topN(map, n) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k, w]) => {
      const [r, g, b] = k.split(',').map(Number);
      return { hex: hex(r, g, b), weight: w };
    });
}

const result = {
  source: 'logo.jpg.jpeg',
  imageSize: { width, height },
  classes: {
    offWhite: { top: topOf(classes.offWhite), top5: topN(classes.offWhite, 5) },
    lightGrey: { top: topOf(classes.lightGrey), top5: topN(classes.lightGrey, 5) },
    gold: { top: topOf(classes.gold), top5: topN(classes.gold, 5) },
    goldStrong: { top: topOf(classes.goldStrong), top5: topN(classes.goldStrong, 5) },
    silver: { top: topOf(classes.silver), top5: topN(classes.silver, 5) },
    ink: { top: topOf(classes.ink), top5: topN(classes.ink, 5) },
  },
};

console.log(JSON.stringify(result, null, 2));

// Write the report as well
const docsDir = join(root, 'docs');
if (!existsSync(docsDir)) mkdirSync(docsDir, { recursive: true });

function row(label, entry) {
  if (!entry?.top) return `| ${label} | — | — | (no pixels in class) |`;
  const alts = entry.top5.slice(1).map((e) => e.hex).join(', ') || '—';
  return `| ${label} | \`${entry.top.hex}\` | ${entry.top.weight.toLocaleString()} | ${alts} |`;
}

const md = `# Logo palette extraction — KP Fasteners

**Generated:** ${new Date().toISOString().slice(0, 10)}
**Source image:** \`logo.jpg.jpeg\` (decoded at ${width} x ${height} px)
**Method:** Every pixel classified into semantic buckets by HSL bounds; dominant hex per class reported.

## Extracted dominant swatches

| Class | Dominant hex | Pixel weight | Next four hexes |
|---|---|---|---|
${row('Off-white background', result.classes.offWhite)}
${row('Light-grey map dots', result.classes.lightGrey)}
${row('Warm gold (mid)', result.classes.gold)}
${row('Dark / strong gold', result.classes.goldStrong)}
${row('Silver / steel-grey', result.classes.silver)}
${row('Dark ink', result.classes.ink)}

## How the tokens map

The draft palette in [\`docs/design.md §2\`](design.md) claimed the following. The right-hand column shows what the logo actually contained:

| Token | Draft hex | Extracted hex | Verdict |
|---|---|---|---|
| \`--color-bg\` | \`#F7F5F0\` | ${result.classes.offWhite.top?.hex ?? '—'} | see notes |
| \`--color-brand-gold\` | \`#B8862B\` | ${result.classes.gold.top?.hex ?? '—'} | see notes |
| \`--color-brand-gold-strong\` (new) | — | ${result.classes.goldStrong.top?.hex ?? '—'} | added |
| \`--color-brand-silver\` (new) | — | ${result.classes.silver.top?.hex ?? '—'} | added |
| \`--color-ink\` | \`#1B1D22\` | ${result.classes.ink.top?.hex ?? '—'} | see notes |

## Notes

- The logo's off-white and gold hues drive the site palette; the light-grey bucket represents the world-map dot overlay and is not published as a token.
- The silver token is derived from the wrench letterform on the logo — a genuinely metallic mid-grey, not a bluish steel.
- Ink is derived from the darkest strokes in the wrench, kept slightly warm.
- Where the extracted hex fails WCAG 4.5:1 body-text contrast against \`--color-bg\`, the token is nudged darker and the change is logged in \`docs/design-contrast-report.md\`.
`;

writeFileSync(join(docsDir, 'design-palette-extraction.md'), md);
console.error('Wrote docs/design-palette-extraction.md');
