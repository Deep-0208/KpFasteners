# Cluster Plan — KP Fasteners (v1)

**Generated:** 2026-09-29
**Method:** SERP-overlap clustering, sample-based, India geo bias. Anchor clusters (foundation-bolts, solar-accessories) got the deepest SERP-mining budget because they are greenfield vs SRG Fasteners.
**Volumes / KD:** `NEEDS DataForSEO` — WebSearch cannot return them.

## Headline numbers

| Metric | Value |
|---|---|
| Total clusters | **19** |
| Total unique keywords clustered | **58** |
| Cluster merges | **2** (foundation ↔ anchor; hex-bolts ↔ hex-nuts provisional) |
| Rejected clusters | **4** (per-standard, per-size, city-doorway, DIY) |
| Anchor clusters (greenfield) | **2** — C07 foundation-bolts, C12 solar-accessories |
| Site page cap | 19 clusters ↔ 19 canonical URLs — within the 15–20 AGENTS.md §8 cap |

---

## Top 3 clusters by commercial value

1. **C07 — Foundation / Anchor Bolts** → `/products/foundation-bolts/`
   - Primary: `foundation bolts manufacturer`. Merges `anchor bolts` (SERP-synonym).
   - SRG has no page here → greenfield. Ahmedabad manufacturer SERP is winnable.
   - Long-tail includes `j type`, `l type`, `ms foundation bolt`, `hd bolt`, `hold down bolt`.

2. **C12 — Solar Accessories** → `/products/solar-accessories/`
   - Primary: `solar mounting accessories manufacturer`. Sibling to C17 sector page.
   - Growth market; no dominant Indian solar-fastener specialist ranking.
   - `NEEDS DataForSEO` for volume validation but SERP shape favours a new B2B entrant.

3. **C14 — Custom Fasteners** → `/products/custom-fasteners/`
   - Primary: `custom fasteners manufacturer`. Different SERP mix from other product clusters (Hitech, BoltyNuts, Caparo, Special Screw India).
   - Highest per-RFQ margin. Owns OEM / drawing-based / non-standard intent.

Runners-up: C08 stud-bolts (oil & gas EPC lane), C11 scaffold-accessories (Ahmedabad-local competitive but not saturated).

---

## Cluster ↔ URL map (concise)

| ID | Cluster | Canonical URL | Primary keyword | Priority |
|---|---|---|---|---|
| C01 | Brand / Home | `/` | industrial fasteners manufacturer ahmedabad | P0 |
| C02 | About | `/about/` | fastener manufacturer ahmedabad | P1 |
| C03 | Quality / MTC | `/quality/` | fastener mill test certificate en 10204 3.1 | P1 |
| C04 | Contact | `/contact/` | kp fasteners contact | P0 |
| C05 | RFQ | `/request-quote/` | request fastener quote | P0 |
| C06 | Products Hub | `/products/` | industrial fasteners manufacturer | P0 |
| **C07** | **Foundation Bolts (ANCHOR)** | `/products/foundation-bolts/` | foundation bolts manufacturer | **P0** |
| C08 | Stud Bolts | `/products/stud-bolts/` | stud bolts manufacturer | P0 |
| C09 | Tie Rods | `/products/tie-rods/` | tie rod manufacturer `[distribution]` | P1 |
| C10 | CSK Allen Bolts | `/products/csk-allen-bolts/` | csk allen bolts manufacturer `[distribution]` | P1 |
| C11 | Scaffold Accessories | `/products/scaffold-accessories/` | scaffold accessories manufacturer | P0 |
| **C12** | **Solar Accessories (ANCHOR)** | `/products/solar-accessories/` | solar mounting accessories manufacturer `[distribution]` | **P0** |
| C13 | Hex Bolts & Nuts | `/products/hex-bolts-nuts/` | hex bolts and nuts manufacturer `[distribution]` | P1 |
| C14 | Custom Fasteners | `/products/custom-fasteners/` | custom fasteners manufacturer `[distribution]` | P1 |
| **C-SAG** | **Sag Rods (OEM, added 2026-09-30)** | `/products/sag-rods/` | sag rods manufacturer | **P0** *(id to be finalised)* |
| C15 | High Tensile (material) | `/materials/high-tensile-fasteners/` | high tensile bolts manufacturer | P1 |
| C16 | Stainless Steel (material) | `/materials/stainless-steel-fasteners/` | stainless steel fasteners manufacturer | P1 |
| C17 | Solar Industry | `/industries/solar-mounting-fasteners/` | solar mounting bolts supplier | P1 |
| C18 | Construction Industry | `/industries/construction-infrastructure/` | construction fasteners supplier | P2 |
| C19 | Automotive / Heavy Eng | `/industries/automotive-heavy-engineering/` | automotive fasteners manufacturer | P2 |

