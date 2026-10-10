import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const inputPath = 'C:/Users/DELL/Desktop/kp fasterner images/images.jpg';
const outputPath = path.resolve('public/images/products/bolts/foundation-anchor-bolts-direct.webp');

async function processOriginal() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original dimensions:', metadata.width, 'x', metadata.height);

  // Upscale 2x using lanczos3 and sharpen
  const upscaledBuffer = await image
    .resize(metadata.width * 2, metadata.height * 2, { kernel: 'lanczos3' })
    .sharpen({ sigma: 1.2, m1: 1.5, m2: 0.7 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = upscaledBuffer;
  const { width, height } = info;

  const isBg = new Uint8Array(width * height);
  const queue = [];

  function isBgCandidate(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isNeutral = (max - min) <= 25;
    return isNeutral && r >= 210 && g >= 210 && b >= 210;
  }

  for (let x = 0; x < width; x++) {
    if (isBgCandidate(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isBgCandidate(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isBgCandidate(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isBgCandidate(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const neighbors = [
      [cx + 1, cy], [cx - 1, cy],
      [cx, cy + 1], [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!isBg[nIdx] && isBgCandidate(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  const outData = Buffer.from(data);
  for (let i = 0; i < width * height; i++) {
    if (isBg[i]) {
      outData[i * 4 + 3] = 0;
    }
  }

  await sharp(outData, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .webp({ quality: 90, effort: 6 })
    .toFile(outputPath);

  console.log('Saved direct upscaled cutout to:', outputPath);
}

processOriginal().catch(console.error);
