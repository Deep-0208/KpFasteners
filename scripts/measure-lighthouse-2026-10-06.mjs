import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const OUT_DIR = path.resolve('audit-reports/2026-10-06/lighthouse');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const BENCHMARK_ROUTES = [
  { path: '/', slug: 'home' },
  { path: '/products/foundation-bolts/', slug: 'foundation-bolts' },
  { path: '/materials/stainless-steel-fasteners/', slug: 'stainless-steel' },
  { path: '/request-quote/', slug: 'request-quote' }
];

const results = [];

for (const r of BENCHMARK_ROUTES) {
  for (const formFactor of ['mobile', 'desktop']) {
    const slugName = `${r.slug}-${formFactor}`;
    const outPrefix = path.join(OUT_DIR, slugName);
    const jsonOut = `${outPrefix}.report.json`;
    console.log(`[Lighthouse] Running ${formFactor} on ${r.path}...`);
    
    const presetFlag = formFactor === 'desktop' ? '--preset=desktop' : '--form-factor=mobile --screenEmulation.mobile=true';
    const cmd = `npx lighthouse http://localhost:3000${r.path} ${presetFlag} --output html --output json --output-path "${outPrefix}.report" --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new --no-sandbox"`;
    
    try {
      execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'], timeout: 120000 });
      if (fs.existsSync(jsonOut)) {
        const data = JSON.parse(fs.readFileSync(jsonOut, 'utf8'));
        const score = {
          route: r.path,
          slug: r.slug,
          formFactor,
          performance: Math.round((data.categories.performance?.score || 0) * 100),
          accessibility: Math.round((data.categories.accessibility?.score || 0) * 100),
          bestPractices: Math.round((data.categories['best-practices']?.score || 0) * 100),
          seo: Math.round((data.categories.seo?.score || 0) * 100),
          fcp: data.audits['first-contentful-paint']?.displayValue,
          fcpNumeric: data.audits['first-contentful-paint']?.numericValue,
          lcp: data.audits['largest-contentful-paint']?.displayValue,
          lcpNumeric: data.audits['largest-contentful-paint']?.numericValue,
          cls: data.audits['cumulative-layout-shift']?.displayValue,
          clsNumeric: data.audits['cumulative-layout-shift']?.numericValue,
          tbt: data.audits['total-blocking-time']?.displayValue,
          tbtNumeric: data.audits['total-blocking-time']?.numericValue,
          speedIndex: data.audits['speed-index']?.displayValue,
          interactive: data.audits['interactive']?.displayValue,
        };
        results.push(score);
        console.log(`[Lighthouse] Finished ${slugName}:`, score);
      }
    } catch (err) {
      console.error(`[Lighthouse] Failed ${slugName}:`, err.message);
      results.push({ route: r.path, slug: r.slug, formFactor, error: err.message });
    }
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(results, null, 2));
console.log('--- ALL LIGHTHOUSE BENCHMARKS COMPLETE ---');
