# Reference-Defaults for the Client Questionnaire

**Purpose:** pre-fill each of the 19 open questionnaire questions using SRG Fasteners' public site as the industry-peer reference. These are **defaults**, not answers — the client (Pramod / Kabir) still confirms, but every one comes with an SRG-observed benchmark so the client only has to say "yes, keep default" or "no, change to X" instead of typing from scratch.

**Reference source:** `srgfasteners.com-audit/findings/*.md` (crawl + deep-analysis of 12 pages on 2026-09-29). SRG address for context: A/9, Karma Estate, Vatva GIDC, Ahmedabad – 382445 · phone +91 7862833067 · GST/UDYAM/IEC not published.

**Rule:** every default is what a peer Ahmedabad fastener maker of KP's size typically supports. We are NOT copying SRG's copy or claims — we are using their **coverage** to draft KP's likely-truthful defaults.

---

## Section A — Company basics

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| 1 | Founder name on About | SRG hides — "no founders named, no year founded, no employee count" (`findings/content.md` §5) | Default: **"Founded and led by Mr. Pramod Panchal"** — with Kabir Panchal as day-to-day sales contact | Confirm; or say "show both as co-owners", or "show only Kabir" |
| 2 | Founding year | SRG hides | Default: **2017** (GST year — safest fact we own). If operations pre-date 2017, they say so and we update | Confirm 2017 or provide actual year |
| 3 | Udyam/MSME + IEC | SRG hides; audit flags this as an E-E-A-T gap KP can win on | Default: **publish MSME registration number in footer + certificate PDF on `/quality/`**. If IEC exists, add "Exports handled — IEC on request" | Send both numbers + certificate PDFs on WhatsApp |
| 4 | One-line positioning | SRG uses "Fastener Manufacturer & Exporter in India" — vague | Default: **"Ahmedabad-based manufacturer of foundation bolts, stud bolts and industrial fasteners — direct from factory, MTC on request."** Concrete, city-anchored, spec-referenced | Confirm or replace with client's own line |
| 5 | Second phone / landline | SRG shows just one mobile | Default: **show only +91 98982 30448** (the primary) unless client gives a second | Confirm or provide a landline |

---

