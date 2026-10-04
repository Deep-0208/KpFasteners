# Build Prompt — Privacy Policy

Route: /privacy-policy/
Classification: n/a (legal page — no Product schema; §1 "Classification" doesn't apply)
Cluster: n/a (company/legal page)
Priority: P2
Primary keyword: kp fasteners privacy policy
Brief: `docs/content/content-briefs/privacy-policy.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\privacy-policy.md`
2. `docs/business-profile.md` §1 — verified NAP for the data-controller contact block.
3. `docs/technical-seo.md` — metadata rules.
4. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
5. **Templates to mirror** — at least one legal/non-product template:
   - `app/(site)/contact/page.tsx` (non-product shape)
   - `app/(site)/request-quote/page.tsx`
6. `AGENTS.md` §9–§11, §13, §22, §38.

## 1. Classification + schema behaviour
Legal page → `WebPage` + `BreadcrumbList` only. **No** `Product`, no `AboutPage`, no `FAQPage`, no `Organization` duplication. Reference `Organization` via `@id` only if a contact clause needs it. **Never** `AggregateRating`.

(The template's §1 Classification Banner does NOT apply here — do NOT render `<ClassificationBanner>` on this page.)

## 2. On-page SEO contract
One `<h1>`; H2 clause blocks only (no H3 unless a clause needs sub-points, then H2→H3 only). Title 50–60 chars + `| KP`. Meta 150–160 chars (short description that we collect minimum data for RFQ purposes + lawyer-review notice allowed in meta copy). Canonical `https://kpfasteners.com/privacy-policy/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`; set `robots: { index: true, follow: true }`. ≥2 contextual outbound links (contact page, terms); ≥2 inbound predicted (footer on every page). Descriptive anchors.

## 3. Design + format contract
Existing components: `Container`, `Section`, `Heading`, `Prose`, `Breadcrumbs`, `Card` (for the "lawyer review required" top-note). Utility classes: `.btn-primary` (contact CTA at bottom only), gradient text on hero H1. Single `Section variant="default"` body — alternating cadence is NOT required for a long-text legal page. Hero H1 uses `.text-gold-gradient` on "Privacy". `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. Body text in `<Prose>` wrapper so typography scale is consistent. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Simpler section list than product pages — H2 clause blocks only, no spec tables, no variants, no decision blocks. Counts come from the brief.

1. **Hero** — Container + Heading(hero): "Privacy Policy" + sub (last-updated date). No image.
2. **Top-of-page lawyer-review note** — `Card variant="glass"` with: "This page is a draft. All clauses marked `[LAWYER REVIEW REQUIRED]` need review by a qualified Indian-jurisdiction lawyer (DPDP Act 2023 compliance) before this site goes live for commercial RFQs." Keep visible, not dismissible.
3. **H2 clause blocks** (one per section, each ending with `[LAWYER REVIEW REQUIRED]`):
   - Who we are (data controller: KP Fasteners, Ahmedabad — pull NAP from business-profile)
   - What data we collect (RFQ form fields, call/WhatsApp metadata, analytics)
   - Why we collect it (quote fulfilment, order processing, legitimate business interest)
   - How we store it (where — e.g., email inbox, CRM if any; retention period)
   - Who we share it with (freight carriers, mill partners for trading SKUs, nobody else)
   - Cookies & analytics (which analytics provider, which cookies, opt-out)
   - Your rights (access, correction, deletion, grievance — DPDP Act 2023 rights)
   - Grievance officer (name + email + phone — VERIFICATION PENDING)
   - Changes to this policy
   - Contact for privacy questions (NAP block)
4. **CTA band** — "Questions? Contact us" linking `/contact/`.
5. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

(§4 of the master template's product-page block spec about row counts / variant counts / applications / FAQ counts explicitly does NOT apply here — legal pages are H2 clause blocks only.)

## 5. Verification-pending protocol
Every clause ends with `[LAWYER REVIEW REQUIRED]` (visible on page). Any specific name/contact that we don't have (grievance officer, DPO) → `{/* VERIFICATION PENDING: <what Kabir + lawyer need to supply> — ref: <brief line> */}` above the clause AND inside the data constant. Nothing on this page claims any certification or standard-compliance that hasn't been reviewed.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/privacy-policy"` → empty
- `grep -c "LAWYER REVIEW REQUIRED" "app/(site)/privacy-policy/page.tsx"` → ≥ 10 (one per clause)
- Visual parity with §0.5 templates
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
