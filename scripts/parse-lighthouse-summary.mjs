import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = path.resolve('audit-reports/2026-10-08/lighthouse');

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
    const files = fs.readdirSync(OUT_DIR).filter(f => f.startsWith(slugName) && f.endsWith('.json') && f !== 'summary.json');
    if (files.length > 0) {
      const jsonFile = path.join(OUT_DIR, files[0]);
      const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
      const score = {
        route: r.path,
        slug: r.slug,
        formFactor,
        performance: Math.round((data.categories.performance?.score || 0) * 100),
        accessibility: Math.round((data.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((data.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((data.categories.seo?.score || 0) * 100),
        fcp: data.audits['first-contentful-paint']?.displayValue,
        fcpNumeric: Math.round(data.audits['first-contentful-paint']?.numericValue || 0),
        lcp: data.audits['largest-contentful-paint']?.displayValue,
        lcpNumeric: Math.round(data.audits['largest-contentful-paint']?.numericValue || 0),
        cls: data.audits['cumulative-layout-shift']?.displayValue,
        clsNumeric: Number((data.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(4)),
        tbt: data.audits['total-blocking-time']?.displayValue,
        tbtNumeric: Math.round(data.audits['total-blocking-time']?.numericValue || 0),
        speedIndex: data.audits['speed-index']?.displayValue,
        interactive: data.audits['interactive']?.displayValue,
      };
      results.push(score);
    }
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(results, null, 2));
console.log('Parsed Lighthouse Summary:\n', JSON.stringify(results, null, 2));
