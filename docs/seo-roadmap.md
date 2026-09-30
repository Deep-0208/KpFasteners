# SEO Roadmap — 0 to 12 months

No ranking or traffic is promised. This is a **cadence + workstream** plan.

---

## Pre-launch (Weeks -6 → 0)

- Complete Phases A–J of [`development-plan.md`](development-plan.md).
- Live audits (first execution-phase task, before content briefs are finalised):
  - `/seo-audit` on `srgfasteners.com` → replace `NEEDS VERIFICATION` rows in [`competitor-analysis.md`](competitor-analysis.md).
  - `/seo-cluster` on the seed keywords in [`keyword-research.md`](keyword-research.md) → build [`seo/keyword-clusters.md`](seo/keyword-clusters.md).
  - `/seo-content-brief` on P0 pages → attach to `docs/content/content-briefs/`.
  - `/seo-technical` on staging preview → close every P0/P1 finding.
  - `/seo-schema` on staging preview → validate every JSON-LD node.
  - `/seo-sxo` for the homepage + `/products/hex-bolts/` — confirm intent match.
- Client questionnaire fully answered.
- Google Search Console + Bing Webmaster property created (via DNS TXT).

## Month 1 — Baseline

- Production launch (Phase J done).
- Submit sitemap in GSC + Bing.
- IndexNow first submission.
- Register Google Business Profile at 23/4 Ghanshyam Industrial Estate (client action; verification requires a postcard or video).
- List on IndiaMART + TradeIndia + JustDial (client action; ensures NAP consistency).
- Set the analytics baseline (sessions, RFQs, phone-clicks, WhatsApp-clicks).
- Weekly GSC crawl-errors check.

## Month 2

- First `/seo-content` audit of all live pages → tighten titles / descriptions / on-page FAQs based on Search Console query data.
- First `/seo-images` audit once real product photography is live.
- `/seo-geo` check — confirm KP is discoverable in AI Overviews / Perplexity for a couple of brand + product queries.
- If any city cluster shows genuine impressions (not just brand), consider adding a Sanand / Vadodara / Rajkot page — only if client has real business justification (delivery presence). Add via the AGENTS.md §27 gate; do **not** open the location-farm floodgate.

## Month 3

- `/seo-sxo` re-run — persona scoring on live pages.
- First off-page: outreach to a small set of legitimate industry directories, industry press, supplier registries — never PBNs or paid guest-post networks. Log every backlink acquired in `docs/seo/backlinks.md`.
- Consider first evergreen resource guide inside `/materials/stainless-steel-fasteners/` (already planned) — verify with `/seo-content`.

## Month 4–6

- Quarterly `/seo-audit` — full-site.
- Refresh product spec tables against the client's latest catalogue.
- Add second industry page if catalogue verifies the sector.
- Bing indexation health check (Copilot citations often source from Bing).
- Review conversion event trends; iterate CTA copy if RFQ rate is flat.

## Month 7–9

- Re-evaluate whether a blog is justified — only if Search Console shows unmet informational demand around KP's own products (e.g. lots of "how to select" queries hitting the site with high bounce). If yes, plan **2 flagship pieces**, not a content mill.
- Consider adding a `/downloads/` page **only** if the client has a real catalogue PDF ready.

## Month 10–12

- Second full `/seo-audit`.
- Structured-data re-validation.
- CWV field-data 90-day window review.
- Backlink profile review (`/seo-backlinks`).
- Business milestones (new certification, new facility, new capability) → schedule a documented update PR.

---

## Standing cadence (post-launch)

| Cadence | Task |
|---|---|
| Daily | GSC email alerts for indexation / manual actions |
| Weekly | GSC coverage + queries + CTR review; Bing coverage; RFQ inbox check |
| Monthly | Full CWV field review; conversion-event review; competitor SERP spot-check |
| Quarterly | Full site `/seo-audit`; product catalogue refresh; backlink review |
| Annually | AGENTS.md + design-system review |

---

## Priority framework (P0 → P3)

- **P0** — blocks crawl, index, or the buying flow. Fix immediately.
- **P1** — measurable SEO, UX, or conversion impact. Schedule this sprint.
- **P2** — meaningful optimisation. Schedule this quarter.
- **P3** — nice to have. Backlog.

Every SEO ticket carries a priority + owner + evidence link. See [`seo/action-plan.md`](seo/action-plan.md).

---

## What we won't do to chase rankings

- Purchase links.
- Guest-post networks.
- Doorway / city farms.
- Auto-generated pages (`/products/[grade]-[coating]-[diameter]/`).
- Fake reviews or fake case studies.
- Scraped or spun content.
- Hidden text.
- Cloaking.

Any of the above puts kpfasteners.com at risk of manual action for months. Not worth it.
