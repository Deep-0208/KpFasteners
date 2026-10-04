# Build Prompt — Hex Bolts & Nuts (Trading Product Page)

Route: /products/hex-bolts-nuts/
Classification: trading
Cluster: C13
Priority: P1
Primary keyword: hex bolts and nuts manufacturer
Brief: `docs/content/content-briefs/hex-bolts-nuts.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\hex-bolts-nuts.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — at least two:
   - `app/(site)/products/scaffold-accessories/page.tsx` (ambiguous/trading reference)
   - `app/(site)/products/foundation-bolts/page.tsx` (OEM reference)
   - `app/(site)/products/stud-bolts/page.tsx` (variant pattern)
   - `app/(site)/products/sag-rods/page.tsx` (BreadcrumbList)
   - `app/(site)/contact/page.tsx` + `app/(site)/request-quote/page.tsx`
   - `app/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
`product({ ..., classification: 'trading' })` → `seller` set to Organization @id, **no** `manufacturer`. `<ClassificationBanner classification="trading" />` renders steel/silver. Add `BreadcrumbList` + `FAQPage`. The honesty note: "sourced from vetted mills — property-class marks on head traceable to mill test certificate on request." **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA. Canonical `https://kpfasteners.com/products/hex-bolts-nuts/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (high-tensile-fasteners, stainless-steel-fasteners, csk-allen-bolts, construction + automotive industries per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` sizes explicit. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/hex-bolts-nuts/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — trading.
3. **SpecTable (bolts)** — size (M6–M64 range per brief) × length range × property class (8.8/10.9/12.9) × standard (DIN 931 full-thread partial / DIN 933 full / ISO 4014/4017 / IS 1364 / ASTM A325 / A490). `.mono-numbers`. Row count per brief.
4. **SpecTable (nuts)** — size × type (hex / nylock / dome / flange / heavy hex) × property class (8/10/12) × standard (DIN 934 / 985 / 6923 / ASTM A194). Row count per brief.
5. **Variant block** — grade × coating × size matrix (count per brief).
6. **Decision block** — property-class picker (8.8 vs 10.9 vs 12.9) + coating picker (HDG vs ZP vs black-oxide).
7. **Applications grid** — PEB, structural, machinery, auto, solar, general-purpose cards (count per brief).
8. **Cross-link grid** — `/materials/high-tensile-fasteners/`, `/materials/stainless-steel-fasteners/`, `/products/csk-allen-bolts/`, `/industries/construction-infrastructure/`, `/industries/automotive-heavy-engineering/`, `/products/custom-fasteners/`.
9. **Quality / MTC block** — EN 10204 3.1 MTC; link `/quality/`.
10. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
11. **CTA band** — RFQ + phone + WhatsApp.
12. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim (brand of mill, inventory depth, lead time) → `{/* VERIFICATION PENDING: <question> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/products/hex-bolts-nuts"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. SpecTable rows (bolts + nuts) + variant count + applications + FAQ count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
