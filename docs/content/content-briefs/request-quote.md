# Content Brief: Request a Quote (RFQ)

Route: `/request-quote/`
Priority: **P0**
Cluster: **C05 — Request Quote (primary conversion endpoint)**
Owner (writer): TBD
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal
Client-verification status: Response-SLA wording, whether an anti-spam captcha is acceptable at v1, KV / Google-Sheets persistence choice, sender-domain and email templates for Resend — all pending. See §10.
Verified-as-of: 2026-09-29

---

## 1. Audience & intent

- **Primary persona:** Any buyer at conversion moment — procurement manager with a BOQ, design engineer with a drawing, EPC contractor with a project schedule, MMS fabricator with a repeat SKU list. They arrived via a product-page CTA or a direct query like `bolt rfq form` / `request fastener quote`.
- **Search intent:** Transactional. This is the terminal page of every commercial funnel on the site. Nothing that visits this page needs to be *sold* — it needs the shortest possible path from intent to submitted RFQ.
- **Query snapshot (top 5, cluster C05):**
  1. `request fastener quote`
  2. `bolt rfq form`
  3. `fastener quote india`
  4. `kp fasteners rfq`
  5. `fastener quotation ahmedabad`
- **Why KP wins on this SERP (evidence):**
  - SRG has no dedicated `/request-quote/` page — the site's contact form doubles as its quote form, with no drawing upload and no product picker (`srgfasteners.com-audit/findings/on-page.md`). Any buyer with a drawing has to email SRG cold.
  - KP will ship a purpose-built RFQ with drawing/BOQ upload, product-family pre-selection (query-string driven — `/request-quote/?product=foundation-bolts` pre-fills the product field), pin-code + quantity capture, and a WhatsApp fallback that carries the same fields into a chat pre-fill.
  - Anti-friction wedge: no CAPTCHA, no login, no popups (per `docs/conversion-strategy.md` §5). Only fields KP actually needs to quote.

---

## 2. SEO essentials

- **Primary keyword:** `request fastener quote`
- **Secondary keywords (cluster C05):** `bolt rfq form`, `fastener quote india`, `industrial fastener quote form`, `fastener quotation ahmedabad`
- **Title tag (54 chars):** `Request a Fastener Quote — KP Fasteners, Ahmedabad`  <!-- 51 -->
- **Meta description (156 chars):** `Send your bolt, nut, stud or anchor RFQ to KP Fasteners in Ahmedabad. Upload a drawing or BOQ, or WhatsApp us on +91 98982 30448. We reply within one working day.`  <!-- 160, tighten by 4 -->
- **Canonical URL:** `https://kpfasteners.com/request-quote/`
- **Open Graph title:** `Request a Fastener Quote — KP Fasteners`
- **Open Graph description:** `Upload a drawing or BOQ and receive a quote with lead time and MTC availability. Foundation bolts, stud bolts, tie rods, scaffold and solar accessories.`
- **Open Graph image filename:** `og-request-quote-kp-fasteners.webp` (1200x630 — plain, industrial: an isometric of a BOQ sheet next to a real fastener sample).
- **Schema types (JSON-LD):**
  - `ContactPage` — with `mainEntity` referencing Organization.
  - `BreadcrumbList` — Home > Request a quote.
  - `Organization` inherited.
  - **Do NOT include** `Product` schema on this page (there is no single product). **Do NOT include** `AggregateRating`.
  - Do NOT include `WebForm` markup — it is not a recognised Google rich result type; the form structure is served via semantic HTML instead.

---

## 3. Content outline (~450-650 words visible copy plus the form itself)

### H1
`Request a Fastener Quote`

Sub-headline: `Share your BOQ, drawing or spec sheet. We quote with material, coating, lead time and MTC availability — usually within one working day.` `[CLIENT TO CONFIRM SLA]`

### H2 — What to include in your RFQ (info block — content wedge)
This block is the reason a good RFQ page outperforms a generic contact form. It gives the buyer a spec-shopping list so their first message contains enough for KP to quote without back-and-forth.

