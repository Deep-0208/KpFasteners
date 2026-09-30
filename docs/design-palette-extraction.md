# Logo palette extraction — KP Fasteners

**Generated:** 2026-09-30
**Source image:** `logo.jpg.jpeg` (decoded at 800 x 400 px)
**Method:** Every pixel classified into semantic buckets by HSL bounds; dominant hex per class reported.

## Extracted dominant swatches

| Class | Dominant hex | Pixel weight | Next four hexes |
|---|---|---|---|
| Off-white background | `#FFFFFF` | 2,06,745 | #FCFCFC, #F8F8F8, #F4F4F4, #F0F0F0 |
| Light-grey map dots | `#C4C4C4` | 483 | #C8C8C8, #C0C0C0, #E4E4E4, #DCDCDC |
| Warm gold (mid) | `#886428` | 144 | #8C6828, #846028, #906C2C, #846428 |
| Dark / strong gold | `#482C0C` | 43 | #785820, #745820, #442808, #705820 |
| Silver / steel-grey | `#ACACAC` | 314 | #B0B0B0, #A8A8A8, #ACACB0, #A4A4A4 |
| Dark ink | `#303030` | 22 | #2C2C2C, #382824, #382820, #202020 |

## How the tokens map

The draft palette in [`docs/design.md §2`](design.md) claimed the following. The right-hand column shows what the logo actually contained:

| Token | Draft hex | Extracted hex | Verdict |
|---|---|---|---|
| `--color-bg` | `#F7F5F0` | #FFFFFF | see notes |
| `--color-brand-gold` | `#B8862B` | #886428 | see notes |
| `--color-brand-gold-strong` (new) | — | #482C0C | added |
| `--color-brand-silver` (new) | — | #ACACAC | added |
| `--color-ink` | `#1B1D22` | #303030 | see notes |

## Notes

- The logo's off-white and gold hues drive the site palette; the light-grey bucket represents the world-map dot overlay and is not published as a token.
- The silver token is derived from the wrench letterform on the logo — a genuinely metallic mid-grey, not a bluish steel.
- Ink is derived from the darkest strokes in the wrench, kept slightly warm.
- Where the extracted hex fails WCAG 4.5:1 body-text contrast against `--color-bg`, the token is nudged darker and the change is logged in `docs/design-contrast-report.md`.
