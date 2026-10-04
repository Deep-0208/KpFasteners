# Content Brief: Terms of Supply & Website Use

> **`[LAWYER REVIEW REQUIRED]` — EVERY CLAUSE ON THIS PAGE.** This brief and the resulting page copy are a drafting starter, not legally sufficient terms of supply or website use. KP Fasteners must have the final text reviewed and approved by an Indian commercial / contract lawyer; the governing-law, dispute-resolution, warranty-scope and payment-terms clauses in particular must be signed off before launch.

Route: `/terms/`
Priority: **P1** (publish together with Privacy Policy at launch to unblock any form)
Cluster: **C-legal (terms)**
Classification: n/a
Owner (writer): TBD + Indian commercial counsel
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal + Indian lawyer
Client-verification status: Payment terms (advance %, balance %, credit terms), dispatch Incoterm default (ex-works Ahmedabad vs. FOR destination), standard warranty scope for OEM items, pass-through warranty wording for traded items, dispute-resolution choice (sole-arbitrator Ahmedabad vs. three-member panel), jurisdiction clause — all pending counsel. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** Buyer-side legal / procurement reviewer who reads the Terms footer link before authorising the first PO. Secondary persona: KP's own sales team, which should be able to point at a specific clause when a buyer disputes dispatch, delay, warranty or payment.
- **Search intent:** Navigational / trust-signal. Not an SEO page.
- **Query snapshot (top 5):**
  1. `kp fasteners terms`
  2. `kp fasteners terms of supply`
  3. — (balance: footer clicks)
