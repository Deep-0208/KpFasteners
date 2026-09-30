# Content Brief: Contact

Route: `/contact/`
Priority: **P0**
Cluster: **C04 — Contact**
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Founder-name clarification, exact factory-pin lat/long (5-decimal), landline / second phone, whether the site should mention "visit by appointment", real address / signboard photo — all pending. See §10.
Verified-as-of: 2026-09-29

---

## 1. Audience & intent

- **Primary persona:** A buyer at the last mile — either (a) an existing IndiaMART / business-card lead who wants to phone or WhatsApp KP, or (b) a first-time visitor who has already scanned a product page and now wants a human to speak to. Both need one thing: **immediate, obvious channels** — not another marketing paragraph.
- **Search intent:** Navigational / commercial. Queries are literal: `kp fasteners contact`, `kp fasteners phone number`, `fastener supplier ahmedabad contact`, `kp fasteners address`, `kp fasteners email`. Google frequently returns this URL as the answer target for the site-links sub-result under a brand search.
- **Query snapshot (top 5, cluster C04):**
  1. `kp fasteners contact`
  2. `kp fasteners phone number`
  3. `fastener supplier ahmedabad contact`
  4. `kp fasteners address ahmedabad`
  5. `kp fasteners whatsapp`
- **Why KP wins on this SERP (evidence):**
  - SRG's `/contact` page is notably weak on trust: **gmail.com email**, **no visible phone number in the body**, **no Google Map**, **no GBP link** (`srgfasteners.com-audit/findings/local.md`). This is a first-order local-trust gap.
  - KP will ship the opposite: `sales@kpfasteners.com` on-brand email, phone `+91 98982 30448` shown as `tel:` link, WhatsApp deep-link on the same number, static Google-Maps image, hours, and (once verified) a Google Business Profile `sameAs` link in schema.
  - Ahmedabad-Vatva vs. Ahmedabad-Ghanshyam-Industrial-Estate: both are Ahmedabad, so no geo-arbitrage. But KP's contact page will double as an entity-authority page (LocalBusiness schema with 5-decimal geo + `hasMap`) — schema-clean, whereas SRG's LocalBusiness ships with 2-decimal geo (~1 km error).

---

## 2. SEO essentials

- **Primary keyword:** `kp fasteners contact` (secondary supporting `fastener supplier ahmedabad contact`)
- **Secondary keywords (cluster C04):** `kp fasteners phone number`, `kp fasteners address`, `kp fasteners whatsapp`, `kp fasteners email`, `fastener supplier ahmedabad contact`
- **Title tag (52 chars):** `Contact KP Fasteners — Ahmedabad Factory & Sales`  <!-- 51 -->
- **Meta description (155 chars):** `Call, WhatsApp or visit KP Fasteners at 23/4 Ghanshyam Industrial Estate, Ahmedabad. Phone +91 98982 30448. Mon-Sat 09:30-19:00 IST. Sales sales@kpfasteners.com.`  <!-- 160, tighten by 5 if needed -->
  - Tighter alt (154 chars): `Contact KP Fasteners Ahmedabad: phone +91 98982 30448, WhatsApp, and sales@kpfasteners.com. Factory at 23/4 Ghanshyam Industrial Estate. Mon-Sat 09:30-19:00.`
- **Canonical URL:** `https://kpfasteners.com/contact/`
- **Open Graph title:** `Contact KP Fasteners — Ahmedabad Factory, Phone & WhatsApp`
- **Open Graph description:** `Reach KP Fasteners in Ahmedabad by phone, WhatsApp, or email. Factory and warehouse at 23/4 Ghanshyam Industrial Estate. GST 24ARDPP9803A1Z3.`
- **Open Graph image filename:** `og-contact-kp-fasteners.webp` (1200x630 — real signboard photo of the factory entrance, or a wide static-map crop with the pin marked).
- **Schema types (JSON-LD):**
  - `ContactPage` — `mainEntity` references the `Organization` node.
  - `LocalBusiness` (subtype `Manufacturer` where accepted) — full NAP, `openingHoursSpecification` Mon-Sat 09:30-19:00, `geo.latitude / .longitude` `[CLIENT TO CONFIRM — 5-decimal resolved from Google Maps]`, `hasMap` link to the Google Maps place URL, `image`, `sameAs` (IndiaMART + Google Business Profile once claimed), `contactPoint` (sales phone + WhatsApp — declared via `contactType: "sales"` and `availableLanguage: [en, hi, gu]`).
  - `BreadcrumbList` — Home > Contact.
  - `Organization` inherited from layout.
  - **Do NOT include `AggregateRating`.**

---

## 3. Content outline (~500-700 words plus form + map)

### H1
`Contact KP Fasteners — Ahmedabad Factory & Sales`

Sub-headline: `Phone, WhatsApp, email or a visit by appointment. Our factory, warehouse and sales office are at a single Ahmedabad address.`

### H2 — Direct channels (above the fold)
Renders as three clickable cards (touch target ≥ 48×48). No decoration icons treated as buttons — semantic anchor tags per AGENTS.md §18.

