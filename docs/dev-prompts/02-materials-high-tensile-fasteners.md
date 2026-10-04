# Build Prompt — High Tensile Fasteners (Material Page)

Route: /materials/high-tensile-fasteners/
Classification: ambiguous (OEM for anchor-grade; trading for general hex 8.8/10.9/12.9)
Cluster: C15
Priority: P1
Primary keyword: high tensile bolts manufacturer
Brief: `docs/content/content-briefs/high-tensile-fasteners.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\high-tensile-fasteners.md`
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
Material hub → `WebPage` + `BreadcrumbList` + `FAQPage`. No page-level `Product`. `<ClassificationBanner classification="ambiguous" />` with wording: "Property-class 8.8 / 10.9 / 12.9 — OEM for anchor applications; general hex trading from vetted mills." **Never** `AggregateRating`, invented `Offer` price, duplicate `Organization` nodes.

## 2. On-page SEO contract
One `<h1>`. H2→H3 only. Title 50–60 chars, primary keyword front-loaded, `| KP` suffix. Meta 150–160 chars with value prop + RFQ CTA. Canonical `https://kpfasteners.com/materials/high-tensile-fasteners/`. OG+Twitter via `lib/seo.ts buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`; set `robots: { index: true, follow: true }`. ≥3 contextual body links (foundation-bolts, stud-bolts, sag-rods, construction & automotive industries per matrix); ≥2 inbound predicted. Descriptive anchors (no "click here"). Alt on every image; `priority` on hero only. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Use: `Container`, `Section` (default|alt), `Heading` (hero|section|subsection|card), `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`, `VerificationRequired`. Classes: `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`, `.badge-gold`, `.badge-steel`, `.badge-green`, `.glass-panel`, `.metallic-card`, `.text-gold-gradient`, `.text-chrome-gradient`, `.mono-numbers`. Alternating section backgrounds. Hero H1 uses `.text-gold-gradient`. One primary CTA; secondaries = phone + WhatsApp. `MobileConversionBar` is site-wide — do NOT re-insert. No dark-mode selectors. Tap ≥48×48. No overflow at 320px. `next/image` with explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Translate the brief verbatim; counts come from the brief, not from invention.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/high-tensile/hero.jpg` (placeholder OK + VERIFICATION PENDING marker).
2. **ClassificationBanner** — ambiguous with property-class copy.
3. **Grade / property-class decision tree (REQUIRED)** — accordion/decision block comparing 8.8 vs 10.9 vs 12.9 (preload, hydrogen embrittlement, coating choice, torque, cost). Pull rows from brief.
4. **GradeTable** — class, ISO 898-1 ref, tensile MPa, yield MPa, hardness HRC, typical use. `.mono-numbers`.
5. **Coating / plating decision block** — HDG vs zinc-plated vs black oxide vs geomet; link `/quality/`.
6. **Form-factor cross-link grid** — Cards → hex-bolts-nuts, foundation-bolts, stud-bolts, sag-rods, csk-allen-bolts, custom-fasteners (per matrix).
7. **Industry fit strip** — chips → `/industries/construction-infrastructure/`, `/industries/automotive-heavy-engineering/`, `/industries/solar-mounting-fasteners/`.
8. **Quality / MTC block** — EN 10204 3.1 MTC on request; link `/quality/`.
9. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant. Grep must find every marker.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors (ignore pre-existing `eslint.config.mjs` warning)
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/materials/high-tensile-fasteners"` → empty
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Grade-table row count + FAQ count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
