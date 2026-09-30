# Conversion Strategy — KP Fasteners

Objective: turn a qualified visit into a **qualified RFQ** (with enough detail for KP to quote) or a **direct contact** (call / WhatsApp / email). Nothing else on the site matters more.

---

## 1. Channels

Only publish a channel if it genuinely exists — **CLIENT INPUT REQUIRED** on each of the following before it goes live.

| Channel | Element | Status |
|---|---|---|
| Phone (primary) | `tel:+919898230448` — click-to-call | **VERIFIED** — from business card |
| WhatsApp Business | `https://wa.me/919898230448?text=<pre-filled>` | **NEEDS VERIFICATION** — confirm the number is on WhatsApp Business |
| Sales email | `mailto:sales@kpfasteners.com` | **CLIENT INPUT REQUIRED** |
| RFQ form | `/request-quote/` with drawing upload | Will be built |
| Second phone / landline | | **CLIENT INPUT REQUIRED** |
| Visit-by-appointment | Contact page mention only | **CLIENT INPUT REQUIRED** |

Do **not** publish a fake WhatsApp or fake sales email — either exposes the client to spam and complaints.

## 2. Persona → journey

### Persona A — Procurement manager searching a specific product

- **Entry:** `/products/hex-bolts/` after Googling "high tensile hex bolt manufacturer ahmedabad".
- **What they need on-page:** grade + coating + size confirmation, MOQ, lead time, dispatch pin code, MTC availability.
- **CTA sequence:** hero RFQ button + phone/WhatsApp → mid-page RFQ banner after the spec table → sticky mobile bar visible throughout.
- **Best-outcome conversion:** RFQ with product + grade + coating + size + quantity pre-selected.

### Persona B — Design engineer researching a material

- **Entry:** `/materials/stainless-steel-fasteners/` after "ss 304 vs ss 316 for solar".
- **What they need on-page:** grade comparison, PREN, application matrix, availability of specific product forms in that grade.
- **CTA sequence:** in-content link ("browse SS 304 hex bolts") → `/products/hex-bolts/#stainless` → RFQ.
- **Best-outcome conversion:** RFQ with material + application context.

### Persona C — EPC / OEM sourcing across a project

- **Entry:** `/industries/solar-mounting-fasteners/` or `/products/custom-fasteners/`.
- **What they need:** stack of fasteners for the job, willingness to quote against BOQ / drawings, doc availability, dispatch feasibility.
- **CTA sequence:** hero → "Upload BOQ / drawings" pathway on `/request-quote/`.
- **Best-outcome conversion:** RFQ with drawing/BOQ upload.

### Persona D — Existing buyer, business-card lead

- **Entry:** `/` direct from the printed business card / IndiaMART / WhatsApp forward.
- **What they need:** verify KP is legit, get to the phone number quickly.
- **CTA sequence:** hero shows the same phone + WhatsApp visible on the card + link to product hub.
- **Best-outcome conversion:** phone / WhatsApp click.

## 3. CTA placement rules

Every product / material / industry page contains:

1. **Above the fold** — a single **primary** CTA button ("Request quote") + secondary phone/WhatsApp links.
2. **Mid-page** — a contextual CTA banner immediately after the main technical table.
3. **Bottom** — a full-width closing CTA banner ("Send RFQ" + "Talk to a specialist").
4. **Mobile** — a fixed bottom bar (`MobileConversionBar`) with three tap targets ≥ 48×48: phone, WhatsApp, RFQ.

Never more than one primary CTA visible at once. Secondary CTAs are contact-channel links, not competing buttons.

## 4. `/request-quote/` form design

Keep it short. Every field's existence must be justified against "would KP refuse to quote without this?".

| Field | Required | Notes |
|---|---|---|
| Full name | ✓ | |
| Company | ✓ | |
| Work email | ✓ (or phone) | Zod validates |
| Phone | ✓ (or email) | With country code |
| Country / city | Optional | Prefills "India / Ahmedabad" |
| Product / category | ✓ | Select — driven by `data/products/` |
| Grade / material | Optional | Free text |
| Coating | Optional | Free text |
| Size / range | Optional | Free text — accepts drawing instead |
| Quantity / tonnage | Optional | Free text |
| Delivery pin code | Optional | 6-digit numeric |
| Drawing / BOQ upload | Optional | ≤ 8 MB, PDF/DWG/DXF/PNG/JPG |
| Additional notes | Optional | Textarea |
| Honeypot | Hidden | Rejects submissions that fill it |
| Consent | ✓ | Checkbox: "I agree to be contacted about this enquiry" |

Server flow (`/api/quote`):
1. Zod parse — reject invalid.
2. Honeypot check — reject bots.
3. Rate limit (per IP): 5 submissions / 15 min.
4. Send two emails via Resend: (a) sales notification with structured details, (b) buyer confirmation with a friendly summary.
5. Persist to a lightweight log (Vercel KV or a Google Sheet via webhook — **CLIENT INPUT REQUIRED**; do not over-engineer at v1).
6. Return `{ status: 'ok' }` — form flips to success state.

Failure states:
- Show inline error messages under the failing field.
- On network error, keep the form filled and offer a WhatsApp fallback link with the current answers pre-filled.

## 5. Anti-friction rules

- No mandatory registration.
- No CAPTCHA on v1 (honeypot + rate limit first). Add hCaptcha only if spam surfaces in Search Console referrer reports.
- No pop-ups on first visit.
- No exit-intent modals.
- No newsletter modals.
- Autofill-friendly field labels + `autocomplete` attributes.

## 6. Tracking (see [`architecture.md`](architecture.md) + AGENTS.md §24)

Events fired via GA4 (`gtag('event', ...)`) and mirrored to Vercel Analytics:

- `rfq_submission`
- `rfq_submission_error`
- `phone_click` — every `tel:` click
- `whatsapp_click` — every `wa.me` click
- `spec_download` — if a spec PDF is added later

No PII in event payloads. Only route + button label.

## 7. Success measures (post-launch)

| Metric | Target (first 6 months) |
|---|---|
| RFQ submissions / month | Baseline in month 1 → track trend; target ≥ 10 / month by month 6 (indicative only; adjust once real baseline exists) |
| Phone-click / session ratio | Track; do not chase a target until baseline exists |
| WhatsApp-click / session ratio | Same |
| RFQ → quote-sent ratio (offline) | KP records this in CRM / notebook — should be reviewed monthly with the client |
| Bounce rate on `/products/*/` | Track; investigate any page > 70 % bounce |

No target here is a promise — it is a monitoring shape.
