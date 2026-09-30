# Accessibility — KP Fasteners

Target: **WCAG 2.1 AA** across every route, enforced during development, verified pre-launch.

---

## 1. Semantics

- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` used correctly.
- One `<h1>` per page (see [`technical-seo.md`](technical-seo.md) §7).
- Never simulate a button with `<div onClick>`.
- Landmarks unique — one `<main>`, one `<header>`, one `<footer>`.

## 2. Keyboard

- All interactive elements reachable via `Tab` in visible DOM order.
- `Esc` closes the mobile drawer, modals, and any open accordion (if it's a dialog).
- `Enter` / `Space` activates buttons and accordion triggers.
- No keyboard trap anywhere.
- Skip-to-content link at top of `<body>` — visible on focus.

## 3. Focus

- `:focus-visible` ring — 2 px, 2 px offset, `--color-focus`, radius 4 px. Never `outline: none` without replacement.
- Focus never disappears (no CSS that hides focus outside `:focus-visible`).
- After the mobile drawer closes, focus returns to the trigger.

## 4. Colour + contrast

- Body text ≥ 4.5:1 against its background.
- Large text (≥ 24 px or 18.66 px bold) ≥ 3:1.
- Interactive-element border + focus ring ≥ 3:1 against adjacent colour.
- Meaning never conveyed by colour alone — form errors carry a text label + icon, not just red border.
- Contrast validated per token pair — see [`design.md` §2](design.md#2-colour-tokens-all-light-theme).

## 5. Forms

- Every input has an associated `<label>` via `htmlFor`.
- Placeholder is not a substitute for a label.
- `autocomplete` attributes set on name, email, tel, organization, address, postal-code, country.
- Required fields marked visually + programmatically (`required`, `aria-required="true"`).
- Errors: `aria-invalid="true"`, `aria-describedby` pointing at an error message, visible next to the field, and announced via a live region.
- Server errors surface at the top of the form in an `aria-live="assertive"` region.
- Success state uses `role="status"` announcement.

## 6. Images

- Every content image: descriptive `alt`.
- Decorative images: `alt=""` + `aria-hidden="true"`.
- SVG icons inside buttons: parent button has an `aria-label` or visible text; the SVG carries `aria-hidden="true"`.
- Complex diagrams (spec drawings): long description linked (or `<figcaption>`).

## 7. Motion + animation

- Respect `prefers-reduced-motion: reduce` — disable non-essential transitions.
- No auto-playing video / carousel that cannot be paused within 5 s.
- No parallax on scroll.

## 8. Tables

- Every `<table>` has a `<caption>` (visually hidden if needed) describing its contents.
- Every column header uses `<th scope="col">`; row headers use `<th scope="row">`.
- Dimensional tables wrapped in `<div role="region" aria-label="… table" tabindex="0" class="overflow-x-auto">` so they can scroll horizontally without trapping.

## 9. Mobile / touch

- Touch targets ≥ 48 × 48 px.
- No hover-only reveal of critical info on mobile.
- 16 px minimum body font (prevents iOS zoom on focus).
- No layout that overflows horizontally at 320 px viewport width.

## 10. ARIA discipline

- Prefer semantic HTML over ARIA.
- Use `aria-expanded` on accordion triggers.
- Use `aria-current="page"` on active nav link.
- Do not add ARIA roles that duplicate semantics (e.g. no `role="button"` on a `<button>`).

## 11. Language

- `<html lang="en-IN">`.
- Any foreign-language phrase carries a `lang` attribute.

## 12. Documents / uploads

- Drawing-upload input announces accepted MIME types + max size.
- Uploaded filename echoed back visibly.
- Error text explains exactly which rule failed.

## 13. Verification

Pre-launch acceptance:
- `axe-core` scan of every route — 0 violations.
- Manual keyboard-only walkthrough of homepage, one product page, `/request-quote/`, mobile drawer.
- NVDA + VoiceOver spot-check on `/` and `/request-quote/`.
- 320 px width visual pass.
- Zoom to 200 % — no clipping, no horizontal scroll.
- Reduced-motion mode — nothing animates.

Deferred to post-launch monitoring:
- Real-user accessibility feedback channel via `/contact/` form.

## 14. Anti-patterns

- No modal that appears without user action.
- No `outline: none;` without a replacement focus style.
- No colour-only status indicators.
- No `<a href="#">` for controls that do something — use `<button>`.
- No PDF-only content without HTML equivalent.
