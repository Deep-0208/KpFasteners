# SRG Fasteners — Deep Teardown (planning template)

**Target:** https://www.srgfasteners.com/
**Status:** live crawl executed 2026-09-29. Findings and evidence live under [`../../srgfasteners.com-audit/`](../../srgfasteners.com-audit/). This file's *TBC (live audit)* rows have been replaced with observed values below; each row links to the underlying `findings/*.md` file for evidence. SRG health score: **46 / 100**.

The higher-level competitive read lives in [`../competitor-analysis.md`](../competitor-analysis.md); this file drills into the SRG-specific facts that will drive KP's ranking + differentiation strategy.

---

## 1. Site fingerprint

| Field | Value | Source |
|---|---|---|
| Domain | srgfasteners.com | assignment |
| HQ | A/9, Karma Estate, Near Nirma Canal, Vatva, Ahmedabad – 382445 | Organization JSON-LD, `/contact` |
| Business model | Manufacturer + stockist ("Make in India", "shipping to 30+ countries") | homepage + `/about` |
| CMS / stack | Next.js (App Router) on Vercel; edge = Mumbai (`bom1`) | `x-vercel-id`, `_next/static/*` chunks |
| HTTPS + HSTS | Yes; `Strict-Transport-Security: max-age=63072000` (2y, no includeSubDomains, no preload) | `homepage-headers.txt` |
| WWW / apex canonical | `www` canonical; apex → **2-hop redirect** (308 → 307) → www | curl -sI |
| Trailing-slash policy | No trailing slash; `/about/` → 308 → `/about`. Consistent. | curl |
| Sitemap URL | `https://www.srgfasteners.com/sitemap.xml` — **375 URLs**, all with identical `lastmod=2026-07-24T18:11:59.176Z` | `srgfasteners.com-audit/sitemap.xml` |
| Robots.txt URL | `https://www.srgfasteners.com/robots.txt`. `Allow: /`; disallows `/private/`, `/search/`, `/*?*` (blanket blocks query strings) | `findings/technical.md` |
| Indexed page count (Google `site:` query) | Not measured (no GSC access); sitemap declares 375 URLs, 60 of 60 sampled returned HTTP 200 | `findings/technical.md` |

## 2. Architecture snapshot (to fill)

- URL depth distribution — 1–3 levels; products live at depth 3 (`/products/{cat}/{leaf}`), everything else at depth 1–2.
- Category / product / material / industry / location split — products 274, solutions 22, blog 16, materials 13, standards 13, applications 10, industries 8, compare 7, locations 4, tools 3, plus home/about/contact/infrastructure/faq (see `srgfasteners.com-audit/sitemap-urls.txt`).
- Per-size or per-standard variant pages? — no per-size pages; instead **274 near-duplicate leaf product pages sharing an identical 8-paragraph body** (see `findings/content.md`).
- Blog / articles / news present? — Yes, `/blog/*` with 16 posts in sitemap (only 4 linked from homepage nav).
- Location pages present? — `/locations/ahmedabad`, `/locations/vatva-gidc`, `/locations/gujarat`, `/locations/india` + 22 `/solutions/fasteners-manufacturer-<city>` doorway-style pages (Pune, Chennai, Bangalore, Indore, Jamshedpur, Nagpur, Mumbai, etc.).

## 3. On-page audit (per template)

For 5 sample pages (homepage + 2 product categories + 1 material + 1 contact), record:
- Title, meta description, canonical, H1 count, schema types present.
- Word count, sub-headings, presence of dimensional tables + grade tables.
- Internal-link count in-body, out-body, and to `/rfq/` or equivalent.
- Image count + total transfer weight, formats used.
- Lighthouse mobile score (performance / accessibility / SEO / best-practices).

Full data in `srgfasteners.com-audit/pages-audit.json`. 12 sample pages summarized:

