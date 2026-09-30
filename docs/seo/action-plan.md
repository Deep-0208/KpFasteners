# SEO Action Plan — prioritised

Living ledger of every SEO action, keyed by priority. Every item carries: **priority**, **owner**, **dependency**, **validation method**, **client-confirmation requirement**.

Statuses: `open`, `in-progress`, `blocked`, `done`.

---

## P0 — blocks crawl, indexing, launch, or the buying flow

| # | Action | Owner | Dependency | Validation | Client input | Status |
|---|---|---|---|---|---|---|
| 1 | Answer client questionnaire A–G ([`../business-profile.md#8`](../business-profile.md#8-client-questionnaire)) | Client | — | Response received in writing | Yes | open |
| 2 | Confirm GitHub repo state + branch + access | Dev | — | Local clone success | No | open |
| 3 | Confirm DNS registrar access + record edit rights for `kpfasteners.com` | Client | — | Test TXT record added and removed | Yes | open |
| 4 | Run live `/seo-audit` on `srgfasteners.com` and update [`competitor-analysis.md`](../competitor-analysis.md) + [`competitor-analysis.md`](competitor-analysis.md) | SEO | Browser access | Rows replace `NEEDS VERIFICATION` | No | open |
| 5 | Run live `/seo-cluster` on seed keywords; write concrete clusters into [`keyword-clusters.md`](keyword-clusters.md) + [`../keyword-map.md`](../keyword-map.md) | SEO | Ahrefs / DataForSEO / Keyword Planner access | Clusters mapped 1↔1 to canonical URLs | No | open |
| 6 | Register Google Search Console **domain property** (DNS TXT) | Dev + Client | DNS access | GSC "Verified" | Yes | open |
| 7 | Register Bing Webmaster Tools property + IndexNow key | Dev | DNS access | Verified | No | open |
| 8 | Ship `sitemap.xml` + `robots.txt` before first indexation pass | Dev | Route inventory finalised | Both URLs return 200; sitemap only 200-OK URLs | No | open |
| 9 | Legal-drafted `/privacy-policy/` + `/terms/` — India-appropriate, GA4-compatible | Legal | Client legal counsel | Page live | Yes | open |
| 10 | Real GBP profile at 23/4 Ghanshyam Industrial Estate (verified) | Client | Postcard / video verification | GBP live + verified | Yes | open |

## P1 — meaningful SEO / UX / conversion impact

| # | Action | Owner | Dependency | Validation | Status |
|---|---|---|---|---|---|
| 11 | Populate `data/company.ts` with verified NAP + hours + `sameAs` links | Dev | Q'aire A + F | `Organization` + `LocalBusiness` schema clean in Rich Results Test | open |
| 12 | Build `<RFQForm>` + `/api/quote` with Resend + honeypot + rate limit + drawing upload | Dev | Resend key + SPF/DKIM | End-to-end test in preview: submission → sales inbox | open |
| 13 | Populate `data/products/<slug>.ts` for every verified category | Dev + SEO | Q'aire B + C | Every page passes metadata + schema + link audit | open |
| 14 | Draft + publish content briefs for P0 pages in `docs/content/content-briefs/` | SEO + Writer | Live `/seo-content-brief` | Client sign-off on each brief | open |
| 15 | Ship `/materials/high-tensile-fasteners/` + `/materials/stainless-steel-fasteners/` with grade tables + FAQ | Dev + Writer | Q'aire C | `/seo-content` audit passes; grade tables mobile-scroll ok | open |
| 16 | Ship `<MobileConversionBar>` (phone + WhatsApp + RFQ) on every mobile route | Dev | — | 48×48 tap targets; visible from viewport enter | open |
| 17 | Ship `<Breadcrumbs>` + `BreadcrumbList` schema on every non-home route | Dev | — | Rich Results Test — 0 errors | open |
| 18 | Ship `scripts/audit-metadata.mjs` + `audit-schema.mjs` + `audit-links.mjs` in CI | Dev | Route data present | CI red on injected regression | open |
| 19 | Photograph real product line-up (or receive from client) | Client + Dev | Client permission | Photos in `/public/images/products/` at ≤ 200 KB each | open |
| 20 | Register on IndiaMART + TradeIndia + JustDial with consistent NAP | Client | — | Same NAP as GBP + site | open |

## P2 — important optimisation

| # | Action | Owner | Dependency | Validation | Status |
|---|---|---|---|---|---|
| 21 | Ship `public/llms.txt` + `public/catalog.md` | Dev + SEO | Verified catalogue | Files reachable; content matches on-site facts | open |
| 22 | Add 3rd industry page (only if client serves that sector) | Dev + SEO | Q'aire E | Page passes `/seo-content` | open |
| 23 | First backlink push — legitimate industry directories + supplier registries | SEO + Client | — | Log in `docs/seo/backlinks.md` | open |
| 24 | Quarterly `/seo-audit` | SEO | Site live 90+ days | Report attached to `docs/seo/audits/YYYY-Qn.md` | open |
| 25 | CWV re-check + regression PR if any metric drifts | Dev | Lighthouse-CI + CrUX | All budgets pass | open |
| 26 | Schema-refresh pass after any catalogue change | Dev + SEO | Catalogue delta | Rich Results Test 0 errors | open |
| 27 | Investigate whether one legitimate city page (Sanand, Vadodara, Rajkot, Morbi) is justified based on GSC impressions | SEO | 90 days of GSC | AGENTS.md §27 gate template completed and approved | open |

## P3 — nice-to-have

| # | Action | Owner | Dependency | Validation | Status |
|---|---|---|---|---|---|
| 28 | CSP nonces (drop `'unsafe-inline'`) | Dev | Next.js nonce middleware | securityheaders.com A+ | open |
| 29 | Downloads page (`/downloads/`) with catalogue PDF | Dev + Client | Real PDF exists | PDF audited for size + alt-text metadata | open |
| 30 | 2 evergreen guides inside materials pages | Writer | Real editor bandwidth | `/seo-content` E-E-A-T pass | open |
| 31 | Second locale (`/en-gb/` or `/en-us/`) — only if export scale justifies | SEO + Dev | Client export data | hreflang set correctly | open |
| 32 | hCaptcha behind feature flag for spike defence | Dev | Spam observed | Toggleable via env var | open |

---

## Governance

- Every action, before it moves to `done`, must attach: PR link, validation evidence, and client-signoff link where applicable.
- Every new action goes in via a PR that also updates the affected docs.
- Priority is re-evaluated monthly using GSC data.
