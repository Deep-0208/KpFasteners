# Build Prompt — Custom Fasteners (Ambiguous Product Page)

Route: /products/custom-fasteners/
Classification: ambiguous (drawing-based OEM for simple parts within capability; otherwise brokered — handle per SKU)
Cluster: C14
Priority: P1
Primary keyword: custom fasteners manufacturer
Brief: `docs/content/content-briefs/custom-fasteners.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\custom-fasteners.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — at least two:
   - `app/(site)/products/scaffold-accessories/page.tsx` (ambiguous reference)
   - `app/(site)/products/foundation-bolts/page.tsx` (OEM reference)
   - `app/(site)/products/stud-bolts/page.tsx` (variant pattern)
   - `app/(site)/products/sag-rods/page.tsx` (BreadcrumbList)
   - `app/(site)/request-quote/page.tsx` (RFQ flow)
   - `app/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
`product({ ..., classification: 'ambiguous' })` → `seller` only, no `manufacturer`. `<ClassificationBanner classification="ambiguous" />` renders inverted gold with wording "Manufactured & supplied — SKU-specific. Drawing-based parts within our capability window are made in-house; others brokered through vetted mills with full traceability." `BreadcrumbList` + `FAQPage`. **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA (strong — this is the highest-margin page). Canonical `https://kpfasteners.com/products/custom-fasteners/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (foundation-bolts, stud-bolts, sag-rods, high-tensile-fasteners, automotive & solar industries per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`, `VerificationRequired`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient`. One primary CTA (RFQ with drawing upload); secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + "Upload drawing" primary CTA + WhatsApp secondary. Image `/product-images/custom/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — ambiguous (full honesty copy per §1).
3. **Capability window block (REQUIRED)** — in-house vs brokered matrix: diameter range · length range · head types · thread rolling · heat treat · plating · MOQ. Pull from brief.
4. **"What we make vs what we broker" split** — two side-by-side cards; honest demarcation.
5. **Process block** — RFQ → drawing review → sample → PPAP-lite → bulk; estimated lead times (VERIFICATION PENDING if unknown).
6. **SpecTable (standards we deliver to)** — DIN · ISO · IS · ASTM · BS · JIS · customer-print.
7. **Decision block** — "When to pick custom vs standard" tree linking back to standard product pages.
8. **Industry fit grid** — Cards → solar, construction, automotive, heavy-engineering (each links to its `/industries/` page).
9. **Cross-link grid** — Cards → foundation-bolts, stud-bolts, sag-rods, high-tensile-fasteners.
10. **Quality / MTC block** — EN 10204 3.1 MTC on request; dimensional + chemical + mechanical reports; link `/quality/`.
11. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
12. **CTA band** — RFQ + phone + WhatsApp with "attach drawing" prompt.
13. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified capability number (max diameter, max length, min MOQ, lead-time) → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/products/custom-fasteners"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Capability-window + spec-table + FAQ counts + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