| Sample URL | Title (len) | Desc len | Canonical | H1 | Schema | Word count | Body internal-links | LH mobile perf | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Fastener Manufacturer & Exporter in India \| SRG Fasteners Ahmedabad (68) | 165 | self | 1 (CSS-broken to "STAINLESS STEELFASTENERSMANUFACTURER" on extract) | Organization | ~ (hero + 6 sections) | 82 | not measured | Bug: extracted H1 has no spaces |
| `/about` | 72 | 162 | self | 1 | Organization | 430 | 35 | not measured | |
| `/contact` | 67 | 154 | self | 1 | Organization | 237 | 35 | not measured | No visible phone; gmail.com email; no map embed |
| `/products` | 85 | 150 | self | 1 (0 H2) | Organization + BreadcrumbList | 330 | 47 | not measured | Thin hub |
| `/products/stainless-steel-fasteners` | 82 | 153 | self | 1 (0 H2) | Organization + BreadcrumbList | 331 | 47 | not measured | Thin category; no ItemList |
| `/products/stainless-steel-fasteners/hex-bolt-hex-screw` | 73 | 148 | self | 1 | Organization + Product + BreadcrumbList | 635 | 55 | not measured | **Fake AggregateRating 4.9/128, no on-page reviews.** Duplicate template |
| `/materials/ss-316` | 81 | 138 | self | 1 | Organization + FAQPage + BreadcrumbList | 388 | 37 | not measured | Breadcrumb bug: "Materials" links `/materials/ss-304` |
| `/locations/ahmedabad` | 77 (double-brand suffix) | 156 | self | 1 | Organization + FAQPage + BreadcrumbList + LocalBusiness | 410 | 37 | not measured | Coarse geo 22.95, 72.63; self-referencing crumb positions |
| `/faq` | 71 (reads generic) | 165 (**dupes homepage desc**) | **root** (bug) | 1 | Organization + FAQPage + BreadcrumbList | 807 | 35 | not measured | Canonical points to `/`, de-index risk |
| `/blog/ss304-vs-ss316-comparison` | 108 (over 60-char SERP cap) | 111 | self | 1 | Organization + Article + BreadcrumbList | 485 | 49 | not measured | Author = Organization only |
| `/tools/torque-calculator` | 76 (double-brand suffix) | 157 | self | **0** | Organization | 334 | 36 | not measured | Missing H1; missing HowTo/SoftwareApplication schema |
| `/solutions/fasteners-manufacturer-pune` | 73 (double-brand suffix) | 139 | self | 1 | Organization + FAQPage + BreadcrumbList | 446 | 38 | not measured | Programmatic doorway-style |
| `/compare/ss304-vs-ss316` | — | — | — | 1 | (none observed in sample) | 324 | not counted | not measured | Good HTML table for AI Overview; but cannibalizes `/blog/ss304-vs-ss316-comparison` and `/materials/ss-316` |

## 4. Content-depth benchmark

Populated during live audit. For each of KP's planned commercial routes, record what SRG covers and where KP will win:

| KP planned page | SRG closest equivalent | SRG depth | KP depth intent | Wedge |
|---|---|---|---|---|
| `/` | `/` + `/locations/ahmedabad` | Hero + 6 sections; ~500 words total on-page prose (excluding cat/product listings) | Hero + 6 cats + materials + industries + quality + contact | Real GBP + reviews; precise LocalBusiness on `/`; per-page OG image |
| `/products/hex-bolts-nuts/` | `/products/stainless-steel-fasteners/hex-bolt-hex-screw` | 635 words, template body reused across 274 products, no spec table, fake AggregateRating | Grade × dimension × torque × standard matrix, DIN 933 ↔ ISO 4017 cross-ref | Real spec matrix + torque table + finishes + MTC line |
| `/products/foundation-bolts/` | none | absent | J/L/hooked variants, IS 5624, HDG + Sherardizing, edge-distance table | Greenfield category — attack directly |
| `/materials/stainless-steel-fasteners/` | `/materials/ss-316` + `/blog/ss304-vs-ss316-comparison` + `/compare/ss304-vs-ss316` (3 URLs cannibalize the SS304-vs-316 intent) | 388 + 485 + 324 words spread across 3 URLs | SS 202/304/304L/316/316L + PREN + apps + FAQ, all consolidated on one canonical | Consolidate what SRG splits; win via depth + no cannibalization |
| `/quality/` | not present as a dedicated page; ISO 9001:2015 mentioned as a badge only, no cert body/number/PDF | absent | MTC/PPAP-first documentation, cert PDFs, test protocols | Front-and-centre MTC + real cert PDF downloads |
| `/request-quote/` | `/contact` (basic 5-field form; no drawing upload; response SLA "within 24 business hours") | Contact-only | Drawing upload + structured fastener-spec fields (thread × grade × qty × finish) | Real RFQ intake with drawing; server-validated per AGENTS.md §19 |

## 5. Trust + conversion audit

- Above-the-fold CTA? — Yes, "REQUEST QUOTE" button in header.
- Direct phone `tel:` in header? — **No.** Phone (`+91 7862833067`) appears only in Organization JSON-LD and one `/locations/ahmedabad` mention as "Direct WhatsApp".
- WhatsApp link present? — Referenced as "Direct WhatsApp" on `/locations/ahmedabad`; not a floating widget.
- Sticky mobile bar? — Not present.
- Certifications with certificate copy? — **No.** ISO 9001:2015 is a badge only; no cert body, no cert number, no PDF.
- Real factory / testing photos? — **None found.** Product imagery is white-background catalog JPGs.
- Client-logo strip with verifiable brands? — None.
- Testimonials with attribution? — None. Instead, a fabricated `AggregateRating 4.9/128` in Product JSON-LD (identical across every SKU, no on-page reviews).

## 6. Technical audit checklist (fill after `/seo-technical` run)

- Mobile CWV (CrUX): LCP / INP / CLS — **not measured** (no `GOOGLE_API_KEY` for CrUX; PSI rate-limit).
- Render-blocking JS: 10 Next.js chunks (framework baseline, no third-party scripts).
- Font strategy: **7 woff2 fonts preloaded** — excessive, likely LCP contributor.
- Image optimisation: Next/Image with `w=3840&q=75`, WebP served via Vercel image optimizer; product source JPGs have spaces & parens in filenames.
- Structured data validation errors: `Organization.logo = favicon.ico` (fails Google logo eligibility); `Product.aggregateRating` without matching on-page reviews (policy risk); BreadcrumbList self-referencing positions on materials and locations pages.
- Broken internal links: none found in 60-URL sample (all 200 OK).
- HTTP → HTTPS 301: yes, but apex → www is a **2-hop redirect** (308 → 307).
- Sitemap only 200-OK canonical URLs: yes for the 60 URLs sampled; all `lastmod` values are identical (generator artifact).

