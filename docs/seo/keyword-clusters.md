# Keyword Clusters — planning template

**Status:** planning scaffolding. The concrete cluster set is generated when `/seo-cluster` runs against the seed list in [`../keyword-research.md`](../keyword-research.md). This file describes the cluster structure that intake feeds into.

Rule of the file: **one cluster ↔ one canonical URL** ([`../keyword-map.md`](../keyword-map.md)).

---

## Cluster template

For every cluster, `/seo-cluster` populates:

```markdown
### Cluster: <name>
- Canonical URL: /...
- Primary keyword: ...
- Cluster keywords (with volumes/KD):
  - keyword — volume — KD — intent
  - ...
- Search intent: transactional / commercial-investigation / informational
- SERP-feature summary: featured snippet? shopping? images? AI Overview?
- Top-3 organic competitors (national + Ahmedabad-local):
  - domain — page
- Cluster owner: <page URL>
- Content brief: docs/content/content-briefs/<slug>.md
```

## Concrete cluster set (v1 — generated 2026-09-29 by `/seo-cluster`)

Full plan lives in [`clusters/cluster-plan.md`](clusters/cluster-plan.md) and [`clusters/cluster-plan.json`](clusters/cluster-plan.json). SERP evidence in [`clusters/serp-observations.md`](clusters/serp-observations.md). Internal-link matrix in [`clusters/internal-link-matrix.json`](clusters/internal-link-matrix.json). Interactive map: [`clusters/cluster-map.html`](clusters/cluster-map.html).

**19 clusters, 58 keywords, 2 merges, 4 rejections.** Volumes / KD still `NEEDS DataForSEO`.

### Anchor clusters (greenfield vs SRG Fasteners)
- **C07** `/products/foundation-bolts/` — `foundation bolts manufacturer` (merges `anchor bolts`; J/L/U/HD sections on-page).
- **C12** `/products/solar-accessories/` — `solar mounting accessories manufacturer` (sibling of C17 industry page).

### Company / brand
- **C01 `/`** — `industrial fasteners manufacturer ahmedabad` (primary), `kp fasteners`, `bolt and nut manufacturer ahmedabad`.
- **C02 `/about/`** — `fastener manufacturer ahmedabad`, `fastener company ahmedabad`, `fastener maker gujarat`.
- **C03 `/quality/`** — `fastener mill test certificate en 10204 3.1`, `fastener quality control`, `bolt tensile testing`, `ppap fasteners`.
- **C04 `/contact/`** — `kp fasteners contact`, `kp fasteners phone number`.
- **C05 `/request-quote/`** — `request fastener quote`, `bolt rfq form`, `fastener quote india`.

### Products
- **C06 `/products/`** — `industrial fasteners manufacturer` (hub).
- **C07 `/products/foundation-bolts/`** — see anchor clusters.
- **C08 `/products/stud-bolts/`** — `stud bolts manufacturer`, `astm a193 b7 studs`, `astm a193 b7m studs`, `double end stud bolts`, `stud bolt with a194 2h nut`.
- **C09 `/products/tie-rods/`** — `tie rod manufacturer`, `formwork tie rod`, `shuttering tie rod`, `16mm tie rod`, `17mm tie rod`, `english/french thread tie rod`.
- **C10 `/products/csk-allen-bolts/`** — `csk allen bolts manufacturer`, `countersunk socket head bolt`, `csk socket screw`, `din 7991 bolt supplier`.
- **C11 `/products/scaffold-accessories/`** — `scaffold accessories manufacturer`, `wing nut manufacturer india`, `tie rod nut supplier`, `anchor nut chuck nut`, `waller plate manufacturer`.
- **C12 `/products/solar-accessories/`** — see anchor clusters.
- **C13 `/products/hex-bolts-nuts/`** — `hex bolts and nuts manufacturer` (**provisional merge** of hex-bolts + hex-nuts; split only if DataForSEO shows non-overlapping SERPs), plus `din 933`, `din 931`, `iso 4017`, `din 934`.
- **C14 `/products/custom-fasteners/`** — `custom fasteners manufacturer`, `oem fastener supplier`, `drawing based fastener manufacturer`, `special fasteners india`.

### Materials
- **C15 `/materials/high-tensile-fasteners/`** — `high tensile bolts manufacturer`, `grade 8.8 / 10.9 / 12.9 bolts`, `grade 8.8 vs 10.9`.
- **C16 `/materials/stainless-steel-fasteners/`** — `stainless steel fasteners manufacturer`, `ss 304 / 316 / 316L bolts`, `ss 304 vs ss 316`, `a2 vs a4 fasteners`, `marine grade fasteners`.

### Industries
- **C17 `/industries/solar-mounting-fasteners/`** — `solar mounting bolts supplier`, `solar structure fastener supplier`, `rooftop solar fasteners`, `ground mount solar bolts`. Mandatory cross-link with C12.
- **C18 `/industries/construction-infrastructure/`** — `construction fasteners supplier`, `infrastructure bolts india`, `peb fasteners`, `prefab building bolts`.
- **C19 `/industries/automotive-heavy-engineering/`** — `automotive fasteners manufacturer`, `oem automotive fasteners india`, `heavy engineering bolts` (publish only if the client confirms serving these OEMs).

## Cannibalisation protection

Cluster overlaps to watch (see also [`../keyword-research.md` §5](../keyword-research.md#5-cannibalisation-risk-keyword-pairs-to-watch)):

| Overlap | Resolution |
|---|---|
| "hex bolts manufacturer" appears in both `/products/hex-bolts/` and `/` | Homepage targets *industrial fasteners manufacturer* (broader); category page owns the product-specific query. |
| "high tensile hex bolts" between `/products/hex-bolts/` and `/materials/high-tensile-fasteners/` | Category page owns the transactional query; materials page owns the *high tensile bolts manufacturer* comparison/decision query. Cross-link. |
| "ss 304 hex bolts" between category and material | Category page (`/products/hex-bolts/#stainless`) with cross-link to material page. |
| "solar bolts" across `/industries/solar-mounting-fasteners/` and `/products/hex-bolts/` | Industry page owns the sector query. Product page owns the SKU query. |

## Rejected clusters

- Any cluster whose top-10 SERP is dominated by consumer marketplaces (Amazon India, Flipkart) — B2B page will not convert.
- Any cluster for products KP does not make or trade (post-questionnaire pruning).
- Any city-permutation cluster ("hex bolts in surat", "fasteners in rajkot") unless real business presence justifies a page.

## Refresh cadence

- After first live pull.
- After every major catalogue change.
- Quarterly, using fresh GSC query data (drop dead clusters, promote emerging ones).
