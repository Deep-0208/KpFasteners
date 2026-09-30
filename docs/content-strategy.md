# Content Strategy — KP Fasteners

Editorial standards + reusable page-brief templates. Applies to every route in [`sitemap.md`](sitemap.md).

---

## 1. Voice & tone

- **Audience:** procurement managers, mechanical / design engineers, EPC buyers, OEM supply-chain teams. All are technical, time-poor, and RFQ-driven.
- **Voice:** technical, precise, industrial, calm. First-person plural ("we") sparingly. No hype.
- **Register:** Indian English. Metric units first, imperial in brackets where relevant.
- **Reading level:** clear enough for a B.Tech engineer whose first read is on a phone in a factory.
- **Length target:** whatever the intent needs. Product/category pages typically 800–1,400 words; materials and industries 900–1,600 words; homepage tight and scannable.

## 2. Banned phrases

Do not ship any of the following (from AGENTS.md §10 + expanded):

- "In today's fast-paced industrial world / era of digital transformation…"
- "We are the leading / premier / #1 / most trusted…"
- "State-of-the-art / cutting-edge / world-class / best-in-class…"
- "Unparalleled quality / customer satisfaction / commitment to excellence"
- "One-stop solution / turnkey solution / end-to-end solution"
- "Revolutionising / redefining / transforming the industry"
- "Passionate team / dedicated professionals / synergy / robust portfolio"
- Any adjective (world's, largest, best) that is not backed by a citation.

## 3. Required proof points per commercial page

Every product / material / industry page must show, on-page, at least:
- Standards / grades table sourced from client-verified data.
- Diameter × length matrix (or equivalent size table) — client-verified.
- Coatings list — client-verified.
- Documentation available (MTC 3.1 / PPAP / traceability) — only what is true.
- Typical applications — with sector, not generic "many industries".
- Real product photography (no stock renders).
- 3–5 FAQs answering real procurement questions (lead time, MOQ, docs, dispatch pin codes).
- Contextual RFQ CTA + phone + WhatsApp.

If a proof point is missing because the client has not confirmed, the page ships **with a `[VERIFICATION REQUIRED]` block visible in staging**, and the route is held back from production and from the sitemap until confirmed.

## 4. Reusable page-brief template

Copy this into `docs/content/content-briefs/<slug>.md` for every page before writing copy.

```markdown
# Content Brief: <Page name>

Route: /<...>/
Priority: P0 / P1 / P2
Owner (writer):
Reviewer (client):
Client-verification status: <what is still open>

## Audience & intent
- Primary persona:
- Search intent:
- Query snapshot (top 5 queries this page serves):

## SEO essentials
- Primary keyword:
- Secondary keywords (2–4):
- Title tag (50–60 chars):
- Meta description (150–160 chars):
- Canonical URL:
- Open Graph title / description / image:
- Schema types:

## Content outline
- H1:
- H2 sections (ordered):
  - <H2> — 2-line summary of what's inside
  - <H2> — …
- H3 sub-items:
- Tables required:
  - <table name> — columns, source
- FAQs (3–5, exact questions):
- Images required (kebab-case filename + alt text):

## Proof points (all NEEDS VERIFICATION until client signs off)
- Grades / standards / coatings actually offered
- MOQ / lead time
- Documentation available
- Certifications referenced
- Facility / testing photos referenced

## Internal linking
- Inbound (from): <list of pages linking to this>
- Outbound (to): <list of pages this links to, min 3 contextual>
- Anchor-text suggestions:

## CTA
- Primary:
- Secondary:
- WhatsApp pre-fill text:

## Client questions to close
- <exact question>
```

---

## 5. Priority-page briefs (v1 skeletons)

Only the P0 briefs are stubbed here. Full brief bodies are filled once client questionnaire answers arrive.

### 5.1 `/` — Homepage
- **Audience:** first-time buyer, direct search, IndiaMART click-through, business-card recipient.
- **Job:** in one screen, prove that KP is a legitimate Ahmedabad fastener maker + trader with a real facility, verified quality documentation, and an easy way to send an RFQ.
- **Outline:**
  - H1 hero — one line about who KP is + primary CTA (RFQ) + phone/WhatsApp
  - Trust strip — verified: Ahmedabad address, ISO status (once confirmed), MTC availability (once confirmed)
  - "What we make + trade" — 6 product-category tiles
  - "Materials we work with" — 2-tile teaser → materials pages
  - "Industries we serve" — 2–3 tiles (only confirmed sectors)
  - "How you buy from us" — 3-step buying flow (share drawing → quote → dispatch)
  - Quality snippet → `/quality/`
  - Contact + closing CTA
- **Do NOT include:** carousels of unverified client logos; auto-play videos; fake testimonials; "since 19XX" line unless client confirms.

### 5.2 `/contact/` and `/request-quote/`
Kept simple, honest, fast. See specs in [`sitemap.md`](sitemap.md) and form-schema in [`security.md`](security.md).

### 5.3 `/products/` (hub)
- 6–8 category cards, one line of value each, image, and CTA "View category".
- Below the fold: "Browse by material" + "Browse by industry" cross-navigation blocks.

### 5.4 `/products/hex-bolts/` (template — reused across product categories)
See full section outline in [`sitemap.md` §2](sitemap.md#products-hex-bolts-template-applies-to-every-product-category).

Client answers required before writing:
- Which head types / drives KP actually offers.
- Diameter × length range.
- Standards KP can quote against.
- Grades stocked/produced.
- Coatings offered.
- Typical MOQ, lead time, dispatch pin codes.
- Photos with permission.

### 5.5 `/materials/high-tensile-fasteners/` and `/materials/stainless-steel-fasteners/`
- Anchor content is the grade table + a short decision paragraph.
- Not a marketing page — this is a reference page that also converts. Treat it like a datasheet with a CTA.

### 5.6 `/industries/solar-mounting-fasteners/` (template — reused across industry pages)
- Fastener stack per project type, materials most-picked, packaging for on-site delivery, dispatch pin codes.

### 5.7 `/quality/`
- Documentation available (MTC EN 10204 3.1, PPAP, traceability) — only what is true.
- In-house tests performed (tensile, hardness, salt spray) — only what is true.
- Third-party test lab used (only if applicable).
- Certifications with certificate copies embedded as images (only when confirmed).

### 5.8 `/about/`
- Founding date, founder, ownership — from client questionnaire.
- Facility address (already verified).
- Capabilities list — from client questionnaire.
- Team photo, factory photo — only with written permission.

---

## 6. Editorial governance

- **Draft → client review → copy edit → SEO checklist → publish.** No page bypasses the client review gate.
- **Every published page carries a "verified as of <date>" line** in the CMS/data file (not necessarily visible in the UI).
- **Sample-test 1 page in 5** after publish against `/seo-content` and `/seo-schema`.
- **Re-audit quarterly** — refresh grade tables, standards references, and coatings availability.

## 7. AI usage rules

- Draft with AI; do **not** publish AI first draft. Every page is human-edited by someone who understands fasteners.
- Reject any AI output that adds a spec, standard, coating, grade, or claim not present in the client-verified source data.
- Reject any AI output containing the banned phrase list.

## 8. Blog and articles

Not on v1. Reasons: editorial capacity, cannibalisation risk, ranking timeline. Two evergreen technical guides live inside the two materials pages instead. Revisit after 12 months of Search Console data.

## 9. GEO / AI-search readiness

- Ship a small, curated `public/llms.txt` and `public/catalog.md` **only after** the product catalogue is verified.
- Product pages carry crisp fact tables (grades, standards, sizes) which LLM answer engines can cite. Do not stuff prose; put the facts in tables + short answer sentences.
- Include exact-answer FAQ blocks with 2–3 sentence answers directly under the question — good for AI Overviews and traditional PAA.
- Never use `AggregateRating` schema without real, verifiable reviews.

## 10. Image content requirements

- Real product photographs of KP's own inventory or output (studio-quality preferred, mobile-shot acceptable if lit well).
- Real factory + testing lab photos with written permission.
- No stock imagery of hands-on-drawings or generic screws.
- Every product photograph: descriptive alt text naming product + material + coating.
- File names: kebab-case, product + material + coating (e.g., `zinc-plated-din-933-hex-bolt-m12.webp`).
