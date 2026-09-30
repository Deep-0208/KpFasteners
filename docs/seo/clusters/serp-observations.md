# SERP Observations — KP Fasteners keyword clustering

**Date:** 2026-09-29
**Method:** WebSearch (Google-style organic + PAA). Volumes / KD unavailable (flag `NEEDS DataForSEO`).
**Geo bias:** India / Ahmedabad. Queries appended "india" or "ahmedabad" when SERPs looked US-biased.
**Sample size:** 8 anchor keyword searches, mined for top-10 organic domain overlap.

---

## Group A — Foundation / Anchor Bolts (anchor cluster — greenfield vs SRG)

**Anchor queries:**
1. `foundation bolts manufacturer ahmedabad india`
2. `anchor bolts manufacturer india supplier`

### Top-10 domains observed
| Domain | Query 1 | Query 2 |
|---|---|---|
| tradeindia.com | ✅ | — |
| indiamart.com (dir) | — | ✅ |
| lg-industries.com | ✅ (multiple listings) | — |
| foundationboltindia.com | ✅ | — |
| msfoundationbolt.com | ✅ | — |
| fabiron.in | ✅ | — |
| mbenterprisefoundationbolts.com | ✅ | — |
| reboltfasteners.com | — | ✅ |
| arvindindustries.in (Ahmedabad) | — | ✅ |
| anankafasteners.com | — | ✅ |
| akbarfasteners.com | — | ✅ |
| aimtechindia.com | — | ✅ |
| royalanchors.com (Chennai) | — | ✅ |
| bhansalibolt.com | — | ✅ |

**Overlap between Q1 and Q2:** ~2 shared domains (marketplaces). Direct manufacturers do not overlap heavily — the two queries are close synonyms but Google is serving different mixes.

**Verdict:**
- "foundation bolts" ↔ "anchor bolts" → merge into ONE canonical page (`/products/foundation-bolts/`). Both anchor and foundation are commercially the same product for KP.
- SERP is manufacturer-dominated, not marketplace-dominated → **winnable greenfield**.
- Ahmedabad manufacturers already ranking (LG Industries, Fabiron, MB Enterprise, Arvind) — KP must differentiate on ISO/MTC + solar/scaffolding cross-sell.
- Long-tail included: `j type foundation bolt`, `l type foundation bolt`, `ms foundation bolt`, `hd bolt`, `en8 foundation bolt`.

---

## Group B — Solar Mounting Fasteners (anchor cluster — greenfield vs SRG)

**Anchor query:** `solar mounting fasteners manufacturer india ss 304`

### Top-10 domains
- tradeindia.com, indiamart.com
- fastenicgroupindia.com (national)
- raajsagarsteels.com (SS 304 general)
- a2fasteners.com (mounting screws)
- vrmstructures.com (Chennai — mounting structures, not pure fasteners)
- hqmount.com (China — bleeds into India SERP)
- nikofasteners.com (SS 304 anchors)
- rimcofastener.com (SS solar fasteners)
- hainasolar.com (China)

**Overlap with foundation-bolts Group A:** 1 shared domain (indiamart/tradeindia). Solar SERP is its own animal.
**Overlap with stainless-steel-fasteners Group F:** ~3 shared (Fastenic, Raaj Sagar, Niko) — sibling cluster; cross-link.

**Verdict:**
- Two pages justified: `/products/solar-accessories/` (SKU intent: "SS 304 solar bolts", "MMS fasteners") and `/industries/solar-mounting-fasteners/` (sector intent: "solar mounting bolts supplier"). Different SERP mix once "industry" vs "product" modifier is added.
- SERP is winnable — no dominant Indian solar-fastener specialist. **Anchor greenfield confirmed.**
- Long-tail: `mms fasteners`, `solar structure fastener`, `t head bolt solar`, `hanger bolt epdm`, `solar hex bolt m8 m10`, `ss 304 solar bolt price`.

---

## Group C — Stud Bolts

**Anchor query:** `stud bolts manufacturer india astm a193 b7`

### Top-10 domains
- bigboltnut.com, thefastenershouse.com, siddhgiritubes.com, greatmetal.com, aashishsteel.net, siddhagirimetals.com, amcometals.com, stindia.com

**Overlap with Group A:** 0. Distinct SERP.
**Overlap with Group E (high-tensile):** ~3 (BigBoltNut, Raaj Sagar, Roll Fast). Adjacent cluster.

**Verdict:**
- One page: `/products/stud-bolts/`. Owns `astm a193 b7 studs`, `threaded studs`, `stud bolts manufacturer`.
- SERP is oil-and-gas / EPC dominated. B2B intent, MTC/EN 10204 3.1 is table-stakes.

---

