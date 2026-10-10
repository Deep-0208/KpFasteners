import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const inputPath = 'C:/Users/DELL/.gemini/antigravity-ide/brain/1feb1569-22a5-49e6-8287-3ebb938f35db/foundation_anchors_set_1791570167445.jpg';
const outputPath = path.resolve('public/images/products/bolts/foundation-anchor-bolts.webp');

async function processCleanCutout() {
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

  // Flood fill from boundaries:
  // Background/shadow pixels have:
  // 1. High brightness (gray > 220)
  // 2. OR medium-high brightness with low edge contrast (gray > 90 and edge < 25)
  // 3. AND low color saturation (max - min < 24)
  const isBg = new Uint8Array(width * height);
  const queue = [];

  function canBeBg(x, y) {
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
    if (val >= 85 && isNeutral && e < 28) return true;
    return false;
  }

  for (let x = 0; x < width; x++) {
    if (canBeBg(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (canBeBg(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (canBeBg(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (canBeBg(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
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
        if (!isBg[nIdx] && canBeBg(nx, ny)) {
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

  // Anti-alias edge boundary
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = y * width + x;
      if (outData[idx * 4 + 3] > 0) {
        const hasBg = isBg[idx - 1] || isBg[idx + 1] || isBg[idx - width] || isBg[idx + width];
        if (hasBg && gray[idx] > 110 && edge[idx] < 35) {
          outData[idx * 4 + 3] = 0;
        }
      }
    }
  }

  await sharp(outData, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .resize({ width: 900, height: 675, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 92, effort: 6 })
    .toFile(outputPath);

  console.log('Saved clean 3D cutout to:', outputPath);
}

processCleanCutout().catch(console.error);
