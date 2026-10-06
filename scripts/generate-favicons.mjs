import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// Bounding box of the KP emblem in public/brand/logo.png
const EMBLEM_CROP = {
  left: 168,
  top: 8,
  width: 656,
  height: 527,
};

function createIco(pngEntries) {
  // pngEntries: array of { width, height, buffer }
  const count = pngEntries.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO type
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  for (const item of pngEntries) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image data size in bytes
    entry.writeUInt32LE(offset, 12); // Image data offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngEntries.map((p) => p.buffer)]);
}

async function renderEmblemIcon(canvasSize, padding = 0, background = { r: 0, g: 0, b: 0, alpha: 0 }) {
  const targetArea = canvasSize - padding * 2;
  const aspect = EMBLEM_CROP.width / EMBLEM_CROP.height;

  let emblemW = targetArea;
  let emblemH = Math.round(emblemW / aspect);
  if (emblemH > targetArea) {
    emblemH = targetArea;
    emblemW = Math.round(emblemH * aspect);
  }

  const emblemBuf = await sharp('public/brand/logo.webp')
    .extract(EMBLEM_CROP)
    .resize(emblemW, emblemH, { fit: 'contain', kernel: 'lanczos3' })
    .png()
    .toBuffer();

  const canvas = await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background,
    },
  })
    .composite([{ input: emblemBuf, gravity: 'center' }])
    .png()
    .toBuffer();

  return canvas;
}

async function run() {
  console.log('Generating KP Logo Favicon suite...');

  // 1. Generate ICO sizes: 16x16, 32x32, 48x48
  const png16 = await renderEmblemIcon(16, 0);
  const png32 = await renderEmblemIcon(32, 0);
  const png48 = await renderEmblemIcon(48, 1);

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  // 2. Generate 512x512 app icon
  const png512 = await renderEmblemIcon(512, 32);

  // 3. Generate 192x192 PWA icon
  const png192 = await renderEmblemIcon(192, 12);

  // 4. Generate 180x180 Apple Touch Icon (clean off-white background with subtle rounded padding)
  const appleIcon = await renderEmblemIcon(180, 20, { r: 255, g: 255, b: 255, alpha: 1 });

  // Target destinations
  const targets = [
    { file: 'app/favicon.ico', data: icoBuffer },
    { file: 'public/favicon.ico', data: icoBuffer },
    { file: 'app/icon.png', data: png512 },
    { file: 'public/icon.png', data: png512 },
    { file: 'public/icon-192.png', data: png192 },
    { file: 'app/apple-icon.png', data: appleIcon },
    { file: 'public/apple-icon.png', data: appleIcon },
  ];

  for (const t of targets) {
    fs.writeFileSync(t.file, t.data);
    console.log(`✓ Wrote ${t.file} (${t.data.length} bytes)`);
  }

  // Cleanup test script if exists
  if (fs.existsSync('scripts/test-emblem.mjs')) {
    fs.unlinkSync('scripts/test-emblem.mjs');
  }

  console.log('--- ALL KP FAVICONS REGENERATED SUCCESSFULLY ---');
}

run().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
