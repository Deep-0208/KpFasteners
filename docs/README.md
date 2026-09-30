# KP Fasteners — Planning Documentation Index

**Domain:** https://kpfasteners.com
**Status:** Planning & research phase only. **No production website code has been created.**
**Prepared:** 2026-09-28
**Governing rulebook:** [`../AGENTS.md`](../AGENTS.md)

This folder contains the evidence-based plan for a professional, light-theme B2B industrial fasteners website. Every recommendation states its evidence, priority, owner, dependency, validation method, and whether client confirmation is required. Nothing in these documents may be treated as an approved business fact unless it is explicitly labelled **VERIFIED**.

## How to read these documents

1. Start with [`master-plan.md`](master-plan.md) — it stitches every discipline together into the end-to-end flow.
2. Read [`business-profile.md`](business-profile.md) to see exactly what is verified vs. what still requires client input.
3. Then follow the discipline you need:

## Document map

### Foundation
- [`business-profile.md`](business-profile.md) — Verified company facts, unknowns, and client-input requests.
- [`repository-baseline.md`](repository-baseline.md) — Current state of the `KpFasteners` GitHub repository.
- [`honeywell-lessons.md`](honeywell-lessons.md) — Reusable practices from the internal Honeywell reference (and what must NOT be reused).

### Research
- [`competitor-analysis.md`](competitor-analysis.md) — SRG Fasteners audit + Varmora Forge design/UX read.
- [`keyword-research.md`](keyword-research.md) — Keyword universe, intent classification, source limitations.
- [`keyword-map.md`](keyword-map.md) — Keyword → canonical URL mapping with cannibalisation controls.

### Strategy
- [`sitemap.md`](sitemap.md) — Version 1 sitemap (≤ 20 pages) with per-page purpose.
- [`content-strategy.md`](content-strategy.md) — Editorial standards + per-priority-page content briefs.
- [`internal-linking.md`](internal-linking.md) — Hub-and-spoke linking model.
- [`conversion-strategy.md`](conversion-strategy.md) — RFQ, phone, email, WhatsApp journeys.
- [`seo-roadmap.md`](seo-roadmap.md) — 90-day, 6-month, and 12-month SEO roadmap.

### Design & UX
- [`design.md`](design.md) — Logo-derived light-theme design system.

### Engineering
- [`architecture.md`](architecture.md) — Next.js App Router structure, data layer, environment.
- [`technical-seo.md`](technical-seo.md) — Metadata, canonical, sitemap, robots, schema, redirects.
- [`performance.md`](performance.md) — Core Web Vitals budget and enforcement plan.
- [`accessibility.md`](accessibility.md) — WCAG 2.1 AA plan.
- [`security.md`](security.md) — Headers, secrets, form-spam protections.
- [`development-plan.md`](development-plan.md) — Phase A → J implementation gates.

### Master
- [`master-plan.md`](master-plan.md) — End-to-end flow: business → research → keywords → clusters → sitemap → content → linking → design → architecture → SEO → dev → QA → launch → monitoring → iteration.

### Deep-dive SEO artefacts (under `seo/`)
- [`seo/competitor-analysis.md`](seo/competitor-analysis.md) — SRG detailed teardown.
- [`seo/keyword-clusters.md`](seo/keyword-clusters.md) — Intent clusters and cluster owners.
- [`seo/sxo-analysis.md`](seo/sxo-analysis.md) — Search-experience gaps and persona mapping.
- [`seo/action-plan.md`](seo/action-plan.md) — Prioritised P0–P3 action list.

## Verification legend

Every fact in these documents carries one of three labels:

- **VERIFIED** — Confirmed from the KP Fasteners business card, logo, or a directly observable source.
- **NEEDS VERIFICATION** — Reasonable inference or industry-standard assumption; must be confirmed before publishing.
- **CLIENT INPUT REQUIRED** — Cannot be inferred at all; the client (Mr. Pramod Panchal) must supply the answer.

Anything not labelled is procedural guidance, not a business claim.

## Session limitations

The following research inputs could not be reached in this planning session and are recorded here so the gap is not hidden:

- **GitHub repository** `git@github.com:Deep-0208/KpFasteners.git` — remote `ls-remote` returned no output (likely empty, private, or auth-gated from this environment). Treated as a **new/empty repository**.
- **Live web crawls** of `srgfasteners.com`, `varmoraforge.com`, `kpfasteners.com`, Google SERPs, Google Keyword Planner, Ahrefs/SEMrush/DataForSEO, Google Search Console, Bing Webmaster, and any other paid API — no browser or paid-API tool was invoked in this planning pass. All competitor and keyword statements below are therefore **structural expectations for that competitor class in Indian industrial fasteners**, not observed metrics. The **CLIENT INPUT REQUIRED** and **NEEDS VERIFICATION** flags call this out per item, and the [`seo-roadmap.md`](seo-roadmap.md) schedules the live audits (`/seo-audit`, `/seo-cluster`, `/seo-technical`, etc.) as the first execution-phase task.

No production website code, page, component, layout, or placeholder business content has been produced. This is a plan.
