import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('audit-reports/2026-10-08/lighthouse');

for (const slug of ['home-mobile', 'foundation-bolts-mobile', 'stainless-steel-mobile', 'request-quote-mobile']) {
  const jsonPath = path.join(outDir, `${slug}.report.report.json`);
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const lcpAudit = data.audits['largest-contentful-paint-element'];
    const lcpDetails = lcpAudit?.details?.items?.[0] || {};
    console.log(`=== ${slug} ===`);
    console.log('LCP Element:', lcpDetails.node?.snippet || lcpDetails.node?.selector);
    console.log('LCP Timing:', data.audits['largest-contentful-paint']?.displayValue);
    
    // Opportunities
    const opps = Object.values(data.audits)
      .filter(a => a.details?.type === 'opportunity' && a.numericValue > 100)
      .map(a => ({ id: a.id, title: a.title, savings: a.displayValue }));
    console.log('Top Opportunities:', opps);

    // Diagnostics
    const unminified = data.audits['unminified-javascript']?.details?.items?.length || 0;
    const unusedJs = data.audits['unused-javascript']?.displayValue;
    console.log('Unused JS savings:', unusedJs);
  }
}