## 7. Backlink profile (fill after `/seo-backlinks` run)

- Referring domains: **not directly measured** (no Moz/Bing/Ahrefs keys). **Common Crawl (cc-main-2026-jan-feb-mar) has no PageRank / harmonic-centrality data** for srgfasteners.com → strong signal of very low external authority. Inferred: single-digit to low double-digit referring domains.
- Anchor distribution: not measured.
- Toxic-link risks: not measured.
- Directory listings: none linked from site — no IndiaMART / JustDial / TradeIndia / ExportersIndia / Alibaba profile URLs found on the site or in `sameAs`. Only Facebook + LinkedIn.

## 8. Local SEO snapshot (fill after `/seo-local`)

- Google Business Profile verified: **not linked anywhere on site**. No `sameAs` reference to a GBP URL.
- NAP consistency across GBP / IndiaMART / TradeIndia / JustDial: not verifiable — site links to none of these directories.
- Reviews count + average: no on-site reviews; the sitewide `Product.aggregateRating: 4.9 / 128` is fabricated (identical across every product).
- LocalBusiness schema on site: **only on `/locations/ahmedabad`**; geo is coarse (`22.95, 72.63`); missing `image`, `priceRange`, `paymentAccepted`, `hasMap`.

## 9. Gap → KP page mapping

Populate after audit; every gap becomes either a differentiator on an existing KP page or, only if the AGENTS.md §7 cannibalisation check passes, a new page.

Full mapping in [`../../srgfasteners.com-audit/ACTION-PLAN.md`](../../srgfasteners.com-audit/ACTION-PLAN.md); executive summary here:

| Gap on SRG | KP page addressing it | Priority |
|---|---|---|
| 274 duplicate-template product pages | All `/products/*/` with unique spec matrices | Critical |
| Fake `AggregateRating` on every product | All `/products/*/` (never fake); real reviews or none | Critical |
| No foundation-bolt / anchor page | `/products/foundation-bolts/` | Critical |
| No solar-mounting page | `/industries/solar-mounting-fasteners/`, `/products/solar-accessories/` | Critical |
| `Organization.logo = favicon.ico` | `/` (Organization JSON-LD) — real 512×512 PNG | Critical |
| `/faq` canonical points to homepage | Build-time canonical generation | Critical |
| No GBP link, gmail.com email, no map, no visible phone on /contact | `/contact/`, `/`, LocalBusiness sitewide | High |
| Cannibalization on "SS 304 vs 316" (3 URLs) | Consolidate on `/materials/stainless-steel-fasteners/` | High |
| Title suffix duplication bug | `generateMetadata` helper enforcement | High |
| Missing security headers | `next.config.ts` day-1 config | High |
| No llms.txt / catalog.md | Ship both, plus per-page `<link rel="alternate" type="text/markdown">` | High |
| Common Crawl PageRank: no data | Directory-citation kit + editorial PR (see `findings/backlinks.md`) | High |
| ISO 9001 claim without cert copy | `/quality/` publishes real cert PDF (client-verified) | High |
| Homepage H1 CSS-tricked to concatenate on extract | Real space-separated H1 text | Medium |
| `/tools/torque-calculator` has 0 H1, no HowTo schema | (KP tools out of v1 scope; note the pattern) | Medium |
| 22 programmatic city solutions pages | AGENTS.md §4.5 — no doorway pages on KP | Medium |
| BreadcrumbList self-references and wrong parent slugs | KP breadcrumb generator unit-tested | Medium |
| 7 preloaded fonts | 1 primary font, 2–3 weights | Medium |
| Uniform sitemap `lastmod` | `app/sitemap.ts` reads real page-level lastModified | Medium |
| Generic OG image sitewide | Per-page dynamic OG | Medium |
| `Disallow: /*?*` blanket-blocks query strings | Keep query strings crawlable | Medium |
| 2-hop apex → www redirect | Single 301 | Medium |
| `sameAs` only Facebook + LinkedIn | Add YouTube, Instagram, IndiaMART, JustDial, TradeIndia | Low |
| No `security.txt` | Ship at `/.well-known/security.txt` | Low |
| No AI-crawler directives in robots.txt | Add explicit GPTBot / Google-Extended / PerplexityBot / CCBot blocks | Low |

## 10. Do-not-copy list

Even after the audit, KP will **never** copy from SRG:
- Copy blocks, tables, FAQ text.
- URL slugs (they're a signal, but coincidence is fine — deliberate mirror is not).
- Client logos, testimonials, case studies.
- Certificate images or numbers.
- Product photography.

## 11. Deliverable

Once the live crawl is done, this file is the KP team's playbook for what to build **better**, and the parent `../competitor-analysis.md` is updated with the executive read.