**Include, wherever possible:**
1. **Standard** — e.g., IS 5624, DIN 933, ASTM A193, ISO 4017.
2. **Grade / property class / material** — 4.6, 8.8, 10.9, SS 304 (A2), SS 316 (A4), B7, B8M.
3. **Coating** — self-colour, zinc electroplated (blue / yellow), HDG per ISO 1461, PTFE / Xylan, passivated.
4. **Diameter × length** — metric preferred (e.g., M20 × 300 mm). Full-thread vs. partial-thread noted.
5. **Quantity** — pieces or tonnage.
6. **Dispatch pin code** — the six-digit code where the goods land.
7. **Documentation** — MTC EN 10204 3.1? PPAP? Batch traceability?
8. **Drawing** — PDF / DWG / DXF / PNG / JPG (≤ 8 MB per file, per `docs/conversion-strategy.md` §4).

This list is the on-page prose that lets AI Overviews and ChatGPT cite `/request-quote/` when a user asks *"what to include in a fastener RFQ"* — passage-level citability wedge.

### H2 — Send us your RFQ (the form itself)
Rendered as a semantic `<form>` with server action `/api/quote`. Field labels + placeholders + help text below. All required-field validation happens server-side via Zod; client-side is only progressive-enhancement (no JS-required submission).

Fields (matches `docs/conversion-strategy.md` §4 exactly — do not add fields without changing that doc first):

| Order | Field | Label | Placeholder | Help text | Required |
|---|---|---|---|---|---|
| 1 | `name` | Full name | e.g., Amit Shah | — | Yes |
| 2 | `company` | Company | e.g., XYZ EPC Pvt Ltd | — | Yes |
| 3 | `email` | Work email | you@company.com | We'll reply here (or on the phone below). | Yes* |
| 4 | `phone` | Phone (with country code) | +91 98xxxxxxxx | WhatsApp works on this number too. | Yes* |
| 5 | `country_city` | Country / city | India / Ahmedabad | Optional | No |
| 6 | `product` | Product / category | select — driven by `data/products/` | Not sure? Pick "Custom / drawing-based". | Yes |
| 7 | `grade` | Grade / material | e.g., 8.8, SS 316, B7 | — | No |
| 8 | `coating` | Coating | e.g., HDG, Zinc yellow, PTFE | — | No |
| 9 | `size` | Size / range | e.g., M20 × 300 mm | You can also attach a drawing below. | No |
| 10 | `quantity` | Quantity or tonnage | e.g., 500 pcs / 200 kg | — | No |
| 11 | `pin_code` | Dispatch pin code | 6-digit | Speeds up freight quoting. | No |
| 12 | `drawing` | Drawing / BOQ | file input — PDF, DWG, DXF, PNG, JPG | ≤ 8 MB. We keep drawings confidential. | No |
| 13 | `notes` | Additional notes | free text | — | No |
| 14 | `website` | (hidden honeypot, labelled "Website" for screen-reader ignore) | — | — | No — must stay empty |
| 15 | `consent` | Consent checkbox | — | "I agree to be contacted by KP Fasteners about this enquiry." | Yes |

*Server rule: one of `email` or `phone` must be present — Zod `refine`.

**Submit button copy:** `Send RFQ`.

### H2 — What happens after you click Send
Three short bullets. Removes the "did it work?" anxiety that kills conversion.
1. You see a green confirmation on this page (no redirect that loses your form data).
2. You receive an email confirmation with a summary of what you sent. Reply to that email to add more info.
3. Our sales team replies within one working day with material availability, lead time, MTC options, and a formal quotation.

### H2 — Not the RFQ path? Alternatives
Three inline options. No fake urgency.
- **WhatsApp** us on `+91 98982 30448` with the same details.
- **Call** us on `+91 98982 30448`, Mon-Sat 09:30-19:00 IST.
- **Email** `sales@kpfasteners.com` with your drawing attached.

### H2 — Confidentiality
Two sentences: *"Drawings, BOQs and part-numbers you send us stay confidential — we quote and dispatch, we do not share your specs. We do not sell or forward your contact details."* This is the closer for enterprise procurement teams who will not upload a drawing without a confidentiality line.

### H2 — FAQ (schema-attached, 3 questions)
See §5.

---

## 4. Tables required

### 4.1 Field spec (source of truth for the form)
The 15-field table in §3 above is the on-page rendering of `docs/conversion-strategy.md` §4. Any change to fields must edit **that** file first and be mirrored here in the same commit.

