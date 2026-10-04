# Build Prompt — Automotive & Heavy Engineering Fasteners (Industry Page)

Route: /industries/automotive-heavy-engineering/
Classification: ambiguous (routes to custom-fasteners OEM + hex/csk/high-tensile trading)
Cluster: C19
Priority: P2
Primary keyword: automotive fasteners manufacturer
Brief: `docs/content/content-briefs/automotive-heavy-engineering.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\automotive-heavy-engineering.md`
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
Industry hub → `WebPage` + `BreadcrumbList` + `FAQPage`. No page-level `Product`. `<ClassificationBanner classification="ambiguous" />` with wording: "Automotive & heavy-engineering fasteners — drawing-based OEM via custom-fasteners; property-class 8.8/10.9/12.9 hex trading from vetted mills. Not IATF 16949 certified — tier-1/tier-2 appropriate only." **Never** `AggregateRating`, invented `Offer`, duplicate `Organization`.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars with value prop + RFQ CTA. Canonical `https://kpfasteners.com/industries/automotive-heavy-engineering/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (custom-fasteners, hex-bolts-nuts, csk-allen-bolts, high-tensile-fasteners per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image; `priority` on hero only. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Use: `Container`, `Section` (default|alt), `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `SpecTable`, `GradeTable`, `ClassificationBanner`, `VerificationRequired`. Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 uses `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide — do NOT re-insert. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` with explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub + dual CTA. Image `/product-images/automotive/hero.jpg` (placeholder OK + VERIFICATION PENDING).
2. **ClassificationBanner** — ambiguous (see §1 wording — include the IATF 16949 disclaimer).
3. **Fastener stack per project type (REQUIRED)** — matrix: chassis / sub-frame · engine mount · heavy-vehicle body · trailer · earth-moving equipment · agri · railway · defence sub-assembly. For each: typical bolt/stud/nut + property class + coating + torque reference. Pull from brief.
4. **SpecTable** — property-class × tensile MPa × yield MPa × typical size × standard (ISO 898-1, DIN 931/933/6914/6916, ASTM A325/A490). `.mono-numbers`.
5. **Coating choice block** — HDG vs ZP vs geomet vs delta-protekt (durability vs tribology).
6. **Capability honesty block** — "What we do NOT do" (safety-critical cat-A automotive; IATF-mandated PPAP). Use `VerificationRequired` or a plain callout.
7. **Cross-link grid** — Cards → custom-fasteners, high-tensile-fasteners, hex-bolts-nuts, csk-allen-bolts, stainless-steel-fasteners.
8. **Quality / MTC block** — EN 10204 3.1 MTC; link `/quality/`.
9. **FAQ Accordion** — count per brief; `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
Any unverified claim (tier-1 customers, specific OEM names, PPAP status) → `{/* VERIFICATION PENDING: <question for Kabir> — ref: <brief line> */}` above the section AND inside the data constant.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/industries/automotive-heavy-engineering"` → empty
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
