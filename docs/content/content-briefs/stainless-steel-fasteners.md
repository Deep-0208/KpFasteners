# Content Brief: Stainless Steel Fasteners (THE 304 vs 316 Decision Wedge)

> **This is the single highest-value material page on the site.** SRG splits the same intent across three thin pages (`/materials/ss-316/`, `/compare/ss304-vs-ss316/`, `/blog/ss304-vs-ss316-comparison/` — `srgfasteners.com-audit/findings/content.md §3`). KP consolidates everything into one deep guide. The depth wedge is intentional: this page is the hub that pulls all SS traffic to KP and distributes it to the product pages.

Route: `/materials/stainless-steel-fasteners/`
Priority: **P1**
Cluster: **C16 — Stainless Steel (material decision guide)**
Classification: material page — not a Product. No `manufacturer` / `seller` schema field; this is a comparative decision guide.
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Which SS grades KP routinely distributes (SS 202 / 304 / 304L / 316 / 316L / 316Ti / A2 / A4), stocked diameter + length range per grade, PMI capability (in-house instrument or NABL partner only), passivation / pickling discipline (in-house or outsourced), coastal-site project references (anonymised), named NABL partner lab. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** Design engineer or EPC procurement officer at the 304-vs-316 decision step. Rooftop solar? Coastal solar? Food plant? Fertiliser plant? Chemical reactor? Pharma cleanroom? Marine? The reader lands on this page because a procurement spec is ambiguous and they need an authoritative decision tree. Secondary persona: a buyer verifying that a traded SS fastener is **actually** 316 and not 304-labelled-as-316 — a common fraud in the Indian SS fastener trade.
- **Search intent:** Commercial-investigation / informational B2B — the "material-decision wedge" the SRG audit flags as the single largest content gap in the SS SERP. Converts by (a) landing on this page, (b) using the decision tree + PREN table + chemistry comparison to pick a grade, (c) clicking through to the Product page.
- **Query snapshot (top 5, from `docs/seo/clusters/cluster-plan.md` §C16):**
  1. `stainless steel fasteners supplier`
  2. `ss 304 vs ss 316 fastener`
  3. `ss 316 fastener supplier india`
  4. `a4-70 bolt supplier`
  5. `ss fastener coastal corrosion`
- **Why KP wins on this SERP (evidence):**
  - SRG splits the 304-vs-316 intent across three thin pages (`findings/content.md §3`); none ranks well on `ss 304 vs ss 316 fastener`. A single deep hub consolidates the intent and outranks all three on the main query while picking up the long-tails each thin page targeted.
  - PREN table + chemistry side-by-side + magnetic / non-magnetic clarification + passivation discipline do not appear on SRG or on the current top 10. Classic AI-Overview citability.
  - The "how to verify a traded SS grade" subsection (PMI gun + spark test + magnet test + lab chemistry) addresses a specific procurement fear and converts cautious buyers.
  - KP's distribution-honest voice ("we distribute SS fasteners, we do not operate an SS melt") de-risks the specification — the engineer knows what they're buying.

---

## 2. SEO essentials

- **Primary keyword:** `stainless steel fasteners supplier`
- **Secondary keywords (from cluster C16):** `ss 304 vs ss 316 fastener`, `ss 316 fastener supplier india`, `a4-70 bolt supplier`, `ss fastener coastal corrosion`, `pren stainless fastener`, `ss 316l vs 316 vs 316ti`
- **Title tag (58 chars):** `Stainless Steel Fasteners Supplier | SS 304 vs 316 | KP`
  - Alt option (60 chars): `Stainless Steel Fasteners — SS 304 vs 316 Guide | KP`
- **Meta description (160 chars):** `SS 202, 304, 304L, 316, 316L, 316Ti compared: chemistry, PREN, corrosion, magnetism, passivation. Decision tree for solar, coastal, food, pharma. KP Fasteners India.`
- **Canonical URL:** `https://kpfasteners.com/materials/stainless-steel-fasteners/`
- **Open Graph title:** `Stainless Steel Fasteners — SS 304 vs SS 316 Decision Guide`
- **Open Graph description:** `When to spec SS 304, when to upgrade to SS 316, when 316L / 316Ti is needed. PREN values, chemistry, corrosion, passivation. KP Fasteners.`
- **Open Graph image filename:** `og-ss-304-vs-316-decision.webp` (1200x630, side-by-side composition image of SS 304 and SS 316 fasteners with a PREN overlay).
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > Materials > Stainless Steel Fasteners.
  - `WebPage` — `about` references ISO 3506 and ASTM A967 / A380, plus KP `Organization`.
  - `FAQPage` — mapped 1:1 to visible FAQ (§5).
  - `Organization` (inherited).
  - **Do NOT include `AggregateRating`.** No `Product` node.

