import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:3000';
const OUT_DIR = path.resolve('audit-reports/2026-10-04');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// All 22 indexable/built routes + 1 redirect
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

async function run() {
  console.log('--- STARTING KP FASTENERS PRE-LAUNCH COMPREHENSIVE AUDIT ---');

  const routeResults = [];
  const linkGraph = {};

  for (const r of ALL_ROUTES) {
    linkGraph[r] = {
      outbound: [],
      inbound: []
    };
  }

  // 1. Audit each route
  for (const route of ALL_ROUTES) {
    const url = `${BASE}${route}`;
    try {
      const res = await fetch(url);
      const status = res.status;
      const html = await res.text();

      // Headers check
      const headers = Object.fromEntries(res.headers.entries());

      // Title & Meta
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : '';
      const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
      const description = descMatch ? descMatch[1] : '';
      const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
      const canonical = canonMatch ? canonMatch[1] : '';
      const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);
      const robotsDirective = robotsMatch ? robotsMatch[1] : 'index, follow (default)';

      // OG / Twitter
      const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/i)?.[1] ?? '';
      const ogDesc = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/i)?.[1] ?? '';
      const ogImage = html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i)?.[1] ?? '';
      const twitterCard = html.match(/<meta\s+name="twitter:card"\s+content="([^"]*)"/i)?.[1] ?? '';

      // Headings
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
      const headingOrder = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
        tag: m[1].toLowerCase(),
        level: parseInt(m[1].slice(1), 10),
        text: m[2].replace(/<[^>]*>/g, '').trim()
      }));

      // Check heading skips
      const headingSkips = [];
      for (let i = 0; i < headingOrder.length - 1; i++) {
        const curr = headingOrder[i].level;
        const next = headingOrder[i + 1].level;
        if (next > curr + 1) {
          headingSkips.push(`${headingOrder[i].tag} ("${headingOrder[i].text.slice(0, 30)}") -> ${headingOrder[i+1].tag} ("${headingOrder[i+1].text.slice(0, 30)}")`);
        }
      }

      // JSON-LD
      const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
        .map(m => {
          try {
            return JSON.parse(m[1]);
          } catch (e) {
            return { error: 'invalid json', raw: m[1] };
          }
        });

      const flatLd = ldBlocks.flat();
      const schemaTypes = flatLd.map(b => b['@type']).filter(Boolean);
      const hasAggregateRating = flatLd.some(b => b['@type'] === 'AggregateRating' || (b.aggregateRating));
      const hasOffer = flatLd.some(b => b['@type'] === 'Offer' || b.offers);
      const hasOrg = flatLd.some(b => b['@type'] === 'Organization');
      const hasLocalBusiness = flatLd.some(b => b['@type'] === 'LocalBusiness');
      const hasBreadcrumbs = flatLd.some(b => b['@type'] === 'BreadcrumbList');
      const hasProduct = flatLd.some(b => b['@type'] === 'Product');
      const hasFAQ = flatLd.some(b => b['@type'] === 'FAQPage');

      // Product schema details
      const productNode = flatLd.find(b => b['@type'] === 'Product');
      const productManufacturer = productNode?.manufacturer;
      const productSeller = productNode?.seller;

      // Extract in-body content (strip header, nav, footer, scripts, styles)
      let bodyContent = html;
      // remove <header>...</header>
      bodyContent = bodyContent.replace(/<header[\s\S]*?<\/header>/gi, '');
      // remove <footer>...</footer>
      bodyContent = bodyContent.replace(/<footer[\s\S]*?<\/footer>/gi, '');
      // remove <script> and <style>
      bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
      bodyContent = bodyContent.replace(/<style[\s\S]*?<\/style>/gi, '');

      // In-body links
      const linkMatches = [...bodyContent.matchAll(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
      const inBodyLinks = [];
      for (const lm of linkMatches) {
        const href = lm[1].trim();
        const anchor = lm[2].replace(/<[^>]*>/g, '').trim();
        if (href.startsWith('/') && !href.startsWith('/#') && !href.startsWith('/_next') && !href.startsWith('/api')) {
          inBodyLinks.push({ href, anchor });
        }
      }

      // Check banned phrases in rendered plain text of the body
      const plainText = bodyContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
      const matchedBannedPhrases = [];
      for (const bp of BANNED_PATTERNS) {
        if (bp.regex.test(plainText)) {
          matchedBannedPhrases.push(bp.phrase);
        }
      }

      // Images
      const imgMatches = [...html.matchAll(/<img\s+([^>]*)\/?>/gi)];
      const images = imgMatches.map(m => {
        const attrs = m[1];
        const src = attrs.match(/src="([^"]*)"/i)?.[1] ?? '';
        const alt = attrs.match(/alt="([^"]*)"/i)?.[1];
        return { src, alt, hasAlt: typeof alt === 'string' };
      });

      // MobileConversionBar check
      const hasMobileBar = html.includes('data-mobile-bar') || html.includes('MobileConversionBar') || html.includes('Sticky RFQ') || html.includes('Call Sales') || html.includes('WhatsApp');

      // FAQ count
      const faqMatches = [...html.matchAll(/<dt[^>]*>[\s\S]*?<\/dt>\s*<dd/gi)];
      const faqCount = faqMatches.length;

      const record = {
        route,
        status,
        title,
        titleLength: title.length,
        description,
        descriptionLength: description.length,
        canonical,
        canonicalOk: canonical === `https://kpfasteners.com${route}`,
        ogTitle,
        ogDesc,
        ogImage,
        twitterCard,
        robotsDirective,
        h1Count: h1Matches.length,
        h1Texts: h1Matches,
        headingCount: headingOrder.length,
        headingSkips,
        schemaTypes,
        hasAggregateRating,
        hasOffer,
        hasOrg,
        hasLocalBusiness,
        hasBreadcrumbs,
        hasProduct,
        hasFAQ,
        productManufacturer,
        productSeller,
        inBodyLinks,
        matchedBannedPhrases,
        imagesCount: images.length,
        imagesMissingAlt: images.filter(img => !img.hasAlt).length,
        hasMobileBar,
        faqCount
      };

      routeResults.push(record);

      // Register into link graph
      for (const l of inBodyLinks) {
        const targetClean = l.href.split('?')[0].split('#')[0];
        linkGraph[route].outbound.push({ target: targetClean, anchor: l.anchor });
        if (linkGraph[targetClean]) {
          linkGraph[targetClean].inbound.push({ source: route, anchor: l.anchor });
        }
      }

    } catch (err) {
      console.error(`Error auditing ${route}:`, err);
      routeResults.push({ route, error: String(err) });
    }
  }

  // 2. Redirect test for /quality/
  try {
    const res = await fetch(`${BASE}/quality/`, { redirect: 'manual' });
    console.log(`Redirect /quality/ status: ${res.status}, Location: ${res.headers.get('location')}`);
  } catch (e) {
    console.error('Error checking /quality/ redirect:', e);
  }

  // 3. Write metadata-matrix.csv
  const csvHeaders = ['path', 'title', 'title_length', 'meta_desc', 'desc_length', 'canonical', 'canonical_ok', 'h1_count', 'schema_types', 'og_image', 'robots', 'faq_count', 'banned_phrases'];
  const csvRows = [csvHeaders.join(',')];
  for (const r of routeResults) {
    csvRows.push([
      `"${r.route}"`,
      `"${(r.title || '').replace(/"/g, '""')}"`,
      r.titleLength ?? 0,
      `"${(r.description || '').replace(/"/g, '""')}"`,
      r.descriptionLength ?? 0,
      `"${r.canonical || ''}"`,
      r.canonicalOk ? 'PASS' : 'FAIL',
      r.h1Count ?? 0,
      `"${(r.schemaTypes || []).join(';')}"`,
      `"${r.ogImage || ''}"`,
      `"${r.robotsDirective || ''}"`,
      r.faqCount ?? 0,
      `"${(r.matchedBannedPhrases || []).join(';')}"`
    ].join(','));
  }
  fs.writeFileSync(path.join(OUT_DIR, 'metadata-matrix.csv'), csvRows.join('\n'));
  console.log('Saved metadata-matrix.csv');

  // 4. Write link-graph.json
  const graphSummary = {};
  for (const [r, g] of Object.entries(linkGraph)) {
    // Unique inbound sources
    const uniqueInboundSources = [...new Set(g.inbound.map(i => i.source))];
    const uniqueOutboundTargets = [...new Set(g.outbound.map(o => o.target))];
    graphSummary[r] = {
      inboundCount: g.inbound.length,
      uniqueInboundSourcesCount: uniqueInboundSources.length,
      outboundCount: g.outbound.length,
      uniqueOutboundTargetsCount: uniqueOutboundTargets.length,
      inbound: g.inbound,
      outbound: g.outbound
    };
  }
  fs.writeFileSync(path.join(OUT_DIR, 'link-graph.json'), JSON.stringify(graphSummary, null, 2));
  console.log('Saved link-graph.json');

  // 5. Raw audit results json for easy consumption
  fs.writeFileSync(path.join(OUT_DIR, 'raw-route-audit.json'), JSON.stringify(routeResults, null, 2));
  console.log('Saved raw-route-audit.json');

  return { routeResults, graphSummary };
}

run();
