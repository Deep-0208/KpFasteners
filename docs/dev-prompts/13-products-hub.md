# Build Prompt — Products Hub

Route: /products/
Classification: n/a (hub — no single Product; 9 cards link to child routes)
Cluster: C06
Priority: P0
Primary keyword: industrial fasteners manufacturer
Brief: `docs/content/content-briefs/products-hub.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\products-hub.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — at least two:
   - `app/page.tsx` (homepage product-strip composition — the hub extends it to all 9 cards)
   - `app/(site)/products/foundation-bolts/page.tsx` (OEM reference for card detail)
   - `app/(site)/products/scaffold-accessories/page.tsx` (ambiguous)
   - `app/(site)/products/stud-bolts/page.tsx` (OEM — second mirror)
   - `app/(site)/contact/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
Hub → `CollectionPage` + `BreadcrumbList` + reference `Organization` via `@id`. **No** `Product` builder here — each product card links to its own page which carries its own `Product` schema. **Never** `AggregateRating`, invented `Offer`, duplicate `Organization` nodes. If using an `ItemList` child inside `CollectionPage`, each `ListItem` points to the child URL only (no inline Product).

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA. Canonical `https://kpfasteners.com/products/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥9 contextual outbound links (one per product); plus ≥3 material / industry links. ≥2 inbound predicted (homepage, nav, every child cross-link). Descriptive anchors. Alt on every image. `.mono-numbers` wherever numbers are tabular.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Breadcrumbs`, `ClassificationBanner`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` with `fill` + `object-contain` on product cards. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Mirror the homepage product-strip composition at section level, but render all 9 cards (not the 4+5 split). Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/products-hub/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **"How we classify what we sell" explainer** — 3-chip legend (OEM gold / Ambiguous inverted-gold / Trading steel-silver) + one sentence each. Links `/about/` and `/quality/`.
3. **9-card product grid** — grouped visually by classification but rendered as one responsive grid:
   - **OEM (4):** foundation-bolts, stud-bolts, sag-rods, scaffold-accessories *(scaffold is ambiguous — place it in the ambiguous row; adjust OEM count to 3)*. Final grouping: **OEM (3)** foundation-bolts, stud-bolts, sag-rods · **Ambiguous (2)** scaffold-accessories, custom-fasteners · **Trading (4)** hex-bolts-nuts, csk-allen-bolts, tie-rods, solar-accessories. Each `Card variant="metallic"` with classification badge, product name, 1-line value prop, image slot (`fill` + `object-contain`), and anchor link.
4. **Material rail** — 2 cards → `/materials/stainless-steel-fasteners/`, `/materials/high-tensile-fasteners/`.
5. **Industry rail** — 3 cards → `/industries/solar-mounting-fasteners/`, `/industries/construction-infrastructure/`, `/industries/automotive-heavy-engineering/`.
6. **Quality strip** — short block + link to `/quality/` (EN 10204 3.1 MTC on every despatch).
7. **CTA band** — RFQ + phone + WhatsApp.
8. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

**Decision to make before building §4:** The spec above groups scaffold-accessories under *ambiguous* (not OEM). If a later brief revision reclassifies it, update both the group label and the count sentence in the explainer — do NOT change the card content.

## 5. Verification-pending protocol
Any card copy not supported by brief or product-page content → `{/* VERIFICATION PENDING: <question> — ref: <brief line> */}` above the card AND inside the `products` data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/products/page.tsx"` → empty
- `grep -c "href=\"/products/" app/(site)/products/page.tsx` → ≥ 9 (one per product)
- Visual parity with homepage product-strip
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Card count by classification + outbound internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why (especially if scaffold grouping changed).
6. Commit hash.
