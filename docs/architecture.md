# Technical Architecture — KP Fasteners

Planned. **No code has been written.** Every choice below is inherited from the Honeywell reference and adapted to KP scope.

---

## 1. Stack decision

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js **16.x** App Router | RSC by default → tiny client JS, excellent CWV; same as Honeywell reference |
| Language | TypeScript, `strict: true` | Enforceable type contracts on data + API routes |
| Styling | Tailwind CSS **v4** (via `@tailwindcss/postcss`) | Design-token discipline via `tailwind.config.ts` + CSS variables |
| React | 19.x (matches Next 16 requirement) | |
| Component split | RSC by default; `'use client'` only for interactive leaves | Mobile drawer, RFQ form, filter tabs, sticky conversion bar |
| Images | `next/image` + `sharp` (AVIF, WebP) | |
| Fonts | `next/font/google` — Inter (+ optional mono) self-hosted | No third-party font CDN → CWV + privacy |
| Icons | `lucide-react` | Single icon library (AGENTS.md rule) |
| Class utils | `clsx` + `tailwind-merge` | |
| Email | `resend` server-side only | RFQ + Contact submissions |
| Validation | `zod` for API-route inputs | Server-side only |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` + GA4 (via `next/script`) | Lightweight, async |
| Deployment | Vercel | Parity with Honeywell reference; edge caching |
| Node | v20 LTS | |
| Package manager | npm | Parity with Honeywell |

**Explicitly dropped from Honeywell reference:** ElevenLabs voice widget, `react-icons` (keeping only lucide), `agentation` dev package.

## 2. Repository layout

```
/ (repo root)
├─ app/
│  ├─ layout.tsx                   Root layout, fonts, header/footer, viewport, favicon links
│  ├─ globals.css                  Tailwind base + design-token CSS variables
│  ├─ page.tsx                     Homepage
│  ├─ not-found.tsx                Custom 404
│  ├─ manifest.ts                  Web app manifest
│  ├─ robots.ts                    Static robots.txt output
│  ├─ sitemap.ts                   Static sitemap.xml output (from data/routes)
│  ├─ icon.png / apple-icon.png / favicon.ico
│  ├─ (site)/
│  │  ├─ about/page.tsx
│  │  ├─ quality/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ request-quote/page.tsx
│  │  ├─ privacy-policy/page.tsx
│  │  ├─ terms/page.tsx
│  │  ├─ products/
│  │  │  ├─ page.tsx               Product hub
│  │  │  ├─ hex-bolts/page.tsx
│  │  │  ├─ hex-nuts/page.tsx
│  │  │  └─ … (one file per category route)
│  │  ├─ materials/
│  │  │  ├─ high-tensile-fasteners/page.tsx
│  │  │  └─ stainless-steel-fasteners/page.tsx
│  │  └─ industries/
│  │     └─ solar-mounting-fasteners/page.tsx  (+ others once confirmed)
│  └─ api/
│     ├─ quote/route.ts            POST — RFQ intake
│     └─ contact/route.ts          POST — general contact
├─ components/
│  ├─ layout/          Header, Footer, MegaMenu, MobileMenu, MobileConversionBar
│  ├─ ui/              Container, Section, Heading, Prose, Button, Card, Accordion,
│  │                  Breadcrumbs, SpecTable, GradeTable, VerificationRequired
│  ├─ forms/           RFQForm, ContactForm
│  ├─ homepage/        Hero, CategoryGrid, MaterialsTeaser, IndustriesTeaser, TrustStrip
│  ├─ product-page/    ProductHero, StandardsMap, ApplicationsGrid, QualityBadges
│  ├─ seo/             JsonLd (typed helpers per schema type)
│  └─ contact/         ContactBlock, MapEmbed, WhatsAppLink
├─ data/
│  ├─ routes.ts        Canonical route list (drives sitemap + navigation + breadcrumbs)
│  ├─ navigation.ts    Header + footer + mega-menu content
│  ├─ homepage.ts      Homepage content
│  ├─ products/        One file per category: specs, standards, coatings, images, FAQ
│  ├─ materials/       Grade tables, standards, applications, FAQ
│  ├─ industries/      Fastener stacks per industry, FAQ
│  ├─ company.ts       Verified business facts (name, address, phone, GST once verified…)
│  └─ faq/             Cross-cut FAQ items (procurement, dispatch)
├─ lib/
│  ├─ seo.ts           metadata helpers, canonical builder
│  ├─ jsonld.ts        typed JSON-LD builders
│  ├─ format.ts        unit + range formatters
│  └─ ratelimit.ts     in-memory / KV rate limit for API routes
├─ scripts/
│  ├─ audit-metadata.mjs   CI: verifies title/desc lengths + uniqueness
│  ├─ audit-schema.mjs     CI: parses JSON-LD from built pages, validates
│  ├─ audit-links.mjs      CI: crawls built pages, flags 404 / redirect chains
│  └─ submit-indexnow.mjs  Ping Bing IndexNow on new/updated URLs
├─ public/
│  ├─ brand/logo.svg (+ png fallback) — from client-supplied vector
│  ├─ images/products/…
│  ├─ images/facility/…
│  ├─ llms.txt              Curated after catalogue verification
│  └─ catalog.md            Curated after catalogue verification
├─ types/                    Shared TS types (Product, Material, Industry, RFQPayload)
├─ next.config.ts
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ eslint.config.mjs
├─ .env.example
├─ .gitignore
├─ AGENTS.md
├─ README.md
└─ docs/                     ← this planning folder (kept in repo)
```

## 3. Rendering strategy

| Route class | Rendering | Reason |
|---|---|---|
| Homepage, product hub, product category, material, industry, quality, about, contact, legal | **Static (RSC, `export const dynamic = 'force-static'`)** | Content is authored, not user-personalised. Cacheable at edge. |
| `/request-quote/` page shell | Static | Form is a client leaf inside the static page. |
| `/api/quote`, `/api/contact` | Node runtime, POST-only | Uses `resend` (Node SDK) + `zod` + rate limit. |
| `/sitemap.xml`, `/robots.txt` | Static via `sitemap.ts` / `robots.ts` | Regenerated on build. |

No middleware for the public site except (a) staging `noindex` header injection on preview domains, (b) www ↔ apex normalisation.

## 4. Data layer

Single source of truth in typed constants inside `data/`. No CMS in v1.

```ts
// data/routes.ts
export type CanonicalRoute = {
  path: string;                 // '/products/hex-bolts/'
  changeFreq?: 'weekly'|'monthly'|'yearly';
  priority?: number;            // sitemap priority
  breadcrumbTrail: Array<{ label: string; href: string }>;
  navGroup?: 'products' | 'materials' | 'industries' | 'company' | 'legal';
};
```

```ts
// data/company.ts   — only VERIFIED fields at v1
export const company = {
  legalName: 'KP Fasteners',                       // VERIFIED (business card wordmark)
  contactPerson: 'Mr. Pramod Panchal',
  telephones: ['+91-98982-30448'],
  whatsapp: { number: '+919898230448', prefill: 'Hello KP Fasteners, I want to enquire about fasteners.' },
  email: 'sales@kpfasteners.com',                  // NEEDS VERIFICATION
  address: {
    streetAddress: '23/4, Ghanshyam Industrial Estate, Margha Farm',
    locality: 'Ahmedabad',
    region: 'GJ',
    postalCode: '380024',
    country: 'IN'
  },
  geo: null,                                       // { lat, lng } — CLIENT INPUT REQUIRED
  hours: null,                                     // CLIENT INPUT REQUIRED
  sameAs: []                                       // Add GBP, IndiaMART, LinkedIn once verified
} as const;
```

Every content entry carries a `verifiedAt` timestamp and a `source` note. Anything without `verifiedAt` is hidden behind the `<VerificationRequired>` banner and stripped from production builds until confirmed.

## 5. Environment + secrets

`.env.example` (committed):

```
NEXT_PUBLIC_SITE_URL=https://kpfasteners.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=

