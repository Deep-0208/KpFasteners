import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const OUT_DIR = path.resolve('audit-reports/2026-10-04/lighthouse');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const BENCHMARK_ROUTES = [
  { path: '/', slug: 'home' },
  { path: '/products/foundation-bolts/', slug: 'foundation-bolts' },
  { path: '/materials/stainless-steel-fasteners/', slug: 'stainless-steel' },
  { path: '/request-quote/', slug: 'request-quote' }
];

const scoresSummary = [];

for (const r of BENCHMARK_ROUTES) {
  const htmlOut = path.join(OUT_DIR, `${r.slug}.report.html`);
  const jsonOut = path.join(OUT_DIR, `${r.slug}.report.json`);
  console.log(`Running Lighthouse on ${r.path} -> ${r.slug}`);
  try {
    const cmd = `npx lighthouse http://localhost:3000${r.path} --output html --output json --output-path "${path.join(OUT_DIR, r.slug)}.report" --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new --no-sandbox"`;
    execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    
    if (fs.existsSync(jsonOut)) {
      const data = JSON.parse(fs.readFileSync(jsonOut, 'utf8'));
      const scores = {
        route: r.path,
        slug: r.slug,
        performance: Math.round((data.categories.performance?.score || 0) * 100),
        accessibility: Math.round((data.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((data.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((data.categories.seo?.score || 0) * 100),
        fcp: data.audits['first-contentful-paint']?.displayValue,
        lcp: data.audits['largest-contentful-paint']?.displayValue,
        cls: data.audits['cumulative-layout-shift']?.displayValue,
        tbt: data.audits['total-blocking-time']?.displayValue
      };
      scoresSummary.push(scores);
      console.log(`Scores for ${r.path}:`, scores);
    }
  } catch (err) {
    console.error(`Error running Lighthouse on ${r.path}:`, err.message);
    scoresSummary.push({ route: r.path, slug: r.slug, error: err.message });
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'summary.json'), JSON.stringify(scoresSummary, null, 2));
console.log('Finished Lighthouse suite.');
