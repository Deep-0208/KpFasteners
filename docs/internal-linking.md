# Internal Linking — KP Fasteners

Hub-and-spoke model, tri-directional (up / sideways / down), enforced by the CI link-audit script.

---

## 1. Topology

```
                       ┌──────────────────────────┐
                       │           /              │  (Homepage — universal hub)
                       └────────────┬─────────────┘
                                    │
     ┌──────────────┬───────────────┼────────────────┬──────────────┐
     ▼              ▼               ▼                ▼              ▼
 /products/    /materials/…    /industries/…      /quality/       /about/
     │              │               │                                │
     ▼              ▼               ▼                                ▼
 category      material         industry                         /contact/
  pages         pages           pages                             /request-quote/
     │              │               │                                ▲
     └──────────────┴───────────────┴────────────────────────────────┘
                    (every commercial page → RFQ + Contact)
```

## 2. Rules

1. **Homepage** links to: every product category (via hub), both materials pages, live industry pages, `/quality/`, `/about/`, `/contact/`, `/request-quote/`.
2. **Product hub `/products/`** links to: every product category page + both materials pages + `/request-quote/`.
3. **Each product category page** links to:
   - **up** — `/products/` (breadcrumb) + `/` (breadcrumb).
   - **sideways** — 2–3 sibling product categories that are typically purchased together (Hex Bolts ↔ Hex Nuts + Washers).
   - **down / across** — the material pages relevant to that product (High-Tensile, Stainless), the industries where the product ships, `/quality/`, `/request-quote/`.
4. **Each material page** links to: relevant product categories using that material (with anchor text like "high-tensile hex bolts"), `/quality/`, `/request-quote/`.
5. **Each industry page** links to: the product categories that make up the fastener stack for that industry, the material pages relevant, `/request-quote/`.
6. **`/quality/`** links to: `/about/`, `/request-quote/`, any product page whose spec claims MTC (i.e. all).
7. **`/about/`** links to: `/quality/`, `/products/`, `/contact/`.
8. **`/contact/` and `/request-quote/`** are the terminal conversion pages — they receive links from everywhere but only link back to `/products/`, `/materials/…`, and `/` (avoid loops).
9. **Footer** contains only navigational + legal links — no 50-anchor keyword stuff.

## 3. Anchor-text policy

- Descriptive and query-shaped ("view stainless steel fastener range", "request quote with drawing"). Never "click here", "learn more", "read more".
- Vary anchor phrasing across links to the same target.
- Do not repeat the exact same anchor for more than 3 inbound links across the site.

## 4. Anti-patterns

- No footer keyword clouds (e.g. 40 city × product combos).
- No sidebar of "recent articles" (no blog on v1).
- No "related products" carousels of unrelated items — related links must be genuinely relevant to the buyer path.
- No links to `/request-quote/` that break the flow (e.g. no auto-open modal RFQ on hover).

## 5. Minimums per page

- ≥ 3 contextual internal links inside body content (not counting nav / footer).
- ≥ 2 inbound internal links from other pages (audited by CI).

## 6. Breadcrumbs

- Every non-homepage route ships a visible `<Breadcrumbs>` component **and** `BreadcrumbList` JSON-LD.
- Trail matches the URL depth exactly. No fake breadcrumb levels.

## 7. Audit enforcement

`scripts/audit-links.mjs` fails the build if:
- Any route in `data/routes.ts` has fewer than 2 inbound internal links.
- Any route has fewer than 3 in-body outbound links (excluding nav/footer).
- Any anchor text is a banned generic phrase.
- Any link is an internal 404 or a redirect chain > 1 hop.
- Any page is more than 2 clicks from `/`.
