# Build Prompt — Construction & Infrastructure Fasteners (Industry Page)

Route: /industries/construction-infrastructure/
Classification: ambiguous (routes to foundation-bolts/stud-bolts/sag-rods OEM + hex-bolts-nuts trading)
Cluster: C18
Priority: P2
Primary keyword: construction fasteners supplier
Brief: `docs/content/content-briefs/construction-infrastructure.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\construction-infrastructure.md`
2. `docs/business-profile.md` §1 + §2b.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** (at least two):
   - `app/(site)/products/foundation-bolts/page.tsx`
   - `app/(site)/products/stud-bolts/page.tsx`
   - `app/(site)/products/sag-rods/page.tsx`
   - `app/(site)/products/scaffold-accessories/page.tsx`
   - `app/(site)/contact/page.tsx` + `app/(site)/request-quote/page.tsx`
   - `app/page.tsx`
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
Industry hub → `WebPage` + `BreadcrumbList` + `FAQPage`. No page-level `Product`. `<ClassificationBanner classification="ambiguous" />` with wording: "Construction fasteners — OEM for foundation bolts, stud bolts, sag rods; trading hex/csk from vetted mills." **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars with value prop + RFQ CTA. Canonical `https://kpfasteners.com/industries/construction-infrastructure/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (foundation-bolts, stud-bolts, sag-rods, scaffold-accessories, hex-bolts-nuts per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image; `priority` on hero only. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Use: `Container`, `Section` (default|alt), `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`, `VerificationRequired`. Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 uses `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide — do NOT re-insert. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` with explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/construction/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — ambiguous (see §1).
3. **Fastener stack per project type (REQUIRED)** — matrix: PEB column base · industrial shed · bridge · precast · high-rise core · road furniture · substation. Each row = foundation bolt type (J/L/HD/U) + stud + sag rod + scaffold accessories + hex grade + MTC note. Pull from brief.
4. **SpecTable** — fastener × grade × typical size range × standard (IS 5624, IS 1367, ASTM F1554).
5. **IS / ASTM standards block** — compact table.
6. **Cross-link grid** — Cards → foundation-bolts, stud-bolts, sag-rods, scaffold-accessories, hex-bolts-nuts, high-tensile-fasteners, custom-fasteners.
7. **Quality / MTC block** — EN 10204 3.1 MTC; link `/quality/`.
8. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
9. **CTA band** — RFQ + phone + WhatsApp.
10. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/industries/construction-infrastructure"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Spec-table + FAQ counts + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
