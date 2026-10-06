import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let res = [];
  if (!fs.existsSync(dir)) return res;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res.push(...walk(full));
    else if (/\.webp$/i.test(f) && !f.includes('.tmp.') && !f.includes('-transparent')) res.push(full);
  }
  return res;
}

const list = walk('public/images/products');
console.log(`Found ${list.length} target webp images to process.`);

async function removeBg(webpPath) {
  try {
    const jpgPath = webpPath.replace(/\.webp$/i, '.jpg');
    const sourcePath = fs.existsSync(jpgPath) ? jpgPath : webpPath;
    
    const inputBuf = fs.readFileSync(sourcePath);
    const image = sharp(inputBuf);
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const w = info.width;
    const h = info.height;

    // Detect white pixels
    function isNearWhite(idx) {
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      if (r > 230 && g > 230 && b > 230) {
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        return (max - min) < 28;
      }
      return false;
    }

    const isWhite = new Uint8Array(w * h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const pos = y * w + x;
        if (isNearWhite(pos * 4)) {
          isWhite[pos] = 1;
        }
      }
    }

    // Connected Component Analysis on all white regions
    const visited = new Uint8Array(w * h);
    const isBg = new Uint8Array(w * h);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const startPos = y * w + x;
        if (isWhite[startPos] && !visited[startPos]) {
          const queue = [startPos];
          visited[startPos] = 1;
          let touchesBorder = false;
          let head = 0;

          while (head < queue.length) {
            const p = queue[head++];
            const px = p % w;
            const py = Math.floor(p / w);

            if (px === 0 || px === w - 1 || py === 0 || py === h - 1) {
              touchesBorder = true;
            }

            const neighbors = [
              [px + 1, py],
              [px - 1, py],
              [px, py + 1],
              [px, py - 1]
            ];

            for (const [nx, ny] of neighbors) {
              if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                const nPos = ny * w + nx;
                if (isWhite[nPos] && !visited[nPos]) {
                  visited[nPos] = 1;
                  queue.push(nPos);
                }
              }
            }
          }

          // If component touches border OR is a large enclosed hole (e.g. eye bolt hole, nut hole, washer hole >= 1000 px)
          // it is confirmed studio background
          if (touchesBorder || queue.length >= 1000) {
            for (const p of queue) {
              isBg[p] = 1;
            }
          }
        }
      }
    }

    // Helper to check if neighbor is background
    function hasBgNeighbor(x, y) {
      if (x > 0 && isBg[y * w + (x - 1)]) return true;
      if (x < w - 1 && isBg[y * w + (x + 1)]) return true;
      if (y > 0 && isBg[(y - 1) * w + x]) return true;
      if (y < h - 1 && isBg[(y + 1) * w + x]) return true;
      return false;
    }

    let cleared = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const pos = y * w + x;
        const idx = pos * 4;

        if (isBg[pos]) {
          data[idx + 3] = 0;
          cleared++;
        } else if (hasBgNeighbor(x, y)) {
          // Antialias boundary pixels to prevent white halo fringing
          const r = data[idx], g = data[idx + 1], b = data[idx + 2];
          const avg = (r + g + b) / 3;
          if (avg > 220) {
            // Smoothly taper alpha from 255 down to 0 for near-white boundary edge
            const alpha = Math.max(0, Math.min(255, Math.round(255 * (255 - avg) / 35)));
            data[idx + 3] = alpha;
          }
        }
        // Non-boundary metal pixels remain 100% opaque (data[idx+3] = 255)
      }
    }

    const outBuf = await sharp(data, { raw: { width: w, height: h, channels: 4 } })
      .webp({ quality: 85, alphaQuality: 95, lossless: false })
      .toBuffer();

    fs.writeFileSync(webpPath, outBuf);
    const pct = ((cleared / (w * h)) * 100).toFixed(1);
    console.log(`✓ ${path.basename(webpPath)}: cleared ${pct}% background pixels (${cleared} px)`);
  } catch (err) {
    console.error(`✗ Error on ${webpPath}:`, err.message);
  }
}

async function runAll() {
  for (const f of list) {
    await removeBg(f);
  }

  // Clean up any stray .tmp.webp and -transparent.webp
  function cleanDir(dir) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) cleanDir(full);
      else if (f.endsWith('.tmp.webp') || f.includes('-transparent.webp')) {
        try { fs.unlinkSync(full); } catch {}
      }
    }
  }
  cleanDir('public/images/products');
  console.log('--- ALL PRODUCT BACKGROUNDS REMOVED SUCCESSFULLY ---');
}

runAll();
