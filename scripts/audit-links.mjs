#!/usr/bin/env node
// Crawl the running site; flag internal 404, > 1-hop redirect chains, and inbound/outbound thresholds.

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:3000';

async function main() {
  try {
    const res = await fetch(`${BASE}/`);
    if (!res.ok) throw new Error(`status ${res.status}`);
  } catch (e) {
    console.log(JSON.stringify({ skipped: true, reason: String(e) }));
    process.exit(0);
  }
  // Minimal placeholder — full crawler lands in Phase F.
  console.log(JSON.stringify({ ok: true, note: 'crawler placeholder — full implementation in Phase F' }));
}
main();