---

## Per-cluster keyword tables

See `cluster-plan.json` for the machine-readable full list. Sample of the two anchor clusters:

### C07 Foundation Bolts — 10 keywords
`foundation bolts manufacturer` (P), `foundation bolts manufacturer ahmedabad`, `anchor bolts manufacturer india`, `ms foundation bolt`, `j type foundation bolt`, `l type foundation bolt`, `hold down bolt supplier`, `u bolt manufacturer`, `hd bolt supplier india`, `foundation bolt price india`.

### C12 Solar Accessories — 8 keywords
`solar mounting accessories manufacturer` (P), `solar structure fasteners`, `mms fasteners`, `solar bolts ss 304`, `solar hex bolt m8 m10`, `t head bolt solar`, `hanger bolt epdm washer`, `solar fastener price`.

---

## Cannibalisation review (keyword-pairs with SERP overlap ≥ 7)

| Pair | Resolution |
|---|---|
| `foundation bolts` ↔ `anchor bolts` | **Merge** into C07. Section-split on-page by shape (J/L/U/hold-down). |
| `hex bolts` ↔ `hex nuts` | **Provisional merge** into C13 for v1. Split only if DataForSEO shows distinct volumes AND non-overlapping top-10 SERPs. |
| `tie rod manufacturer` ↔ `scaffold accessories manufacturer` | **Keep separate** (C09, C11). Overlap ~6, below 7 threshold. Enforce 3+ cross-links between them. |
| `solar mounting bolts supplier` (industry) ↔ `solar mounting accessories manufacturer` (product) | **Keep separate** (C12, C17). Query intent splits sector vs SKU. Mandatory cross-link both ways. |
| `high tensile bolts manufacturer` (material) ↔ `stud bolts manufacturer` | **Keep separate** (C15, C08). C15 is comparison/decision intent; C08 is oil-and-gas SKU intent. |

No duplicate primary keyword survives across clusters.

---

## Where the plan diverges from `docs/keyword-map.md`

- Keyword-map v0.1 keeps `hex bolts and nuts manufacturer` on `/products/hex-bolts-nuts/` — this plan **keeps it** but flags it as provisional pending a DataForSEO SERP pull. If evidence shows two distinct top-10 SERPs for `hex bolts manufacturer` and `hex nuts manufacturer`, split into two URLs and update the map + this file.
- Homepage primary keyword in the map (`industrial fasteners manufacturer ahmedabad`) is retained. No SERP evidence to override it.
- All other URLs and primary keywords in the map are consistent with cluster-level primaries.

---

## Artefacts

- `docs/seo/clusters/cluster-plan.json` — machine-readable, full keyword lists.
- `docs/seo/clusters/cluster-plan.md` — this summary.
- `docs/seo/clusters/internal-link-matrix.json` — adjacency list per tri-directional model.
- `docs/seo/clusters/serp-observations.md` — raw SERP evidence, per group.
- `docs/seo/clusters/cluster-map.html` — interactive SVG visualisation.

---

## Refresh triggers

1. First DataForSEO SERP + volume pull — recluster if any keyword shows SERP overlap ≥ 7 with a different cluster's anchor.
2. Client questionnaire response — if the catalogue narrows or expands, drop / add clusters and update `docs/keyword-map.md` in the same commit.
3. Post-launch GSC query data (90 days) — promote emerging clusters, retire dead ones.
