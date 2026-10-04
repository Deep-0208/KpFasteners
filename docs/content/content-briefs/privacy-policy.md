# Content Brief: Privacy Policy

> **`[LAWYER REVIEW REQUIRED]` — EVERY CLAUSE ON THIS PAGE.** This brief and the resulting page copy are a drafting starter, not legally sufficient notice under the Digital Personal Data Protection Act 2023 (DPDPA), the GDPR, or any other data-protection statute. KP Fasteners must have the final text reviewed and approved by an Indian lawyer specialising in data protection, and the lawyer must co-sign the Grievance Officer appointment before launch.

Route: `/privacy-policy/`
Priority: **P0** (launch blocker for GA4 + any form on the site)
Cluster: **C-legal (privacy)**
Classification: n/a (not a product page)
Owner (writer): TBD + Indian data-protection counsel
Reviewer (client): Mr. Pramod Panchal / Kabir Panchal + Indian lawyer
Client-verification status: Grievance Officer appointment (name, email, phone, postal address), data-retention periods, name of GA4 / analytics vendor on launch, cookie-banner scope decision (EU-UK banner vs. India implicit consent) — all pending counsel. See §10.
Verified-as-of: 2026-10-04

---

## 1. Audience & intent

- **Primary persona:** A website visitor who clicks the Privacy Policy footer link before submitting an RFQ or giving any contact detail. Secondary persona: a procurement officer at a buyer's legal / compliance desk running a data-processing diligence on KP; and a Google / IndexNow crawler checking that the site has a published privacy policy before trusting GA4 / consent-dependent features.
- **Search intent:** Navigational / trust-signal. The page is almost never discovered through search; it is a launch-blocker that lives in the footer. It converts by not creating ambiguity about what KP collects and why.
- **Query snapshot (top 5, from `docs/seo/clusters/cluster-plan.md` C-legal):**
  1. `kp fasteners privacy policy`
  2. `kpfasteners.com privacy`
  3. — (balance: direct-navigation footer clicks)
- **Why KP wins on this SERP (evidence):**
  - The page is not an SEO wedge. It is a trust + compliance artefact.
  - Writing the policy against the DPDPA 2023 framework (lawful basis, purpose limitation, retention, data-principal rights, Grievance Officer) rather than cloning a US-style template is itself a trust signal to Indian procurement counsel.

---

## 2. SEO essentials

- **Primary keyword:** `kp fasteners privacy policy`
- **Secondary keywords:** `kpfasteners privacy`, `privacy policy fastener manufacturer`
- **Title tag (46 chars):** `Privacy Policy | KP Fasteners`
- **Meta description (152 chars):** `How KP Fasteners collects, uses and protects personal data from website visitors, RFQ submissions, drawing uploads and WhatsApp enquiries. DPDPA 2023 aligned.`
- **Canonical URL:** `https://kpfasteners.com/privacy-policy/`
- **Open Graph title:** `Privacy Policy — KP Fasteners`
- **Open Graph description:** `Data we collect, purposes, retention, your rights under DPDPA 2023, and how to contact our Grievance Officer.`
- **Open Graph image filename:** `og-privacy-kp.webp` (site-neutral; small factory sign-board thumbnail with "Privacy" overlay).
- **Robots:** indexable (`index, follow`). Sitemap entry at low priority (`priority: 0.3`). The page is not `noindex` on launch (per task spec) but the sitemap deprioritises it so it does not compete with commercial pages.
- **Schema types (JSON-LD):**
  - `BreadcrumbList` — Home > Privacy Policy.
  - `WebPage` — `about` references the KP `Organization` node; `datePublished` and `dateModified` carry the real revision dates (not synthetic ones).
  - `Organization` (inherited, with Grievance Officer `contactPoint` where allowed by counsel).
  - **Do NOT include `AggregateRating`.** (Noted for completeness; obviously no reviews on a legal page.)

---

## 3. Content outline (H1 -> H3, ~1,200-1,400 words target)

### H1
`Privacy Policy`

### H2 — Who this policy applies to `[LAWYER REVIEW REQUIRED]`
*2-3 sentence lead. Applies to anyone who uses `kpfasteners.com`, submits an RFQ or contact form, uploads a drawing, or messages KP via the WhatsApp Business link embedded on the site. Identifies KP Fasteners (Proprietorship, GST 24ARDPP9803A1Z3, Ahmedabad) as the data fiduciary under DPDPA 2023.*

### H2 — Data we collect `[LAWYER REVIEW REQUIRED]`
*Section-matrix. See §4.1.*

