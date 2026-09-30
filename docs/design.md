# Design System — KP Fasteners

**Basis:** the KP Fasteners logo (metallic silver "K" formed from a wrench + metallic gold "P" formed from a threaded screw + gold "KP FASTENERS" wordmark) sitting on a very light off-white ground with a subtle grey dotted world-map pattern (from the business card). This is the visual DNA. The website's design system is built to feel like a natural extension of that mark.

**Theme:** light / off-white first. No dark-mode-first UI. Dark mode is out of scope for v1 (can be added later without changing the tokens).

---

## 1. Design intent

- **Industrial, precise, premium, quiet.** Not SaaS-glossy, not consumer-cheerful.
- **The page is the datasheet.** Typography, tables, and spacing carry the trust — not gradients, glows, or motion.
- **Colour discipline.** One brand accent (gold) used sparingly on CTAs, one supporting accent (steel/silver-blue) for structural elements. Rest is high-contrast neutrals.
- **Metallic finishes stay in imagery.** The logo carries the silver + gold gloss; the UI itself uses flat, print-safe versions of those hues.

## 2. Colour tokens (all light-theme, logo-derived, WCAG 2.1 AA validated)

Extraction methodology + raw hex weights: [`design-palette-extraction.md`](design-palette-extraction.md).
Pair-by-pair contrast: [`design-contrast-report.md`](design-contrast-report.md).

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#F7F5F0` | Off-white page background — business-card ground (logo background is pure white; we keep the warmer off-white for large surface area comfort). |
| `--color-surface` | `#FFFFFF` | Card / panel surface, matches logo background exactly. |
| `--color-surface-alt` | `#EFECE4` | Section band, table header row. |
| `--color-border` | `#DAD4C6` | Hairline borders on tables, cards, dividers. |
| `--color-border-strong` | `#7A7568` | Interactive border, focused input — darkened from the draft `#B7B0A0` to reach 3:1 UI contrast on both surfaces. |
| `--color-ink` | `#1B1D22` | Primary body text — steel-black. Extracted dominant ink in the wrench letterform was `#303030`; we deepen to `#1B1D22` for AAA body-text contrast. |
| `--color-ink-muted` | `#4B5058` | Secondary text, captions. |
| `--color-ink-soft` | `#6A6F79` | Large caption / meta only — not for standard body copy. |
| `--color-brand-gold` | `#886428` | Primary brand accent — CTAs, key numbers, hero underline. This is the **dominant mid-gold extracted from the KP wordmark**. It replaces the draft `#B8862B` because that lighter hue failed 4.5:1 for white text on gold and for gold body text on off-white. |
| `--color-brand-gold-hover` | `#6E501F` | CTA hover / active. |
| `--color-brand-gold-soft` | `#F0E2C0` | Gold background wash — OEM classification banner, quote block. |
| `--color-brand-gold-strong` | `#5A421A` | Reserved for gold-on-gold-soft body text (e.g. text label inside gold banner). |
| `--color-brand-steel` | `#2E3A46` | Supporting industrial navy — headings, secondary buttons. |
| `--color-brand-steel-soft` | `#DDE3E9` | Steel wash (industry cards). |
| `--color-brand-silver` | `#ACACAC` | **Logo-derived silver** — sampled from the wrench letterform. Used for iconography accents, silver-metal edge highlights, and the trading-classification banner. Never used for text on the light background. |
| `--color-brand-silver-soft` | `#E5E5E5` | Trading-classification banner background. |
| `--gradient-metal` | `linear-gradient(90deg,#ACACAC 0%,#C9B87A 50%,#886428 100%)` | Silver → gold metallic sweep for hero underline and decorative rules only. |
| `--color-focus` | `#0A66C2` | Fallback focus ring when the element sits on a gold surface. |
| `--color-success` | `#1F7A3A` | Form success. |
| `--color-warning` | `#8A5A00` | Form warning / verification-required banner. |
| `--color-danger` | `#B4231C` | Form error. |

Focus ring: `2px solid var(--color-brand-gold)` at `outline-offset: 2px` on all focusable elements. On gold surfaces the ring switches to `--color-focus` (`#0A66C2`) via the `data-on-gold` scope.

**All 30 foreground × background pairs actually used in the UI pass WCAG AA. See the report.**

## 3. Typography

