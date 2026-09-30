# Master Plan — End-to-End Flow

Reads left-to-right: what we know → what we plan → what we build → what we monitor. Each stage links to its own document.

---

## Stage 1 — Business

- **Verified:** KP Fasteners, Ahmedabad-based industrial fasteners maker + trader, contact = Mr. Pramod Panchal, +91 98982 30448, 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad – 380024.
- **Open:** product catalogue, materials + grades, standards, coatings, industries served, certifications, MOQ, lead time, export capability.
- **Blocker:** the [client questionnaire](business-profile.md#8-client-questionnaire) must be answered before Phase A of dev starts.
- **Doc:** [`business-profile.md`](business-profile.md)

## Stage 2 — Repository

- **State:** GitHub repo `git@github.com:Deep-0208/KpFasteners.git` treated as empty; not clonable from this session.
- **Plan:** Next.js 16 App Router + Tailwind v4 + TypeScript `strict`, adopting the Honeywell reference stack minus ElevenLabs / `react-icons` / `agentation`.
- **Doc:** [`repository-baseline.md`](repository-baseline.md) + [`honeywell-lessons.md`](honeywell-lessons.md)

## Stage 3 — Competitor + market

- **Primary competitor:** srgfasteners.com (Ahmedabad, similar profile).
- **UX/brand reference:** varmoraforge.com — study only, do not clone.
- **Method note:** live crawls not performed in this planning pass. Assumptions flagged `NEEDS VERIFICATION`. First execution-phase task is the live `/seo-audit` + `/seo-technical` on the competitor.
- **Doc:** [`competitor-analysis.md`](competitor-analysis.md) + [`seo/competitor-analysis.md`](seo/competitor-analysis.md)

## Stage 4 — Keywords → intent → clusters

- Seed list drafted covering brand, product, material/grade, standards, coatings, industries, and Ahmedabad-local commercial terms.
- Volumes/KD not populated (live pull scheduled).
- Non-relevant + DIY + consumer terms explicitly rejected.
- **Docs:** [`keyword-research.md`](keyword-research.md) + [`seo/keyword-clusters.md`](seo/keyword-clusters.md)

## Stage 5 — Keyword → page map

- One primary intent → one canonical URL. Every proposed URL registered.
- Cannibalisation guardrails written up front (per-size / per-standard / per-city variants explicitly rejected).
- **Doc:** [`keyword-map.md`](keyword-map.md)

## Stage 6 — Sitemap v1

- 18–20 canonical routes covering trust + hub + categories + materials + industries + conversion + legal.
- Zero location-doorway pages.
- No blog on v1.
- **Doc:** [`sitemap.md`](sitemap.md)

## Stage 7 — Content strategy + briefs

- Editorial voice: technical, precise, industrial. Banned phrases list enforced.
- Reusable brief template. Client-verified proof points required before publish.
- No AI first drafts published without human edit.
- **Doc:** [`content-strategy.md`](content-strategy.md)

## Stage 8 — Internal linking

- Hub-and-spoke, tri-directional, ≥ 3 outbound + ≥ 2 inbound per page, enforced by CI link-audit script.
- No footer keyword clouds.
- **Doc:** [`internal-linking.md`](internal-linking.md)

## Stage 9 — Design

- Light off-white theme derived from the KP logo (silver "K" wrench + gold "P" screw on off-white).
- One brand accent (gold), one supporting steel/navy. Data-first typography and tables.
- No dark mode on v1.
- **Doc:** [`design.md`](design.md)

## Stage 10 — Architecture

- Next.js 16 App Router + RSC-by-default. Static build. Typed `data/` layer. Server-side email via Resend. Empty redirects at launch.
- **Doc:** [`architecture.md`](architecture.md)

## Stage 11 — Technical SEO

- Trailing-slash canonicals, generated `sitemap.xml` + `robots.txt`, JSON-LD via typed builders, `llms.txt` + `catalog.md` after catalogue verification, IndexNow ping script.
- **Doc:** [`technical-seo.md`](technical-seo.md)

## Stage 12 — Conversion

- RFQ + phone + WhatsApp + email (only those channels the client verifiably operates).
- Short RFQ form, drawing upload, honeypot + rate-limit + Resend.
- Every commercial page carries three CTAs (top / mid / bottom) + mobile sticky bar.
- **Doc:** [`conversion-strategy.md`](conversion-strategy.md)

## Stage 13 — Performance, accessibility, security

- CWV thresholds: LCP ≤ 2.0 s, INP ≤ 200 ms, CLS ≤ 0.05 (75th p mobile).
- WCAG 2.1 AA enforced during dev; `axe` in CI.
- HSTS + strict CSP + no client-side secrets; server-side validation on every form.
- **Docs:** [`performance.md`](performance.md), [`accessibility.md`](accessibility.md), [`security.md`](security.md)

## Stage 14 — Development phasing

- Ten phases (A → J) with hard acceptance criteria per phase.
- No page with unresolved `[VERIFICATION REQUIRED]` blocks ships to production.
- **Doc:** [`development-plan.md`](development-plan.md)

## Stage 15 — QA + launch

- Manual cross-browser + cross-device pass.
- Full CWV + accessibility + schema validation.
- DNS, SSL, HSTS, SPF/DKIM/DMARC/CAA.
- Search Console + Bing verification + sitemap submission + IndexNow.

## Stage 16 — Monitoring + iteration

- Daily / weekly / monthly / quarterly / annual cadence per [`seo-roadmap.md`](seo-roadmap.md).
- Data-driven iteration only — no page flooding.
- Quarterly full `/seo-audit`.

---

## Decision hierarchy

Verified client data → Google primary documentation → observed SERP / site evidence → SEO-tool recommendations → assumptions.
Anything not verified stays behind a `[VERIFICATION REQUIRED]` flag.

## What is different vs. a "typical" fastener build

- No mass city landing pages.
- No blog on v1.
- No auto-generated per-size product pages.
- No stock imagery.
- No unverified claims — every certification / capability / grade is client-signed.
- Light theme + logo-native palette (not the industrial-dark cliché).

## What must be true before "build" starts

1. Client questionnaire A–G answered.
2. Repo access + Vercel access + DNS access confirmed.
3. Live `/seo-audit` on the competitor recorded in [`competitor-analysis.md`](competitor-analysis.md).
4. Live `/seo-cluster` results recorded in [`seo/keyword-clusters.md`](seo/keyword-clusters.md).
5. `docs/` + AGENTS.md committed to the repository.

Nothing about this project ships until those five are green.
