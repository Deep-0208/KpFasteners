import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const OUT_DIR = path.resolve('audit-reports/2026-10-04/axe');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const ROUTES = [
  '/',
  '/about/',
  '/tools/',
  '/contact/',
  '/request-quote/',
  '/products/',
  '/products/foundation-bolts/',
  '/products/stud-bolts/',
  '/materials/high-tensile-fasteners/',
  '/materials/stainless-steel-fasteners/',
  '/industries/construction-infrastructure/',
  '/terms/'
];

const summary = [];

for (const r of ROUTES) {
  const slug = r === '/' ? 'home' : r.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  const outFile = path.join(OUT_DIR, `${slug}.json`);
  console.log(`Running axe-core on ${r} -> ${slug}.json`);
  try {
    const cmd = `npx @axe-core/cli http://localhost:3000${r} --save "${outFile}"`;
    const stdout = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    summary.push({ route: r, slug, status: 'ok', file: outFile });
  } catch (err) {
    // axe-core exits with non-zero if violations are found, but still writes the file!
    summary.push({ route: r, slug, status: 'violations_found', file: outFile });
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));
console.log('Finished axe-core suite.');
