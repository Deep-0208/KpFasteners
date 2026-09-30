# Technical SEO — KP Fasteners

Applies to every route in [`sitemap.md`](sitemap.md). All items are **planning specifications** — no page has been built.

---

## 1. Metadata

Per-route metadata comes from a `lib/seo.ts` `buildMetadata()` helper called from each page's `generateMetadata()`. That helper:

- Prefixes titles with the primary keyword and appends `| KP Fasteners` when the total stays under 60 chars.
- Enforces title length 50–60 and description length 150–160 at build time (CI script fails otherwise).
- Emits self-referential canonical using `NEXT_PUBLIC_SITE_URL + path`, trailing slash included.
- Emits OpenGraph (`og:title`, `og:description`, `og:type=website`, `og:url`, `og:image`, `og:locale=en_IN`) and Twitter card (`summary_large_image`).
- Ships a fallback `og:image` (KP logo on off-white) and per-route override when a real product photo is available.
- Emits `alternates.canonical` and no `hreflang` (single-locale on v1).

## 2. Canonical + trailing-slash policy

- `trailingSlash: true` in `next.config.ts`.
- Every internal link ends with `/`.
- Every canonical tag ends with `/`.
- Every sitemap URL ends with `/`.
- www ↔ apex: apex canonical; `www.kpfasteners.com` → `kpfasteners.com` 301 via middleware or hosting.
- HTTP → HTTPS 301 (Vercel handles automatically).

## 3. Sitemap

`app/sitemap.ts` — reads `data/routes.ts`:

```ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return routes.map(r => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: r.lastMod ?? new Date('2026-01-01'),
    changeFrequency: r.changeFreq ?? 'monthly',
    priority: r.priority ?? 0.7,
  }));
}
```

Excludes: `/api/*`, `/_next/*`, drafts, redirected URLs, staging previews.

## 4. Robots

`app/robots.ts`:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://kpfasteners.com/sitemap.xml
```

Staging (`preview.*`, `*.vercel.app`): middleware adds `X-Robots-Tag: noindex, nofollow` for every response.

## 5. Structured data

Every page ships JSON-LD via typed builders in `lib/jsonld.ts`. Schema output must **exactly** mirror visible content — audit script enforces this.

| Route | Schema types |
|---|---|
| `/` | `WebSite` + `Organization` + `LocalBusiness` + `BreadcrumbList` |
| `/about/` | `AboutPage` + `Organization` + `BreadcrumbList` |
| `/contact/` | `ContactPage` + `LocalBusiness` (with `geo` once verified) + `BreadcrumbList` |
| `/quality/` | `WebPage` + `BreadcrumbList` |
| `/request-quote/` | `ContactPage` + `BreadcrumbList` |
| `/products/` | `CollectionPage` + `BreadcrumbList` |
| `/products/*/` | `Product` (name, description, brand=KP Fasteners, category, material list, image) + `BreadcrumbList` + `FAQPage` |
| `/materials/*/` | `WebPage` + `BreadcrumbList` + `FAQPage` |
| `/industries/*/` | `WebPage` + `BreadcrumbList` |
| `/privacy-policy/`, `/terms/` | `WebPage` + `BreadcrumbList` |

Prohibited: `AggregateRating` / `Review` (no verified review corpus), fake `Offer` prices, `Event`, `Recipe`, or any schema not represented on the page.

`Organization` node stays a single node across the site — do **not** duplicate it inside every page's Product schema. Use `@id` references.

Validated with:
- `scripts/audit-schema.mjs` (CI)
- Google Rich Results Test (manual, pre-launch)
- Schema.org validator (manual, pre-launch)

## 6. URL hygiene

- Lowercase, kebab-case, trailing slash.
- No query strings for indexable content.
- No session IDs.
- No `.html` extensions.

## 7. Heading hierarchy

- Exactly one `<h1>` per page — enforced by the `<Heading as="h1">` wrapper and by `audit-schema.mjs`.
- H2 → H3 only. No level skips.
- Hero H1 must contain the primary keyword (natural phrasing, not stuffed).

## 8. Redirects

- Launch with an **empty** `next.config.ts` `redirects()` array.
- Every future rename adds an entry to both `docs/seo/redirects.md` and `next.config.ts` in the same PR.
- All redirects: `permanent: true` (308/301).
- Redirect chains > 1 hop: forbidden. Any second hop must be flattened.

## 9. 404

Custom `app/not-found.tsx`:
- Real `<h1>` "Page not found".
- Contextual link block: product hub, all product categories, materials, contact, RFQ.
- Search intent hint: "You may be looking for…".
- Returns HTTP 404 (Next.js does this by default).

## 10. `llms.txt` + `catalog.md` (AEO)

Ship after catalogue verification:

- `public/llms.txt` — root URL, canonical product URLs, plaintext descriptions, no marketing prose.
- `public/catalog.md` — a single markdown file listing categories, materials, coatings, standards.

These are optional but low-cost. Ignored by Googlebot; used by ChatGPT / Perplexity indexers.

## 11. IndexNow

`scripts/submit-indexnow.mjs` fires per new/updated URL after production deploy — Bing + Yandex both accept IndexNow. Key file lives at `public/<key>.txt`. This is free instant indexing on Bing and is worth having for Copilot citations.

## 12. Search Console + Bing Webmaster

- Add `kpfasteners.com` as a **domain property** in Google Search Console (DNS TXT verification, not URL prefix).
- Submit `sitemap.xml`.
- Set the preferred domain to apex.
- Enable email alerts for index issues + manual actions.
- Repeat in Bing Webmaster Tools + register IndexNow key.

## 13. `next.config.ts` SEO settings

- `trailingSlash: true`
- `images.formats: ['image/avif', 'image/webp']`
- `redirects()` — empty at launch
- Security headers (see [`security.md`](security.md))

## 14. Automated audits

CI runs on every PR:

- `audit-metadata.mjs`: titles unique, 50–60 chars; descriptions unique, 150–160 chars; every page has canonical.
- `audit-schema.mjs`: JSON-LD parses; each page has BreadcrumbList; Product pages have all required fields; Organization node exists exactly once; no AggregateRating without a verified source.
- `audit-links.mjs`: crawl the built site; zero internal 404s; zero redirect chains > 1 hop; every route in `data/routes.ts` reachable from `/` in ≤ 2 clicks; every route has ≥ 2 inbound internal links.

## 15. Post-launch monitoring cadence

Weekly for first month, monthly thereafter:
- GSC — coverage, sitemaps, queries, CTR, CWV.
- Bing — same.
- CrUX / PageSpeed — LCP/INP/CLS trend.
- Vercel Analytics — top URLs + conversion event fires.

## 16. Explicit anti-patterns

- No `noindex` on production commercial pages.
- No `disallow: /` outside staging.
- No auto-generated pages beyond the manifest above.
- No hreflang without a second locale that actually exists.
- No `link rel=amphtml`.
- No dynamic canonical based on request headers.
- No `AggregateRating` schema without a verified review dataset.