---

## 3. Content outline (H1 -> H3, ~2,700-3,000 words target)

### H1
`Stainless Steel Fasteners — SS 304 vs SS 316 Decision Guide (and when 316L / 316Ti is needed)`

### H2 — The one-paragraph answer
*60-80 words. SS 304 is the inland / rooftop / general-stainless default. SS 316 adds 2-3% molybdenum for pitting-corrosion resistance in chloride-rich service: coastal, marine, chemical, cement / fertiliser plant atmospheres. SS 304L / 316L (low-carbon) is for welded assemblies. SS 316Ti (titanium-stabilised) is for high-temperature service above ~500 °C. A2-70 and A4-70 are the ISO 3506 property-class designations for 304-based and 316-based mechanical properties.*

### H2 — Grades we distribute
*Honest distribution footer up front.*

- H3 — **SS 202** — budget austenitic (Mn + N substitute for Ni). On-quote only; not recommended for structural / outdoor. Rust-prone despite the "SS" label.
- H3 — **SS 304 (18/8, A2-70)** — the industry workhorse. Chemistry: Cr 18-20 / Ni 8-10.5 / C ≤ 0.08.
- H3 — **SS 304L** — low-carbon variant (C ≤ 0.03) for welded assemblies.
- H3 — **SS 316 (18/10/2, A4-70)** — Mo-bearing, pitting-resistant. Chemistry: Cr 16-18 / Ni 10-14 / Mo 2-3 / C ≤ 0.08.
- H3 — **SS 316L** — low-carbon 316 (C ≤ 0.03) for welded, pharma, cleanroom.
- H3 — **SS 316Ti** — titanium-stabilised 316 for ≥ 500 °C service (chemical / petrochemical). On-quote.
- H3 — **Duplex SS 2205** — for high-chloride / stress-corrosion service. On-quote via custom-fasteners route (`/products/custom-fasteners/`).

### H2 — Chemistry side-by-side
*Table-first. See §4.1.*

### H2 — Mechanical properties under ISO 3506
*See §4.2.*

### H2 — PREN — the single-number pitting-resistance comparison
*The passage-citability engine. See §4.3.*

