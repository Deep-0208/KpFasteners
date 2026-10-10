import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:3000';
const OUT_DIR = path.resolve('audit-reports/2026-10-08');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const ALL_ROUTES = [
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

const BANNED_PATTERNS = [
  { phrase: "fast-paced industrial world", regex: /fast-paced industrial world/i },
  { phrase: "digital transformation", regex: /digital transformation/i },
  { phrase: "leading manufacturer", regex: /leading\s+(?:fastener\s+)?manufacturer/i },
  { phrase: "premier manufacturer", regex: /premier\s+(?:fastener\s+)?manufacturer/i },
  { phrase: "#1", regex: /#1/i },
  { phrase: "state-of-the-art", regex: /state-of-the-art/i },
  { phrase: "cutting-edge", regex: /cutting-edge/i },
  { phrase: "world-class", regex: /world-class/i },
  { phrase: "best-in-class", regex: /best-in-class/i },
  { phrase: "unparalleled", regex: /unparalleled/i },
  { phrase: "commitment to excellence", regex: /commitment to excellence/i },
  { phrase: "one-stop solution", regex: /one-stop\s+solution/i },
  { phrase: "turnkey solution", regex: /turnkey\s+solution/i },
  { phrase: "end-to-end solution", regex: /end-to-end\s+solution/i },
  { phrase: "revolutionising / transforming the industry", regex: /revolutionis(?:ing|e)|transforming the industry/i },
  { phrase: "passionate team", regex: /passionate team/i },
  { phrase: "dedicated professionals", regex: /dedicated professionals/i },
  { phrase: "synergy", regex: /\bsynergy\b/i },
  { phrase: "robust portfolio", regex: /robust portfolio/i },
  { phrase: "highest industry standards", regex: /highest industry standards/i }
];

async function runAudit() {
  console.log('[Full Audit 2026-10-08] Starting crawl of all 22 routes on ' + BASE);
  const results = [];
  const linkGraph = {};

  for (const r of ALL_ROUTES) {
    linkGraph[r] = { outbound: [], inbound: [] };
  }

  for (const route of ALL_ROUTES) {
    const url = `${BASE}${route}`;
    try {
      const res = await fetch(url);
      const status = res.status;
      const html = await res.text();
      const headers = Object.fromEntries(res.headers.entries());

      // Titles & Metas
      const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
      const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '';
      const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1] ?? '';
      const robots = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] ?? 'index, follow (default)';

      // OG / Twitter
      const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i)?.[1] ?? '';
      const ogDesc = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/i)?.[1] ?? '';
      const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i)?.[1] ?? '';
      const twitterCard = html.match(/<meta\s+name="twitter:card"\s+content="([^"]*)"/i)?.[1] ?? '';

      // Headings
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      const h3Matches = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

      // Structured Data
      const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
        .map(m => {
          try {
            return JSON.parse(m[1]);
          } catch (e) {
            return { parseError: e.message, raw: m[1] };
          }
        });

      // Images
      const imgTags = [...html.matchAll(/<img\s+([^>]+)>/gi)].map(m => {
        const raw = m[1];
        const src = raw.match(/src="([^"]*)"/i)?.[1] ?? '';
        const alt = raw.match(/alt="([^"]*)"/i)?.[1] ?? null;
        const width = raw.match(/width="([^"]*)"/i)?.[1] ?? null;
        const height = raw.match(/height="([^"]*)"/i)?.[1] ?? null;
        return { src, alt, width, height };
      });

      // Outbound links
      const rawLinks = [...html.matchAll(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
        href: m[1],
        anchor: m[2].replace(/<[^>]+>/g, '').trim()
      }));

      // Internal links tracking
      for (const l of rawLinks) {
        let h = l.href;
        if (h.startsWith('http://localhost:3000')) {
          h = h.replace('http://localhost:3000', '');
        } else if (h.startsWith('https://kpfasteners.com')) {
          h = h.replace('https://kpfasteners.com', '');
        }
        if (h.startsWith('/')) {
          const clean = h.split('?')[0].split('#')[0];
          linkGraph[route]?.outbound.push({ to: clean, anchor: l.anchor });
          if (linkGraph[clean]) {
            linkGraph[clean].inbound.push({ from: route, anchor: l.anchor });
          }
        }
      }

      // Plaintext word count & buzzword audit
      const textOnly = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const wordCount = textOnly.split(/\s+/).filter(Boolean).length;

      const buzzwordsFound = [];
      for (const bp of BANNED_PATTERNS) {
        if (bp.regex.test(textOnly)) {
          buzzwordsFound.push(bp.phrase);
        }
      }

      results.push({
        route,
        status,
        headers: {
          contentType: headers['content-type'],
          xRobotsTag: headers['x-robots-tag'] ?? null
        },
        title: { text: title, length: title.length },
        description: { text: description, length: description.length },
        canonical,
        robots,
        og: { title: ogTitle, desc: ogDesc, image: ogImage, twitterCard },
        headings: {
          h1Count: h1Matches.length,
          h1: h1Matches,
          h2Count: h2Matches.length,
          h3Count: h3Matches.length
        },
        jsonLd: {
          count: jsonLdBlocks.length,
          types: jsonLdBlocks.flatMap(b => Array.isArray(b) ? b.map(x => x['@type']) : [b['@type']]),
          blocks: jsonLdBlocks
        },
        images: {
          count: imgTags.length,
          missingAlt: imgTags.filter(i => i.alt === null || i.alt === ''),
          all: imgTags
        },
        words: { wordCount, buzzwordsFound },
        linksCount: rawLinks.length
      });
      console.log(`[Full Audit 2026-10-08] Processed ${route} (${status}) - Words: ${wordCount}, H1s: ${h1Matches.length}`);
    } catch (err) {
      console.error(`[Full Audit 2026-10-08] Error on ${route}:`, err.message);
      results.push({ route, error: err.message });
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, 'raw-route-audit.json'), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'link-graph.json'), JSON.stringify(linkGraph, null, 2));
  console.log('[Full Audit 2026-10-08] Saved raw-route-audit.json and link-graph.json.');
}

runAudit();
