# Build Prompt — About Page

Route: /about/
Classification: n/a (company page — no Product schema)
Cluster: C02
Priority: P1
Primary keyword: fastener manufacturer ahmedabad
Brief: `docs/content/content-briefs/about.md`
Status at prompt-write time: stub rendering `<StubPage>`; replace with full page.
Expected commit: ONE coherent commit on `develop` with `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`. Do NOT push. Do NOT touch `main`.

---

## 0. Cold-start reads (do these first, in order)
1. The brief: `C:\Users\DELL\Desktop\SEO\KpFasteners SEO\docs\content\content-briefs\about.md`
2. `docs/business-profile.md` §1 + §2b — verified NAP, GST, proprietorship, OEM/trading split.
3. The MEMORY note about the Pramod-vs-Kabir name discrepancy — do NOT publish a name until Kabir confirms.
4. `docs/content/reference-defaults.md`.
5. `docs/content-strategy.md` §2 + §4.
6. `docs/technical-seo.md`.
7. `docs/seo/clusters/cluster-plan.md` + `docs/seo/clusters/internal-link-matrix.json`.
8. **Templates to mirror** — at least two:
   - `app/(site)/contact/page.tsx`
   - `app/(site)/request-quote/page.tsx`
   - `app/page.tsx` (homepage composition — About extends the honest OEM+trading narrative)
   - `app/(site)/products/foundation-bolts/page.tsx` (ClassificationBanner pattern)
9. `AGENTS.md` §9–§11, §13, §22, §38.
10. `srgfasteners.com-audit/findings/{content,schema,sxo,ai-search,local}.md`.

## 1. Classification + schema behaviour
Company-info page → `AboutPage` + `Organization` + `LocalBusiness`. The `LocalBusiness` node here is the same entity as the homepage's — reference by `@id`, don't duplicate the property set; link `sameAs`, `address`, `geo`, `openingHoursSpecification` only on the canonical homepage node. **No** `Product` builder. **Never** `AggregateRating`, invented awards, invented certifications.

## 2. On-page SEO contract
One `<h1>`; H2→H3 only. Title 50–60 chars primary-keyword-first + `| KP`. Meta 150–160 chars value prop + RFQ CTA. Canonical `https://kpfasteners.com/about/`. OG+Twitter via `buildMetadata()`. `BreadcrumbList` JSON-LD. Remove stub `noindex`. ≥3 contextual body links (quality, products hub, foundation-bolts, custom-fasteners, contact per matrix); ≥2 inbound predicted. Descriptive anchors. Alt on every image. `.mono-numbers` on numeric columns.

## 3. Design + format contract
Existing components (`Container`, `Section`, `Heading`, `Prose`, `Button`, `Card`, `Accordion`, `Breadcrumbs`, `ClassificationBanner`, `VerificationRequired`). Utility classes: buttons, badges, glass/metallic, gradient text, `.mono-numbers`. Alternating section cadence. Hero H1 `.text-gold-gradient`. One primary CTA; secondaries phone + WhatsApp. `MobileConversionBar` is site-wide. No dark-mode selectors. Tap ≥48×48. No overflow at 320 px. `next/image` explicit sizes. Fonts Inter / Outfit / JetBrains Mono.

## 4. Section-by-section build spec
Honest OEM-vs-trading narrative is the spine of this page. Counts come from the brief.

1. **Hero** — Container + Heading(hero) + sub (one sentence: who, where, since when). Dual CTA. Image `/product-images/about/facility.jpg` (placeholder OK + VERIFICATION PENDING for actual facility photo).
2. **Honest OEM-vs-trading narrative** — two-column or stacked card: "What we manufacture ourselves" (foundation bolts, stud bolts, sag rods, scaffold accessories; drawing-based custom within capability window) vs "What we trade & distribute" (hex, csk, allen, tie rods, solar accessories, high-tensile property-class). Each item links.
3. **Where we're located** — Ahmedabad address + verified NAP block (pull from `docs/business-profile.md`); embedded map OR static map placeholder. Phone + WhatsApp buttons.
4. **Business facts** — GST 24ARDPP9803A1Z3 · Proprietorship · Year established (VERIFICATION PENDING) · typical dispatch radius (India-wide). `.mono-numbers`.
5. **How we operate** — process block: enquiry → RFQ → sample → bulk → MTC + despatch.
6. **Quality snapshot** — one short block linking `/quality/` for the full story.
7. **Industries served** — chip row linking to each `/industries/*` page.
8. **Products overview** — card grid linking all 9 product pages.
9. **FAQ Accordion** — count per brief (owner intro, trade-licence, GST, dispatch); `FAQPage` JSON-LD.
10. **CTA band** — RFQ + phone + WhatsApp.
11. **Breadcrumbs** at top; `BreadcrumbList` JSON-LD.

## 5. Verification-pending protocol
- Owner name (Pramod vs Kabir discrepancy — open per MEMORY) → `{/* VERIFICATION PENDING: owner legal name — Pramod per URC vs Kabir per practice? — ref: business-profile.md §1 */}`
- Year established, facility size, employee count, specific OEM equipment list → VERIFICATION PENDING markers.
- Awards, certifications beyond GST+URC → do NOT publish; marker.

## 6. Acceptance gates
- `npx tsc --noEmit` → 0
- `npx eslint .` → 0 errors
- `node scripts/check-contrast.mjs` → ALL PAIRS PASS
- `npx next build` → 0, route `○ Static`
- `grep -r "aggregateRating\|AggregateRating" "app/(site)/about"` → empty
- `grep -rn "LocalBusiness" "app/(site)/about"` → references `@id` only, no duplicate address/geo property-set
- Visual parity with §0.7 templates
- Metadata 50–60 / 150–160; one `<h1>`; no `H2→H4`
- `data/routes.ts` has `pendingContent: false`
- ONE coherent commit on `develop` with Co-Authored-By line

## 7. Report back (≤ 300 words)
1. Final title + meta description + char counts.
2. FAQ count + internal-link count.
3. Every `{/* VERIFICATION PENDING */}` marker (file + line + what's needed) — flag owner-name specifically.
4. tsc / eslint / contrast / build exit codes.
5. Deviations + why.
6. Commit hash.
