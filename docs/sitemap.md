# Sitemap v1 — KP Fasteners

**Target scope:** 15–20 canonical routes. Draft below sits at **~19 routes** (18 indexable + 404 + robots/sitemap machinery + legal).

Every entry mirrors [`keyword-map.md`](keyword-map.md). If the two ever disagree, both files must be updated in the same PR.

---

## 1. Route tree

```
/                                          [P0] Homepage
├─ /about/                                 [P1] Company + facility overview
├─ /quality/                               [P1] Quality control, testing, MTC/3.1
├─ /contact/                               [P0] Address, phone, WhatsApp, map
├─ /request-quote/                         [P0] RFQ form (drawing upload)
│
├─ /products/                              [P0] Product hub
│  ├─ /products/hex-bolts/                 [P0]
│  ├─ /products/hex-nuts/                  [P0]
│  ├─ /products/socket-screws/             [P1]
│  ├─ /products/studs-threaded-rods/       [P1]
│  ├─ /products/washers/                   [P1]
│  ├─ /products/anchor-foundation-bolts/   [P2]
│  └─ /products/custom-fasteners/          [P1]
│
├─ /materials/high-tensile-fasteners/      [P1]
├─ /materials/stainless-steel-fasteners/   [P1]
│
├─ /industries/solar-mounting-fasteners/   [P1]
├─ /industries/construction-infrastructure/[P2]   *(only if client serves)*
├─ /industries/automotive-heavy-engineering/[P2]  *(only if client serves)*
│
├─ /privacy-policy/                        [P0]  launch blocker for GA + forms
└─ /terms/                                 [P1]

404: app/not-found.tsx                     [P0]
sitemap.xml + robots.txt                   [P0]  auto-generated
```

**Depth:** every page is ≤ 2 clicks from the homepage. Maximum URL depth is 2 folder levels.

---

## 2. Per-page specification (v1 essentials)

Full content briefs live in [`content-strategy.md`](content-strategy.md). This section captures the minimum SEO + IA specification per route.

### Legend
- **PK** = primary keyword. **SK** = secondary keywords. **CTA** = primary conversion action. **Schema** = JSON-LD types.

### `/`
- **PK:** industrial fasteners manufacturer ahmedabad
- **SK:** fastener supplier india, bolt and nut manufacturer, kp fasteners
- **Intent:** commercial + navigational
- **Purpose:** authority + trust + product-range hub, primary conversion driver
- **Sections:** hero (H1 + RFQ CTA + phone + WhatsApp), category grid, materials teaser, industries teaser, quality & MTC teaser, why-choose (differentiators), contact strip
- **Internal links out:** every category, both materials pages, live industry pages, `/quality/`, `/contact/`, `/request-quote/`
- **Schema:** WebSite, Organization, LocalBusiness, BreadcrumbList

### `/about/`
- **PK:** fastener manufacturer ahmedabad
- **SK:** kp fasteners about, fastener company gujarat
- **Purpose:** trust + team + facility overview
- **Sections:** company overview, verified capabilities, facility (only real photos), team (only if client agrees), quality snapshot, CTA
- **Schema:** AboutPage, Organization, BreadcrumbList

### `/quality/`
- **PK:** fastener mill test certificate
- **SK:** en 10204 3.1 fasteners, fastener quality control, bolt testing
- **Purpose:** unblock procurement objections; expose testing capability
- **Sections:** documentation available (MTC / PPAP / traceability), in-house tests, third-party tests, certifications (client-verified only), CTA
- **Schema:** WebPage, BreadcrumbList

### `/contact/`
- **PK:** kp fasteners contact
- **Purpose:** last-mile conversion for phone/WhatsApp/visit intents
- **Sections:** address block (as per business card), embedded Google map, all phone numbers with `tel:`, WhatsApp `wa.me` link with pre-filled text, sales email, RFQ form entry point, working hours (once verified)
- **Schema:** ContactPage, LocalBusiness (with coordinates once verified), BreadcrumbList

### `/request-quote/`
- **PK:** request fastener quote
- **Purpose:** central RFQ intake
- **Fields:** name*, company*, phone*/email* (at least one), product type + grade + coating, quantity/tonnage, delivery pin code, drawing upload (PDF/DWG/DXF/PNG ≤ 8 MB), notes
- **Anti-spam:** honeypot + rate limit + server Zod validation (see [`security.md`](security.md))
- **Confirmation:** on-page success + confirmation email via Resend
- **Schema:** ContactPage, BreadcrumbList