RESEND_API_KEY=
SALES_NOTIFICATION_EMAIL=
CONTACT_NOTIFICATION_EMAIL=

# Optional (Vercel-provided)
NEXT_PUBLIC_VERCEL_ENV=
```

`.env.local` / `.env.production` values live only in Vercel dashboard. Never committed. No secret is `NEXT_PUBLIC_*`.

## 6. `next.config.ts` baseline

- `trailingSlash: true`
- `compress: true`
- `compiler.removeConsole` in production
- `images.formats: ['image/avif', 'image/webp']`
- Security headers per [`security.md`](security.md)
- Redirect map: **empty on launch** (no legacy URLs to preserve). Any future URL change goes into `docs/seo/redirects.md` **and** here.

## 7. CI + quality gates

GitHub Actions on every PR:
1. `npm ci`
2. `npm run lint`
3. `npm run typecheck` (`tsc --noEmit`)
4. `npm run build`
5. `node scripts/audit-metadata.mjs`
6. `node scripts/audit-schema.mjs`
7. `node scripts/audit-links.mjs`
8. Lighthouse-CI on the built preview (Vercel preview URL) — thresholds per [`performance.md`](performance.md)

Merge is blocked on any failure. No `--no-verify`, no `ignoreBuildErrors: true`.

## 8. Non-goals for v1

- No CMS.
- No i18n (English only). Add later behind `/en/` if needed.
- No product-search or filter engine.
- No user accounts.
- No blog.
- No dark mode.
- No PWA offline shell (manifest ships; SW does not).
- No ElevenLabs / chatbots.
