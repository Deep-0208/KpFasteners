import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) files.push(full);
  }
  return files;
}

const allFiles = walk('app').concat(walk('components')).concat(walk('data'));

console.log('=== CHECKING ALL IMAGE PATHS REFERENCED IN CODE ===');

const foundImages = new Set();
const missingImages = [];
const placeholderImages = [];

for (const p of allFiles) {
  const code = fs.readFileSync(p, 'utf8');

  // Match all string literals that look like image paths
  const matches = code.matchAll(/['"`](\/(?:images|product-images|brand)[^'"`]+\.(?:webp|jpg|jpeg|png|svg))['"`]/gi);
  for (const m of matches) {
    const imgPath = m[1];
    foundImages.add(imgPath);
    const diskPath = path.join('public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      missingImages.push({ file: p, imgPath, diskPath });
    }
  }

  // Look for any comments or placeholders indicating pending images
  const pendingMatches = code.matchAll(/(?:VERIFICATION PENDING|TODO|placeholder|PENDING).*?(?:photo|image|picture|sign board|machinery)/gi);
  for (const pm of pendingMatches) {
    placeholderImages.push({ file: p, match: pm[0].trim() });
  }
}

console.log(`Unique image paths referenced in code: ${foundImages.size}`);
for (const img of foundImages) {
  const diskPath = path.join('public', img.replace(/^\//, ''));
  const exists = fs.existsSync(diskPath);
  console.log(`  ${img} -> exists: ${exists} ${exists ? `(${fs.statSync(diskPath).size} bytes)` : 'MISSING!'}`);
}

console.log(`\nMissing files on disk: ${missingImages.length}`);
if (missingImages.length > 0) {
  console.log(missingImages);
}

console.log(`\nPending image markers/placeholders in code: ${placeholderImages.length}`);
for (const pi of placeholderImages) {
  console.log(`  [${pi.file}] ${pi.match}`);
}
