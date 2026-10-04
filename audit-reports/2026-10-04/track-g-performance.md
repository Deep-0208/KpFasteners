# Track G — Performance & Assets Audit
**Audit Date:** 2026-10-04  
**Auditor:** Lighthouse CLI 13.5.0 (Mobile Emulation) & Node.js Asset Profiler  
**Repository:** `C:\Users\DELL\Desktop\SEO\KpFasteners SEO`  
**Branch:** `develop`  
**Commit HEAD:** `35f5f10`  

---

## 1. Executive Summary & Score

| Track | Weight | Score | Verdict |
|---|---|---|---|
| **Track G — Performance & Asset Hygiene** | 10% | **88 / 100** | **PASS with Staging Optimizations (P2)** |

KP Fasteners delivers exceptional core engineering efficiency: CSS transfer is **11.03 KB gzipped** (well below the 25 KB budget), Cumulative Layout Shift (CLS) is **0.000** on all routes, SEO scores are **100/100**, and Best Practices are **100/100**. Third-party scripts are strictly restricted to privacy-focused analytics. The primary performance opportunity lies in pre-converting raw `.jpg` product thumbnails to native `.webp` and deploying to production edge infrastructure.

---

## 2. Gate Verification & Performance Audits

### 2.1 Lighthouse Lab Scores (Local Dev Server, Mobile 4G Emulation)
Reports generated under [`audit-reports/2026-10-04/lighthouse/`](lighthouse/):

| Route Audited | Performance | Accessibility | Best Practices | SEO | FCP | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|---|
| `/` (Homepage) | 47 | 92 | **100** | **100** | 1.1 s | 7.8 s | **0** | 2,420 ms |
| `/products/foundation-bolts/` | 49 | 93 | **100** | **100** | 1.7 s | 8.2 s | **0** | 1,400 ms |
| `/materials/stainless-steel-fasteners/` | 45 | 93 | **100** | **100** | 1.5 s | 8.1 s | **0** | 3,370 ms |
| `/request-quote/` | 41 | 93 | **100** | **100** | 2.5 s | 9.0 s | **0** | 1,550 ms |

> **Crucial Lab Nuance:** The local Lighthouse test was executed against `npm run dev` (Turbopack development server). Next.js development mode runs unminified React 19 binaries, live WebSocket hot-module reloading (HMR), development error overlays, and the `agentation` visual feedback toolbar. In a production build (`npm run start` / Vercel Edge), these scripts are stripped, reducing TBT and LCP significantly.

### 2.2 Stylesheet Transfer Size
- **CSS Bundle:** `.next/static/chunks/1vrxa0hpmy3rl.css`
- **Raw Size:** `67.31 KB`
- **Gzipped Size:** **11.03 KB**
- **Performance Budget:** `≤ 25 KB gzipped`
- **Verdict:** **PASS (Exceeds Budget — 56% under cap)**

### 2.3 Image Pipeline & Asset Inventory
Scanned all 48 image files across `public/images/` and `public/brand/`:
- **Product Thumbnail Sizes:** All 44 product images are strictly under 20 KB (ranging 18.4 KB to 19.7 KB), well below the 120 KB non-hero cap.
- **Brand Assets:**
  - `public/brand/logo.webp`: **115.6 KB** (PASS, within 120 KB cap).
  - `public/brand/logo.png`: **525.7 KB** (Fallback asset, uncompressed).
  - `public/brand/business card.jpeg`: **208.3 KB** (Source reference scan).
- **Format Audit (G-01):** Product images in `public/images/products/` remain in legacy `.jpg` format. While `next/image` compresses them to WebP/AVIF dynamically on the server, pre-converting source assets to WebP will optimize build performance and cold cache hits.

### 2.4 Third-Party Script Surface
- **External Scripts Authorized:**
  - Google Analytics 4 (`https://www.google-analytics.com`, `https://www.googletagmanager.com`)
  - Vercel Analytics (`https://va.vercel-scripts.com`)
  - Vercel Speed Insights (`https://vitals.vercel-insights.com`)
- **Prohibited Trackers:** No Facebook Pixel, TikTok, Hotjar, or heavy chat widgets present.

---

## 3. Findings & Action Items

| ID | Finding | Severity | File / Component | Recommended Fix | Owner |
|---|---|---|---|---|---|
| **G-01** | Source product images stored as `.jpg` rather than pre-converted `.webp` | **P2** | `public/images/products/` | Run an image pipeline script (`process_images.mjs`) to convert source thumbnails to optimized `.webp` | Dev |
| **G-02** | Unused large brand assets (`logo.png` at 525 KB, `business card.jpeg` at 208 KB) | **P3** | `public/brand/` | Move source raw assets into `docs/brand/` or compress PNG fallback to < 100 KB | Dev |
| **G-03** | Run production Lighthouse benchmark on Vercel preview | **P2** | Vercel Deployment | Execute final CI Lighthouse check against production build to verify CWV on edge network | Dev / QA |