### 4.2 Product-select options (drives field 6)
Driven by `data/products/` — the same array that powers the products hub:

| Option value | Option label | Prefill URL |
|---|---|---|
| `foundation-bolts` | Foundation bolts | `/request-quote/?product=foundation-bolts` |
| `stud-bolts` | Stud bolts | `/request-quote/?product=stud-bolts` |
| `tie-rods` | Tie rods | `/request-quote/?product=tie-rods` |
| `scaffold-accessories` | Scaffold accessories | `/request-quote/?product=scaffold-accessories` |
| `solar-accessories` | Solar accessories | `/request-quote/?product=solar-accessories` |
| `csk-allen-bolts` | CSK Allen bolts | `/request-quote/?product=csk-allen-bolts` |
| `hex-bolts-nuts` | Hex bolts & nuts | `/request-quote/?product=hex-bolts-nuts` |
| `custom-fasteners` | Custom / drawing-based | `/request-quote/?product=custom-fasteners` |

Query-string `product=` drives the select's default value (client component leaf per AGENTS.md §3.F.1). No JS required to submit.

---

## 5. FAQs (schema-attached, 3 questions — RFQ-specific)

**Q1: What do you need from me to quote?**
At minimum: the standard or grade, the diameter and length (or a drawing), the quantity, and a delivery pin code. If you don't have all of that yet, send whatever you have — we ask the missing questions before we quote.

**Q2: How long until I get a quote?**
Usually within one working day for standard SKUs. Custom / drawing-based enquiries take longer because we cost the manufacture — we'll email you an ETA the same day. `[CLIENT TO CONFIRM SLA — the "one working day" line ships only when confirmed.]`

**Q3: Are my drawings and BOQs kept confidential?**
Yes. Drawings, BOQs and part-numbers you send us stay with our sales and production desk. We do not forward them to other manufacturers, and we do not sell or share your contact details.

---

## 6. Copy for automated email templates

### 6.1 Sales notification (server -> internal)
Sent via Resend (`SALES_NOTIFICATION_EMAIL`). Subject: `New RFQ — <company> — <product>`. Body: plain-text dump of all fields plus request-id + timestamp. No HTML template needed; procurement responds fastest to plain text.

### 6.2 Buyer confirmation (server -> submitter)
Sent via Resend. Subject: `We've received your RFQ — KP Fasteners`.

Body (draft):

```
Hi <first_name>,

Thanks for sending your RFQ to KP Fasteners. Here's what we received:

Product: <product>
Grade / material: <grade>
Coating: <coating>
Size: <size>
Quantity: <quantity>
Dispatch pin code: <pin_code>
Drawing attached: <yes / no>
Notes: <notes>

We'll reply from sales@kpfasteners.com within one working day
with material availability, lead time, MTC options and a formal quotation.

If it's urgent, WhatsApp us on +91 98982 30448 (Mon-Sat 09:30-19:00 IST)
and quote reference <request_id>.

Regards,
KP Fasteners
23/4 Ghanshyam Industrial Estate, Ahmedabad 380024
GST 24ARDPP9803A1Z3
```

No marketing footer. No unsubscribe link (transactional). No image tracking pixel.

### 6.3 Success-state on-page banner
`Thanks — your RFQ is with our sales team. We've emailed you a summary; check your inbox (and spam) for a mail from sales@kpfasteners.com.`

### 6.4 Failure-state fallback
`Something went wrong sending your RFQ. Please try again, or WhatsApp us with the same details — click here to open WhatsApp with your message pre-filled.` Deep-link URL constructed from the filled-in form state.

---

## 7. CTA

- **Primary CTA:** the `Send RFQ` submit button on the form itself.
- **Secondary CTAs (persistent, sticky mobile bar per `docs/conversion-strategy.md` §3):**
  - WhatsApp `https://wa.me/919898230448?text=Hi%20KP%20Fasteners%2C%20I%27d%20like%20to%20send%20an%20RFQ.%20Product%3A%20%5B%5D%2C%20Grade%3A%20%5B%5D%2C%20Size%3A%20%5B%5D%2C%20Quantity%3A%20%5B%5D%2C%20Dispatch%20pin%3A%20%5B%5D.`
  - Phone `tel:+919898230448`
  - Email `mailto:sales@kpfasteners.com`