- **Primary sans:** Inter (variable, self-hosted via `next/font/google`).
- **Optional display accent:** none on v1 — Inter Semi/Bold covers hero. If required later, add a single industrial display face; do not mix three fonts.
- **Monospace (spec tables):** JetBrains Mono or Roboto Mono self-hosted; used only inside dimensional/spec tables.
- **Base body:** 16 px / 1.6 line height, `--color-ink`.
- **Ramp (mobile → desktop):**

| Role | Class ramp |
|---|---|
| Hero H1 | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` |
| Section H2 | `text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight` |
| Subsection H3 | `text-xl sm:text-2xl md:text-3xl font-semibold` |
| Card title | `text-lg sm:text-xl font-semibold` |
| Body | `text-base leading-7` |
| Small / caption | `text-sm text-[color:var(--color-ink-muted)]` |
| Spec-table cell | `text-sm font-mono tabular-nums` |

Never skip a heading level.

## 4. Spacing, layout, containers

- Container max width: `max-w-7xl`, `px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-12 md:py-16 lg:py-24`.
- Grid gaps: `gap-4 sm:gap-6 md:gap-8`.
- Alternating section backgrounds: `bg-[--color-bg]` ↔ `bg-[--color-surface]` (see Honeywell lesson).

## 5. Component library (to be built in `components/ui/`)

| Component | Responsibility | Notes |
|---|---|---|
| `<Container>` | Consistent max-width + padding | RSC |
| `<Section>` | Wraps a page section, handles vertical padding + alt-bg pattern | RSC, `variant="default" \| "alt"` |
| `<Heading>` | Renders correct semantic level + ramp | RSC, `as` prop enforces level |
| `<Prose>` | Long-form content styling | RSC |
| `<Button>` | Primary / secondary / ghost, min 48 × 48 px | RSC where possible |
| `<CTAStrip>` | Phone + WhatsApp + RFQ button, sticky-friendly | Leaf client only if sticky-scroll behaviour required |
| `<Breadcrumbs>` | Renders `BreadcrumbList` schema + visible UI in one component | RSC, takes route array |
| `<SpecTable>` | Responsive horizontal-scroll table with tabular-nums | RSC |
| `<GradeTable>` | Materials grade comparison table | RSC |
| `<Card>` | Product / material / industry card | RSC |
| `<Accordion>` | FAQ; native `<details>` under the hood | RSC-safe (no state) |
| `<RFQForm>` | Client component, server-action-backed | `'use client'` leaf |
| `<MobileConversionBar>` | Sticky bottom bar on mobile with phone + WhatsApp + RFQ | Client leaf |
| `<MegaMenu>` / `<MobileMenu>` | Header nav | Mobile drawer is a client leaf; desktop menu is CSS-only where possible |
| `<VerificationRequired>` | Yellow inline banner used on staging where a `[VERIFICATION REQUIRED: …]` block would sit | RSC |

Do **not** ship each of these as a heavy generic UI kit — one file per component, single responsibility.

## 6. Iconography

- Single icon library: `lucide-react`.
- No emoji in UI copy.
- Product-category icons: prefer real photography over icon glyphs; use lucide only for utility icons (phone, chat, download, upload, chevron).

## 7. Imagery style

- Product photography on `--color-bg` or `--color-surface`, soft directional light, real KP items.
- Facility photography wide, human-scale, cropped to remove sensitive company info.
- No stock photos of "generic engineers pointing at drawings".
- Every image: kebab-case filename, WebP/AVIF, explicit width/height, meaningful alt text (see [`content-strategy.md` §10](content-strategy.md#10-image-content-requirements)).

## 8. Motion

- Prefers-reduced-motion respected everywhere.
- Only micro-transitions: hover colour shift on buttons/links, accordion expand, drawer slide. No parallax, no Lottie, no scroll-jack.
- Avoid Framer Motion unless a real requirement appears — CSS transitions cover this scope.

## 9. Focus + interactive state

- `:focus-visible` ring: 2 px `--color-focus`, 2 px offset, radius 4 px.
- Never `outline: none` without replacement.
- Buttons have a distinct pressed state (translate 1 px + darker gold).
- Links inside body prose: underline default, `--color-brand-steel` colour on hover.

## 10. Dos / don'ts

**Do:**
- Trust the logo. Silver + gold + off-white already carries the brand.
- Use tables aggressively — they're where the trust lives.
- Ship real photos.
- Keep motion under 200 ms.

**Don't:**
- No purple/pink gradients, glassmorphism, glowing borders, neumorphism.
- No hero video autoplay.
- No stock-render fastener imagery.
- No dark mode on v1.
- No brand-colour dilution — gold is the one accent.
