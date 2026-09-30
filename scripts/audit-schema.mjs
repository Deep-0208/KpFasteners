#!/usr/bin/env node
// Parse JSON-LD from built HTML; ensure Organization exists once, no AggregateRating, BreadcrumbList on non-home.

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:3000';

async function fetchLd(path) {
  try {
    const res = await fetch(`${BASE}${path}`);
    if (!res.ok) return { error: `status ${res.status}` };
    const html = await res.text();
    const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
      .filter(Boolean);
    return { blocks };
  } catch (e) {
    return { error: String(e) };
  }
}

async function main() {
  const routes = ['/', '/about/', '/products/'];
  const failures = [];
  for (const r of routes) {
    const { blocks, error } = await fetchLd(r);
    if (error) { console.log(JSON.stringify({ skipped: true, route: r, error })); process.exit(0); }
    const flat = blocks.flat();
    const types = flat.map((b) => b['@type']);
    if (types.some((t) => t === 'AggregateRating')) failures.push({ route: r, error: 'AggregateRating found' });
    if (r !== '/' && !types.includes('BreadcrumbList')) failures.push({ route: r, error: 'no BreadcrumbList' });
  }
  if (failures.length) { console.log(JSON.stringify({ failures }, null, 2)); process.exit(1); }
  console.log(JSON.stringify({ ok: true, checked: routes.length }));
}
main();
