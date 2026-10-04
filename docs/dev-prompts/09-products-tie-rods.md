# Build Prompt — Tie Rods (Trading Product Page)

Route: /products/tie-rods/
Classification: trading
Cluster: C09
Priority: P1
Primary keyword: tie rod manufacturer
Brief: `docs/content/content-briefs/tie-rods.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\tie-rods.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — at least two:
   - `app/(site)/products/scaffold-accessories/page.tsx` (trading reference)
   - `app/(site)/products/stud-bolts/page.tsx` (variant pattern — closest form-factor)
   - `app/(site)/products/sag-rods/page.tsx` (OEM reference + BreadcrumbList — sag-rods vs tie-rods disambiguation)
   - `app/(site)/products/foundation-bolts/page.tsx` (spec-table)
   - `app/(site)/contact/page.tsx` + `app/(site)/request-quote/page.tsx`
   - `app/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
`product({ ..., classification: 'trading' })` → `seller` only, no `manufacturer`. `<ClassificationBanner classification="trading" />`. `BreadcrumbList` + `FAQPage`. Honesty note: tie rods supplied as distribution SKU; project-spec OEM available via `/products/custom-fasteners/`. **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

**Decision to make before building §4:** Confirm cluster slot is C09 (per `cluster-plan.md`). If the brief ends up expanding tie-rods into formwork vs structural-bracing split, keep as a single C09 page and treat the split as internal sections — do NOT create a child route.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA. Canonical `https://kpfasteners.com/products/tie-rods/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (sag-rods, foundation-bolts, scaffold-accessories, construction-infrastructure, custom-fasteners per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/tie-rods/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — trading.
3. **Disambiguation callout (REQUIRED)** — "Tie rod vs sag rod vs threaded rod" short block linking to `/products/sag-rods/` for sag-rod intent.
4. **SpecTable** — diameter (M12–M48 range per brief) × length range × type (formwork tie rod / dywidag-style / plain threaded / anchor tie rod) × material (MS / high-tensile / SS 304) × standard. `.mono-numbers`. Row count per brief.
5. **Variant block** — diameter × type × coating (ZP / HDG / black) × thread form (coarse / fine / rolled). Count per brief.
6. **Decision block** — formwork vs structural bracing use-case tree.
7. **Applications grid** — formwork / shuttering / bracing / tensioning / staging. Count per brief.
8. **Cross-link grid** — `/products/sag-rods/`, `/products/foundation-bolts/`, `/products/scaffold-accessories/`, `/industries/construction-infrastructure/`, `/products/custom-fasteners/`.
9. **Quality / MTC block** — EN 10204 3.1 MTC on request; link `/quality/`.
10. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
11. **CTA band** — RFQ + phone + WhatsApp.
12. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim (dywidag-equivalent, project refs) → `{/* VERIFICATION PENDING: <question> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/products/tie-rods"` → empty
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
