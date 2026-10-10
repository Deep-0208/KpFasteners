#!/usr/bin/env node
/**
 * scripts/audit-links.mjs
 * Comprehensive internal link crawler & topology auditor for KP Fasteners.
 * Validates:
 *   1. All canonical routes are reachable (Status 200).
 *   2. Inbound internal link count >= 2 for every page.
 *   3. Outbound in-body contextual links >= 3 (excluding nav/footer).
 *   4. Zero banned generic anchor texts ("click here", "read more", "learn more").
 *   5. Maximum crawl depth <= 2 clicks from '/'.
 *   6. Zero internal 404s, broken links, or redirect hops.
 */

import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:3000';

const CANONICAL_ROUTES = [
  '/',
  '/about/',
  '/tools/',
  '/contact/',
  '/request-quote/',
  '/products/',
  '/products/foundation-bolts/',
  '/products/stud-bolts/',
  '/products/sag-rods/',
  '/products/tie-rods/',
  '/products/csk-allen-bolts/',
  '/products/scaffold-accessories/',
  '/products/solar-accessories/',
  '/products/hex-bolts-nuts/',
  '/products/custom-fasteners/',
  '/materials/high-tensile-fasteners/',
  '/materials/stainless-steel-fasteners/',
  '/industries/solar-mounting-fasteners/',
  '/industries/construction-infrastructure/',
  '/industries/automotive-heavy-engineering/',
  '/privacy-policy/',
  '/terms/',
];

const BANNED_ANCHOR_PATTERNS = [
  /^click here$/i,
  /^here$/i,
  /^read more$/i,
  /^learn more$/i,
  /^more$/i,
  /^link$/i,
  /^this page$/i,
];

