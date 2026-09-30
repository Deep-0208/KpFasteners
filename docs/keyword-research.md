# Keyword Research — KP Fasteners

**Method note:** This planning pass did not invoke Google Keyword Planner, Ahrefs, SEMrush, DataForSEO, Google Search Console, or any live SERP API. Search-volume / difficulty numbers below are therefore recorded as **NEEDS VERIFICATION** — they must be replaced with observed values before any page is written. Intent classification and business-relevance judgements are safe to make from first principles because they depend on procurement behaviour, not on live data.

The live keyword pull happens in the first execution-phase task (see [`seo-roadmap.md`](seo-roadmap.md)) via `/seo-cluster`, `/seo-dataforseo`, and `/seo-google`.

---

## 1. Keyword universe scope

We research **only** keywords tied to a product KP verifiably makes or trades, a material KP verifiably supplies, an industry KP verifiably serves, or a standard KP can verifiably quote against. Anything else is dropped regardless of search volume.

Product coverage is subject to the client questionnaire — until then the categories below are the *safe defaults* to research (the ones that no Ahmedabad fastener maker+trader would plausibly not touch). Any category the client crosses off gets removed from the map.

---

## 2. Intent buckets

| Bucket | Definition | KP treatment |
|---|---|---|
| **Transactional B2B** | Buyer is ready to send an RFQ ("hex bolt manufacturer ahmedabad", "supplier of din 931 bolts") | Highest priority. Owns a canonical product / category / location page. |
| **Commercial investigation** | Buyer is comparing options ("ss 304 vs ss 316 bolts", "grade 8.8 vs 10.9 hex bolt") | High priority. Answered as a section inside a commercial page — never a standalone thin comparison page. |
| **Informational — high-value** | Buyer researches specs before shortlisting ("din 933 dimensions", "salt spray hours zinc plating") | Medium priority. Answered inside a materials / standards page or as one guide. |
| **Informational — low-value** | Consumer DIY ("how to remove a rusted bolt") | **Rejected.** Not our audience. |
| **Navigational** | Brand / URL searches ("kp fasteners", "kp fasteners ahmedabad") | Homepage / Contact page own these; no separate action. |

---

## 3. Seed keywords (to be expanded during live research)

Grouped by cluster. Each seed will feed `/seo-cluster` to build the semantic clusters.

### 3.1 Brand
- kp fasteners
- kp fasteners ahmedabad
- kp fasteners contact
- kp fasteners catalogue

### 3.2 Core product terms
- hex bolts manufacturer
- hex head bolts supplier
- heavy hex bolts
- socket head cap screws
- allen bolt manufacturer
- countersunk bolts
- carriage bolts
- flange bolts
- stud bolts
- threaded rods
- foundation bolts / anchor bolts
- j bolts / u bolts / eye bolts
- hex nuts
- lock nuts / nyloc nuts
- flange nuts
- dome nuts / cap nuts
- coupling nuts
- machine screws
- self-tapping screws
- self-drilling screws
- washers (flat / spring / lock / dock)

*(Final list is gated on client questionnaire B — see [`business-profile.md`](business-profile.md#8-client-questionnaire).)*

### 3.3 Material & grade
- high tensile bolts
- grade 8.8 bolts / grade 10.9 bolts / grade 12.9 bolts
- stainless steel fasteners
- ss 304 bolts / ss 316 bolts / ss 316L bolts
- mild steel fasteners
- alloy steel fasteners
- astm a193 b7 studs
- astm a320 l7 bolts

### 3.4 Standards
- din 933 bolts
- din 931 bolts
- din 934 nuts
- iso 4017 bolts
- iso 4014 bolts
- is 1364 bolts
- astm bolts india

### 3.5 Coatings / finishes
- hot dip galvanised bolts
- zinc plated bolts
- geomet coated fasteners
- black oxide bolts
- ptfe coated bolts

### 3.6 Industry / application
- solar mounting bolts / solar structure fasteners
- wind turbine fasteners
- construction fasteners
- automotive fasteners
- railway fasteners
- prefab / PEB fasteners
- oil and gas stud bolts

### 3.7 Local / geographic
- fastener manufacturer ahmedabad
- fastener supplier gujarat
- bolt manufacturer india
- fastener exporter india
- hex bolt supplier sanand
- fastener dealer rajkot

*(Local sub-terms will only convert to pages if the client confirms real business presence / distribution there. Otherwise they stay as keyword variants inside the national commercial pages.)*

### 3.8 Commercial modifiers (query variants for the pages above)
- manufacturer
- supplier
- dealer
- exporter
- distributor
- factory
- price
- wholesale
- bulk
- custom
- oem

---

## 4. Per-keyword record template

Every keyword that survives clustering will be recorded with:

| Field | Notes |
|---|---|
| Keyword | Exact string |
| Cluster ID | Points to [`seo/keyword-clusters.md`](seo/keyword-clusters.md) |
| Search intent | Transactional / Commercial / Informational / Navigational |
| Monthly volume (India) | Source + date. Mark **NEEDS VERIFICATION** if not measured. |
| KD / Competition | Source + date. |
| SERP page type expected | Manufacturer homepage / product category / IndiaMART listing / blog guide |
| Business relevance | 0–3 (3 = KP definitely does this) |
| Commercial value | 0–3 (3 = high RFQ likelihood) |
| Priority | P0 / P1 / P2 / P3 |
| Target URL | From [`keyword-map.md`](keyword-map.md) |
| Notes | Cannibalisation risks, SERP-feature notes, seasonality |

The populated record set lives in [`keyword-map.md`](keyword-map.md).

---

## 5. Cannibalisation-risk keyword pairs to watch

These pairs commonly cannibalise on fastener sites — plan the split up front:

| Risky pair | Split resolution |
|---|---|
| "hex bolts" (product) vs "hex bolts manufacturer" (commercial) | Same page. Front-load the manufacturer modifier in the title. |
| "hex bolts" vs "hex bolts ahmedabad" | Same page unless the client wants a distinct Ahmedabad landing. Local intent is served by LocalBusiness schema + on-page mention. |
| "stainless steel bolts" vs "ss 304 bolts" | Same page (`/materials/stainless-steel-fasteners/`) with a grade section. |
| "high tensile bolts" vs "grade 8.8 bolts" | Same page (`/materials/high-tensile-bolts/`) with a grade breakdown. |
| "hex bolt" vs "hex head bolt" | Synonym — one page. |
| Any `/m10-hex-bolt/` / `/m12-hex-bolt/` micro-variants | Never as separate pages. Consolidate under the category page's spec matrix. |

Cannibalisation review is repeated every time a new page is proposed (see AGENTS.md §7 5-point check).

---

## 6. Rejected keywords (explicit blocklist)

- DIY / how-to queries ("how to remove stripped bolt", "how to install anchor bolt in concrete") — not our audience.
- Consumer / hardware-store queries ("bolts for sale online", "bolts near me") — mismatched intent.
- Products KP does not make or trade — TBC once catalogue is confirmed.
- Any keyword whose SERP top 10 is dominated by Amazon / Flipkart / McMaster-Carr consumer listings and no B2B manufacturer ranks — do not force it.

---

## 7. Deliverable

Once `/seo-cluster` runs against the seed list above, the clustered output goes to [`seo/keyword-clusters.md`](seo/keyword-clusters.md) and drives the mapping in [`keyword-map.md`](keyword-map.md).

Until that live pull happens, no page copy is written and no page is created.
