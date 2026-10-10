import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

async function processFoundationAssortment(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const isBg = new Uint8Array(width * height);
  const queue = [];

  function isBackgroundPixel(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isNeutral = (max - min) <= 18;

    // Studio white or light cast shadow floor
    return isNeutral && (min >= 220 || (r >= 215 && g >= 215 && b >= 215));
  }

  // Push all 4 outer borders into the queue
  for (let x = 0; x < width; x++) {
    if (isBackgroundPixel(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isBackgroundPixel(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isBackgroundPixel(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isBackgroundPixel(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
  }

  // Breadth-first search to flood-fill background including gaps
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];
    const neighbors = [
      [cx + 1, cy], [cx - 1, cy],
      [cx, cy + 1], [cx, cy - 1],
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!isBg[nIdx] && isBackgroundPixel(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  const out = Buffer.from(data);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const dIdx = pIdx * 4;

      if (isBg[pIdx]) {
        out[dIdx + 3] = 0;
      } else {
        // Edge softening and defringing
        let hasBgNeighbor = false;
        if (x > 0 && isBg[pIdx - 1]) hasBgNeighbor = true;
        else if (x < width - 1 && isBg[pIdx + 1]) hasBgNeighbor = true;
        else if (y > 0 && isBg[pIdx - width]) hasBgNeighbor = true;
        else if (y < height - 1 && isBg[pIdx + width]) hasBgNeighbor = true;

        if (hasBgNeighbor) {
          const r = data[dIdx];
          const g = data[dIdx + 1];
          const b = data[dIdx + 2];
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const isNeutral = (max - min) <= 15;

          if (isNeutral && r >= 200) {
            // Feather edge alpha smoothly
            const alpha = Math.round(((220 - r) / 20) * 255);
            out[dIdx + 3] = Math.min(out[dIdx + 3], Math.max(0, alpha));
          }
        }
      }
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .resize({ width: 900, height: 675, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 95, effort: 6 })
    .toFile(outputPath);

  console.log(`Saved pristine cutout -> ${outputPath}`);
}

async function main() {
  await processFoundationAssortment(
    'C:/Users/DELL/.gemini/antigravity-ide/brain/1feb1569-22a5-49e6-8287-3ebb938f35db/foundation_anchors_set_1791570167445.jpg',
    'C:/Users/DELL/Desktop/SEO/KpFasteners SEO/public/images/products/bolts/foundation-anchor-bolts.webp'
  );
}

main().catch(console.error);
