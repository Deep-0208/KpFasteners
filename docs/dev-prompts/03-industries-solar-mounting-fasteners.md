# Build Prompt — Solar Mounting Fasteners (Industry Page)

Route: /industries/solar-mounting-fasteners/
Classification: ambiguous (industry hub; routes to solar-accessories trading + stainless-steel material + custom-fasteners OEM)
Cluster: C17
Priority: P1
Primary keyword: solar mounting bolts supplier
Brief: `docs/content/content-briefs/solar-mounting-fasteners.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\solar-mounting-fasteners.md`
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
Industry hub → `WebPage` (or `CollectionPage` if rendering a fastener grid) + `BreadcrumbList` + `FAQPage`. No page-level `Product`. `<ClassificationBanner classification="ambiguous" />` with wording: "Solar structure fasteners — SS 304/316 trading from vetted mills; project-spec OEM via `/products/custom-fasteners/`." **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

## 2. On-page SEO contract
One `<h1>`. H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars with value prop + RFQ CTA. Canonical `https://kpfasteners.com/industries/solar-mounting-fasteners/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. `robots: { index: true, follow: true }`. ≥3 contextual body links (solar-accessories, stainless-steel-fasteners, custom-fasteners, hex-bolts-nuts per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image; `priority` on hero only. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Use: `Container`, `Section` (default|alt), `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`, `VerificationRequired`. Classes: `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`, badges, glass/metallic, `.text-gold-gradient`, `.text-chrome-gradient`, `.mono-numbers`. Alternating section cadence. Hero H1 uses `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide — do NOT re-insert. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` with explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Translate the brief verbatim; counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/solar/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — ambiguous (see §1 copy).
3. **Fastener stack per project type (REQUIRED for industry pages)** — accordion/table matrix: Rooftop (residential) · Rooftop (C&I) · Ground-mount utility · Carport · Floating. For each: typical stack (hanger bolt, T-head bolt, mid clamp, end clamp, hex set, EPDM washer, pile anchor, foundation bolt) + grade recommendation (SS 304 vs SS 316 vs HDG MS) + reference standard. Pull rows from brief.
4. **SpecTable** — fastener × grade × size range × typical qty-per-MW (if brief supplies; else VERIFICATION PENDING).
5. **MMS / module-mounting lexicon** — glossary cards (MMS, purlin, rafter, module clamp, grounding lug). Each links to deeper product page.
6. **Grade decision block** — SS 304 vs SS 316 vs HDG for coastal/humid/clean-industrial zones.
7. **Cross-link grid** — Cards → `/products/solar-accessories/`, `/materials/stainless-steel-fasteners/`, `/products/custom-fasteners/`, `/products/hex-bolts-nuts/`, `/products/foundation-bolts/`.
8. **Quality / MTC block** — EN 10204 3.1 MTC; link `/quality/`.
9. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim (per-MW counts, project refs, EPC names) → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant. Grep must find every marker.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors (ignore pre-existing warning)
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/industries/solar-mounting-fasteners"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Spec-table + glossary + FAQ counts + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
