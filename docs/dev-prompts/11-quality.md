# Build Prompt — Quality / MTC Page

Route: /quality/
Classification: n/a (company page — no Product schema)
Cluster: C03
Priority: P1
Primary keyword: fastener mill test certificate en 10204 3.1
Brief: `docs/content/content-briefs/quality.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\quality.md`
2. `docs/business-profile.md` §1 + §2b — verified NAP, OEM/trading split, lab capability.
3. `docs/content/reference-defaults.md`.
4. `docs/content-strategy.md` §2 + §4.
5. `docs/technical-seo.md`.
6. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
7. **Templates to mirror** — at least two:
   - `app/(site)/contact/page.tsx` (non-product page shape)
   - `app/(site)/request-quote/page.tsx` (non-product page shape)
   - `app/(site)/products/foundation-bolts/page.tsx` (for ClassificationBanner usage pattern)
   - `app/page.tsx` (composition)
8. `AGENTS.md` §9–§11, §13, §22, §38.
9. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md` — SRG lacks a credible MTC-first quality page; this is the wedge.

## 1. Classification + schema behaviour
Company-info page → `WebPage` + `FAQPage` + reference `Organization` via `@id`. **No** `Product` builder. **Never** `AggregateRating`, duplicate `Organization`, invented certifications. If there is no ISO/IATF cert, do NOT emit a credential node for it. Render a "Quality documentation available" badge (mirror ClassificationBanner shape via `Card variant="metallic"` or a dedicated callout) — this is NOT the OEM gold banner; use neutral/steel styling.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA. Canonical `https://kpfasteners.com/quality/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (foundation-bolts, stud-bolts, sag-rods, materials/* per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `VerificationRequired`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient` on "Quality". One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
MTC-first positioning. Counts come from the brief.

1. **Hero** — Container + Heading(hero): "EN 10204 3.1 Mill Test Certificates on every despatch" + sub + dual CTA. Image `/product-images/quality/mtc-sample.jpg` (placeholder OK + VERIFICATION PENDING).
2. **"Quality documentation available" badge/callout** — neutral styling (NOT OEM banner).
3. **What an MTC is + what EN 10204 3.1 means** — explainer; link out to EN standard reference (external authoritative).
4. **What our MTCs include** — chemical composition · mechanical properties · dimensional report · heat-treat lot · mill lot traceability (rows per brief).
5. **Honest capability block** — in-house vs external lab (NABL partnership status: VERIFICATION PENDING if unverified). State what we test ourselves (dimensional, thread gauge, hardness) vs what we outsource (chemical, tensile).
6. **Standards we deliver to** — DIN · ISO · IS · ASTM · BS · JIS · customer-print table.
7. **Inspection flow block** — incoming raw → process → final → despatch (visual).
8. **Non-conformance / RMA block** — plain-English policy (lot replace, no quibble if MTC fails).
9. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any claim about certifications we don't physically hold (ISO 9001, IATF 16949, NABL-partner lab name) → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant. Do NOT emit a credential node for anything unverified.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/quality"` → empty
- `grep -r "iso 9001\|iatf\|nabl" "app/(site)/quality" -i` → every hit guarded by VERIFICATION PENDING OR is a plain descriptive mention, no credential node
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. FAQ count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed) — especially around certifications and lab partnerships.
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
