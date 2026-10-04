# Comprehensive Pre-Launch Action Plan: KP Fasteners
**Audit Date:** 2026-10-04  
**Scope:** Full Platform Audit (Tracks A–H)  
**Repository:** `C:\Users\DELL\Desktop\SEO\KpFasteners SEO` (`develop`)  

---

## 1. Prioritized Action Matrix (P0 → P3)

Severity Legend:
- **P0 — Blocker:** Must be fixed before any public traffic or search indexation.
- **P1 — High Priority:** Critical SEO, content integrity, or commercial conversion flaw. Must be resolved before general release.
- **P2 — Optimization:** Meaningful technical improvement, contrast tuning, or schema deduplication (< 2 hours each).
- **P3 — Nice to Have:** Code hygiene, file cleanup, and minor documentation polish.

---

### Priority P0 — Release Blockers

| ID | Track | Finding | Affected Route(s) | Fix Recommendation | Est. Effort | Owner |
|---|---|---|---|---|---|---|
| **D-01** | Content / E-E-A-T | Client questionnaire approval required for 9 categories of operational facts | Site-wide (About, Products, Schema) | Send consolidated [`verification-pending.md`](verification-pending.md) questionnaire to Kabir / Pramod Panchal. Obtain confirmation on founding year, Pramod vs. Kabir name roles, machine roster, and ISO proof before lifting caution flags. | 1 day (client dependency) | Client / PM |

---

### Priority P1 — High Priority / Launch Readiness

| ID | Track | Finding | Affected Route(s) | Fix Recommendation | Est. Effort | Owner |
|---|---|---|---|---|---|---|
| **B-01** | Technical SEO | `/contact/` and `/request-quote/` missing from `sitemap.xml` | `data/routes.ts` | Pass `{ pendingContent: false }` to the route declarations for `/contact/` and `/request-quote/` in `data/routes.ts` so the dynamic sitemap includes them. | 10 mins | Dev |
| **H-01** | Internal Linking | 18 in-body links point to redirecting `/quality/` route | 18 routes (all product, material, industry, about pages) | Update all internal link hrefs from `/quality/` directly to `/tools/` (or specific technical section anchors) to eliminate the 308 redirect hop. | 30 mins | Dev |
| **D-02** | Content / Trust | Real shop-floor and factory photographs needed | About page, Hero cards | Replace provisional industrial illustrations with real photography of Ahmedabad manufacturing unit, machinery, and QC lab. | 2 days (client dependency) | Client |

---

### Priority P2 — Optimizations & Refinements

| ID | Track | Finding | Affected Route(s) | Fix Recommendation | Est. Effort | Owner |
|---|---|---|---|---|---|---|
| **F-01** | Accessibility | WhatsApp CTA button text contrast (4.0:1) is below 4.5:1 AA target | Homepage, MobileConversionBar | Darken WhatsApp green background from `#16A34A` to `#15803D` (5.02:1 ratio) to achieve 100% WCAG AA compliance. | 15 mins | Dev |
| **B-02** | Technical SEO | `/tools/` title tag length is 74 characters (exceeds 60 cap) | `/tools/` | Shorten to: `Fastener Weight & Torque Calculator | KP Fasteners` (54 chars). | 5 mins | Content |
| **B-03** | Technical SEO | `/industries/solar-mounting-fasteners/` title tag is 63 chars | `/industries/solar-mounting-fasteners/` | Shorten to: `Solar Mounting Bolts & Hardware Supplier | KP Fasteners` (58 chars). | 5 mins | Content |
| **B-04** | Technical SEO | Meta descriptions on `/contact/` (139 chars) and `/request-quote/` (129 chars) under 150 chars | `/contact/`, `/request-quote/` | Expand copy slightly to highlight specific fastener types, drawings upload, and fast quotation turnaround. | 15 mins | Content |
| **B-05** | Technical SEO | `/tools/` meta description is 200 characters (exceeds 160 cap) | `/tools/` | Trim to 155 chars: `Free fastener engineering calculators: bolt & nut weight estimator, tightening torque guide & foundation bolt embedment sizing. KP Fasteners Ahmedabad.` | 5 mins | Content |
| **C-01** | Structured Data | Duplicate BreadcrumbList JSON-LD blocks on product routes | `/products/*/` | Deduplicate breadcrumb script tag injection so only one BreadcrumbList node is emitted per page. | 20 mins | Dev |
| **C-02** | Structured Data | LocalBusiness geo coordinates pending client GPS pin | `/`, `/contact/` | Add exact `geo: { latitude, longitude }` to `lib/jsonld.ts` once client confirms Google Maps location. | 10 mins | Client / Dev |
| **A-01** | Build / Security | Upstream vulnerability in `sharp <=0.35.4-rc.0` | `package.json` | Upgrade sharp to `^0.33.5` / `^0.35.5` on a separate staging branch and verify image optimization outputs. | 30 mins | Dev |
| **G-01** | Performance | Product thumbnail images stored as `.jpg` in repo | `public/images/products/` | Batch-convert source product images to native `.webp` format and update file paths. | 30 mins | Dev |
| **G-03** | Performance | Verify Lighthouse scores in production build on edge network | Edge / Vercel Preview | Run final mobile Lighthouse validation against production preview to confirm sub-2.0s LCP without development server overhead. | 30 mins | Dev / QA |

---

### Priority P3 — Minor Cleanup & Nice-to-Haves

| ID | Track | Finding | Affected Route(s) | Fix Recommendation | Est. Effort | Owner |
|---|---|---|---|---|---|---|
| **E-01** | Design System | Hardcoded hex colors `bg-[#16A34A]` in MobileConversionBar | `components/layout/MobileConversionBar.tsx:64` | Replace with standardized `.btn-whatsapp` class. | 5 mins | Dev |
| **G-02** | Asset Hygiene | Large uncompressed raw brand assets (`logo.png` 525 KB, `business card.jpeg` 208 KB) | `public/brand/` | Compress PNG fallback to < 80 KB; move business card scan to internal `docs/brand/`. | 10 mins | Dev |
| **F-02** | Accessibility | Keyboard focus ring on calculator range sliders | `/tools/` | Add visible focus ring to custom range thumb styles. | 15 mins | Dev |
| **A-02** | Code Hygiene | ESLint anonymous default export warning | `eslint.config.mjs:5` | Assign config array to named variable before exporting. | 5 mins | Dev |
