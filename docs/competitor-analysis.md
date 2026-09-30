# Competitor & Market Analysis

**Direct SEO competitor:** https://www.srgfasteners.com/ (Ahmedabad; broadly similar make+trade profile)
**Design/UX reference (not SEO competitor):** https://www.varmoraforge.com/ (Gujarat-based industrial forging brand)
**Method note:** Live audit executed 2026-09-29 — see [`../srgfasteners.com-audit/FULL-AUDIT-REPORT.md`](../srgfasteners.com-audit/FULL-AUDIT-REPORT.md) for the full teardown, per-category evidence, and machine-readable data. SRG health score assigned: **46 / 100**. Rows below previously flagged **NEEDS VERIFICATION** have been replaced with observed values; sub-audit files under `srgfasteners.com-audit/findings/*.md` hold the evidence for each row.

For the deeper teardown, see [`seo/competitor-analysis.md`](seo/competitor-analysis.md).

---

## 1. Why SRG is the right primary competitor

- Same city (Ahmedabad) → same local search cluster.
- Same category (industrial fasteners) → same intent keywords.
- Similar business model (make + trade + India-wide dispatch, per memory).
- Any KP visibility gain in Ahmedabad + Gujarat fastener SERPs comes at least partly at SRG's expense.

Secondary competitors to keep on the watchlist (typical Indian fastener SERP occupants — **NEEDS VERIFICATION** in the live audit): Caparo Fastenres, Sundram Fasteners, Precision Fasteners, LPS Industries, Patton International, Unbrako, TVS Fasteners, plus IndiaMART and TradeIndia category pages.

---

## 2. SRG audit framework (to be filled during live audit)

### 2.1 Architecture & URL structure

| Check | Expected pattern | Observed | Notes |
|---|---|---|---|
| URL depth | ≤ 2 levels | Mostly 2, some 3 (e.g. `/products/stainless-steel-fasteners/hex-bolt-hex-screw` = 3) | 3-level product URLs — KP will stay at 2 via `/products/hex-bolts-nuts/`. See `findings/technical.md`. |
| Trailing-slash consistency | Either / or non-/, consistently | Non-slash canonical, trailing-slash → 308 redirect to non-slash. Consistent. | KP will use trailing-slash per AGENTS.md §12; both patterns work when consistent. |
| HTTPS + HSTS | Enforced | Yes, `max-age=63072000` (2y); no `includeSubDomains`, no `preload` | KP will enable both. |
| WWW / non-WWW canonicalisation | One canonical variant | `www` canonical. **2-hop redirect** apex→www (308→307) | Collapse to a single 301 on KP. |
| Sitemap present at `/sitemap.xml` | Yes, only 200-OK canonical URLs | Yes — 375 URLs, all 200 in sampled probes. But **all URLs share identical `lastmod`** (generator artifact) | KP `app/sitemap.ts` emits real per-page lastModified. |
| Robots.txt present | Allows crawl, points to sitemap | Yes; `Disallow: /*?*` blanket-blocks any query string | KP robots.txt keeps query strings crawlable. |

### 2.2 Indexability & metadata

| Check | Observed | KP opportunity |
|---|---|---|
| Unique title per page | Titles are unique but **suffix-duplication bug**: 5 of 11 sampled pages contain `\| SRG Fasteners \| SRG Fasteners` or `\| SRG \| SRG Fasteners`. Blog title 108 chars. `/faq` title reads generic. See `findings/on-page.md`. | KP `generateMetadata` helper: brand suffix exactly once, warn > 60 chars. |
| Meta descriptions length + uniqueness | 111–165 chars each. **`/faq` meta desc duplicates the homepage's verbatim**. | KP: unique meta per route; pre-commit dupe-check. |
| One H1 per page | Yes on 10 of 11 sampled. **`/tools/torque-calculator` has 0 H1.** Homepage H1 uses CSS-styled spans that concatenate to `STAINLESS STEELFASTENERSMANUFACTURER` when extracted. | KP: 1 real, space-separated H1 per page. |
| Canonical tag self-reference | All sampled self-reference — **except `/faq`, whose canonical points to the homepage** (de-index risk). | KP: canonical generated at build from route path. |
| Open Graph + Twitter cards | Present. **Single generic `/images/og-default.png` for every page.** `summary_large_image` Twitter card. | KP: per-page dynamic OG images. |
| Structured data | Broad but buggy: Organization, Product, BreadcrumbList, FAQPage, LocalBusiness, Article deployed. **`Organization.logo = favicon.ico`.** **`Product.aggregateRating: 4.9/128` fabricated & identical across every SKU with no on-page reviews.** BreadcrumbList self-references on locations and material pages. See `findings/schema.md`. | KP: valid Organization logo (512×512 PNG). Never fake AggregateRating. ItemList on category pages, HowTo on tools, Service on solutions. |

### 2.3 Product / category architecture

| Check | Observed | KP action |
|---|---|---|
| Category-hub → sub-category → product path | 3-level: `/products/{category}/{product}` — 4 top-level categories, 274 leaf products in sitemap | KP: 2-level `/products/{slug}/` with spec matrix. |
| Number of thin variant pages (`/m10-hex-bolt/`, `/m12-hex-bolt/`) | None per-size, but **274 product pages share an identical 8-paragraph body** (verified across hex-bolt / hex-nut / wedge-anchor / threaded-rod-stud). Also 22 `/solutions/fasteners-manufacturer-<city>` doorway-style pages. | KP: single canonical per category with real spec content, no doorway city pages. |
| Product-page technical depth (spec tables, grade tables, standard cross-refs) | **Zero spec tables**, zero DIN/ISO/ASTM cross-ref, no torque table, no dimension diagrams. 626–635 words per product page, ~90% template. | Every KP product page: real dimension × grade × torque × standard table. See `findings/content.md`. |

