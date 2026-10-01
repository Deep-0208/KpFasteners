#!/usr/bin/env node
// Mirror the filenames in ./product-images/ as real JPEG grey-card placeholders
// under public/images/products/. Rendered via Sharp so Next/Image's optimizer
// handles them identically to the real photos that will eventually replace them.
// When a real .jpg lands at the same path, it silently overwrites the placeholder
// — zero code changes required (data/products/*.ts references the same path).

import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import { join, dirname, extname, basename } from 'node:path';
import sharp from 'sharp';

const SRC = 'product-images';
const DST = 'public/images/products';
const W = 1200;
const H = 900;

const svgCard = (label) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F1F5F9"/>
      <stop offset="1" stop-color="#E2E8F0"/>
    </linearGradient>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#CBD5E1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <g transform="translate(${W / 2} ${H / 2 - 60})" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fill="#475569">
    <text y="0" font-size="84">📷</text>
    <text y="76" font-size="30" font-weight="700" letter-spacing="2" fill="#334155">PHOTO PENDING</text>
    <text y="128" font-size="20" fill="#64748B">${label}</text>
    <text y="172" font-size="16" fill="#94A3B8">KP Fasteners · Ahmedabad</text>
  </g>
  <rect x="4" y="4" width="${W - 8}" height="${H - 8}" fill="none" stroke="#CBD5E1" stroke-width="4" rx="20"/>
</svg>`;

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const full = join(dir, name);
    const s = await stat(full);
    if (s.isDirectory()) out.push(...await walk(full));
    else if (/\.(jpe?g|png|webp)$/i.test(name)) out.push(full);
  }
  return out;
}

const files = await walk(SRC);
let written = 0;

for (const src of files) {
  const rel = src.slice(SRC.length + 1);
  const outPath = join(DST, rel);
  await mkdir(dirname(outPath), { recursive: true });
  const label = basename(rel, extname(rel)).replace(/-/g, ' ');
  const svgBuf = Buffer.from(svgCard(label), 'utf8');
  const jpgBuf = await sharp(svgBuf).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
  await writeFile(outPath, jpgBuf);
  written++;
}

console.log(JSON.stringify({ event: 'placeholders.generated', count: written, dst: DST, format: 'jpeg' }, null, 2));