- **Phone** — `+91 98982 30448` (`tel:+919898230448`)
- **WhatsApp** — `+91 98982 30448` (`https://wa.me/919898230448?text=<pre-filled>`)
- **Email** — `sales@kpfasteners.com` (`mailto:`)

Under the strip: single line — *"Mon-Sat, 09:30-19:00 IST · Closed Sunday · Reply within one working day."* `[CLIENT TO CONFIRM reply-window SLA]`.

### H2 — Factory, warehouse & sales office
Address block, formatted for both humans and copy-paste. Below it a static Google-Maps image (Maps Static API PNG, `loading="lazy"`, explicit width/height to prevent CLS per `docs/performance.md`) with a "Open in Google Maps" `<a>` link — **not** an iframe (iframes hurt INP and add cross-origin JS).

- **KP Fasteners**
- 23/4 Ghanshyam Industrial Estate
- Margha Farm, Ahmedabad — 380024
- Gujarat, India
- **GST:** 24ARDPP9803A1Z3

### H2 — Who reaches you
`[CLIENT TO CONFIRM name discrepancy — Pramod Panchal (business card) vs. Kabir Panchal (IndiaMART MD).]` Placeholder text: *"Your enquiry lands with our sales desk, and one of our team (Mr. Pramod Panchal / Kabir Panchal) will respond."* This paragraph MUST be rewritten once the name clarification is answered; do not publish the current placeholder.

### H2 — Send an enquiry
A short in-line form (not the full RFQ — that lives on `/request-quote/`). Purpose is a light-touch alternative to phone/WhatsApp for buyers who prefer email.

Fields (all use `<label htmlFor>` per AGENTS.md §18):
- Full name (required)
- Company (required)
- Work email OR phone (at least one required — Zod refine)
- Message (required, textarea)
- Consent checkbox (required)
- Honeypot (`<input>` labelled "Website" and hidden via CSS + `aria-hidden="true"`; server rejects submissions where this is non-empty)

Under the form: *"For a formal RFQ with drawing / BOQ, please use our [Request a quote](/request-quote/) page — it accepts uploads."*

Success state: inline banner "Thanks — we'll respond within one working day. For urgent enquiries, please WhatsApp us on +91 98982 30448."

Failure fallback: on network error the form stays filled and shows a WhatsApp deep-link with the message + name pre-filled.

### H2 — Working hours
| Day | Hours (IST) |
|---|---|
| Monday | 09:30 - 19:00 |
| Tuesday | 09:30 - 19:00 |
| Wednesday | 09:30 - 19:00 |
| Thursday | 09:30 - 19:00 |
| Friday | 09:30 - 19:00 |
| Saturday | 09:30 - 19:00 |
| Sunday | Closed |

Source: client confirmation 2026-09-29 (business-profile §1). **Verified — publish as-is.**

### H2 — Why buyers reach us here (trust wedge vs SRG)
A short, evidence-only paragraph. Three items, no adjectives. This section is the reason KP will out-trust SRG on identical local queries:

1. **On-brand email** — `sales@kpfasteners.com`, not a gmail.com fallback.
2. **Visible phone + WhatsApp on the same number** — no need to fill a form to speak to us.
3. **Factory and warehouse at the same address** — you are speaking to the people who make and pack the order, not a reseller who forwards it on.

(Per `srgfasteners.com-audit/findings/local.md`: SRG's contact page uses a gmail.com email, has no visible phone in the body, no map, and no Google Business Profile link. Do **not** name SRG in the copy — this is an evidence-driven positioning paragraph, not a comparison.)

### H2 — FAQ (schema-attached, 3 questions — deliberately short)
See §5.

### H2 — Related pages (closing)
Three inline links: `Request a formal quote`, `See our full products range`, `About KP Fasteners`.

---

## 4. Tables required

### 4.1 NAP block (canonical — reused across the site)
| Field | Value |
|---|---|
| Legal name | KP Fasteners |
| Street | 23/4 Ghanshyam Industrial Estate, Margha Farm |
| City | Ahmedabad |
| Region | Gujarat (GJ) |
| Postal code | 380024 |
| Country | IN |
| Phone | +91 98982 30448 |
| WhatsApp | +91 98982 30448 |
| Email | sales@kpfasteners.com |
| GSTIN | 24ARDPP9803A1Z3 |
| Hours | Mon-Sat 09:30-19:00 IST; closed Sunday |
| Geo | latitude / longitude `[CLIENT TO CONFIRM — 5-decimal from Google Maps]` |

### 4.2 Working hours (schema `openingHoursSpecification` source)
Same as §3 table above; re-used verbatim in JSON-LD.

---

## 5. FAQs (schema-attached, 3 questions — short, exact-answer)

**Q1: What is KP Fasteners' phone number?**
Our sales line is **+91 98982 30448** (`tel:+919898230448`). The same number works on WhatsApp Business. We answer Mon-Sat, 09:30-19:00 IST.

**Q2: Where is KP Fasteners located?**
Our factory, warehouse and sales office are at 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat. GSTIN 24ARDPP9803A1Z3.

**Q3: Can I visit the factory?**
Yes, by prior appointment. Please phone or WhatsApp us on +91 98982 30448 before you travel so we can have the right person available. `[CLIENT TO CONFIRM whether unannounced walk-ins are accepted; default answer stays "by appointment".]`

---

## 6. Images required

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `factory-signboard-kp-fasteners.webp` | KP Fasteners factory signboard at 23/4 Ghanshyam Industrial Estate, Ahmedabad | Yes — needs written permission |
| `factory-entrance-wide.webp` | Entrance to KP Fasteners' Ahmedabad manufacturing unit | Yes |
| `static-map-kp-ahmedabad.webp` | Static map showing KP Fasteners pin at Ghanshyam Industrial Estate, Ahmedabad 380024 | Site-produced (Maps Static API PNG, NOT iframe) |
| `warehouse-inventory-strip.webp` | Fastener inventory racks at KP Fasteners warehouse, Ahmedabad | Yes |

No stock imagery of a receptionist's headset, no clip-art phone-icon-in-a-circle hero.

---

## 7. CTA

- **Primary CTA (hero + closing):** `Request a formal quote` -> `/request-quote/`
- **Secondary CTAs (persistent, sticky mobile bar):**
  - Phone `tel:+919898230448`
  - WhatsApp `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%20want%20to%20get%20in%20touch%20about%20%5Bproduct%2Fenquiry%5D.`
  - Email `mailto:sales@kpfasteners.com`
- **WhatsApp pre-fill (human-readable):** *"Hi KP Fasteners, I want to get in touch about [product / enquiry]."*

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C04 node)

