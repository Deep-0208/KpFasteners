# Build Prompt — CSK Allen Bolts (Trading Product Page)

Route: /products/csk-allen-bolts/
Classification: trading
Cluster: C10
Priority: P1
Primary keyword: csk allen bolts manufacturer
Brief: `docs/content/content-briefs/csk-allen-bolts.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\csk-allen-bolts.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — at least two:
   - `app/(site)/products/scaffold-accessories/page.tsx` (trading/ambiguous)
   - `app/(site)/products/stud-bolts/page.tsx` (variant pattern)
   - `app/(site)/products/foundation-bolts/page.tsx` (spec-table pattern)
   - `app/(site)/products/sag-rods/page.tsx` (BreadcrumbList)
   - `app/(site)/contact/page.tsx` + `app/(site)/request-quote/page.tsx`
   - `app/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
`product({ ..., classification: 'trading' })` → `seller` only, no `manufacturer`. `<ClassificationBanner classification="trading" />`. `BreadcrumbList` + `FAQPage`. Honesty note: "sourced from vetted mills; head markings traceable to MTC on request." **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA. Canonical `https://kpfasteners.com/products/csk-allen-bolts/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (hex-bolts-nuts, high-tensile-fasteners, stainless-steel-fasteners, automotive-heavy-engineering per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/csk-allen/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — trading.
3. **SpecTable** — size (M3–M24 range per brief) × length range × head type (CSK socket / button-head / cap-head socket / shoulder) × standard (DIN 7991 / ISO 10642 / DIN 912 / ISO 4762 / DIN 7380). `.mono-numbers`. Row count per brief.
4. **Variant block** — property class × material (SS A2-70 / A4-80 / 12.9 alloy) × head × coating. Count per brief.
5. **Decision block** — "CSK vs socket vs button-head" use-case tree (flush mount, access, tooling, torque).
6. **Applications grid** — machine assembly / tool & die / jigs & fixtures / electronics enclosures / furniture / auto trim. Count per brief.
7. **Cross-link grid** — `/products/hex-bolts-nuts/`, `/materials/high-tensile-fasteners/`, `/materials/stainless-steel-fasteners/`, `/industries/automotive-heavy-engineering/`, `/products/custom-fasteners/`.
8. **Quality / MTC block** — EN 10204 3.1 MTC on request; link `/quality/`.
9. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim (brand of mill, inventory depth, lead time) → `{/* VERIFICATION PENDING: <question> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/products/csk-allen-bolts"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. SpecTable rows + variant + applications + FAQ counts + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
