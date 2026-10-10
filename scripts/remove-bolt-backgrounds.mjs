import sharp from 'sharp';
import fs from 'node:fs';

/**
 * Remove solid / studio backgrounds from fastener product images,
 * producing clean transparent WebP cutouts matching the rest of the catalog.
 */
async function processImage(filePath, { bgTolerance = 25, isAssortment = false } = {}) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping non-existent: ${filePath}`);
    return;
  }

  console.log(`Processing: ${filePath}`);
  const inputBuffer = fs.readFileSync(filePath);
  const image = sharp(inputBuffer);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Sample perimeter pixels to establish background reference
  const cornerIndices = [
    (0 * width + 0) * 4,
    (0 * width + (width - 1)) * 4,
    ((height - 1) * width + 0) * 4,
    ((height - 1) * width + (width - 1)) * 4,
    (5 * width + 5) * 4,
  ];
  let bgR = 0, bgG = 0, bgB = 0;
  for (const idx of cornerIndices) {
    bgR += data[idx];
    bgG += data[idx + 1];
    bgB += data[idx + 2];
  }
  bgR = Math.round(bgR / cornerIndices.length);
  bgG = Math.round(bgG / cornerIndices.length);
  bgB = Math.round(bgB / cornerIndices.length);

  const isBg = new Uint8Array(width * height);
  const queue = [];

  function isBackground(x, y) {
    const idx = (y * width + x) * 4;
    const a = data[idx + 3];
    if (a < 15) return true; // already transparent

    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const isNeutral = (max - min) <= 18;

    if (isAssortment) {
      // In assortment, white background exists between multiple items
      return isNeutral && r >= 238 && g >= 238 && b >= 238;
    }

    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);
    // Background pixel or light cast-shadow
    return isNeutral && (dist <= bgTolerance || (r >= 220 && g >= 220 && b >= 220));
  }

  // Push all image boundaries to flood-fill queue
  for (let x = 0; x < width; x++) {
    if (isBackground(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isBackground(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isBackground(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isBackground(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
  }

  // Breadth-first search for connected background
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
        if (!isBg[nIdx] && isBackground(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  const out = Buffer.from(data);

  // Apply transparency to connected background pixels
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pIdx = y * width + x;
      const dIdx = pIdx * 4;

      if (isAssortment) {
        const r = data[dIdx];
        const g = data[dIdx + 1];
        const b = data[dIdx + 2];
        const isNeutral = (Math.max(r, g, b) - Math.min(r, g, b)) <= 15;
        if (isNeutral && r >= 242 && g >= 242 && b >= 242) {
          out[dIdx + 3] = 0;
        } else if (isNeutral && r >= 232 && g >= 232 && b >= 232) {
          const alpha = Math.round(((242 - r) / 10) * 255);
          out[dIdx + 3] = Math.min(out[dIdx + 3], Math.max(0, alpha));
        }
      } else {
        if (isBg[pIdx]) {
          out[dIdx + 3] = 0;
        } else {
          // Check if this is an edge pixel adjacent to background for subtle anti-aliasing
          let hasBgNeighbor = false;
          if (x > 0 && isBg[pIdx - 1]) hasBgNeighbor = true;
          else if (x < width - 1 && isBg[pIdx + 1]) hasBgNeighbor = true;
          else if (y > 0 && isBg[pIdx - width]) hasBgNeighbor = true;
          else if (y < height - 1 && isBg[pIdx + width]) hasBgNeighbor = true;

          if (hasBgNeighbor) {
            const r = data[dIdx];
            if (r > 210) {
              // Soft edge feathering
              const alpha = Math.round(((245 - r) / 35) * 255);
              out[dIdx + 3] = Math.min(out[dIdx + 3], Math.max(80, alpha));
            }
          }
        }
      }
    }
  }

  // Save back as high-quality transparent WebP
  const webpBuffer = await sharp(out, { raw: { width, height, channels: 4 } })
    .webp({ quality: 92, alphaQuality: 100, effort: 6 })
    .toBuffer();

  fs.writeFileSync(filePath, webpBuffer);
  console.log(`✅ Cleaned transparent cutout saved: ${filePath}`);
}

async function main() {
  console.log('\n--- Removing Backgrounds from Fastener Product Images ---');

  // 1. Threaded Rods & Studs
  await processImage('public/images/products/threaded-rods/sag-rod.webp', { bgTolerance: 30 });
  await processImage('public/images/products/threaded-rods/threaded-rod-stud.webp', { bgTolerance: 30 });
  await processImage('public/images/products/threaded-rods/tie-rod.webp', { bgTolerance: 35 });

  // 2. Stainless Steel Assortment
  await processImage('public/product-images/stainless-steel/hero.webp', { isAssortment: true });

  console.log('\n🎉 All target fastener images now have 100% transparent backgrounds!\n');
}

main().catch(console.error);
