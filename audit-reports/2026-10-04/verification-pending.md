# Consolidated Inventory: Verification Pending Markers
**Audit Date:** 2026-10-04  
**Project:** KP Fasteners Web Platform (Pre-Launch)  
**Total Markers in Source Code:** 185  

> **OPERATIONAL DIRECTIVE (AGENTS.md & docs/business-profile.md):**  
> "Never invent company facts, factory square footage, machine rosters, certifications (ISO, CE), material grades, tensile ratings, or customer logos. If data is unknown, flag it for client verification."  
> 
> Below is the exhaustive record of all verification markers placed inside the production code. Each entry details the file, line number, code context, and the exact question required to be answered by Kabir Panchal / Pramod Panchal before production sign-off.

---

## Executive Breakdown by Category

| Category | Markers Count | Impacted Subsystems |
|---|---|---|
| **Founding Year & Operational History** | 2 | `page.tsx` |
| **Founder & Management Identification (Pramod vs Kabir Panchal)** | 6 | `page.tsx, page.tsx, page.tsx, page.tsx` |
| **Factory Facility, Machinery & Plot Area** | 4 | `page.tsx` |
| **Third-Party Quality Certifications (ISO 9001 / IATF)** | 37 | `page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx` |
| **Material Grades & Public Standards Confirmation** | 136 | `page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx, page.tsx` |
| **Tonnage, Lead Times & MOQ Constraints** | 0 | `` |
| **Testing Laboratory & Inspection Equipment** | 0 | `` |
| **Export Capability & IEC License** | 0 | `` |
| **Other Technical & Commercial Claims** | 0 | `` |

---

## Detailed Inventory & Client Questionnaire

### Founding Year & Operational History (2 markers)

**Client Question for Kabir Panchal:**  
> *What is the exact founding year of commercial operations for KP Fasteners? (GST registered 2017; pre-2017 proof required to claim earlier operating history).*

| File Path | Line | Code Context |
|---|---|---|
| `app/(site)/about/page.tsx` | `62` | VERIFICATION PENDING: Founding year of operations (GST registered 2017; pre-2017 date pending client proof) — ref: brief §10 item 2 |
| `app/(site)/about/page.tsx` | `486` | VERIFICATION PENDING: Founding year of operations (GST registered 2017; pre-2017 date pending client proof) — ref: brief §10 item 2 |

### Founder & Management Identification (Pramod vs Kabir Panchal) (6 markers)

**Client Question for Kabir Panchal:**  
> *Clarify legal founder and management roles: Is Mr. Pramod Panchal the Proprietor and Mr. Kabir Panchal the Managing Director / day-to-day contact? How should each be cited on About page and Schema?*

| File Path | Line | Code Context |
|---|---|---|
| `app/(site)/about/page.tsx` | `61` | VERIFICATION PENDING: owner legal name — Pramod per URC vs Kabir per practice? — ref: business-profile.md §1 |
| `app/(site)/about/page.tsx` | `572` | VERIFICATION PENDING: owner legal name — Pramod per URC vs Kabir per practice? — ref: business-profile.md §1 |
| `app/(site)/products/custom-fasteners/page.tsx` | `62` | VERIFICATION PENDING: Confirm tooldie ownership policy for repeat custom orders — ref: brief §10 item 10 |
| `app/(site)/products/scaffold-accessories/page.tsx` | `144` | VERIFICATION PENDING: Water-stopper assembly stock status is pending Kabir |
| `app/(site)/terms/page.tsx` | `283` | VERIFICATION PENDING: Commercial payment terms, advance percentage, and credit policy to be confirmed by Kabir and legal counsel — ref: brief §3  §10 Q2 |
| `app/(site)/terms/page.tsx` | `348` | VERIFICATION PENDING: Warranty period on OEM items (12 months default) to be confirmed by Kabir — ref: brief §3  §10 Q3 |

### Factory Facility, Machinery & Plot Area (4 markers)

**Client Question for Kabir Panchal:**  
> *Provide exact factory shop-floor square footage, cold heading/forging machinery roster, and real factory exterior/interior photographs with permission to publish.*