### 2.4 Trust & conversion signals

| Signal | Observed | KP plan |
|---|---|---|
| Above-the-fold CTA | "REQUEST QUOTE" button in header + hero. No visible phone in header. | KP: RFQ + tel: + WhatsApp visible in hero and sticky mobile bar. |
| Sticky mobile conversion bar | Not present | Ship one. |
| Verified certifications published | Text-only "ISO 9001:2015 CERTIFIED" claim; no cert body, no cert number, no PDF | Only publish what the client can produce as a certificate copy. |
| MTC / EN 10204 3.1 mentioned | Not observed on any sampled page | KP `/quality/` page front-loads MTC availability. |
| Real factory photography | None found. Product imagery = catalog-style white-background JPGs (likely stock/supplier photography). | KP: real plant / QC / packing photos with descriptive filenames. |
| Contact channel quality | `srgfastenersfittings@gmail.com` (gmail, not branded domain). Phone `+91 78628 33067` in Organization JSON-LD only — **not visible on /contact page**. No Google Map embed. No GBP link. | Branded email @kpfasteners.com; phone in header + hero + footer; embedded map on `/contact/`. |

### 2.5 On-page performance & UX

| Signal | Observed | KP plan |
|---|---|---|
| Mobile LCP | **Not measured** — PSI rate-limit exceeded, no `GOOGLE_API_KEY` in environment. Static hints: hero image via `/_next/image` with `w=3840`, Mumbai edge → likely strong TTFB, LCP element is hero image. | KP target < 2.0s; measure via Vercel Speed Insights from day 1. |
| CLS | Not measured. Next.js Image usually sets width/height → CLS likely < 0.1 for image shifts. | KP target < 0.1. |
| Font stack (self-hosted vs CDN) | Next.js self-hosted; **7 woff2 fonts preloaded** — excessive | KP: 1 primary font (Inter), 2–3 weights, via `next/font`. |
| Third-party JS weight | **No third-party scripts observed in initial HTML** — no GTM, no GA4, no FB pixel. Either intentional (privacy) or missing analytics. | KP ships GA4 + Vercel Analytics only, deferred. |

### 2.6 Content coverage gaps to exploit

Recurring gaps in Indian fastener competitor sites (structural expectation; verify per-competitor):
1. No grade-to-standard cross-reference tables (DIN 933 ↔ ISO 4017, ASTM A193 B7 vs A320 L7, etc.).
2. No SS 304 vs SS 316 vs SS 316L decision guide.
3. No coatings/finishes reference (zinc plating types, HDG, Geomet, phosphating with salt-spray hours).
4. No transparent RFQ page — usually only a generic "Contact Us" form.
5. Weak or absent industry-application content (solar mounting, EV, prefab construction, etc.).
6. No genuine FAQ answering procurement questions (lead time, MOQ, documentation).
7. Poor mobile experience for dimensional tables.
8. No `llms.txt` / AI-search readiness.

Each of these becomes a KP page or a KP page section — the mapping lives in [`sitemap.md`](sitemap.md) and [`content-strategy.md`](content-strategy.md).

---

## 3. Per-opportunity value framing

For every gap KP intends to address, we record:

| Field | Example (SS 304 vs 316 guide) |
|---|---|
| Search intent | Commercial investigation ("ss 304 vs 316 fasteners") + informational ("difference between 304 and 316 stainless bolts") |
| Proposed KP page or section | Section inside `/materials/stainless-steel-fasteners/` |
| Business value | Captures buyers still choosing between grades → converts them into RFQs on the same page. |
| Why more useful than competitor | Side-by-side chemical composition + PREN table + typical application matrix + a "which do you need?" decision tree + a spec-driven RFQ CTA — competitor is likely to have a text paragraph only. |

The full opportunity ledger is maintained in [`seo/action-plan.md`](seo/action-plan.md).

---

## 4. Varmora Forge — design / UX read

Varmora Forge is a design/UX/brand reference, not an SEO competitor. Study, do not clone. Key takeaways to translate (subject to live inspection):

- Confident industrial hero with high-quality real product photography, not stock renders.
- Restrained brand palette with one metallic accent — sets the "premium industrial" tone.
- Structured product presentation with clear category grids.
- Trust markers (standards, quality, capabilities) placed high, not buried in About.
- Clear conversion path with real contact channels.

KP will translate these principles onto a **light, off-white theme** with a logo-derived silver + gold accent palette (see [`design.md`](design.md)). We will not lift Varmora's exact colours, layouts, section wording, imagery, or component patterns.

---

## 5. Anti-patterns we refuse to copy from either competitor

- Auto-playing hero videos or heavy 3D canvases.
- Popup modals demanding an email before showing content.
- Endless carousels of client logos without written permission.
- Location-page farms (`/hex-bolts-in-surat/`, `/hex-bolts-in-rajkot/`) with duplicated copy.
- Keyword-stuffed footers with 50+ links.
- Fake "5-star review" widgets or fabricated `AggregateRating` schema.
- Long-scroll walls of boilerplate corporate prose ("cutting-edge state-of-the-art…").

---

## 6. Deliverable of the live audit

Once `/seo-audit` and `/seo-technical` run against `srgfasteners.com`, this file is updated to replace every *NEEDS VERIFICATION* row with the observed value + the exact opportunity KP will act on. That updated audit feeds:
- [`keyword-research.md`](keyword-research.md) — new SERP-derived keyword candidates.
- [`sitemap.md`](sitemap.md) — any missing page type we should add or drop.
- [`content-strategy.md`](content-strategy.md) — depth benchmarks per template.
- [`seo/action-plan.md`](seo/action-plan.md) — prioritised list.
