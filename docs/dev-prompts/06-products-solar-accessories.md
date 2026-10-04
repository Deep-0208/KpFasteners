# Build Prompt — Solar Accessories (Trading Product Page, Anchor)

Route: /products/solar-accessories/
Classification: trading
Cluster: C12 (ANCHOR, greenfield vs SRG)
Priority: P0
Primary keyword: solar mounting accessories manufacturer
Brief: `docs/content/content-briefs/solar-accessories.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\solar-accessories.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — study at least two:
   - `app/(site)/products/scaffold-accessories/page.tsx` (ambiguous/trading reference — closest shape)
   - `app/(site)/products/foundation-bolts/page.tsx` (OEM, for spec-table pattern)
   - `app/(site)/products/stud-bolts/page.tsx` (variant pattern)
   - `app/(site)/products/sag-rods/page.tsx` (BreadcrumbList pattern)
   - `app/(site)/contact/page.tsx` + `app/(site)/request-quote/page.tsx`
   - `app/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
`product({ ..., classification: 'trading' })` → `seller` set to Organization @id, **no** `manufacturer`. `<ClassificationBanner classification="trading" />` renders steel/silver. Include `BreadcrumbList` and `FAQPage` JSON-LD. **Never** `AggregateRating`, invented `Offer` price, duplicate `Organization` nodes.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars with value prop + RFQ CTA. Canonical `https://kpfasteners.com/products/solar-accessories/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (stainless-steel-fasteners, hex-bolts-nuts, custom-fasteners, `/industries/solar-mounting-fasteners/` per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image; `priority` on hero only. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Use existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 uses `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide — do NOT re-insert. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` with explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
All counts (SpecTable rows, variant count, applications, FAQ count) come from the brief — do not invent.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/solar-accessories/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — trading (steel/silver).
3. **SpecTable** — item (hanger bolt / T-head / mid-clamp / end-clamp / module clamp / hex set / EPDM washer / rail splice / grounding lug) × size range × material (SS 304 / 316 / HDG MS) × standard. Row count per brief. `.mono-numbers`.
4. **Variant block** — size × head × drive × coating matrix (count per brief).
5. **Decision block** — "Which clamp / which bolt for which rail?" tree (Schletter / K2 / Mounting Systems / generic MMS compatibility).
6. **Applications grid** — rooftop / ground-mount / carport / floating / BIPV cards.
7. **"Where it fits" cross-link grid** — `/industries/solar-mounting-fasteners/`, `/materials/stainless-steel-fasteners/`, `/products/hex-bolts-nuts/`, `/products/custom-fasteners/`.
8. **Quality / MTC block** — EN 10204 3.1 MTC on request; link `/quality/`.
9. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD mirrors.

## 5. Verification-pending protocol
Any claim not in verified client data or a public standard (specific MMS brand compatibility, per-size inventory, project refs) → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors (ignore pre-existing warning)
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/products/solar-accessories"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. SpecTable rows + variant count + applications + FAQ count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