- H3 — **Information you give us** — name, company, work email / phone, delivery pin code, product type / grade / coating, quantity, free-text notes, and any file you upload (PDF / DWG / DXF / PNG drawings).
- H3 — **Information collected automatically** — IP address (truncated for GA4 where configured), browser user agent, device type, referrer URL, pages visited and time stamps, GA4 client ID cookie, consent-choice cookie.
- H3 — **Information from third parties** — if the visitor arrives via a linked IndiaMART enquiry, basic contact details may already be present in the lead object; same for WhatsApp Business metadata.
- H3 — **Data we do NOT collect** — financial / payment information (there is no e-commerce checkout on the site), government identifiers (PAN, Aadhaar), passwords for other services, cookies from ad / retargeting networks (none are embedded on v1).

### H2 — Purposes we use data for `[LAWYER REVIEW REQUIRED]`
*Purpose-limitation table. See §4.2.*

- H3 — **Responding to an RFQ or contact enquiry** — lawful basis: performance of a step toward a contract at your request + legitimate interest in replying.
- H3 — **Analytics (aggregate traffic patterns)** — lawful basis: consent (where consent is required by law) or legitimate interest (where legitimate interest is permissible under the applicable regime).
- H3 — **Fraud / abuse prevention on forms** — honeypot and rate-limit logs, retained short-term; lawful basis: legitimate interest.
- H3 — **Legal and tax recordkeeping** — statutory retention of RFQ-to-order records under applicable Indian law.

### H2 — Cookies and tracking `[LAWYER REVIEW REQUIRED]`
*Short section. See §4.3 for the cookie table. We default to **essential + consent-gated analytics**. No marketing / ad cookies on v1.*

- H3 — **Essential cookies** — session, consent-choice (strictly necessary; no consent required).
- H3 — **Analytics (GA4) cookies** — consent-gated per the banner. If the visitor declines, GA4 is not loaded.
- H3 — **Banner behaviour by region** — EU / UK / EEA visitors see an explicit opt-in banner (GDPR / UK-GDPR). Indian visitors see a notice-and-choice banner aligned to DPDPA 2023; implicit consent is **not** relied on without counsel confirmation (the DPDPA requires affirmative notice-and-choice for most purposes). Other visitors see a notice-and-choice banner by default.

### H2 — Retention `[LAWYER REVIEW REQUIRED]`
*See §4.4. Default values are placeholders pending counsel.*

- H3 — RFQ / enquiry records — `[CLIENT TO CONFIRM retention period, default 36 months]`.
- H3 — Uploaded drawings — `[CLIENT TO CONFIRM, default 24 months, extended if the RFQ converts to a purchase order]`.
- H3 — Analytics event data — `[CLIENT TO CONFIRM GA4 retention setting, default 14 months]`.
- H3 — Spam / abuse logs — 90 days.
- Deleted or anonymised at the end of the period unless statute requires longer retention.

### H2 — Your rights under DPDPA 2023 `[LAWYER REVIEW REQUIRED]`
*Enumerate the DPDPA data-principal rights at a conceptual level. See §4.5.*

- H3 — Right to access the personal data KP processes about you.
- H3 — Right to correction and erasure of personal data.
- H3 — Right of grievance redressal via the Grievance Officer.
- H3 — Right to nominate another individual to exercise rights in case of death or incapacity.
- H3 — Right to withdraw consent for processing that is consent-based.
- H3 — How to exercise your rights — email the Grievance Officer at `[CLIENT TO CONFIRM — grievance@kpfasteners.com or sales@kpfasteners.com with "Data request" in the subject]`. Response within statutory timelines.

### H2 — Grievance Officer `[CLIENT INPUT REQUIRED]` `[LAWYER REVIEW REQUIRED]`
*Section is a mandatory DPDPA requirement.*

- Name, designation, email, phone and postal address — `[CLIENT TO CONFIRM]`.
- Response SLA — `[CLIENT TO CONFIRM, aligned to DPDPA when prescribed]`.

### H2 — Children's data `[LAWYER REVIEW REQUIRED]`
*The site is a B2B industrial-procurement property and is not directed at children. We do not knowingly collect personal data from any person under 18. If you believe a minor has submitted a form, contact the Grievance Officer to delete the record.*

### H2 — Security `[LAWYER REVIEW REQUIRED]`
*Short, factual.*