- PREN = %Cr + 3.3 × %Mo + 16 × %N (austenitic formula).
- SS 304 ≈ 18-20 PREN; SS 316 ≈ 24-27 PREN; SS 316L ≈ same as 316; SS 316Ti ≈ 24-25; Duplex 2205 ≈ 34-38.
- Rule of thumb: PREN < 24 is unsafe in sustained chloride; PREN ≥ 24 is coastal-capable; PREN ≥ 30 is marine-splash-zone capable; PREN ≥ 40 is seawater-immersion grade (super duplex / 254 SMO — out of KP's scope).

### H2 — Corrosion-resistance matrix (environment-by-grade)
*See §4.4.*

### H2 — "Which SS for which service?" — the decision tree
*The engineer's screenshot. See §4.5.*

### H2 — Magnetism and grade purity (common misconception)
*Short, important.*
- 304 and 316 are **austenitic** in the annealed state and are **weakly magnetic to non-magnetic** — but cold-work (thread rolling, cold heading) induces martensite that **makes a 304 fastener feel slightly magnetic**. This is normal.
- A strong magnet pull on an SS fastener does NOT mean the item is "fake 316" or "contaminated". A moderate pull on a cold-headed SS 304 bolt is expected.
- A ferritic / martensitic SS (e.g., SS 410 / 420) is **strongly magnetic by nature** — a different grade family.
- To actually verify grade, use PMI (positive material identification), spark test, or lab chemistry. See the "how to verify" sub-section below.

### H2 — Passivation and pickling
*Short, specific — the sub-section most SS vendors skip.*
- H3 — **Passivation** per ASTM A967 — nitric-acid or citric-acid bath removing free iron from the surface; required after machining / grinding on SS to restore the chromium-oxide passive layer.
- H3 — **Pickling** per ASTM A380 — more aggressive HNO₃ + HF bath removing heat-tint and weld scale.
- H3 — **KP's role** — all SS fasteners distributed by KP are supplied in passivated condition from the originating mill `[CLIENT TO CONFIRM]`; on request, additional pickling-and-passivation is routed to a NABL partner.
- H3 — No chrome plating on SS fasteners — chrome plating is a surface treatment on carbon-steel, not an SS attribute.

### H2 — Temperature range
*Table in §4.6.*

### H2 — How to verify a traded SS grade (the procurement-trust section)
*The anti-fraud section — procurement teams love this.*
- H3 — **MTC EN 10204 3.1** — chemistry from the originating mill.
- H3 — **PMI (positive material identification)** — handheld XRF gun; non-destructive, grade-level identification in seconds. `[CLIENT TO CONFIRM — KP in-house PMI or routed to NABL partner]`.
- H3 — **Spark test** — differentiating austenitic SS from ferritic / plain carbon by spark pattern.
- H3 — **Magnet test** — identifies magnetic SS (410 / 420 / martensitic) but **does NOT distinguish 304 from 316**.
- H3 — **Nitric-acid drop test** — kitchen-chemistry test differentiating 300-series austenitic from 200-series.
- H3 — **Lab chemistry** — the gold standard; sent to NABL partner on request.

### H2 — Available fastener forms (links out)
- H3 — Hex bolts and nuts — `/products/hex-bolts-nuts/` (SS 304 / 316 to DIN 931 / 933 / 934).
- H3 — Stud bolts — `/products/stud-bolts/` (ASTM A193 B8 / B8M for 304 / 316 pressure-service studs).
- H3 — CSK Allen bolts — `/products/csk-allen-bolts/` (SS A2 / A4 to DIN 7991 / 912 / 7380).
- H3 — Solar accessories — `/products/solar-accessories/` (SS 304 / 316 T-head, module clamp bolts, hanger bolts).
- H3 — Foundation bolts — `/products/foundation-bolts/` (SS 304 / 316 cast-in anchorage on quote).

### H2 — FAQ (schema-attached, 5 questions)
See §5.

### H2 — Need help picking SS 304 vs SS 316?
Closing CTA. See §7.

---

## 4. Tables required

### 4.1 Chemistry side-by-side (ASTM A276 / A479 reference)
| Grade | Cr % | Ni % | Mo % | C % max | Mn % max | N % |
|---|---|---|---|---|---|---|
| SS 202 | 17.0-19.0 | 4.0-6.0 | — | 0.15 | 7.5-10.0 | 0.25 max |
| SS 304 | 18.0-20.0 | 8.0-10.5 | — | 0.08 | 2.00 | 0.10 max |
| SS 304L | 18.0-20.0 | 8.0-12.0 | — | **0.03** | 2.00 | 0.10 max |
| SS 316 | 16.0-18.0 | 10.0-14.0 | **2.0-3.0** | 0.08 | 2.00 | 0.10 max |
| SS 316L | 16.0-18.0 | 10.0-14.0 | **2.0-3.0** | **0.03** | 2.00 | 0.10 max |
| SS 316Ti | 16.0-18.0 | 10.0-14.0 | 2.0-3.0 | 0.08 | 2.00 | **Ti 5×(C+N)-0.70** |
| Duplex 2205 | 22.0-23.0 | 4.5-6.5 | 3.0-3.5 | 0.03 | 2.00 | 0.14-0.20 |

*Source:* ASTM A276 / A479 chemistry limits; cross-check against the originating mill TC on dispatch.

### 4.2 Mechanical properties (ISO 3506-1 austenitic fasteners)
| Property class (bolt) | Grade family | Min yield (MPa) | Min UTS (MPa) | Min elong % |
|---|---|---|---|---|
| A2-50 | 304 soft | 210 | 500 | 0.6 d |
| A2-70 | 304 cold-worked | **450** | **700** | 0.4 d |
| A2-80 | 304 strong | 600 | 800 | 0.3 d |
| A4-50 | 316 soft | 210 | 500 | 0.6 d |
| A4-70 | 316 cold-worked | **450** | **700** | 0.4 d |
| A4-80 | 316 strong | 600 | 800 | 0.3 d |

*Source:* ISO 3506-1:2020 Table 3. Elongation column is expressed as a multiple of nominal diameter d.

### 4.3 PREN values (reference)
| Grade | Typical PREN | Service tier |
|---|---|---|
| SS 202 | 15-18 | Indoor only |
| SS 304 | 18-20 | Inland / rooftop / general |
| SS 304L | 18-20 | Welded inland |
| SS 316 | 24-27 | Coastal / chemical / cement / fertiliser |
| SS 316L | 24-27 | Welded coastal / pharma |
| SS 316Ti | 24-25 | High-temperature petrochemical |
| Duplex 2205 | 34-38 | Marine splash zone / stress-corrosion service |

*Formula:* PREN = %Cr + 3.3 × %Mo + 16 × %N (austenitic). Values rounded from midpoint chemistry.

### 4.4 Corrosion matrix (environment × grade)
| Environment | SS 304 | SS 316 | SS 316L | SS 316Ti | Duplex 2205 |
|---|---|---|---|---|---|
| Indoor dry | ✓ | ✓ | ✓ | ✓ | ✓ |
| Rooftop urban | ✓ (default) | ✓ | ✓ | ✓ | ✓ |
| Coastal within ~5 km | **Risk** | ✓ (default) | ✓ | ✓ | ✓ |
| Marine splash zone | ✗ | Marginal | Marginal | Marginal | ✓ (default) |
| Chemical plant (dilute HCl / H₂SO₄) | ✗ | Marginal | Marginal | ✓ | ✓ |
| Pharma / cleanroom | ✓ | ✓ (default) | ✓ (welded) | — | — |
| Food contact (dry) | ✓ (default) | ✓ | ✓ | — | — |
| Food contact (wet, salted) | Risk | ✓ (default) | ✓ | — | — |
| Fertiliser plant atmosphere | Risk | ✓ | ✓ | ✓ | ✓ |
| Cement plant atmosphere | Risk | ✓ | ✓ | ✓ | ✓ |
| ≥ 500 °C sustained | Marginal | Marginal | Marginal | **✓** | — |
| Welded + corrosive service | Risk (sensitisation) | Risk | **✓** | — | **✓** |

### 4.5 Decision tree
```
Is the service within ~5 km of the coast, or involves direct chloride exposure
(sea spray, salt, salted food, fertiliser, cement plant atmosphere)?
  → YES: use **SS 316 (A4-70)**. If welded, use **SS 316L**. If ≥ 500 °C, use **SS 316Ti**.
  → NO:
    Is the service > 500 °C sustained?
      → YES: use **SS 316Ti** (or duplex 2205 for stress-corrosion service).
      → NO:
        Is the assembly welded, and is corrosion resistance critical at the weld HAZ?
          → YES: use **SS 304L** for inland, **SS 316L** for coastal.
          → NO:
            Is this a pharma / cleanroom / food-contact application?
              → YES: use **SS 304** default, **SS 316** for wet salted contact.
              → NO:
                Default: **SS 304 (A2-70)** inland / rooftop.
            
Never spec SS 202 for structural or outdoor use. Never spec duplex 2205 without
confirming your supplier can hold Mo + N chemistry on the lot.
```

### 4.6 Service-temperature range (annealed austenitic)
| Grade | Min continuous (°C) | Max continuous (°C) | Short-exposure max (°C) |
|---|---|---|---|
| SS 304 | -196 | 500 | 870 |
| SS 304L | -196 | 400 | 800 |
| SS 316 | -196 | 500 | 870 |
| SS 316L | -196 | 400 | 800 |
| SS 316Ti | -196 | **750** | 925 |
| Duplex 2205 | -40 | 280 | 300 |

*Source:* ASTM A276 / A479 service-temperature guidance.

---

## 5. FAQs (draft — 5 questions, 2-3 sentence answers)

**Q1: SS 304 vs SS 316 for solar — which grade for which site?**
Inland rooftop and inland ground-mount: **SS 304 (A2-70)** is the industry default and sufficient for a 25-year design life. Within ~5 km of the coast, or on cement / fertiliser plant rooftops: **upgrade to SS 316 (A4-70)**. The upgrade cost is around 20-30 % on the SS fastener line item but is the single highest-leverage decision on the plant's long-term maintenance budget — chlorine-induced pitting on 304 progresses silently and shows up as rust streaks after 3-5 monsoon cycles.

**Q2: Will SS 316 rust in coastal service?**
SS 316 resists chloride-pitting corrosion well up to the near-shore atmosphere (PREN 24-27). In the actual marine splash zone (continuous seawater wetting with evaporation, PREN requirement > 35), SS 316 is marginal — specify duplex 2205 or super-duplex instead. Rust-tea staining on an SS 316 fastener a few months into coastal service is almost always **free iron contamination** from the install (bolt drill-dust, cross-contamination with carbon-steel tools) and is resolved by local passivation per ASTM A967.

**Q3: Does magnet pull on an SS fastener mean it's "fake 316"?**
No. SS 304 and SS 316 are austenitic in the annealed state and are weakly magnetic to non-magnetic — but **cold-work (thread rolling, cold heading) induces martensite** on the thread crests and the head, which makes the finished fastener feel slightly magnetic. A moderate magnet pull on a cold-headed SS 304 bolt is normal and expected. To actually verify grade, use **PMI (handheld XRF)**, a nitric-acid drop test, or send a sample for lab chemistry.

**Q4: What is the difference between SS 316 and SS 316L and SS 316Ti?**
**SS 316** is the general-purpose Mo-bearing austenitic (C ≤ 0.08 %). **SS 316L** is the low-carbon variant (C ≤ 0.03 %) specified for welded assemblies — the lower carbon suppresses sensitisation (chromium-carbide precipitation at grain boundaries) that would otherwise strip the HAZ of its corrosion protection. **SS 316Ti** is titanium-stabilised 316 for sustained service above ~500 °C, where even 316L's low carbon is not enough to prevent sensitisation — titanium ties up the carbon as TiC and keeps chromium available for passivation.

**Q5: What is A2 and A4 — are they the same as SS 304 and SS 316?**
Close, but the designations describe **two different things**. A2 and A4 are the ISO 3506 **austenitic steel group** designations (A2 = 304-based chemistry, A4 = 316-based chemistry). The number after the dash (A2-70, A4-70, A4-80) is the **mechanical property class** — A4-70 means a 316-based bolt with minimum 700 MPa UTS and 450 MPa yield after cold-working. So "SS 316 A4-70" is the full specification an engineer should write on the drawing.

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `ss-304-vs-316-bolt-side-by-side.webp` | SS 304 and SS 316 hex bolts side by side with grade stamps visible | Yes |
| `pren-formula-chart.svg` | PREN formula chart with values for SS 304 316 316L 316Ti and duplex 2205 | Site-produced illustration |
| `corrosion-rust-tea-staining.webp` | Rust-tea staining on SS 304 in coastal service showing free iron contamination | Yes or stock-neutral |
| `pmi-xrf-gun-grade-check.webp` | PMI XRF gun verifying grade on an SS 316 bolt | Yes or illustration |
| `austenitic-vs-ferritic-magnetism.svg` | Diagram comparing magnet response on austenitic 304/316 vs ferritic 410/420 | Site-produced illustration |
| `passivation-nitric-citric-bath.webp` | Passivation bath per ASTM A967 at NABL partner facility | Yes or illustration |
| `ss-fastener-grade-decision-tree.svg` | SS 304 vs 316 vs 316L vs 316Ti decision tree diagram | Site-produced illustration |
| `hero-ss-fasteners-kp.webp` | Mixed SS 304 and SS 316 fastener inventory at KP Fasteners Ahmedabad | Yes |

No stock renders.

---

## 7. CTA

- **Primary CTA:** `Request an SS fastener quote` -> `/request-quote/?material=stainless-steel`
- **Secondary CTA:** `WhatsApp a 304-vs-316 question` -> `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20SS%20grade-selection%20help%3A%20Application%3A%20%5B%5D%2C%20Environment%3A%20%5B%5D%2C%20Coastal%20distance%3A%20%5Bkm%5D%2C%20Service%20temperature%3A%20%5B%5D%2C%20Welded%3F%20%5BY%2FN%5D`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)
- **Email:** `sales@kpfasteners.com`

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C16 node)

