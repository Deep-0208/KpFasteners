# Build Prompt — Terms of Use

Route: /terms/
Classification: n/a (legal page — no Product schema; §1 "Classification" doesn't apply)
Cluster: n/a (company/legal page)
Priority: P2
Primary keyword: kp fasteners terms of use
Brief: `docs/content/content-briefs/terms.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\terms.md`
2. `docs/business-profile.md` §1 — verified NAP for the governing-entity clause.
3. `docs/technical-seo.md` — metadata rules.
4. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
5. **Templates to mirror** — at least one legal/non-product template:
   - `app/(site)/privacy-policy/page.tsx` (if the Privacy page build has landed first — mirror structure exactly)
   - `app/(site)/contact/page.tsx` (non-product shape)
6. `AGENTS.md` §9–§11, §13, §22, §38.

## 1. Classification + schema behaviour
Legal page → `WebPage` + `BreadcrumbList` only. **No** `Product`, no `AboutPage`, no `FAQPage`, no `Organization` duplication. Reference `Organization` via `@id` only if the governing-entity clause needs it. **Never** `AggregateRating`.

(The template's §1 Classification Banner does NOT apply here — do NOT render `<ClassificationBanner>` on this page.)

## 2. On-page SEO contract
One `<h1>`; H2 clause blocks only (H2→H3 only when a clause needs sub-points). Title 50–60 chars + `| KP`. Meta 150–160 chars (short description noting these terms govern RFQs, website use, and sample / order dealings + lawyer-review notice allowed). Canonical `https://kpfasteners.com/terms/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`; set `robots: { index: true, follow: true }`. ≥2 contextual outbound links (privacy policy, contact); ≥2 inbound predicted (footer). Descriptive anchors.

## 3. Design + format contract
Existing components: `Container`, `Section`, `Heading`, `Prose`, `Breadcrumbs`, `Card` (for the lawyer-review top-note). Utility: `.btn-primary` (contact CTA at bottom only), gradient text on hero H1. Single `Section variant="default"` body — alternating cadence NOT required for a long-text legal page. Hero H1 uses `.text-gold-gradient` on "Terms". `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. Body text wrapped in `<Prose>` for consistent typography scale. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Simpler section list than product pages — H2 clause blocks only, no spec tables, no variants, no decision blocks. Counts come from the brief.

1. **Hero** — Container + Heading(hero): "Terms of Use" + sub (last-updated date). No image.
2. **Top-of-page lawyer-review note** — `Card variant="glass"` with: "This page is a draft. All clauses marked `[LAWYER REVIEW REQUIRED]` need review by a qualified Indian-jurisdiction lawyer (Indian Contract Act 1872, Sale of Goods Act 1930, Consumer Protection Act 2019, IT Act 2000) before this site goes live for commercial RFQs." Keep visible, not dismissible.
3. **H2 clause blocks** (one per section, each ending with `[LAWYER REVIEW REQUIRED]`):
   - Who these terms are between (user and KP Fasteners, Ahmedabad — pull NAP from business-profile)
   - Acceptance of terms (how use of the site implies acceptance)
   - Website content disclaimer (spec tables are indicative, final spec confirmed in quote)
   - Quotations are not offers (RFQ response is a quote, binding only after PO acceptance + advance per quote terms)
   - Lead-time, availability, pricing changes
   - Product classification — OEM vs trading disclosure (reinforces /about/ + /quality/)
   - MTC & inspection (what we furnish, what buyer must verify on receipt — EN 10204 3.1, lot numbers)
   - Payment, taxes & GST (24ARDPP9803A1Z3)
   - Delivery, risk & title (ex-works vs FOR; incoterms if applicable)
   - Warranty & non-conformance (scope, remedy = replacement; exclusions)
   - Limitation of liability (cap at order value — subject to lawyer review)
   - Intellectual property (trademarks, images)
   - User-submitted drawings / RFQ data (confidentiality + licence to quote)
   - Governing law & jurisdiction (Ahmedabad / Gujarat; India)
   - Dispute resolution (arbitration / courts — lawyer to pick)
   - Changes to these terms
   - Contact for terms questions (NAP block)
4. **CTA band** — "Questions? Contact us" linking `/contact/`.
5. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

(§4 of the master template's product-page block spec about row counts / variant counts / applications / FAQ counts explicitly does NOT apply here — legal pages are H2 clause blocks only.)

## 5. Verification-pending protocol
Every clause ends with `[LAWYER REVIEW REQUIRED]` (visible on page). Any specific values that we don't have (liability cap number, arbitration seat, incoterm default) → `{/* VERIFICATION PENDING: <what Kabir + lawyer need to supply> — ref: <brief line> */}` above the clause AND inside the data constant. Nothing on this page claims any certification or compliance that hasn't been reviewed.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/terms"` → empty
- `grep -c "LAWYER REVIEW REQUIRED" "app/(site)/terms/page.tsx"` → ≥ 15 (one per clause)
- Visual parity with the Privacy page (and §0.5 templates)
- Metadata 50–60 / 150–160; one `<h1>`; H2 clause blocks only
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. Clause count + `[LAWYER REVIEW REQUIRED]` count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed).
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
