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

console.log('=== DETAILED PENDING IMAGE MARKERS ===');

for (const p of allFiles) {
  const lines = fs.readFileSync(p, 'utf8').split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('VERIFICATION PENDING') && (line.toLowerCase().includes('photo') || line.toLowerCase().includes('image') || line.toLowerCase().includes('sign board'))) {
      console.log(`\nFile: ${p}:${idx + 1}`);
      console.log(`  Line: ${line.trim()}`);
    }
  });
}
