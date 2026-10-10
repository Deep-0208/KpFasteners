import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

async function extractSubjectWithSmoothShadow(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Consider anything clearly background-white from edges
  function isPureBg(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // Background is bright and neutral
    return min >= 235 && (max - min) <= 15;
  }

  // Push borders into flood fill
  for (let x = 0; x < width; x++) {
    if (isPureBg(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isPureBg(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isPureBg(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isPureBg(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
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
        if (!isBg[nIdx] && isPureBg(nx, ny)) {
          isBg[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  const outData = Buffer.from(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

      if (isBg[y * width + x]) {
        // Completely transparent
        outData[idx + 3] = 0;
      } else {
        // If it's a soft shadow region near the background threshold (brightness between 210 and 245)
        // fade it out cleanly so there is zero contour edge
        if (brightness >= 240) {
          // Fade to 0 smoothly between 240 and 250
          const alphaFade = Math.max(0, (250 - brightness) / 10);
          outData[idx + 3] = Math.round(alphaFade * 60);
        } else if (brightness >= 215) {
          // Soft ground shadow feathering
          const diff = (240 - brightness) / 25; // 0 to 1
          outData[idx + 3] = Math.round(180 + diff * 75);
        } else {
          // Solid metallic object
          outData[idx + 3] = 255;
        }
      }
    }
  }

  // De-fringe anti-aliased edge pixels: if an edge pixel is adjacent to alpha=0 and has high brightness, suppress white halo
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;
      if (outData[idx + 3] > 0 && outData[idx + 3] < 255) {
        // Neutralize light edge fringing by matching color slightly toward shadow dark
        if (outData[idx] > 200 && outData[idx + 1] > 200 && outData[idx + 2] > 200) {
          outData[idx] = Math.round(outData[idx] * 0.85);
          outData[idx + 1] = Math.round(outData[idx + 1] * 0.85);
          outData[idx + 2] = Math.round(outData[idx + 2] * 0.85);
        }
      }
    }
  }

  await sharp(outData, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 8 })
    .resize({ width: 900, height: 675, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 95, effort: 6 })
    .toFile(outputPath);

  console.log(`Processed with smooth shadow -> ${outputPath}`);
}

async function main() {
  await extractSubjectWithSmoothShadow(
    'C:/Users/DELL/.gemini/antigravity-ide/brain/1feb1569-22a5-49e6-8287-3ebb938f35db/foundation_anchors_set_1791570167445.jpg',
    'C:/Users/DELL/Desktop/SEO/KpFasteners SEO/public/images/products/bolts/foundation-anchor-bolts.webp'
  );
  await extractSubjectWithSmoothShadow(
    'C:/Users/DELL/.gemini/antigravity-ide/brain/1feb1569-22a5-49e6-8287-3ebb938f35db/foundation_anchor_studio_1791570137012.jpg',
    'C:/Users/DELL/Desktop/SEO/KpFasteners SEO/public/images/products/bolts/foundation-anchor-studio.webp'
  );
}

main().catch(console.error);
