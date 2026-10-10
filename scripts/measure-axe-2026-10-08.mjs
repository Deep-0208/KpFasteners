import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const OUT_DIR = path.resolve('audit-reports/2026-10-08/axe');
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
  '/terms/',
  '/privacy-policy/'
];

const summary = [];

for (const r of ROUTES) {
  const slug = r === '/' ? 'home' : r.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  const outFile = `audit-reports/2026-10-08/axe/${slug}.json`;
  console.log(`[axe-core 2026-10-08] Auditing ${r} -> ${outFile}`);
  try {
    const cmd = `npx @axe-core/cli http://localhost:3000${r} --save "${outFile}"`;
    execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], timeout: 60000 });
    summary.push({ route: r, slug, status: 'ok', file: outFile });
  } catch (err) {
    if (fs.existsSync(outFile)) {
      summary.push({ route: r, slug, status: 'violations_recorded', file: outFile });
    } else {
      summary.push({ route: r, slug, status: 'error', error: err.message });
    }
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));
console.log('--- ALL AXE SCANS COMPLETE (2026-10-08) ---');
