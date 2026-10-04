# Build Prompt — Stainless Steel Fasteners (Material Page)

Route: /materials/stainless-steel-fasteners/
Classification: ambiguous (material hub; routes to OEM anchors + trading hex/csk via internal links)
Cluster: C16
Priority: P1
Primary keyword: stainless steel fasteners manufacturer
Brief: `docs/content/content-briefs/stainless-steel-fasteners.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\stainless-steel-fasteners.md`
2. `docs/business-profile.md` §1 + §2b — verified NAP, OEM/trading split.
3. `docs/content/reference-defaults.md` — Kabir-benchmarked defaults.
4. `docs/content-strategy.md` §2 (banned phrases) + §4 (brief template).
5. `docs/technical-seo.md` — metadata rules (title 50–60, meta 150–160, canonical trailing-slash).
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json` — cluster + internal-link block.
7. **Templates to mirror** (study at least two):
   - `app/(site)/products/foundation-bolts/page.tsx` (OEM reference)
   - `app/(site)/products/stud-bolts/page.tsx` (OEM reference, cleaner variant pattern)
   - `app/(site)/products/sag-rods/page.tsx` (OEM; BreadcrumbList JSON-LD pattern)
   - `app/(site)/products/scaffold-accessories/page.tsx` (ambiguous classification)
   - `app/(site)/contact/page.tsx` + `app/(site)/request-quote/page.tsx` (non-product pages)
   - `app/page.tsx` (homepage composition shape)
8. `AGENTS.md` §9–§11 (content), §13 (schema), §22 (design tokens), §38 (never-do list).
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md` — competitor gaps + SRG-template banned phrases.

## 1. Classification + schema behaviour
This is a **material hub**, not a single SKU. Emit `WebPage` (or `CollectionPage` if you render a grade grid) + `BreadcrumbList` + `FAQPage`. No `Product` builder at page level. Render `<ClassificationBanner classification="ambiguous" />` with wording clarifying grade-by-grade split (A2-70 / A4-80 OEM for anchor applications; general SS hex/csk trading from vetted mills).

**Explicitly NEVER:** `AggregateRating`, fake `Offer` with invented price, duplicate `Organization` nodes (use `@id` ref).

## 2. On-page SEO contract (every page must satisfy)
- Exactly one `<h1>`.
- Heading hierarchy H2 → H3, no skips.
- Title tag 50–60 chars, primary keyword front-loaded, `| KP` suffix.
- Meta description 150–160 chars, specific value prop + RFQ CTA.
- Canonical: `https://kpfasteners.com/materials/stainless-steel-fasteners/`.
- OG + Twitter via `lib/seo.ts buildMetadata()`.
- `BreadcrumbList` JSON-LD. Remove stub `noindex`; set `robots: { index: true, follow: true }`.
- No duplicate `h1` / title site-wide.
- ≥ 3 contextual outbound internal links in body; ≥ 2 inbound predicted (homepage, products hub, solar-accessories, foundation-bolts per `internal-link-matrix.json`).
- Descriptive anchors; no "click here" / "learn more" / "read more".
- Alt text on every image; `priority` only on hero `<Image>`.
- `.mono-numbers` on every tabular numeric column.

## 3. Design + format contract (every page)
Use existing components: `Container`, `Section` (default | alt), `Heading` (hero | section | subsection | card), `Prose`, `Button`, `Card` (default | glass | metallic), `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`, `VerificationRequired`. Utility classes: `.btn-primary`, `.btn-secondary`, `.btn-whatsapp`, `.badge-gold`, `.badge-steel`, `.badge-green`, `.glass-panel`, `.metallic-card`, `.text-gold-gradient`, `.text-chrome-gradient`, `.mono-numbers`. Alternating section cadence default→alt→default. Hero H1 uses `.text-gold-gradient` on brand/material word. One primary CTA visible; secondaries = phone + WhatsApp. `MobileConversionBar` is site-wide — do NOT re-insert. No dark-mode selectors. Tap targets ≥ 48×48. No horizontal overflow at 320 px. `next/image` with explicit sizes + alt. Fonts: Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Translate the brief outline into these ordered sections (row counts, grade rows, FAQ counts come from the brief — do not invent):

1. **Hero** — Container + Heading(hero) + sub + dual CTA (Request Quote / WhatsApp). Image slot: `/product-images/stainless-steel/hero.jpg` (placeholder OK; add VERIFICATION PENDING marker if asset missing).
2. **ClassificationBanner** — ambiguous, custom copy per §1.
3. **Grade decision tree (REQUIRED for material pages)** — accordion or decision block: A2-70 vs A4-80 vs 316L vs duplex — environment / corrosion / cost tradeoff. Pull rows from brief.
4. **GradeTable** — grade, EN/ASTM equivalent, tensile MPa, yield MPa, typical use (row count from brief). Use `.mono-numbers`.
5. **Form-factor cross-link grid** — Cards linking to hex-bolts-nuts, csk-allen-bolts, foundation-bolts, sag-rods, stud-bolts, solar-accessories, custom-fasteners (per `internal-link-matrix.json`).
6. **Industry fit strip** — chips → `/industries/solar-mounting-fasteners/`, `/industries/construction-infrastructure/`, `/industries/automotive-heavy-engineering/`.
7. **Quality / MTC block** — EN 10204 3.1 MTC on request; link `/quality/`.
8. **FAQ Accordion** — count per brief; wrap in `FAQPage` JSON-LD.
9. **CTA band** — RFQ + phone + WhatsApp.
10. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD mirrors.

## 5. Verification-pending protocol
Any claim not in verified client data or a public standard → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant. Grep must find every marker.

## 6. Acceptance gates (run before commit)
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors (ignore the one pre-existing `eslint.config.mjs` warning)
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route prerendered as `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/materials/stainless-steel-fasteners"` → empty
- Visual parity with templates in §0.7
- Metadata within 50–60 / 150–160; one `<h1>`; no `H2→H4` skip
- `data/routes.ts` entry has `pendingContent: false`
- ONE coherent commit on `develop` with the Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Grade-table row count + FAQ count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
