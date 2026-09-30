#!/usr/bin/env node
// Submit the sitemap URLs to Bing IndexNow. Requires INDEXNOW_KEY.

import { routes } from '../data/routes.ts';

const key = process.env.INDEXNOW_KEY;
const host = 'kpfasteners.com';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kpfasteners.com';

if (!key) {
  console.log(JSON.stringify({ skipped: true, reason: 'INDEXNOW_KEY not set' }));
  process.exit(0);
}

const urlList = routes.filter((r) => !r.pendingContent || r.path === '/').map((r) => `${siteUrl}${r.path}`);

try {
  const res = await fetch('https://www.bing.com/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ host, key, keyLocation: `${siteUrl}/${key}.txt`, urlList }),
  });
  console.log(JSON.stringify({ status: res.status, submitted: urlList.length }));
} catch (e) {
  console.log(JSON.stringify({ error: String(e) }));
  process.exit(1);
}
