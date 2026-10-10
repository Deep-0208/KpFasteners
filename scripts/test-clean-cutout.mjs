import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const inputPath = 'C:/Users/DELL/.gemini/antigravity-ide/brain/1feb1569-22a5-49e6-8287-3ebb938f35db/foundation_anchor_bolts_1791569169046.jpg';
const outputPath = path.resolve('public/images/products/bolts/foundation-anchor-bolts.webp');

async function cleanCutout() {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const gray = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
  }

  // Calculate local gradient
  const edge = new Float32Array(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      const gx = gray[idx + 1] - gray[idx - 1];
      const gy = gray[idx + width] - gray[idx - width];
      edge[idx] = Math.sqrt(gx * gx + gy * gy);
    }
  }

  // Flood-fill background:
  // A pixel is background if it's connected to border and:
  // 1. gray > 215 (bright background)
  // 2. OR (gray > 95 and edge < 22 and is neutral max-min < 25) -> this captures the smooth diffuse cast shadows!
  const isBg = new Uint8Array(width * height);
  const queue = [];

  function isBgCandidate(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isNeutral = (max - min) <= 24;
    const val = gray[y * width + x];
    const e = edge[y * width + x];

    if (val >= 210 && isNeutral) return true;
    // Cast shadow: smooth diffuse grey without high internal texture
    if (val >= 90 && isNeutral && e < 25) return true;
    return false;
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

  // Refine boundary pixels for clean anti-aliasing
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (outData[idx * 4 + 3] > 0) {
        const hasBg = isBg[idx - 1] || isBg[idx + 1] || isBg[idx - width] || isBg[idx + width];
        if (hasBg) {
          const val = gray[idx];
          // If it's a residual faint shadow pixel
          if (val > 130 && edge[idx] < 35) {
            outData[idx * 4 + 3] = 0;
          }
        }
      }
    }
  }

  await sharp(outData, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .webp({ quality: 92, effort: 6 })
    .toFile(outputPath);

  console.log('Successfully written clean cutout to:', outputPath);
}

cleanCutout().catch(console.error);
