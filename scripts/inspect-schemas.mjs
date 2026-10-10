import fs from 'node:fs';

const routes = JSON.parse(fs.readFileSync('audit-reports/2026-10-08/raw-route-audit.json', 'utf8'));

console.log('=== ROOT SCHEMAS (/) ===');
const home = routes.find(r => r.route === '/');
for (const b of home.jsonLd.blocks) {
  console.log(`Type: ${b['@type']}`);
  if (b['@type'] === 'Organization') {
    console.log('  Organization Name:', b.name);
    console.log('  Logo:', b.logo);
    console.log('  Url:', b.url);
  }
  if (b['@type'] === 'LocalBusiness') {
    console.log('  LocalBusiness Name:', b.name);
    console.log('  Address:', b.address);
    console.log('  Geo Coordinates:', b.geo);
    console.log('  Telephone:', b.telephone);
    console.log('  aggregateRating:', b.aggregateRating);
  }
}

console.log('\n=== PRODUCT SCHEMAS (sample: /products/foundation-bolts/) ===');
const prod = routes.find(r => r.route === '/products/foundation-bolts/');
for (const b of prod.jsonLd.blocks) {
  if (b['@type'] === 'Product') {
    console.log('  Product Name:', b.name);
    console.log('  Description length:', b.description?.length);
    console.log('  Image:', b.image);
    console.log('  Brand:', b.brand);
    console.log('  Offers:', b.offers);
    console.log('  aggregateRating:', b.aggregateRating);
  }
}

console.log('\n=== BREADCRUMB SCHEMAS ===');
let breadcrumbsFound = 0;
let breadcrumbsWithIssues = 0;
for (const r of routes) {
  const bc = r.jsonLd.blocks.find(b => b['@type'] === 'BreadcrumbList');
  if (bc) {
    breadcrumbsFound++;
    const items = bc.itemListElement || [];
    if (!items.length || items.some(i => !i.item || !i.name || !i.position)) {
      breadcrumbsWithIssues++;
      console.log(`Breadcrumb issue on ${r.route}`);
    }
  }
}
console.log(`BreadcrumbLists checked: ${breadcrumbsFound}, issues: ${breadcrumbsWithIssues}`);

console.log('\n=== FABRICATION AUDIT IN SCHEMAS ===');
for (const r of routes) {
  for (const b of r.jsonLd.blocks) {
    if (b.aggregateRating) {
      console.log(`WARNING: aggregateRating found on ${r.route}:`, b.aggregateRating);
    }
    if (b.geo && (b.geo.latitude || b.geo.longitude)) {
      console.log(`Geo found on ${r.route}:`, b.geo);
    }
  }
}
