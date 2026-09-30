#!/usr/bin/env node
// Generate app/icon.png (512), app/apple-icon.png (180), app/favicon.ico (32).
// Prefers the client's logo; falls back to solid gold with "KP" text.

import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const source = join(root, 'logo.jpg.jpeg');
const appDir = join(root, 'app');

const GOLD = { r: 0x88, g: 0x64, b: 0x28 };

function fallbackBuffer(size) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#886428"/>
  <text x="50%" y="50%" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="${Math.round(size * 0.5)}"
        fill="#FFFFFF" text-anchor="middle" dominant-baseline="central">KP</text>
</svg>`;
  return Buffer.from(svg);
}

async function make(size, outPath, tryLogo) {
  try {
    if (tryLogo && existsSync(source)) {
      await sharp(source).resize(size, size, { fit: 'cover' }).png().toFile(outPath);
      return;
    }
    throw new Error('logo missing');
  } catch {
    await sharp(fallbackBuffer(size)).png().toFile(outPath);
  }
}

async function makeIco(outPath) {
  const png = await sharp(fallbackBuffer(32)).png().toBuffer();
  // Write a PNG as favicon.ico — modern browsers accept it.
  writeFileSync(outPath, png);
}

await make(512, join(appDir, 'icon.png'), true);
await make(180, join(appDir, 'apple-icon.png'), true);
await makeIco(join(appDir, 'favicon.ico'));
console.log('icons generated');