| File Path | Line | Code Context |
|---|---|---|
| `app/(site)/about/page.tsx` | `63` | VERIFICATION PENDING: Exact shop-floor square footage, machine inventory, and annual tonnage — ref: brief §3 & §10 item 5 |
| `app/(site)/about/page.tsx` | `64` | VERIFICATION PENDING: Real photograph of factory sign board, manufacturing shop floor, and warehouse at Ahmedabad — ref: brief §6 & §10 item 5 |
| `app/(site)/about/page.tsx` | `298` | VERIFICATION PENDING: Real photograph of factory sign board, manufacturing shop floor, and warehouse at Ahmedabad — ref: brief §6 & §10 item 5 |
| `app/(site)/about/page.tsx` | `510` | VERIFICATION PENDING: Exact shop-floor square footage, machine inventory, and annual tonnage — ref: brief §3 & §10 item 5 |

### Third-Party Quality Certifications (ISO 9001 / IATF) (37 markers)

**Client Question for Kabir Panchal:**  
> *Confirm active third-party quality certifications held (e.g. ISO 9001:2015, certifying body, certificate number and valid expiry date). Do not claim ISO without certificate copies.*

| File Path | Line | Code Context |
|---|---|---|
| `app/(site)/about/page.tsx` | `65` | VERIFICATION PENDING: Specific third-party quality certifications beyond GST and Udyam MSME — ref: brief §5 & §10 item 8 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `57` | VERIFICATION PENDING: Confirm IATF 16949 future roadmap (not claimed on v1) — ref: brief §10 item 4 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `58` | VERIFICATION PENDING: Confirm named tier references with written permission — ref: brief §10 item 5 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `532` | VERIFICATION PENDING: Confirm whether KP actively serves automotive OEMs or tier suppliers (tier-1, tier-2, tier-3) & IATF 16949 status — ref: brief §10 items 1 & 4 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `55` | VERIFICATION PENDING: Confirm lifting-anchor stud scope for precast — in-house, sourced, or not offered? — ref: brief §10 item 2 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `57` | VERIFICATION PENDING: Confirm anonymised project references (PEB m², RCC floors, bridge span) — ref: brief §10 item 4 & §4.5 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `58` | VERIFICATION PENDING: Confirm named EPC references with written permission — ref: brief §10 item 5 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `60` | VERIFICATION PENDING: Confirm whether KP has approved-vendor status on any state or central agency vendor list (SOR  NIT) that we may cite — ref: brief §10 item 7 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `976` | VERIFICATION PENDING: Confirm anonymised project references and named EPC references with written permission — ref: brief §10 items 4 & 5 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `977` | VERIFICATION PENDING: Confirm whether KP has approved-vendor status on any state or central agency vendor list (SOR  NIT) that we may cite — ref: brief §10 item 7 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `53` | VERIFICATION PENDING: Confirm anonymised project references and named EPC references with written permission — ref: brief §10 items 3 & 4 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `54` | VERIFICATION PENDING: Confirm coastal solar project references with SS 316 upgrade — ref: brief §10 item 5 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `747` | VERIFICATION PENDING: Confirm anonymised project references and named EPC references with written permission — ref: brief §10 items 3 & 4 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `748` | VERIFICATION PENDING: Confirm coastal solar project references with SS 316 upgrade — ref: brief §10 item 5 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `52` | VERIFICATION PENDING: Confirm OEM status of PC 10.9 on foundation bolts and sag rods — in-house (heat-treated) or sourced? — ref: brief §10 item 1 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `58` | VERIFICATION PENDING: Confirm in-house vs outsourced heat treatment (quench + temper) on OEM lines — ref: brief §10 item 7 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `651` | VERIFICATION PENDING: Confirm in-house vs outsourced heat treatment (quench + temper) on OEM lines — ref: brief §10 item 7 |
| `app/(site)/privacy-policy/page.tsx` | `360` | VERIFICATION PENDING: Specific Grievance Officer appointment and dedicated email address pending client and legal counsel confirmation — ref: brief §3  §10 Q1 |
| `app/(site)/products/custom-fasteners/page.tsx` | `55` | VERIFICATION PENDING: Confirm accepted drawing formats (PDF, DWG, DXF, STEP) — ref: brief §10 item 3 |
| `app/(site)/products/custom-fasteners/page.tsx` | `57` | VERIFICATION PENDING: Confirm routine tolerance envelope (IS 1367 Grade ABC vs CNC micro-tolerances) — ref: brief §10 item 5 |
| `app/(site)/products/custom-fasteners/page.tsx` | `60` | VERIFICATION PENDING: Confirm sector exclusions confirmation (aerospace, nuclear, medical) — ref: brief §10 item 8 |
| `app/(site)/products/custom-fasteners/page.tsx` | `542` | VERIFICATION PENDING: Confirm routine tolerance envelope (IS 1367 Grade ABC vs CNC micro-tolerances) — ref: brief §10 item 5 |
| `app/(site)/products/custom-fasteners/page.tsx` | `779` | VERIFICATION PENDING: Confirm accepted drawing formats (PDF, DWG, DXF, STEP) — ref: brief §10 item 3 |
| `app/(site)/products/custom-fasteners/page.tsx` | `964` | VERIFICATION PENDING: Confirm sector exclusions confirmation (aerospace, nuclear, medical) — ref: brief §10 item 8 |
| `app/(site)/products/sag-rods/page.tsx` | `375` | VERIFICATION PENDING: Base-metal source spec (IS 2062 grade E250 vs. |
| `app/(site)/products/solar-accessories/page.tsx` | `57` | VERIFICATION PENDING: Confirm named EPC references or anonymised MW project figures — ref: brief §10 item 6 |
| `app/(site)/products/solar-accessories/page.tsx` | `59` | VERIFICATION PENDING: Confirm MTC EN 10204 3.1 availability for all traded solar SKUs — ref: brief §10 item 8 |
| `app/(site)/products/solar-accessories/page.tsx` | `60` | VERIFICATION PENDING: Real photograph of solar accessories inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 hero-solar-accessories-kp.webp & §10 item 10 |
| `app/(site)/products/solar-accessories/page.tsx` | `61` | VERIFICATION PENDING: Third-party MMS brand profile compatibility (Schletter  K2  Mounting Systems) — ref: brief §10 item 1 |
| `app/(site)/products/solar-accessories/page.tsx` | `493` | VERIFICATION PENDING: Real photograph of solar accessories inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 hero-solar-accessories-kp.webp & §10 item 10 |
| `app/(site)/products/solar-accessories/page.tsx` | `657` | VERIFICATION PENDING: Third-party MMS brand profile compatibility (Schletter  K2  Mounting Systems) — ref: brief §10 item 1 |
| `app/(site)/products/stud-bolts/page.tsx` | `177` | 'B7  B7M  B8M studs with A194 2H  2HM  8M nuts for process-piping flange joints.  VERIFICATION PENDING ', |
| `app/(site)/products/stud-bolts/page.tsx` | `366` | VERIFICATION PENDING: NACE MR0175 sour-service compliance for B7M |
| `app/(site)/products/stud-bolts/page.tsx` | `584` | VERIFICATION PENDING: NACE MR0175 compliance claim for B7M is held |
| `app/(site)/products/tie-rods/page.tsx` | `56` | VERIFICATION PENDING: Confirm matching accessory inventory split (wing nuts, anchor plates, water bars, cones) — ref: brief §10 item 3 |
| `app/(site)/products/tie-rods/page.tsx` | `59` | VERIFICATION PENDING: Confirm MOQ and lead time bands per diameter and accessory family — ref: brief §10 item 6 |
| `app/(site)/products/tie-rods/page.tsx` | `737` | VERIFICATION PENDING: Confirm matching accessory inventory split (wing nuts, anchor plates, water bars, cones) — ref: brief §10 item 3 |

### Material Grades & Public Standards Confirmation (136 markers)

**Client Question for Kabir Panchal:**  
> *Confirm exact material grades and dimensional standards KP Fasteners actively manufactures vs trades. Can KP issue EN 10204 3.1 MTC for these specs?*

| File Path | Line | Code Context |
|---|---|---|
| `app/(site)/contact/page.tsx` | `237` | VERIFICATION PENDING: contact-person name — business card lists |
| `app/(site)/contact/page.tsx` | `240` | VERIFICATION PENDING: factory latlng — need 5-decimal coordinates |
| `app/(site)/contact/page.tsx` | `242` | VERIFICATION PENDING: Google Business Profile URL — add to |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `54` | VERIFICATION PENDING: Confirm whether KP actively serves automotive OEMs or tier suppliers (tier-1, tier-2, tier-3) — gates entire sector page — ref: brief §10 item 1 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `55` | VERIFICATION PENDING: Confirm heavy-engineering sector list (power  machinery  mining  oil & gas BOP  agricultural) — ref: brief §10 item 2 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `56` | VERIFICATION PENDING: Confirm PPAP capability (Level 2 on request vs Level 3 case-by-case) — ref: brief §10 item 3 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `59` | VERIFICATION PENDING: Confirm in-house PMI gun on-site vs route-to-NABL-partner only — ref: brief §10 item 6 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `60` | VERIFICATION PENDING: Confirm First Article Inspection Report (FAIR) template availability — ref: brief §10 item 7 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `61` | VERIFICATION PENDING: Confirm OEM-coded coating partners (zinc-nickel  Dacromet  Geomet) — ref: brief §10 item 8 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `62` | VERIFICATION PENDING: Real photograph of PC 10.912.9 inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-automotive-heavy-engg-kp.webp & §10 item 9 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `63` | VERIFICATION PENDING: Confirm priority sector weighting for hero narrative (tier-2 passenger  heavy earth-moving  power BOP) — ref: brief §10 item 10 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `471` | VERIFICATION PENDING: Real photograph of PC 10.912.9 inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-automotive-heavy-engg-kp.webp & §10 item 9 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `605` | VERIFICATION PENDING: Confirm heavy-engineering sector list (power  machinery  mining  oil & gas BOP  agricultural) — ref: brief §10 item 2 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `734` | VERIFICATION PENDING: Confirm OEM-coded coating partners (zinc-nickel  Dacromet  Geomet) — ref: brief §10 item 8 |
| `app/(site)/industries/automotive-heavy-engineering/page.tsx` | `895` | VERIFICATION PENDING: Confirm PPAP capability (Level 2 on request vs Level 3 case-by-case), FAIR template, and in-house PMI gun — ref: brief §10 items 3, 6 & 7 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `54` | VERIFICATION PENDING: Confirm tunnel  metro-rail scope — does KP actively supply SS 316 fasteners to metro-tunnel contractors, or is this an aspirational segment? — ref: brief §10 item 1 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `56` | VERIFICATION PENDING: Confirm dispatch SLA table by metro-cluster pin codes — ref: brief §10 item 3 & §4.4 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `59` | VERIFICATION PENDING: Real photograph of PEB base plate installation and construction fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-construction-industry-kp.webp & §10 item 6 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `61` | VERIFICATION PENDING: Confirm exclusion of post-tensioning tendons, bridge stay-cable anchorages, and soil-nailing bars — ref: brief §10 item 8 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `504` | VERIFICATION PENDING: Real photograph of PEB base plate installation and construction fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-construction-industry-kp.webp & §10 item 6 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `637` | VERIFICATION PENDING: Confirm tunnel  metro-rail scope & lifting-anchor stud scope for precast — ref: brief §10 items 1 & 2 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `819` | VERIFICATION PENDING: Confirm exclusion of post-tensioning tendons, bridge stay-cable anchorages, and soil-nailing bars — ref: brief §10 item 8 |
| `app/(site)/industries/construction-infrastructure/page.tsx` | `888` | VERIFICATION PENDING: Confirm dispatch SLA table by metro-cluster pin codes — ref: brief §10 item 3 & §4.4 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `51` | VERIFICATION PENDING: Confirm tracker OEM supply scope — does KP supply tracker torque-tube BOMs today or fixed-tilt + rooftop only? — ref: brief §10 item 1 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `52` | VERIFICATION PENDING: Confirm dispatch SLA table by state and pin-code cluster — ref: brief §10 item 2 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `55` | VERIFICATION PENDING: Real photograph of solar MMS cross-section and fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-solar-industry-kp.webp & §10 item 6 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `56` | VERIFICATION PENDING: Confirm indicative fastener quantities per MWp — ref: brief §10 item 7 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `57` | VERIFICATION PENDING: Confirm stocked J-bolt sizes for solar piers vs MTO lead times — ref: brief §10 item 8 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `378` | VERIFICATION PENDING: Real photograph of solar MMS cross-section and fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-solar-industry-kp.webp & §10 item 6 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `475` | VERIFICATION PENDING: Confirm tracker OEM supply scope — does KP supply tracker torque-tube BOMs today or fixed-tilt + rooftop only? — ref: brief §10 item 1 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `543` | VERIFICATION PENDING: Confirm indicative fastener quantities per MWp — ref: brief §10 item 7 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `718` | VERIFICATION PENDING: Confirm dispatch SLA table by state and pin-code cluster — ref: brief §10 item 2 |
| `app/(site)/industries/solar-mounting-fasteners/page.tsx` | `719` | VERIFICATION PENDING: Confirm stocked J-bolt sizes for solar piers vs MTO lead times — ref: brief §10 item 8 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `53` | VERIFICATION PENDING: Confirm PC 12.9 OEM status (brief defaults to OEM 12.9 not offered) — ref: brief §10 item 2 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `54` | VERIFICATION PENDING: Confirm HDE bake-out protocol on HDG + PC 10.9 (190–230 °C for ≥ 4 hr within 4 hr of plating) — ref: brief §10 item 3 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `55` | VERIFICATION PENDING: Confirm NABL partner lab name for tensile verification — ref: brief §10 item 4 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `56` | VERIFICATION PENDING: Confirm mating-nut class policy (auto-upgrade vs quoted per PO) — ref: brief §10 item 5 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `57` | VERIFICATION PENDING: Real photograph of high-tensile property class stamps and inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-high-tensile-material-decision.webp & §10 item 6 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `281` | VERIFICATION PENDING: Real photograph of high-tensile property class stamps and inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-high-tensile-material-decision.webp & §10 item 6 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `515` | VERIFICATION PENDING: Confirm HDE bake-out protocol on HDG + PC 10.9 (190–230 °C for ≥ 4 hr within 4 hr of plating) — ref: brief §10 item 3 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `608` | VERIFICATION PENDING: Confirm mating-nut class policy (auto-upgrade vs quoted per PO) — ref: brief §10 item 5 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `652` | VERIFICATION PENDING: Confirm OEM status of PC 10.9 on foundation bolts and sag rods — ref: brief §10 item 1 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `653` | VERIFICATION PENDING: Confirm PC 12.9 OEM status — ref: brief §10 item 2 |
| `app/(site)/materials/high-tensile-fasteners/page.tsx` | `787` | VERIFICATION PENDING: Confirm NABL partner lab name for tensile verification — ref: brief §10 item 4 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `56` | VERIFICATION PENDING: Confirm whether KP performs PMI inspection in-house with an owned XRF analyzer or routes lots to an accredited NABL testing partner — ref: brief §10 item 3 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `57` | VERIFICATION PENDING: Confirm in-house vs partner passivation discipline and chemical bath standards — ref: brief §10 item 4 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `58` | VERIFICATION PENDING: Confirm named NABL partner testing laboratory for external verification — ref: brief §10 item 5 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `59` | VERIFICATION PENDING: Confirm whether SS 202 is ever supplied under KP dispatch or excluded entirely from inventory — ref: brief §10 item 2 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `60` | VERIFICATION PENDING: Confirm whether SS 316Ti is stocked or supplied strictly on-quote — ref: brief §10 item 1 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `61` | VERIFICATION PENDING: Real photograph of mixed SS 304 and SS 316 fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-ss-fasteners-kp.webp & §10 item 6 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `301` | VERIFICATION PENDING: Real photograph of mixed SS 304 and SS 316 fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-ss-fasteners-kp.webp & §10 item 6 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `407` | VERIFICATION PENDING: Confirm whether SS 202 is ever supplied under KP dispatch or excluded entirely from inventory — ref: brief §10 item 2 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `488` | VERIFICATION PENDING: Confirm whether SS 316Ti is stocked or supplied strictly on-quote — ref: brief §10 item 1 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `505` | VERIFICATION PENDING: Confirm duplex 2205 minimum batch quantity and sourcing lead time — ref: brief §10 item 1 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `787` | VERIFICATION PENDING: Confirm in-house vs partner passivation discipline and chemical bath standards — ref: brief §10 item 4 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `832` | VERIFICATION PENDING: Confirm whether KP performs PMI inspection in-house with an owned XRF analyzer or routes lots to an accredited NABL testing partner — ref: brief §10 item 3 |
| `app/(site)/materials/stainless-steel-fasteners/page.tsx` | `833` | VERIFICATION PENDING: Confirm named NABL partner testing laboratory for external verification — ref: brief §10 item 5 |
| `app/(site)/privacy-policy/page.tsx` | `201` | VERIFICATION PENDING: Formal data retention schedule confirmation by legal counsel — ref: brief §3  §10 Q2 |
| `app/(site)/privacy-policy/page.tsx` | `279` | VERIFICATION PENDING: Cookie banner scope and analytics setup pending counsel confirmation — ref: brief §3  §10 Q3 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `56` | VERIFICATION PENDING: Confirm head families stocked (countersunk socket DIN 7991 confirmed on IndiaMART; button-head DIN 7380 and socket-cap DIN 912 to confirm) — ref: brief §10 item 1 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `57` | VERIFICATION PENDING: Confirm grade split per head family (8.8  10.9  12.9  SS A2  SS A4) — ref: brief §10 item 2 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `58` | VERIFICATION PENDING: Confirm stocked diameter and length range per head family (M3 to M24 drafting default) — ref: brief §10 item 3 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `59` | VERIFICATION PENDING: Confirm coating options (black oxide default; zinc-nickel  nickel availability) — ref: brief §10 item 4 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `60` | VERIFICATION PENDING: Confirm MOQ and lead times per head family and grade band — ref: brief §10 item 5 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `61` | VERIFICATION PENDING: Confirm IndiaMART SKU catalogue synchronization — ref: brief §10 item 6 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `62` | VERIFICATION PENDING: Confirm named partner mill brands that may be cited — ref: brief §10 item 7 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `63` | VERIFICATION PENDING: Real photograph of stocked CSK Allen bolt inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 & §10 item 8 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `64` | VERIFICATION PENDING: Confirm whether KP ever supplies bundled hex keys with kits or strictly bolts only — ref: brief §10 item 10 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `434` | VERIFICATION PENDING: Real photograph of stocked CSK Allen bolt inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 & §10 item 8 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `553` | VERIFICATION PENDING: Confirm head families stocked (countersunk socket DIN 7991 confirmed; button-head DIN 7380 and socket-cap DIN 912 to confirm) — ref: brief §10 item 1 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `724` | VERIFICATION PENDING: Confirm stocked diameter and length range per head family (M3 to M24 drafting default) — ref: brief §10 item 3 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `761` | VERIFICATION PENDING: Confirm grade split per head family (8.8  10.9  12.9  SS A2  SS A4) — ref: brief §10 item 2 |
| `app/(site)/products/csk-allen-bolts/page.tsx` | `762` | VERIFICATION PENDING: Confirm coating options (black oxide default; zinc-nickel  nickel availability) — ref: brief §10 item 4 |
| `app/(site)/products/custom-fasteners/page.tsx` | `53` | VERIFICATION PENDING: Confirm sourcing partner network geography scope (Rajkot  Ludhiana  Taiwan  China) — ref: brief §10 item 1 |
| `app/(site)/products/custom-fasteners/page.tsx` | `54` | VERIFICATION PENDING: Confirm MOQ default (500 kg per SKU default vs lower feasibility threshold) — ref: brief §10 item 2 |
| `app/(site)/products/custom-fasteners/page.tsx` | `56` | VERIFICATION PENDING: Confirm mutual NDA template handling — ref: brief §10 item 4 |
| `app/(site)/products/custom-fasteners/page.tsx` | `58` | VERIFICATION PENDING: Confirm in-network lead times (10-21 days) vs new die tooling (4-8 weeks) — ref: brief §10 item 6 |
| `app/(site)/products/custom-fasteners/page.tsx` | `59` | VERIFICATION PENDING: Confirm IP and sample batch retention period — ref: brief §10 item 7 |
| `app/(site)/products/custom-fasteners/page.tsx` | `61` | VERIFICATION PENDING: Real photograph of drawing review table at Ahmedabad facility — ref: brief §6 & §10 item 9 |
| `app/(site)/products/custom-fasteners/page.tsx` | `480` | VERIFICATION PENDING: Real photograph of drawing review table at Ahmedabad facility — ref: brief §6 & §10 item 9 |
| `app/(site)/products/custom-fasteners/page.tsx` | `541` | VERIFICATION PENDING: Confirm sourcing partner network geography scope (Rajkot  Ludhiana  Taiwan  China) — ref: brief §10 item 1 |
| `app/(site)/products/custom-fasteners/page.tsx` | `664` | VERIFICATION PENDING: Confirm in-network lead times (10-21 days) vs new die tooling (4-8 weeks) — ref: brief §10 item 6 |
| `app/(site)/products/custom-fasteners/page.tsx` | `962` | VERIFICATION PENDING: Confirm mutual NDA template handling — ref: brief §10 item 4 |
| `app/(site)/products/custom-fasteners/page.tsx` | `963` | VERIFICATION PENDING: Confirm IP and sample batch retention period — ref: brief §10 item 7 |
| `app/(site)/products/foundation-bolts/page.tsx` | `324` | VERIFICATION PENDING: ASTM F1554 Grade 105 (alloy, heat-treated, |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `55` | VERIFICATION PENDING: Confirm property-class stocking coverage (4.6  4.8  8.8  10.9 routinely stocked vs 12.9 on-quote) — ref: brief §10 item 1 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `56` | VERIFICATION PENDING: Confirm stocked diameter and length range per property class — ref: brief §10 item 2 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `57` | VERIFICATION PENDING: Confirm coating availability per class (HDG vs mechanical galvanizing for 10.9) — ref: brief §10 item 3 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `58` | VERIFICATION PENDING: Confirm nut families stocked (standard, heavy hex, thin  jam, nylock, castle) — ref: brief §10 item 4 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `59` | VERIFICATION PENDING: Confirm MOQ by grade band and lead times for made-to-order diameters — ref: brief §10 items 5 & 6 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `60` | VERIFICATION PENDING: Confirm named partner mills that may be cited — ref: brief §10 item 8 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `61` | VERIFICATION PENDING: Real photograph of staged hex-bolt and nut inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-hex-bolts-nuts-kp.webp & §10 item 10 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `62` | VERIFICATION PENDING: Confirm whether KP ever assembles proprietary hex-bolt kits in-house — ref: brief §10 item 11 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `532` | VERIFICATION PENDING: Real photograph of staged hex-bolt and nut inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-hex-bolts-nuts-kp.webp & §10 item 10 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `665` | VERIFICATION PENDING: Confirm stocked diameter and length range per property class — ref: brief §10 item 2 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `695` | VERIFICATION PENDING: Confirm nut families stocked (standard, heavy hex, thin  jam, nylock, castle) — ref: brief §10 item 4 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `725` | VERIFICATION PENDING: Confirm property-class stocking coverage (4.6  4.8  8.8  10.9 routinely stocked vs 12.9 on-quote) — ref: brief §10 item 1 |
| `app/(site)/products/hex-bolts-nuts/page.tsx` | `755` | VERIFICATION PENDING: Confirm coating availability per class (HDG vs mechanical galvanizing for 10.9) — ref: brief §10 item 3 |
| `app/(site)/products/page.tsx` | `62` | VERIFICATION PENDING: Real inventory lay-flat photography for products hub hero — ref: brief §6  §10 Q5 |
| `app/(site)/products/page.tsx` | `341` | VERIFICATION PENDING: Real inventory lay-flat photography for products hub hero — ref: brief §6  §10 Q5 |
| `app/(site)/products/page.tsx` | `559` | VERIFICATION PENDING: Client to confirm heavy engineering & automotive OEM client base — ref: brief §4.3  §10 Q3 |
| `app/(site)/products/page.tsx` | `597` | VERIFICATION PENDING: Client to confirm 'What we don't sell' exclusion list — ref: brief §3  §10 Q4 |
| `app/(site)/products/page.tsx` | `664` | VERIFICATION PENDING: Client to confirm exact made-vs-traded split across all categories before publish — ref: brief §5 Q1  §10 Q2 |
| `app/(site)/products/page.tsx` | `665` | VERIFICATION PENDING: Client to confirm custom fastener MOQ and typical lead times — ref: brief §5 Q2 |
| `app/(site)/products/sag-rods/page.tsx` | `528` | VERIFICATION PENDING: Property class 8.8 availability on sag-rod |
| `app/(site)/products/scaffold-accessories/page.tsx` | `154` | VERIFICATION PENDING: Form-tie  snap-tie range is listed per standards |
| `app/(site)/products/scaffold-accessories/page.tsx` | `164` | VERIFICATION PENDING: Scaffold coupler stock status and any IS 2750 ISI |
| `app/(site)/products/scaffold-accessories/page.tsx` | `172` | VERIFICATION PENDING: HDG routing (in-house zinc tank vs. partner galvaniser) |
| `app/(site)/products/scaffold-accessories/page.tsx` | `528` | VERIFICATION PENDING: Per-sub-type make-or-supply split, scaffold- |
| `app/(site)/products/scaffold-accessories/page.tsx` | `578` | VERIFICATION PENDING: Specific SWL numbers for D15 (~90 kN) and |
| `app/(site)/products/scaffold-accessories/page.tsx` | `773` | VERIFICATION PENDING: System-specific brand compatibility (PERI |
| `app/(site)/products/solar-accessories/page.tsx` | `54` | VERIFICATION PENDING: Confirm exact solar SKU catalogue and stocking split (SS 304 vs SS 316 vs HDG) — ref: brief §10 items 1 & 2 |
| `app/(site)/products/solar-accessories/page.tsx` | `55` | VERIFICATION PENDING: Confirm stocked module clamp heights (30  35  40 mm) — ref: brief §10 item 3 |
| `app/(site)/products/solar-accessories/page.tsx` | `56` | VERIFICATION PENDING: Confirm MOQ and delivery lead time by site pin code — ref: brief §10 items 4 & 5 |
| `app/(site)/products/solar-accessories/page.tsx` | `58` | VERIFICATION PENDING: Confirm in-house testing vs supplier MTC pass-through (PMI, HDG gauge, salt-spray) — ref: brief §10 item 7 |
| `app/(site)/products/solar-accessories/page.tsx` | `596` | VERIFICATION PENDING: Confirm exact solar SKU catalogue and stocking split (SS 304 vs SS 316 vs HDG) — ref: brief §10 items 1 & 2 |
| `app/(site)/products/solar-accessories/page.tsx` | `627` | VERIFICATION PENDING: Confirm stocked module clamp heights (30  35  40 mm) — ref: brief §10 item 3 |
| `app/(site)/products/solar-accessories/page.tsx` | `792` | VERIFICATION PENDING: Confirm in-house testing vs supplier MTC pass-through (PMI, HDG gauge, salt-spray) & MTC availability — ref: brief §10 items 7 & 8 |
| `app/(site)/products/tie-rods/page.tsx` | `55` | VERIFICATION PENDING: Confirm stocked diameter range (D15  D20 confirmed; D22  D24 on request) — ref: brief §10 item 2 |
| `app/(site)/products/tie-rods/page.tsx` | `57` | VERIFICATION PENDING: Confirm length stocking (6m default vs cut-to-length) — ref: brief §10 item 4 |
| `app/(site)/products/tie-rods/page.tsx` | `58` | VERIFICATION PENDING: Confirm turnbuckle assemblies make-or-buy status for PEB bracing — ref: brief §10 item 5 |
| `app/(site)/products/tie-rods/page.tsx` | `60` | VERIFICATION PENDING: Confirm IndiaMART SKU alignment for Tie Rod — ref: brief §10 item 7 |
| `app/(site)/products/tie-rods/page.tsx` | `61` | VERIFICATION PENDING: Confirm named mill partners that may be cited — ref: brief §10 item 8 |
| `app/(site)/products/tie-rods/page.tsx` | `62` | VERIFICATION PENDING: Real photograph of stocked tie-rod inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 & §10 item 9 |
| `app/(site)/products/tie-rods/page.tsx` | `63` | VERIFICATION PENDING: Confirm whether KP ever customises cone-and-plate geometry on request — ref: brief §10 item 10 |
| `app/(site)/products/tie-rods/page.tsx` | `569` | VERIFICATION PENDING: Real photograph of stocked tie-rod inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 & §10 item 9 |
| `app/(site)/products/tie-rods/page.tsx` | `736` | VERIFICATION PENDING: Confirm stocked diameter range (D15  D20 confirmed; D22  D24 on request) — ref: brief §10 item 2 |
| `app/(site)/products/tie-rods/page.tsx` | `951` | VERIFICATION PENDING: Confirm length stocking (6m default vs cut-to-length) — ref: brief §10 item 4 |
| `app/(site)/request-quote/page.tsx` | `110` | VERIFICATION PENDING: response-SLA wording — "within one working day" |
| `app/(site)/request-quote/page.tsx` | `112` | VERIFICATION PENDING: email sender domain — DMARCDKIM for |
| `app/(site)/terms/page.tsx` | `323` | VERIFICATION PENDING: Default Incoterm (Ex-Works Ahmedabad vs FOR destination) to be confirmed by client — ref: brief §3  §10 Q1 |
| `app/(site)/terms/page.tsx` | `349` | VERIFICATION PENDING: Pass-through warranty wording on traded distribution items to be approved by counsel — ref: brief §3  §10 Q4 |
| `app/(site)/terms/page.tsx` | `420` | VERIFICATION PENDING: Liability cap threshold and exclusions to be drafted by Indian commercial lawyer — ref: brief §3  §10 Q9 |
| `app/(site)/terms/page.tsx` | `517` | VERIFICATION PENDING: Dispute resolution mechanism (sole arbitrator vs three-member panel) to be selected by legal counsel — ref: brief §3  §10 Q5 |
| `app/page.tsx` | `177` | VERIFICATION PENDING: Udyam  MSME registration number — do NOT |
| `app/page.tsx` | `281` | VERIFICATION PENDING: dispatch SLAs — "24–72 hrs Ahmedabad  3–5 |