### Inbound
- `/` (anchor: **"Stainless steel decision guide — SS 304 vs SS 316"**)
- `/products/hex-bolts-nuts/` (anchor: **"SS 304 and SS 316 hex bolts"**)
- `/products/stud-bolts/` (anchor: **"ASTM A193 B8 / B8M stainless studs"**)
- `/products/csk-allen-bolts/` (anchor: **"SS A2 / A4 socket-head screws"**)
- `/products/solar-accessories/` (anchor: **"SS 304 vs SS 316 for solar service"**)
- `/products/foundation-bolts/` (anchor: **"stainless foundation bolts on quote"**)
- `/materials/high-tensile-fasteners/` (anchor: **"carbon-steel high-tensile equivalent"**)
- `/industries/solar-mounting-fasteners/` (anchor: **"coastal solar grade decision"**)
- `/industries/construction-infrastructure/` (anchor: **"SS fasteners for infrastructure"**)

### Outbound
1. `/products/hex-bolts-nuts/` — anchor: **"SS 304 / 316 hex bolt family"**.
2. `/products/stud-bolts/` — anchor: **"SS 316 pressure studs (A193 B8M)"**.
3. `/products/csk-allen-bolts/` — anchor: **"SS A4-70 socket cap screws"**.
4. `/products/solar-accessories/` — anchor: **"SS 304 / 316 solar MMS fasteners"**.
5. `/products/foundation-bolts/` — anchor: **"stainless foundation bolts"**.
6. `/materials/high-tensile-fasteners/` — anchor: **"carbon-steel high-tensile grade decision"**.
7. `/products/custom-fasteners/` — anchor: **"duplex 2205 and specialty stainless on drawing"**.
8. `/quality/` — anchor: **"PMI verification and NABL partner tensile"**.
9. `/request-quote/` — anchor: **"send an SS fastener BOQ"**.

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `foundation-bolts.md §9`. In addition on this page:
  - "Marine-grade stainless" without specifying 316 vs. duplex (the term is ambiguous and often misleading).
  - "Food-grade stainless" without 304 vs. 316 context and the service-condition caveat.
  - "100 % rust-proof" — SS pits; SS 304 rust-tea stains in coastal service; this adjective is banned.
  - "Highest-purity 316" — meaningless without an MTC + PMI.