### `/products/`
- **PK:** industrial fasteners
- **Purpose:** hub → cluster of categories
- **Sections:** category cards with 1-line description, "by material" link block, "by industry" link block, CTA
- **Schema:** CollectionPage, BreadcrumbList

### `/products/hex-bolts/` (template applies to every product category)
- **PK:** hex bolts manufacturer
- **SK:** high tensile hex bolts, din 933 bolts, iso 4017 bolts, grade 8.8 bolts
- **Sections:**
  1. Hero (H1, 2-line value prop, RFQ CTA, phone, WhatsApp)
  2. What KP offers — head types, thread types, diameter × length matrix
  3. Standards mapping (DIN 933 ↔ ISO 4017, DIN 931 ↔ ISO 4014, IS 1364, ASTM equivalents)
  4. Materials & grades (client-verified list only)
  5. Coatings & finishes (client-verified)
  6. Typical applications
  7. Quality documentation available (MTC etc.)
  8. FAQ (3–5 procurement questions)
  9. Related products / materials / industries
  10. Closing CTA banner
- **Internal links:** `/materials/high-tensile-fasteners/`, `/materials/stainless-steel-fasteners/`, `/products/hex-nuts/`, `/products/washers/`, `/quality/`, `/request-quote/`
- **Schema:** Product (name, description, brand, category, material, sameAs), BreadcrumbList, FAQPage

### `/materials/high-tensile-fasteners/`
- **PK:** high tensile bolts manufacturer
- **Sections:** grade table (4.6 / 4.8 / 5.6 / 8.8 / 10.9 / 12.9 with proof load, yield, tensile, hardness), typical fastener types available in each grade, coatings compatibility, applications, documentation, FAQ, CTA
- **Schema:** WebPage, BreadcrumbList, FAQPage

### `/materials/stainless-steel-fasteners/`
- **PK:** stainless steel fasteners manufacturer
- **Sections:** grade comparison (SS 202 / 304 / 304L / 316 / 316L, chemistry, PREN, corrosion positioning), typical fastener types per grade, passivation, applications (solar/marine/food), FAQ, CTA
- **Schema:** WebPage, BreadcrumbList, FAQPage

### `/industries/solar-mounting-fasteners/`
- **PK:** solar mounting bolts supplier
- **Sections:** solar structure fastener stack (MMS, purlin, rail-to-module, clamps), typical materials (SS 304 vs galvanised), MOQ, packaging for site delivery, dispatch pin codes, CTA
- **Schema:** WebPage, BreadcrumbList

*(Every other industry page follows the same template.)*

### `/privacy-policy/`
- Standard India-appropriate privacy policy covering GA4 + form data. Draft by legal — do not templatise from another site.

### `/terms/`
- Standard terms of supply / website use. Draft by legal.

### `404` — `app/not-found.tsx`
- Friendly, mentions the search intent context, links to `/products/`, `/materials/…`, `/contact/`, `/request-quote/`.

---

## 3. `app/sitemap.ts` behaviour

- Sourced from a single `data/routes.ts` array of canonical routes.
- Emits `<url>` with `loc`, `lastmod` (from route entry, not `Date.now()`), `changefreq` (monthly for content pages, yearly for legal).
- Never includes: `/api/*`, `/_next/*`, drafts, redirected URLs, 404s, `noindex` pages.

## 4. `app/robots.ts` behaviour

- `User-agent: *  Allow: /`
- `Disallow: /api/`
- `Disallow: /_next/`
- `Sitemap: https://kpfasteners.com/sitemap.xml`
- No `Disallow: /` on production. Staging (`preview.*`) gets `X-Robots-Tag: noindex, nofollow` via middleware.

## 5. Change management

Any add/remove/rename to this sitemap requires:
1. Update `data/routes.ts` (route inventory) + this file + [`keyword-map.md`](keyword-map.md) in the same PR.
2. If renaming: log a 301 in `next.config.ts` redirects and in `docs/seo/redirects.md`.
3. Run the schema + metadata audit scripts before merging.

---

## 6. Explicitly excluded routes on v1

- No blog / articles / news.
- No mass city landing pages.
- No standalone standards pages.
- No per-size product pages.
- No downloads catalogue page until a real catalogue PDF exists.
- No coatings hub — coatings are covered inside materials pages.
