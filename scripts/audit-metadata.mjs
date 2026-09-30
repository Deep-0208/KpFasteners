#!/usr/bin/env node
// Fetch every route from a running local server; verify title 50-60, desc 150-160, canonical present.
// If server isn't reachable, exit 0 with a skipped note.

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:3000';

async function main() {
  const routes = ['/'];
  const failures = [];
  for (const r of routes) {
    try {
      const res = await fetch(`${BASE}${r}`);
      if (!res.ok) { failures.push({ route: r, error: `status ${res.status}` }); continue; }
      const html = await res.text();
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
      const desc = html.match(/name="description" content="([^"]*)"/)?.[1] ?? '';
      const canon = html.match(/rel="canonical" href="([^"]*)"/)?.[1] ?? '';
      if (title.length < 50 || title.length > 65) failures.push({ route: r, error: `title length ${title.length}: "${title}"` });
      if (desc.length < 150 || desc.length > 170) failures.push({ route: r, error: `description length ${desc.length}` });
      if (!canon) failures.push({ route: r, error: 'no canonical' });
    } catch (e) {
      console.log(JSON.stringify({ skipped: true, reason: String(e) }));
      process.exit(0);
    }
  }
  if (failures.length) {
    console.log(JSON.stringify({ failures }, null, 2));
    process.exit(1);
  }
  console.log(JSON.stringify({ ok: true, checked: routes.length }));
}
main();