- Site served over HTTPS with HSTS.
- Form submissions validated server-side using strict schemas (Zod per `docs/security.md`) and routed through isolated serverless endpoints; sensitive secrets (`RESEND_API_KEY`, `SALES_NOTIFICATION_EMAIL`) are not exposed to the browser.
- No payment data is processed on the site.
- No warranty is possible of absolute internet security; disclose the limitation per `[LAWYER REVIEW REQUIRED]` phrasing.

### H2 — Third-party processors `[LAWYER REVIEW REQUIRED]`
*Transparent list, see §4.6.*

- Hosting / CDN (Vercel) — EU + US + India edge.
- Analytics (Google Analytics 4) — Google Ireland Ltd / Google LLC.
- Transactional email (Resend) — US-based processor.
- WhatsApp Business (Meta) — if the user clicks the WhatsApp link, Meta processes the exchange under its own terms (which KP has no control over; outbound link to Meta's privacy notice).

### H2 — International transfers `[LAWYER REVIEW REQUIRED]`
*India-based company with US / EU / global processors. Discloses that personal data may be stored / processed outside India under the processors' standard contractual terms and the DPDPA restricted-transfer framework once notified.*

### H2 — Changes to this policy
*Policy may be updated; `dateModified` on the page carries the revision date. Material changes are highlighted at the top of the page for 30 days.*

### H2 — How to contact us
*Grievance Officer block + Sales contact (`sales@kpfasteners.com`, phone, WhatsApp, postal address).*

---

## 4. Tables required

### 4.1 Data categories `[LAWYER REVIEW REQUIRED]`
| Category | Example fields | Source |
|---|---|---|
| Identity | Name, company | RFQ / contact form, WhatsApp enquiry |
| Contact | Work email, phone, pin code | RFQ / contact form, WhatsApp |
| Technical enquiry content | Product type, grade, coating, quantity, free-text notes, uploaded drawing | RFQ form |
| Technical / log data | IP (truncated), user agent, device, referrer, pages, timestamps | Site + GA4 |
| Consent record | Cookie banner choice, timestamp | Site |
| Communications metadata | Message timestamp (WhatsApp) | Meta / WhatsApp |

### 4.2 Purposes and lawful bases `[LAWYER REVIEW REQUIRED]`
| Purpose | Lawful basis under DPDPA 2023 | Lawful basis under GDPR (if visitor in EU) |
|---|---|---|
| Responding to an RFQ or enquiry | Specified purpose, notice-and-choice | Pre-contract / legitimate interest |
| Delivering a quote and following up | Specified purpose, notice-and-choice | Legitimate interest / contract |
| Analytics (aggregate) | Consent (where required) | Consent |
| Fraud / abuse prevention | Legitimate purpose | Legitimate interest |
| Legal / tax recordkeeping | Legal obligation | Legal obligation |

### 4.3 Cookies `[LAWYER REVIEW REQUIRED]`
| Cookie | Purpose | Essential? | Retention |
|---|---|---|---|
| Session | Core site operation | Yes | Browser session |
| Consent-choice | Remember cookie banner choice | Yes | 12 months |
| `_ga` / `_ga_XXXX` | GA4 client ID | No (consent-gated) | 24 months (default); overridden to GA4 project retention |
| Honeypot anti-abuse | Form abuse detection | Yes | Session |

### 4.4 Retention `[LAWYER REVIEW REQUIRED]`
| Record | Default retention | Trigger for extension |
|---|---|---|
| RFQ / contact form submission | 36 months | PO issued → retained for statutory tax period |
| Uploaded drawing | 24 months | PO issued → retained with order record |
| GA4 event data | 14 months (GA4 property setting) | — |
| Spam / abuse logs | 90 days | — |
| MTC / dispatch tag chain | Per Indian tax statute | Statutory |

### 4.5 Data-principal rights `[LAWYER REVIEW REQUIRED]`
| Right | Statutory anchor | How to exercise |
|---|---|---|
| Access | DPDPA 2023 §11 | Email Grievance Officer |
| Correction / erasure | DPDPA 2023 §12 | Email Grievance Officer |
| Nomination | DPDPA 2023 §14 | Written request to Grievance Officer |
| Grievance redressal | DPDPA 2023 §13 | Email Grievance Officer; escalation to the Data Protection Board of India when operational |
| Withdraw consent | DPDPA 2023 §6 | Click "Decline" on the cookie banner / email Grievance Officer |

### 4.6 Processors `[LAWYER REVIEW REQUIRED]`
| Processor | Role | Location |
|---|---|---|
| Vercel Inc. | Hosting / CDN | US + global edge |
| Google Ireland Ltd / Google LLC | Analytics (GA4) | EU / US |
| Resend | Transactional email | US |
| Meta Platforms | WhatsApp Business messaging | Global |

---

## 5. FAQs

*(Optional on legal pages; keep schema-less to avoid misleading rich results. If published, cap at 3 — all `[LAWYER REVIEW REQUIRED]`.)*

**Q1: What personal data do you collect when I submit an RFQ?**
Name, company, work email or phone, delivery pin code, product details and free-text notes, plus any drawing you upload. We also collect truncated-IP and basic log data as noted in §4.1.

**Q2: Who do I contact to delete my data?**
Email the Grievance Officer at `[CLIENT TO CONFIRM address]`. We will respond within the statutory timeline under DPDPA 2023.

**Q3: Do you share my RFQ data with anyone?**
No. RFQ data is used internally by KP Fasteners' sales team to prepare the quote, routed through Resend (transactional email), and stored on Vercel-hosted infrastructure. It is not sold, rented, or shared with marketing partners.

---

## 6. Images required

Minimal. Legal pages do not need hero photography.

| Filename (kebab-case, WebP) | Alt text | Client-supply? |
|---|---|---|
| `kp-fasteners-logo-small.webp` | KP Fasteners logo | — (existing logo) |

---

## 7. CTA

- **Primary CTA:** `Return to homepage` -> `/`
- **Secondary CTA:** `Contact our Grievance Officer` -> `mailto:[grievance@kpfasteners.com]` `[CLIENT TO CONFIRM email]`
- **Phone:** `+91 98982 30448` (`tel:+919898230448`)

---

## 8. Internal linking

### Inbound
- Site-wide footer — anchor: **"Privacy Policy"**.
- Cookie banner "Learn more" — anchor: **"privacy policy"**.
- RFQ form (`/request-quote/`) submission disclaimer — anchor: **"privacy policy"**.
- Contact form (`/contact/`) submission disclaimer — anchor: **"privacy policy"**.

### Outbound (from this page)
1. `/terms/` — anchor: **"Terms of supply and website use"**.
2. `/contact/` — anchor: **"contact us"** inside Grievance Officer block.
3. `/` — anchor: **"Return to homepage"**.

Minimum 3 contextual outbound links satisfied.

---

## 9. Copy guardrails

- **Every heading and clause carries `[LAWYER REVIEW REQUIRED]` in the brief.** The published page itself must not display the flag inline; replace with reviewed-and-approved copy before launch.
- **Banned phrases** — same banned list applies, plus:
  - "We take your privacy seriously / We value your privacy" — meaningless opening cliches, do not use.
  - "100% secure" / "military-grade encryption" — unverifiable claims, banned.
  - "We will never share your data" — unless literally true for every processor listed.
- **Length target:** 1,200-1,400 words.
- **Tone anchors:** DPDPA-aligned, precise, no marketing voice. Short sentences. Legal counsel's edits take precedence over this brief wherever they differ.
- **Do-not-fabricate list, page-specific:**
  - No GDPR-article citations without counsel sign-off.
  - No DPDPA-section citations without counsel sign-off (the brief above is drafted at a conceptual level).
  - No specific retention period without client confirmation.
  - No Grievance Officer identity without client confirmation + the GO's own written consent.
  - No "we are ISO 27001 certified" or security-standard claim.
  - **No `AggregateRating`.** No testimonial. No star.

---

## 10. Client questions to close before publish (page-specific)

1. **Grievance Officer** — name, designation, email, phone, postal address, written consent to be named. Statutory requirement under DPDPA 2023; the page cannot launch without this.
2. Confirm final **retention periods** for RFQ records, uploaded drawings, GA4 event data. Defaults in §4.4 are placeholders.
3. Confirm the **cookie-banner scope** — EU-UK explicit opt-in + India notice-and-choice (default) vs. a single global opt-in banner. Counsel decision.
4. Confirm **analytics vendor** on launch — GA4 default; add any secondary tool (e.g., Vercel Analytics) to §4.6.
5. Confirm whether **IndiaMART lead data** flows into KP's inbox and, if so, how it is handled downstream — needs to be added to §4.1 as a third-party source.
6. Confirm whether KP will support a **data-subject access request portal** (even a simple email mailbox counts) on launch, or route everything through the Grievance Officer.
7. **Indian lawyer sign-off** — final text approved and dated by counsel. Launch-blocker.
8. Confirm the **effective date** of the policy (first publication) and the mechanism for highlighting material changes (default: top-of-page banner for 30 days post-change).