- **WhatsApp pre-fill (human-readable):** *"Hi KP Fasteners, I'd like to send an RFQ. Product: [ ], Grade: [ ], Size: [ ], Quantity: [ ], Dispatch pin: [ ]."*

---

## 8. Internal linking (from `docs/seo/clusters/internal-link-matrix.json` — C05 node)

### Inbound
- Every product / material / industry page's hero + closing CTA (matrix rule: every page links to `/request-quote/`).
- `/` (homepage hero + closing CTA).
- `/contact/` (in-form footer + closing block).
- Site header (global — anchor: **"Request a quote"** button).
- Site footer.

### Outbound (matches matrix)
1. `/` — anchor: **"KP Fasteners home"** (breadcrumb).
2. `/contact/` — anchor: **"Prefer to call or WhatsApp? Contact us"** (alt-channels block).
3. `/products/` — anchor: **"Not sure which product? Browse our range"** (in-form help beneath the product select).
4. `/products/custom-fasteners/` — anchor: **"drawing-based / non-standard fasteners"** (in the §3 "What to include" info block, tied to the "Not sure? Pick Custom" line).

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Banned phrases** — same list as `homepage.md` §9. In addition on this page do NOT say:
  - "Get the best price guaranteed" — pricing is BOQ-dependent, no guarantee.
  - "24-hour response" — the SLA is one working day until [CLIENT TO CONFIRM] tightens it, and hours are Mon-Sat 09:30-19:00.
  - "No obligation quote" — obvious to a B2B buyer, adds noise.
  - "Fill in the form and start your fastener journey" — filler.
- **Length target:** 450-650 words visible copy. The form + tables carry the page weight.
- **Tone anchors:** procurement-first, transactional. Every line either removes friction or captures a field. No adjectives except where they anchor a spec (e.g., "hot-dip galvanized", "high-tensile").
- **Do-not-fabricate list, page-specific:**
  - No SLA number until client confirms.
  - No claim of ISO-27001 confidentiality or NDA-by-default — the confidentiality paragraph is a statement of practice, not a certification.
  - No CAPTCHA badge / "protected by X" line at v1 (honeypot + rate limit only).
  - No `Product` schema, no `AggregateRating`, no fake `Review` items.
  - No auto-generated "similar RFQs from other buyers" block (privacy + fabrication risk).

---

## 10. Client questions to close before publish (page-specific)

1. Confirm the **response-time SLA** wording. Current draft: "within one working day". Tighter? Looser?
2. Confirm the **file-upload cap** — 8 MB per file per conversion-strategy.md §4. Any need for multi-file upload at v1?
3. Confirm **allowed file types** — PDF / DWG / DXF / PNG / JPG. Any need to add XLSX for BOQs?
4. Confirm the **email sender-domain** — `sales@kpfasteners.com` for both notification-out and confirmation-out, via Resend. DKIM + SPF setup needed before launch.
5. Confirm **persistence** — Vercel KV log, Google Sheet webhook, or nothing (email-only). Default at v1: email-only.
6. Confirm **rate limit** — 5 submissions per IP per 15 min per conversion-strategy.md §4. Same limit acceptable?
7. Confirm we may add a **honeypot field** (hidden `<input>` labelled "Website") — no user-visible impact, but should be documented.
8. Confirm **confidentiality paragraph** wording (§3, "Confidentiality" H2).
9. Confirm whether a **thank-you page** is preferred over an inline success state. Default: inline (preserves query-string prefill for repeat RFQs).
10. Confirm the **fallback WhatsApp deep-link** message (§6.4).
11. **Hardest single open question:** should the form ship a mandatory **consent / privacy checkbox** at launch, and if so, does KP have a published Privacy Policy at `/privacy-policy/` that we can link to from the checkbox label? Under the DPDP Act 2023 and general procurement expectations, consent + a privacy link is the safer default; but the Privacy Policy page is marked P0 in `docs/keyword-map.md` §5 and its content is still open (data-retention window, third-party processors, etc.). The form cannot go live before the Privacy Policy page does.