### Inbound
- Site header + footer (global — anchor: **"Contact"**).
- `/` (homepage contact strip — anchor: **"Visit us in Ahmedabad"**).
- `/about/` — anchor: **"Get in touch with our sales team"**.
- Every product page's closing CTA banner links here as the phone/WhatsApp fallback.
- `/request-quote/` — anchor: **"Prefer to call or WhatsApp? Contact us"**.

### Outbound (matches matrix)
1. `/` — anchor: **"KP Fasteners home"** (breadcrumb).
2. `/request-quote/` — anchor: **"Send a full RFQ with drawing / BOQ"** (in-form footer + closing block).
3. `/about/` — anchor: **"About KP Fasteners"** (closing "related pages" row).

Optional additional outbound (matrix does not forbid — but keep it lean per the Ponytail rule in AGENTS.md §2):
4. `/products/` — anchor: **"See our full products range"** (closing).

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `homepage.md` §9. In addition on this page do NOT say:
  - "We are here 24×7 to serve you" — real hours are Mon-Sat 09:30-19:00.
  - "One of our representatives will call you within minutes" — the SLA is one working day until [CLIENT TO CONFIRM] tightens it.
  - "Fill the form below and we will send our best price" — the contact form is not the quote form; that lives on `/request-quote/`.
- **Length target:** 500-700 words visible copy (the form + map + tables carry the rest of the page weight). Contact pages are for action, not prose.
- **Tone anchors:** direct, factual, action-first. Every sentence either provides a channel or removes a friction. No adjectives.
- **Do-not-fabricate list, page-specific:**
  - No fake landline / second-phone until [CLIENT TO CONFIRM].
  - No lat/long placeholder in schema — omit the `geo` node until the 5-decimal value is confirmed, rather than shipping a made-up value.
  - No claim of "24×7 WhatsApp" — even if the number is on WhatsApp Business, human reply hours are Mon-Sat 09:30-19:00.
  - No "our export desk" line — export capability + IEC number are unverified (business-profile §2).
  - No named client references / logos.
  - No `AggregateRating` schema. No star widget.

---

## 10. Client questions to close before publish (page-specific)

1. **Name clarification** — Pramod / Kabir Panchal (repeats homepage §10 Q1). Blocks the "who reaches you" paragraph.
2. Provide **factory-pin latitude and longitude** to 5 decimals, resolved on Google Maps against the confirmed address. Blocks `LocalBusiness.geo` and `hasMap`.
3. Provide the **Google Maps place URL** (the canonical `https://www.google.com/maps/place/...` URL from the pin) — used in `LocalBusiness.hasMap`.
4. Confirm whether we may **embed a Google Business Profile** review widget once GBP is claimed, or keep GBP link-only for launch.
5. Provide **additional landline / second phone** (if any) for the Contact page. Default: single number is fine.
6. Confirm **response-time SLA** — currently drafted as "within one working day". Tighten if possible.
7. Confirm the **"visit by appointment"** wording — is walk-in acceptable, appointment-only, or should this section be dropped entirely?
8. Provide a **real signboard photograph** of the factory entrance (with written permission) — this is the highest-conversion trust signal on a contact page.
9. Confirm whether **email autoresponder** goes out on form submit (Resend `transactional` template).
10. **Hardest single open question:** Should `LocalBusiness` schema be shipped on this page **and** the homepage (both), or on the contact page only? Two pages carrying the same `LocalBusiness` node is defensible but can duplicate `Organization` info in the Rich Results Test view; a single canonical `LocalBusiness` on `/contact/` (with `/`'s Organization node pointing to it via `location`) is cleaner. Locks in once the design decision on the homepage schema stack is made.
