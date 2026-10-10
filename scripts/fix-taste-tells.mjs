import fs from 'fs';
import path from 'path';

const TARGET_DIRS = ['app', 'components', 'data', 'lib'];
const TARGET_FILES = ['public/catalog.md', 'public/llms.txt'];

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const allFiles = [];
TARGET_DIRS.forEach((dir) => getAllFiles(dir, allFiles));
TARGET_FILES.forEach((f) => {
  if (fs.existsSync(f)) allFiles.push(f);
});

console.log(`Scanning ${allFiles.length} files for taste-skill violations...`);

let totalEmDashesReplaced = 0;
let totalEnDashesReplaced = 0;
let filesModified = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // Count before
  const emCount = (content.match(/—/g) || []).length;
  const enCount = (content.match(/–/g) || []).length;

  if (emCount === 0 && enCount === 0) continue;

  // 1. Replace en-dash (range indicator \u2013) with standard hyphen
  content = content.replace(/–/g, '-');

  // 2. Replace em-dash (\u2014) contextually:
  // In fallback placeholders like || '—' -> || '-'
  content = content.replace(/\|\|\s*['"]—['"]/g, "|| '-'");
  content = content.replace(/['"]—['"]/g, "'-'");

  // In spaced phrases: ' — ' -> ' - '
  content = content.replace(/\s+—\s+/g, ' - ');

  // In unspaced phrases: 'foo—bar' -> 'foo - bar'
  content = content.replace(/([a-zA-Z0-9])—([a-zA-Z0-9])/g, '$1 - $2');

  // Any remaining em-dashes
  content = content.replace(/—/g, '-');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    filesModified++;
    totalEmDashesReplaced += emCount;
    totalEnDashesReplaced += enCount;
    console.log(`Fixed ${file}: ${emCount} em-dashes, ${enCount} en-dashes`);
  }
}

console.log(`\nDone! Modified ${filesModified} files.`);
console.log(`Total em-dashes replaced: ${totalEmDashesReplaced}`);
console.log(`Total en-dashes replaced: ${totalEnDashesReplaced}`);
