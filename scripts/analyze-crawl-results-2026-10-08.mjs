import fs from 'node:fs';
import path from 'node:path';

const rawPath = path.resolve('audit-reports/2026-10-08/raw-route-audit.json');
const linkPath = path.resolve('audit-reports/2026-10-08/link-graph.json');

const routes = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
const linkGraph = JSON.parse(fs.readFileSync(linkPath, 'utf8'));

console.log('--- CRAWL ANALYSIS REPORT (2026-10-08) ---');

// 1. Status Codes
const non200 = routes.filter(r => r.status !== 200);
console.log(`Status Check: ${routes.length} routes checked. Non-200: ${non200.length}`);

// 2. Canonical & Trailing Slash
const canonicalIssues = [];
for (const r of routes) {
  const expected = `https://kpfasteners.com${r.route}`;
  if (!r.canonical) {
    canonicalIssues.push({ route: r.route, issue: 'missing canonical' });
  } else if (r.canonical !== expected) {
    canonicalIssues.push({ route: r.route, issue: `mismatch: got ${r.canonical}, expected ${expected}` });
  }
}
console.log(`Canonical Check: ${canonicalIssues.length} issues`);
if (canonicalIssues.length) console.log(canonicalIssues);

// 3. Title lengths (target 50-60 chars)
const titleIssues = [];
const titleSet = new Map();
for (const r of routes) {
  const len = r.title.length;
  if (titleSet.has(r.title.text)) {
    titleIssues.push({ route: r.route, issue: `duplicate title with ${titleSet.get(r.title.text)}` });
  } else {
    titleSet.set(r.title.text, r.route);
  }
  if (len < 40 || len > 65) {
    titleIssues.push({ route: r.route, issue: `length ${len} out of bounds: "${r.title.text}"` });
  }
}
console.log(`Title Check: ${titleIssues.length} issues (length <40 or >65 or duplicate)`);
if (titleIssues.length) console.log(titleIssues);

// 4. Meta Description lengths (target 140-160 chars)
const descIssues = [];
const descSet = new Map();
for (const r of routes) {
  const len = r.description.length;
  if (descSet.has(r.description.text)) {
    descIssues.push({ route: r.route, issue: `duplicate desc with ${descSet.get(r.description.text)}` });
  } else {
    descSet.set(r.description.text, r.route);
  }
  if (len < 120 || len > 170) {
    descIssues.push({ route: r.route, issue: `length ${len} out of bounds: "${r.description.text.slice(0, 40)}..."` });
  }
}
console.log(`Description Check: ${descIssues.length} issues (length <120 or >170 or duplicate)`);
if (descIssues.length) console.log(descIssues);

// 5. Headings (H1 count must be exactly 1)
const headingIssues = [];
for (const r of routes) {
  if (r.headings.h1Count !== 1) {
    headingIssues.push({ route: r.route, count: r.headings.h1Count, h1s: r.headings.h1 });
  }
}
console.log(`Heading Check: ${headingIssues.length} routes with H1 != 1`);
if (headingIssues.length) console.log(headingIssues);

// 6. Structured Data
const schemaStats = { total: 0, byType: {} };
const schemaIssues = [];
for (const r of routes) {
  const blocks = r.jsonLd.blocks;
  const types = r.jsonLd.types;
  types.forEach(t => {
    schemaStats.byType[t] = (schemaStats.byType[t] || 0) + 1;
  });
  if (r.route !== '/' && !types.includes('BreadcrumbList')) {
    schemaIssues.push({ route: r.route, issue: 'Missing BreadcrumbList' });
  }
  if (r.route.startsWith('/products/') && r.route !== '/products/' && !types.includes('Product')) {
    schemaIssues.push({ route: r.route, issue: 'Product page missing Product schema' });
  }
}
console.log(`Schema Types across site:`, schemaStats.byType);
console.log(`Schema Issues:`, schemaIssues);

// 7. Image SEO
let totalImgs = 0;
let missingAlt = 0;
for (const r of routes) {
  totalImgs += r.images.count;
  missingAlt += r.images.missingAlt.length;
  if (r.images.missingAlt.length > 0) {
    console.log(`Missing ALT on ${r.route}:`, r.images.missingAlt);
  }
}
console.log(`Image Check: ${totalImgs} images found, ${missingAlt} missing alt text`);

// 8. Inbound Link Graph (Orphan Check)
const orphanRoutes = [];
for (const [r, g] of Object.entries(linkGraph)) {
  if (r !== '/' && g.inbound.length === 0) {
    orphanRoutes.push(r);
  }
}
console.log(`Orphan Routes (0 inbounds):`, orphanRoutes);
console.log('Inbound link distribution:');
for (const [r, g] of Object.entries(linkGraph)) {
  console.log(`  ${r}: ${g.inbound.length} inbounds, ${g.outbound.length} outbounds`);
}

// 9. Banned Buzzwords
const buzzwordMatches = [];
for (const r of routes) {
  if (r.words.buzzwordsFound.length > 0) {
    buzzwordMatches.push({ route: r.route, words: r.words.buzzwordsFound });
  }
}
console.log(`Buzzword Violations: ${buzzwordMatches.length} routes`);
if (buzzwordMatches.length) console.log(buzzwordMatches);