- **Why KP wins on this page:**
  - Having a dated, counsel-reviewed Terms of Supply at launch is the single biggest trust lever against the SRG peer precedent (SRG publishes no visible terms-of-supply page; `srgfasteners.com-audit/findings/content.md` §6). Procurement counsel at a serious EPC will not open a vendor account against a supplier with no terms published.
  - The honest OEM-vs-trading split (`docs/business-profile.md §2b`) is reflected in two separate warranty clauses — one for OEM lines (KP's own warranty) and one for distribution range (pass-through mill / supplier warranty). This clarity itself is a differentiator.

---

## 2. SEO essentials

- **Primary keyword:** `kp fasteners terms`
- **Secondary keywords:** `kp fasteners terms of supply`, `terms of supply fastener manufacturer india`
- **Title tag (41 chars):** `Terms of Supply | KP Fasteners`
- **Meta description (154 chars):** `KP Fasteners' terms of supply and website use: RFQ scope, dispatch, payment, warranty for OEM and traded items, IP, governing law and dispute resolution.`
- **Canonical URL:** `https://kpfasteners.com/terms/`
- **Open Graph title:** `Terms of Supply & Website Use — KP Fasteners`
- **Open Graph description:** `Clauses covering RFQ, order acceptance, dispatch, payment, warranty, IP, governing law and dispute resolution.`
- **Open Graph image filename:** `og-terms-kp.webp` (neutral header, no stock gavel imagery).
- **Robots:** indexable; low sitemap priority (`priority: 0.3`).
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > Terms.
  - `WebPage` — `about` references the KP `Organization` node; `datePublished` + `dateModified` real.
  - `Organization` (inherited).
  - **Do NOT include `AggregateRating`.**

---

## 3. Content outline (H1 -> H3, ~1,200-1,400 words target)

### H1
`Terms of Supply & Website Use`

### H2 — Scope of these terms `[LAWYER REVIEW REQUIRED]`
*2-3 sentence lead. These terms govern (a) use of `kpfasteners.com` by any visitor and (b) supply of goods by KP Fasteners against a quote, order confirmation or RFQ acceptance, unless a separately executed written supply agreement is in force between KP and the buyer. In case of conflict, the signed agreement overrides.*

### H2 — Our commitment on an RFQ `[LAWYER REVIEW REQUIRED]`
*Short section. RFQs submitted via `/request-quote/`, WhatsApp or email are enquiries; they do not create a binding contract. A binding contract is formed when KP issues a written quote (PDF / email) and the buyer confirms it in writing (PO or signed quote), after which KP's order-acceptance email constitutes acceptance.*

- H3 — Quote validity period: `[CLIENT TO CONFIRM, default 15 days from issue]`.
- H3 — Price firmness during the validity window, subject to raw-material / currency / statutory levy clauses `[CLIENT TO CONFIRM]`.
- H3 — Right of refusal: KP reserves the right to decline an order if specification, quantity or delivery pin code cannot be met.

### H2 — Dispatch, Incoterms and lead time `[LAWYER REVIEW REQUIRED]`
*See §4.1.*

- H3 — **Default Incoterm:** Ex-Works, Ahmedabad (23/4 Ghanshyam Industrial Estate), **`[CLIENT TO CONFIRM]`**. Alternative Incoterms (FOR destination, FOB Mundra for export, etc.) must be explicitly agreed and are priced separately.
- H3 — Lead time per `docs/content/reference-defaults.md` row 16: standard items 24-72 hours Ahmedabad / 3-5 days Gujarat / 5-8 days pan-India; made-to-order 7-14 days — **all `[CLIENT TO CONFIRM]`**.
- H3 — Packing: palletised + strapped + weatherproof wrap; export packing on request at buyer's cost.
- H3 — Partial deliveries: permitted unless the buyer specifies otherwise in the PO.

### H2 — Payment terms `[CLIENT INPUT REQUIRED]` `[LAWYER REVIEW REQUIRED]`
*See §4.2. Default placeholders only.*

- H3 — First order from a new buyer: **100% advance against proforma invoice** `[CLIENT TO CONFIRM — default]`.
- H3 — Repeat orders: terms available on credit review `[CLIENT TO CONFIRM]`.
- H3 — Mode of payment: NEFT / RTGS / UPI (for small values). Cheque / cash not accepted beyond statutory limits.
- H3 — Statutory levies: GST at applicable rate; TDS deductible per Indian Income Tax Act; invoice issued per Rule 46 of CGST Rules.
- H3 — Late-payment interest: `[CLIENT TO CONFIRM, default 18% p.a. simple interest]` on undisputed invoices overdue beyond `[CLIENT TO CONFIRM, default 30 days]`.

### H2 — Warranty on OEM items `[LAWYER REVIEW REQUIRED]`
*OEM = Foundation Bolts, Anchor Bolts, Stud Bolts, Sag Rods (per `docs/business-profile.md §2b`).*

- Goods manufactured by KP are warranted to conform to the specification agreed at order (shape, dimension within IS 1367 tolerance, grade, coating).
- Warranty period: `[CLIENT TO CONFIRM, default 12 months from dispatch]` against manufacturing defect.
- Remedy, at KP's option: free replacement of defective pieces, or credit note.
- Excludes: damage during on-site handling, use outside specified application (e.g., corrosion from service beyond the specified environment), re-work by third parties, non-OEM coating applied downstream, and acts beyond KP's control.

### H2 — Warranty on distribution-range items `[LAWYER REVIEW REQUIRED]`
*Distribution = Hex Bolts & Nuts, CSK Allen Bolts, Tie Rods, Solar Accessories, Custom-sourced items.*

- Goods distributed by KP carry the **original mill / manufacturer warranty on a pass-through basis**. KP does not add its own warranty on traded items unless specifically agreed in writing in the PO.
- MTC EN 10204 3.1 and mill certificates are forwarded with the dispatch; the warranty record travels with those documents.
- The remedy is governed by the originating mill's terms; KP will coordinate the claim with the mill on the buyer's behalf.

### H2 — Returns and claims `[LAWYER REVIEW REQUIRED]`
*See §4.3.*

- H3 — **Short-supply or transit-damage** — notify within 7 days of receipt with photographs and the dispatch tag. KP will investigate within 7 working days.
- H3 — **Quality claim** — raise within 30 days of receipt with photographs, lot code and heat number from the MTC. Independent retest at a NABL-accredited lab mutually agreed; cost borne by the party at fault.
- H3 — **Dimensional / coating claim** — assessed against the IS 1367 / ISO 1461 / applicable standard tolerance.
- H3 — No returns are accepted for goods supplied against a drawing (custom items) once dispatch has been authorised, except where the goods fail inspection against the drawing.

### H2 — Intellectual property `[LAWYER REVIEW REQUIRED]`
- Site content (text, data, diagrams, photographs, logos, structured data) is copyright KP Fasteners unless otherwise attributed.
- Buyer-supplied drawings remain the buyer's IP; KP uses them only to execute the order and does not disclose them to third parties beyond the supply chain required to complete the order.
- KP's name, logo and the KP wordmark are trademarks of KP Fasteners; use requires written permission.

### H2 — Confidentiality `[LAWYER REVIEW REQUIRED]`
- Information marked confidential or reasonably known to be confidential is held in confidence by both parties, surviving termination for `[CLIENT TO CONFIRM period, default 3 years]`.
- Exceptions: information already public, independently developed, or disclosed under statute.

### H2 — Website use `[LAWYER REVIEW REQUIRED]`
- No scraping / crawling beyond standard search-engine indexing.
- No reverse-engineering of structured data or lead-form endpoints.
- No upload of malicious files via the drawing-upload field; the field is restricted to PDF / DWG / DXF / PNG up to 8 MB (per `docs/security.md`).
- KP may suspend or block abusive IPs without notice.

### H2 — Force majeure `[LAWYER REVIEW REQUIRED]`
- Standard force-majeure clause: neither party is liable for delay or non-performance arising from events beyond reasonable control (fire, flood, pandemic, strike, war, government action, raw-material unavailability).
- Communication within 7 days of the event; mitigation efforts noted; termination right if the event continues beyond `[CLIENT TO CONFIRM, default 90 days]`.

### H2 — Limitation of liability `[LAWYER REVIEW REQUIRED]`
- To the extent permitted by Indian law, KP's aggregate liability under or arising out of a given supply is limited to the invoice value of the goods giving rise to the claim.
- No liability for indirect, consequential, loss-of-profit, or loss-of-production damages.
- Nothing in these terms limits liability that cannot be limited under Indian statute (e.g., for death / personal injury caused by negligence).

### H2 — Governing law and dispute resolution `[LAWYER REVIEW REQUIRED]`
- Governing law: laws of India; courts of Gujarat have jurisdiction, subject to the arbitration clause below.
- Dispute resolution: disputes are referred to arbitration under the Arbitration and Conciliation Act, 1996 (as amended). Seat: Ahmedabad. Language: English. `[CLIENT TO CONFIRM: sole arbitrator vs. three-member panel; appointing authority if parties disagree]`.
- Nothing prevents either party from seeking urgent interim relief from a court in Ahmedabad.

### H2 — Changes to these terms
- Terms may be updated; `dateModified` on the page carries the revision date. Material changes apply to orders placed after the change takes effect; existing orders are governed by the terms current at the date of order acceptance.

### H2 — How to contact us
Phone, WhatsApp, email, Grievance Officer (for data-related claims — cross-reference the Privacy Policy).

---

## 4. Tables required

### 4.1 Dispatch defaults `[LAWYER REVIEW REQUIRED]`
| Item | Default | Notes |
|---|---|---|
| Default Incoterm | Ex-Works, Ahmedabad | Alternative Incoterms are priced separately |
| Lead time, standard items | 24-72 hrs Ahmedabad / 3-5 days Gujarat / 5-8 days pan-India | Per `reference-defaults.md` row 16 |
| Lead time, made-to-order | 7-14 days | Per `reference-defaults.md` row 16 |
| Lead time, custom (drawing-based) | 10-21 days | Per `reference-defaults.md` row 17 |
| Packing | Palletised + strapped + weatherproof wrap | Export packing extra |
| Partial deliveries | Permitted | Unless PO forbids |

### 4.2 Payment terms `[CLIENT INPUT REQUIRED]`
| Scenario | Default |
|---|---|
| First-order from a new buyer | 100% advance against proforma invoice |
| Repeat order | On credit review |
| Mode | NEFT / RTGS / UPI (small-value) |
| Late-payment interest | 18% p.a. simple interest on overdue undisputed invoices (placeholder) |
| GST | Applicable rate; separately invoiced per CGST Rule 46 |

### 4.3 Claim windows `[LAWYER REVIEW REQUIRED]`
| Claim type | Window from receipt | Evidence required |
|---|---|---|
| Short-supply | 7 days | Dispatch tag, photographs |
| Transit damage | 7 days | Photographs, LR copy |
| Quality (dimensional / mechanical) | 30 days | Lot code + heat number + photographs; NABL retest if disputed |
| Coating thickness | 30 days | Coating-gauge reading + photographs; retest per ISO 1461 / ASTM A153 |

---

## 5. FAQs

*(Not schema'd on legal pages. Optional; keep to 2.)*

**Q1: Do you accept purchase orders without a signed master supply agreement?**
Yes. A written quote from KP + a written PO from the buyer + KP's order-acceptance email constitute a contract on these Terms of Supply. A separately signed master agreement, if any, overrides.

**Q2: What is your warranty on a traded item versus an OEM item?**
OEM items (foundation bolts, anchor bolts, stud bolts, sag rods manufactured by KP) carry a 12-month manufacturing-defect warranty from dispatch, remedied by replacement or credit. Traded items carry the originating mill's pass-through warranty, documented on the forwarded MTC.

---

## 6. Images required

Minimal — no hero photo. Logo + small iconography only.

---

## 7. CTA

- **Primary CTA:** `Return to homepage` -> `/`
- **Secondary CTA:** `Contact sales` -> `/contact/`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)

---

## 8. Internal linking

### Inbound
- Site-wide footer — anchor: **"Terms"** / **"Terms of Supply"**.
- RFQ form submission — anchor: **"Terms of Supply"** on the disclaimer.

### Outbound (from this page)
1. `/privacy-policy/` — anchor: **"Privacy Policy"** inside the data-handling cross-reference.
2. `/contact/` — anchor: **"Contact KP Fasteners"** inside how-to-contact-us block.
3. `/quality/` — anchor: **"documentation we issue"** inside warranty block (MTC pass-through).
4. `/request-quote/` — anchor: **"submit an RFQ"**.

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Every clause on the page carries `[LAWYER REVIEW REQUIRED]` in the brief.** The published page must not display the flag inline; replace with reviewed, dated, final text before launch.
- **Banned phrases**:
  - "We reserve the right to change these terms at any time without notice" — overbroad; counsel will scope correctly.
  - "By using this site you agree to..." without a scope line — replace with a precise scope clause.
  - Any adjective-only quality claim ("the best fasteners") in a Terms clause.
  - Any guarantee of specific service life ("25-year life") in a warranty clause without the matching material / coating / environment constraint.
- **Length target:** 1,200-1,400 words.
- **Tone anchors:** short sentences; counsel voice. No marketing adjectives. Clauses are numbered.
- **Do-not-fabricate list, page-specific:**
  - No specific interest rate, warranty period, or claim window without client sign-off.
  - No Incoterm commitment that KP has not confirmed in writing.
  - No "approved vendor for [OEM]" claim in the IP clause.
  - **No `AggregateRating`.**

---

## 10. Client questions to close before publish (page-specific)

1. **Default Incoterm** — Ex-Works Ahmedabad (default) vs. FOR destination.
2. **Payment terms** — new buyer and repeat buyer defaults; credit-review process; late-interest rate.
3. **Warranty period on OEM items** — 12 months default; confirm or override.
4. **Pass-through warranty wording on traded items** — any item-specific clause (e.g., HDG coating).
5. **Dispute-resolution choice** — sole arbitrator vs. three-member panel; appointing authority.
6. **Quote validity window** — default 15 days.
7. **Force-majeure termination threshold** — default 90 days of continued event.
8. **Confidentiality survival period** — default 3 years.
9. Confirm **Indian commercial counsel sign-off** on the full page. Launch-blocker.
10. Confirm effective date and the change-notification mechanism (default: top-of-page banner for 30 days post-change, same as Privacy Policy).
