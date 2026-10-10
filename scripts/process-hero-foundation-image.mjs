import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const generatedPath = 'C:/Users/DELL/.gemini/antigravity-ide/brain/1feb1569-22a5-49e6-8287-3ebb938f35db/foundation_anchor_bolts_1791569169046.jpg';
const destPath = path.resolve('public/images/products/bolts/foundation-anchor-bolts.webp');

async function removeBackground(inputPath, outputPath) {
  console.log(`Loading image from ${inputPath}...`);
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Background is pure white/near-white studio backdrop
  // We identify pixels connected to the border that are light/neutral background
  const isBg = new Uint8Array(width * height);
  const queue = [];

  function isBackgroundPixel(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];
    if (a < 20) return true;

    // In a studio shot, background is near-white (r, g, b > 230) and neutral
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isNeutral = (max - min) <= 15;

    // Check if pixel is white or very light grey shadow
    return isNeutral && r >= 225 && g >= 225 && b >= 225;
  }

  // Push all perimeter pixels
  for (let x = 0; x < width; x++) {
    if (isBackgroundPixel(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isBackgroundPixel(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isBackgroundPixel(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isBackgroundPixel(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
  }

  // BFS flood-fill for connected background
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
        if (!isBg[nIdx] && isBackgroundPixel(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  const outData = Buffer.from(data);

  // Apply transparency with soft feathering along the boundary
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const dIdx = pIdx * 4;
      if (isBg[pIdx]) {
        outData[dIdx + 3] = 0; // 100% transparent
      } else {
        // Semi-transparent feathering if touching background and very light
        const r = data[dIdx];
        const g = data[dIdx + 1];
        const b = data[dIdx + 2];
        if (r > 235 && g > 235 && b > 235) {
          // Check if adjacent to background
          const hasBgNeighbor = 
            (x > 0 && isBg[pIdx - 1]) ||
            (x < width - 1 && isBg[pIdx + 1]) ||
            (y > 0 && isBg[pIdx - width]) ||
            (y < height - 1 && isBg[pIdx + width]);
          if (hasBgNeighbor) {
            // Soft blend
            outData[dIdx + 3] = Math.round(Math.max(0, 255 - ((r - 235) * 12)));
          }
        }
      }
    }
  }

  // Create clean sharp output: trim excess transparent padding, resize appropriately, save WebP
  await sharp(outData, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 10 })
    .webp({ quality: 90, effort: 6 })
    .toFile(outputPath);

  const outMeta = await sharp(outputPath).metadata();
  console.log(`Saved transparent WebP to ${outputPath}: ${outMeta.width}x${outMeta.height}`);
}

removeBackground(generatedPath, destPath).catch(console.error);
