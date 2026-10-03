# Design system — Mega Tender

## Principles

The visual language should feel confident, practical, and professional: deep navy and teal establish trust, while bright yellow concentrates attention on actions. Use generous section spacing, strong uppercase headings, and clear conversion paths.

## Foundations

### Color

| Role | Value | Usage |
| --- | --- | --- |
| Ink | `#111a20` | Primary text |
| Navy | `#06233a` | Dark backgrounds and footer |
| Teal | `#076779` | Brand surfaces and gradients |
| Yellow | `#ffe500` | Primary actions and emphasis |
| Muted | `#69747b` | Secondary text |
| White | `#ffffff` | Surfaces and text on dark backgrounds |

### Typography

- **Headings:** Montserrat, weight 800–900, uppercase where already used.
- **Body:** Manrope, regular through semibold.
- Keep heading hierarchy semantic (`h1` once; then ordered `h2`/`h3`) even when matching the visual style.

### Layout and spacing

- Main container: `min(1120px, calc(100% - 64px))`; on narrow screens, use 40 px total side gutters.
- Standard section padding: 100 px vertical on desktop, 68 px at 720 px and below.
- Header is fixed; anchor targets use a matching `scroll-margin-top`.

## Components

### Buttons and links

- Primary action: yellow fill, dark uppercase text, high font weight.
- Dark-background secondary action: transparent with a yellow outline and white text.
- Use real links for navigation and buttons for actions. Preserve visible focus states when modifying controls.

### Forms

- Fields are visibly labeled through placeholders and `aria-label`; prefer permanent `<label>` elements for new or redesigned fields.
- Required inputs must retain native validation.
- Show submission feedback through an `aria-live` status element.
- Do not imply that information was sent to a manager until a backend delivery path exists.

### Modal dialog

- The application modal opens from primary hero and program-card calls to action.
- It closes via its close control, Escape, or clicking the backdrop.
- On open, focus moves to the first input. Maintain keyboard-accessible open/close behavior in future changes.

## Responsive behavior

| Width | Expected layout |
| --- | --- |
| Above 720 px | Full navigation; multi-column content grids; horizontal application form |
| 720 px and below | Hamburger navigation; stacked major layouts; form fields in one column |
| 440 px and below | Problem, benefit, and review grids become one column |

## Accessibility baseline

- Use semantic landmarks, meaningful button names, and `aria-expanded` / `aria-hidden` where state changes.
- Ensure all interactive controls work via keyboard.
- Do not rely on color alone to communicate essential information.
- Check text contrast whenever changing brand colors or overlays.
