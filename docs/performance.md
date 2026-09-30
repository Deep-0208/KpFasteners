# Performance — KP Fasteners

Core Web Vitals are enforced as a launch-gate. Budgets and tactics below apply to every route.

---

## 1. Field-data thresholds (mobile 4G, 75th percentile)

| Metric | Target | Hard cap |
|---|---|---|
| LCP | ≤ 2.0 s | ≤ 2.5 s |
| INP | ≤ 200 ms | ≤ 250 ms |
| CLS | ≤ 0.05 | ≤ 0.1 |
| FCP | ≤ 1.2 s | ≤ 1.8 s |
| TTFB | ≤ 500 ms | ≤ 800 ms |

CrUX data is the source of truth. Lab (Lighthouse) is used only for regression detection on PRs.

## 2. Lab budgets (Lighthouse CI on Vercel preview)

| Budget | Threshold |
|---|---|
| Performance | ≥ 95 mobile / ≥ 98 desktop |
| Accessibility | ≥ 95 |
| SEO | 100 |
| Best-practices | ≥ 95 |
| Total JS transfer (per route) | ≤ 90 KB gzipped |
| Total CSS transfer | ≤ 25 KB gzipped |
| Total image transfer above the fold | ≤ 250 KB |
| Hero image | ≤ 200 KB, AVIF/WebP |
| Any single image | ≤ 120 KB |
| Total requests per route | ≤ 40 |

## 3. Tactics

### 3.1 Rendering
- **RSC everywhere possible.** Only mobile drawer, RFQ form, sticky mobile bar, and any filter tabs go client.
- Static generation (`force-static`) for all commercial routes. `revalidate` set only if content changes without a redeploy — likely not on v1.

### 3.2 Images
- `next/image` with explicit `width` + `height` (prevents CLS).
- AVIF + WebP served automatically via `next/image` + `sharp`.
- Above-the-fold hero: `priority` + `fetchPriority="high"`.
- Below-the-fold images: default lazy.
- Aspect-ratio preserved on responsive containers.
- No CSS `background-image` for LCP-critical imagery.

### 3.3 Fonts
- `next/font/google` for Inter (variable) → self-hosted WOFF2, `display: swap`, subset `latin`.
- Single font family. Weight subset limited to 400 / 500 / 600 / 700.
- No third-party font CDN.

### 3.4 JavaScript
- No client-side data fetching on commercial pages.
- No global state library (Zustand / Redux). If shared state ever appears, use React context on the affected leaf.
- No animation library unless business-critical. CSS transitions cover the current design.
- Analytics via `next/script strategy="afterInteractive"` (GA4) or `lazyOnload`.
- Third-party embeds (Google Map iframe on `/contact/`): loaded with `loading="lazy"` and inside `<details>` if it becomes a CLS/LCP problem.

### 3.5 CSS
- Tailwind v4 with content-driven purge.
- No global CSS-in-JS runtime.
- Critical CSS extracted by Next.

### 3.6 Fetches
- `resend` only on API routes (server-side).
- No client-side fetches for content.

### 3.7 Caching + edge
- Vercel edge cache for static routes (default).
- `Cache-Control` on `/api/quote`, `/api/contact`: `no-store`.
- `Cache-Control` on hashed static assets: `public, max-age=31536000, immutable` (Vercel default).

### 3.8 Third-party surface
- On launch: only GA4 + Vercel Analytics + Vercel Speed Insights.
- Google Map embed only on `/contact/`. If it degrades CWV, replace with a static map image + directions link.
- No chat widgets, marketing pixels, or A/B testing platforms on v1.

## 4. Regression prevention

- Lighthouse-CI runs on every PR against the Vercel preview URL. Any drop below the threshold fails the check.
- `next build` output diff — bundle size deltas > 10 KB per route trigger a manual review.
- CrUX check weekly for the first month.

## 5. Anti-patterns

- No 5 MB hero PNG.
- No `next/image` without dimensions.
- No `Framer Motion` unless a specific need justifies it.
- No Google Tag Manager on v1 (adds weight without ROI at this scale).
- No web-fonts loaded from Google Fonts CDN.
- No LCP element wrapped in JavaScript-only render.
- No `useEffect` fetching content that could be RSC.