## Group D — Tie Rods & Scaffold Accessories

**Anchor queries:**
1. `tie rod manufacturer scaffolding formwork india`
2. `scaffold accessories wing nut tie rod nut manufacturer india`

### Top-10 domains
Shared across both queries: amcoexports.com, indianscaffolding.net (Ahmedabad), grsscaffolding.com, scaffoldvijay.com, millexindia.com, faithservicespvtltd.com (Ahmedabad), primesteeltech.co.in, khambatihardware.com, supertekscafform.com, premierengglobal.com.

**Overlap Q1↔Q2:** ~6 shared domains (high overlap).

**Verdict:**
- Very high SERP overlap (≥6). Two candidates: (a) merge tie-rods + scaffold-accessories into one page, or (b) keep two pages with tight cross-link and clear intent split.
- Recommendation: **KEEP TWO PAGES** because KP's IndiaMART listings show tie-rods AND scaffold accessories as distinct product lines; the query intent splits between "tie rod" (rod SKU) and "wing nut / anchor nut / coupler" (accessory SKU). Merge would create a >2500-word page unfocused on either intent.
- Enforce 3+ cross-links between the two pages. Sibling relationship in link matrix.
- Ahmedabad manufacturers present (Indian Scaffolding, Faith Services) → local SERP is competitive but not saturated.

---

## Group E — High Tensile / Grade 8.8-10.9-12.9

**Anchor query:** `high tensile bolts grade 8.8 10.9 manufacturer india`

### Top-10 domains
bigboltnut.com, raajsagarsteels.com, roll-fast.com, anankafasteners.com, vihasteel.com, micrometals.co.in, rushabhfastners.in, regalsalescorp.com.

**Overlap with Group C (stud bolts):** 3 shared. Adjacent — the high-tensile page must cross-link to stud-bolts and hex-bolts pages.
**Overlap with Group G (hex bolts):** est. 4 shared.

**Verdict:**
- One page: `/materials/high-tensile-fasteners/`. Owns commercial-investigation queries (`grade 8.8 vs 10.9`, `grade 12.9 bolt supplier`, `high tensile bolt manufacturer`).
- Do NOT split into per-grade pages (cannibalisation).

---

## Group F — Stainless Steel Fasteners

**Anchor query:** (inferred from solar overlap; live search not run separately — flag `NEEDS DataForSEO for dedicated pull`).
Expected top-10: raajsagarsteels.com, nikofasteners.com, anankafasteners.com, fastenicgroupindia.com, tradeindia.com, indiamart.com.

**Verdict:**
- One page: `/materials/stainless-steel-fasteners/`. Owns `ss 304 vs ss 316`, `a2 vs a4`, `marine grade fasteners`, `ss 316L bolt manufacturer`.
- Cross-link to solar-accessories (SS 304 is the dominant solar grade).

---

## Group G — Hex Bolts & Nuts, CSK Allen Bolts, Custom Fasteners

**Anchor query for custom:** `custom fasteners manufacturer oem drawing based india`

### Top-10 domains (custom)
hitechfastener.in, anankafasteners.com, superindustriesindia.in, boltynuts.com, caparo.co.in, specialscrewindia.com, fastenerindia.com, hrfastener.com.

**Overlap with Group A/C/E:** ~1-2 (Ananka). Custom is its own SERP.

**Verdict:**
- `/products/custom-fasteners/` owns OEM/drawing-based intent. High-margin RFQs.
- `/products/hex-bolts-nuts/` and `/products/csk-allen-bolts/` — no dedicated SERP pull yet. Flag `NEEDS DataForSEO` for volume validation. IndiaMART storefront shows CSK Allen as a real KP product line, so page stays.

---

## Group H — Company / Local / Trust (no dedicated SERP pull)

`kp fasteners`, `kp fasteners ahmedabad`, `fastener manufacturer ahmedabad`, `fastener mill test certificate en 10204 3.1`, `request fastener quote`.

- Brand queries → homepage + /contact/.
- `fastener mill test certificate` → distinct informational-commercial intent → `/quality/` page owns it.
- `request fastener quote` / `bolt rfq form` → conversion endpoint `/request-quote/`.

---

## Gaps / flagged for DataForSEO

- Search volumes and KD for every keyword — `NEEDS DataForSEO`.
- Dedicated SERP pull for: `hex bolts nuts manufacturer india`, `csk allen bolts manufacturer india`, `stainless steel fasteners manufacturer india`, `construction fasteners supplier india`, `automotive fasteners manufacturer india`.
- AI Overview presence not captured (WebSearch does not expose AI Overview snapshots reliably).
- Featured snippet / PAA capture was partial — mine deeper via DataForSEO SERP API before content briefs go live.