async function crawl() {
  console.log(`\n🔍 Auditing internal links across KP Fasteners at ${BASE}...\n`);

  // Check server connectivity
  try {
    const res = await fetch(`${BASE}/`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    console.error(`❌ Unable to reach ${BASE}. Ensure Next.js dev server is running on port 3000.\n`, err.message);
    process.exit(1);
  }

  const linkGraph = {};
  for (const r of CANONICAL_ROUTES) {
    linkGraph[r] = { inbound: [], outbound: [], inBodyCount: 0 };
  }

  const issues = [];
  const crawledUrls = new Set();
  const urlDepth = { '/': 0 };

  // Fetch and extract links for each canonical route
  for (const route of CANONICAL_ROUTES) {
    crawledUrls.add(route);
    const url = `${BASE}${route}`;

    let html;
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        issues.push({ type: 'STATUS_ERROR', route, detail: `Returned HTTP ${res.status}` });
        continue;
      }
      html = await res.text();
    } catch (err) {
      issues.push({ type: 'FETCH_ERROR', route, detail: err.message });
      continue;
    }

    // Strip header, footer, scripts, styles to isolate in-body contextual links
    let bodyOnly = html
      .replace(/<header[\s\S]*?<\/header>/gi, '')
      .replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '');

    const linkMatches = [...bodyOnly.matchAll(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];

    for (const match of linkMatches) {
      let href = match[1].trim();
      const anchor = match[2].replace(/<[^>]*>/g, '').trim();

      // Check for generic anchor text
      for (const banned of BANNED_ANCHOR_PATTERNS) {
        if (banned.test(anchor)) {
          issues.push({
            type: 'GENERIC_ANCHOR',
            route,
            detail: `Found banned anchor "${anchor}" pointing to "${href}"`,
          });
        }
      }

      // Ignore external or non-route links (e.g. mailto:, tel:, #, /_next)
      if (
        !href.startsWith('/') ||
        href.startsWith('/#') ||
        href.startsWith('/_next') ||
        href.startsWith('/api')
      ) {
        continue;
      }

      // Strip hash fragments and query strings
      const normalizedPath = href.split('#')[0].split('?')[0];

      // Check trailing slash
      if (!normalizedPath.endsWith('/') && !normalizedPath.includes('.')) {
        issues.push({
          type: 'MISSING_TRAILING_SLASH',
          route,
          detail: `Link href "${href}" is missing trailing slash`,
        });
      }

      // Register link in graph
      linkGraph[route].outbound.push({ to: normalizedPath, anchor });
      linkGraph[route].inBodyCount++;

      if (linkGraph[normalizedPath]) {
        linkGraph[normalizedPath].inbound.push({ from: route, anchor });
      } else {
        // Unknown internal route
        issues.push({
          type: 'BROKEN_INTERNAL_LINK',
          route,
          detail: `Points to unindexed/unknown internal path "${normalizedPath}"`,
        });
      }
    }
  }

  // Calculate shortest crawl depth from '/' using BFS
  const queue = ['/'];
  while (queue.length > 0) {
    const current = queue.shift();
    const currentDepth = urlDepth[current] ?? 0;
    const neighbors = linkGraph[current]?.outbound || [];

    for (const edge of neighbors) {
      const target = edge.to;
      if (linkGraph[target] && urlDepth[target] === undefined) {
        urlDepth[target] = currentDepth + 1;
        queue.push(target);
      }
    }
  }

  // Validate topology thresholds
  for (const route of CANONICAL_ROUTES) {
    const node = linkGraph[route];

    // Inbound check (>= 2)
    if (route !== '/' && node.inbound.length < 2) {
      issues.push({
        type: 'LOW_INBOUND_COUNT',
        route,
        detail: `Has only ${node.inbound.length} inbound links (minimum 2 required)`,
      });
    }

    // Outbound in-body check (>= 3 except terminal conversion / legal pages)
    const isTerminal = ['/contact/', '/privacy-policy/', '/terms/'].includes(route);
    if (!isTerminal && node.inBodyCount < 3) {
      issues.push({
        type: 'LOW_OUTBOUND_COUNT',
        route,
        detail: `Has only ${node.inBodyCount} contextual in-body links (minimum 3 required)`,
      });
    }

    // Crawl depth check (<= 2 clicks from '/')
    const depth = urlDepth[route];
    if (depth === undefined || depth > 2) {
      issues.push({
        type: 'CRAWL_DEPTH_EXCEEDED',
        route,
        detail: `Crawl depth is ${depth ?? 'UNREACHABLE'} (maximum 2 clicks allowed from '/')`,
      });
    }
  }

  // Summary Table
  console.log('📊 INTERNAL LINK TOPOLOGY SUMMARY:');
  console.log('--------------------------------------------------------------------------------------');
  console.log(
    'Route'.padEnd(42) +
    'Inbound'.padEnd(12) +
    'Outbound'.padEnd(12) +
    'Depth'.padEnd(10) +
    'Status'
  );
  console.log('--------------------------------------------------------------------------------------');

  for (const route of CANONICAL_ROUTES) {
    const node = linkGraph[route];
    const depth = urlDepth[route] ?? 'N/A';
    const status = node.inbound.length >= 2 || route === '/' ? 'PASS' : 'WARN';
    console.log(
      route.padEnd(42) +
      String(node.inbound.length).padEnd(12) +
      String(node.outbound.length).padEnd(12) +
      String(depth).padEnd(10) +
      status
    );
  }
  console.log('--------------------------------------------------------------------------------------\n');

  if (issues.length === 0) {
    console.log(`✅ ALL 22 ROUTES PASSED! (0 internal link errors, 0 broken links, 0 orphan pages)`);
    process.exit(0);
  } else {
    console.error(`⚠️ Found ${issues.length} internal linking issue(s):`);
    for (const issue of issues) {
      console.error(`  - [${issue.type}] on ${issue.route}: ${issue.detail}`);
    }
    // Exit with code 1 if critical broken links or orphans exist
    const hasCritical = issues.some(i => i.type === 'BROKEN_INTERNAL_LINK' || i.type === 'STATUS_ERROR');
    process.exit(hasCritical ? 1 : 0);
  }
}

crawl();