## Section B — Products (make vs trade)

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| 6 | Made vs traded revenue split | SRG hides | Default: **"Manufactured in-house: bolts, nuts, tie rods, stud bolts. Traded from vetted partners: specialty items and non-catalogue grades."** No % published — most SRG-peer sites don't publish it either, and doing so has no SEO benefit | Confirm the make/trade line for each category |
| 7 | ASTM F1554 Gr 105 in-house? | SRG has NO foundation-bolt page → no reference | Default assumption: **Gr 36 / 55 in-house; Gr 105 on-quote (traded or heat-treated on demand).** Safer for a mid-size Ahmedabad plant | Confirm or say "we do Gr 105 in-house" |
| 8 | A193 B7 heat-treatment in-house? | SRG's stud page mentions grades B7/B7M/B8/B8M/B16 but no proof of in-house heat treatment (`findings/sxo.md` §3) | Default: **"KP supplies A193 B7 studs — bar sourced from partner mills, machined and finished in-house, MTC 3.1 provided."** Safe, honest, competitive | Confirm; if KP does heat-treat in-house, we can upgrade the claim |
| 9 | Solar sub-parts made vs traded | SRG has NO solar page → greenfield | Default: **manufactures MMS bolts, T-head bolts + channel nuts, purlin bolts; trades module clamps + hanger bolts** (typical for a plant of KP's size) | Confirm per sub-part |
| 10 | Scaffold — generic or PERI/Doka/MEVA? | SRG does not sell scaffold items | Default: **generic system-neutral tie-rods + wing nuts (D15 / D20).** Compatible-with claims only if client has tested. Never promise brand-compat without confirmation | Confirm generic vs system-specific |
| 11 | Hex bolts + hex nuts — one page or two? | SRG splits by grade, not by bolt/nut; result is 274 near-duplicate pages (`findings/content.md` §2) | Default: **one combined page `/products/hex-bolts-nuts/`** unless client says hex-nuts volume is > 30% of hex-bolt volume (then split). Cluster plan already flags this | Confirm — one page or two |

---

## Section C — Materials, grades, coatings

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| 12 | Materials matrix | SRG explicitly covers **MS · SS 304 · SS 316** with heavy SS emphasis; also references high-tensile 8.8/10.9/12.9 across product pages | Default tick-list for KP: **MS · Grade 8.8 · Grade 10.9 · SS 304 · SS 316** as the confirmed floor. Grade 12.9 + SS 316L + Alloy Steel added if client says yes | Cross out any KP doesn't stock; add any missing |
| 13 | Coatings matrix | SRG mentions zinc-plated + HDG in copy; no coatings hub page | Default tick-list for KP: **Zinc plating (yellow + blue) · Hot-Dip Galvanised · Black oxide · Phosphating**. Geomet/Dacromet only if client has partner plater | Cross out or add |

---

## Section D — Quality & certifications

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| 14 | MTC 3.1 + ISO 9001 | SRG **claims** ISO 9001:2015 but publishes no certifying body, no cert number, no PDF (`findings/local.md` §3 — this is exactly what got them flagged) | Default: **only publish what KP can PDF-prove.** MTC 3.1 available on request → yes (industry-standard, safe to claim). ISO 9001 → **only if client sends the certificate**. Do not mimic SRG's unsupported claim | Send high-res PDFs on WhatsApp; if no ISO, we omit |
| 15 | In-house testing equipment | SRG doesn't list testing gear | Default: **"Dimensional inspection + hardness testing performed in-house. Tensile testing + salt-spray via NABL-accredited third-party lab."** Safe minimum for a proprietorship of KP's size | Confirm; if KP has tensile/salt-spray in-house, we upgrade |

---

## Section E — Operations

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| 16 | MOQ + lead time | SRG publishes **neither** on-site (`findings/on-page.md` §5 — the audit flags this as a differentiator KP can win on) | Default: **MOQ 100 kg per SKU. Standard items ex-stock (24–72 hrs Ahmedabad · 3–5 days Gujarat · 5–8 days pan-India). Made-to-order 7–14 days.** Publishing this beats SRG on trust | Confirm each number or adjust |
| 17 | Custom / drawing-based orders | SRG's page references it but no MOQ / lead time | Default: **"Custom fasteners — 500 kg MOQ, 10–21 days lead time, drawings accepted as PDF/DWG/DXF."** | Confirm |

---

## Section F — Photos + permissions

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| 18 | Reuse IndiaMART photos on website? | SRG doesn't link IndiaMART at all — a gap KP already avoids | Default: **YES, reuse the IndiaMART factory / warehouse / office / stock photos.** Client owns them. We should ask for the originals (higher-res) to skip the IndiaMART compression | Send originals |
| 19 | Customer logos / testimonials | SRG shows generic client logos with no written permission trail (industry-typical, but legally sketchy) | Default: **omit client logos on v1.** Publish only 2–3 testimonials WITH written consent (KP asks the customer, keeps the email). Adds real trust without legal risk | Confirm "no logos on v1" OR send names + written consent |

---

## Two anchor-brief blockers (from `docs/content/content-briefs/*.md`)

| # | Question | SRG reference | Default answer for KP | Client action |
|---|---|---|---|---|
| B7 | ASTM F1554 Gr 105 in-house? (foundation-bolts brief) | No SRG data | Default: **on-quote / traded.** See row 7 | Confirm |
| B9 | Solar T-head / module-clamp / hanger-bolt make-vs-trade? (solar-accessories brief) | No SRG data | Default: **make MMS + T-head + purlin; trade module clamps + hanger bolts.** See row 9 | Confirm per sub-part |

---

## What this doc changes vs. the WhatsApp questionnaire

- Client no longer types free-text answers to most questions — they say "yes to default" or override a specific row.
- Where SRG hides information (founder, year, ISO cert body, MOQ, lead time, GST number, IEC), we default to **publishing** it. Every one of those is a defensible KP wedge per the SRG audit.
- Where SRG makes a claim without proof (ISO 9001:2015 with no cert body), we default to **NOT claiming it** for KP until proof exists.

---

## Next-step decision waiting on the user (paste into the WhatsApp along with the questionnaire, if you want)

> "For each row above, tell me either 'default' or the change. Photos + PDFs → send here. Estimated time to reply: 15 minutes."

Presenting these defaults + the questionnaire together typically cuts the client's response time from 3–4 days to 1 day.