- **Length target:** 2,700-3,000 words.
- **Tone anchors:** materials-science voice; honest about SS 304's chloride failure mode; procurement-trust anti-fraud sub-section is non-negotiable.
- **Do-not-fabricate list, page-specific:**
  - No PREN value outside the midpoint-chemistry calculation.
  - No salt-spray hour-count on SS. SS does not fail by uniform corrosion; B117 is not the right test.
  - No "all our SS 316 contains ≥ 2.5 % Mo" claim without lot-by-lot MTCs.
  - No PMI-in-house claim unless `[CLIENT CONFIRMS]`.
  - No "IS stainless grade X equivalent" without the actual IS 6603 / IS 1570 Part 5 reference.
  - **No `AggregateRating`.**

---

## 10. Client questions to close before publish (page-specific)

1. Confirm **SS grade coverage** — 304 / 304L / 316 / 316L confirmed; is 316Ti stocked or on-quote? Is duplex 2205 strictly custom-fasteners route?
2. Confirm **SS 202** position — is it ever supplied under KP's dispatch? If no, mention in copy as "we do not supply SS 202 for structural or outdoor service" (a trust move). If yes, note the budget caveat.
3. Confirm **PMI in-house or NABL partner** — single most-asked verification question.
4. Confirm **passivation discipline** — is passivation always done at the originating mill, or does KP route to a partner on specific orders?
5. Confirm **named NABL partner** for lab chemistry on SS verification (optional on page).
6. Confirm **real photographs** we may use (304 vs 316 side-by-side, rust-tea staining example, PMI gun in use). Written permission per `business-profile.md §8`.
7. Confirm **anonymised coastal project reference** we may cite (e.g., "250 kW rooftop SPV in Mumbai supplied in SS 316 in 2024"). Default if silent: no.
8. **Hardest single open question:** does KP ever **supply a batch mixing 304 and 316** in a single dispatch (e.g., a mixed-BOQ EPC order), and if so, how is the dispatch tag colour-coded to prevent on-site mix-up? This is a procurement-fear question; the answer unlocks trust.
