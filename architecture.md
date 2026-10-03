# Architecture — Mega Tender

## Overview

This is a static single-page website with no build step, package manager, or backend. The browser loads three local project files and external Google Fonts.

```text
index.html
├── styles.css       visual design and responsive behavior
└── app.js           navigation, form feedback, and modal behavior
```

The hero background image and fonts are remote assets, loaded from Unsplash and Google Fonts respectively.

## Files and responsibilities

| File | Responsibility |
| --- | --- |
| `index.html` | Semantic page sections, navigation, program content, forms, and modal markup |
| `styles.css` | Design tokens, layout, component styles, responsive breakpoints, fixed header, and modal presentation |
| `app.js` | Menu state, smooth-scroll trigger, form success feedback, and modal open/close events |

## Client-side behavior

### Navigation

- The mobile menu toggles the `is-open` class on `.nav`.
- Its trigger updates `aria-expanded`.
- Selecting a navigation link closes the menu.

### Application forms

- Both forms prevent their default browser submission.
- They display a local success message and reset their fields.
- No request is sent and no lead is persisted. Backend integration requires an explicit API or form-service decision.

### Modal

- Hero and program-card calls to action open `#application-modal`.
- Opening locks body scrolling and focuses the first modal input.
- Closing restores scrolling; it is supported via close control, backdrop click, and Escape.

## Styling architecture

- CSS custom properties at the top of `styles.css` hold the current core palette.
- Component classes follow a lightweight BEM-inspired convention, such as `.program-card--supplier` and `.modal__panel`.
- Breakpoints are currently at 720 px and 440 px.
- The header has a fixed position, so body top padding and section `scroll-margin-top` compensate for its height.

## Change guidance

- Keep HTML, CSS, and JavaScript in their existing separate files.
- Before adding JavaScript, prefer native HTML/CSS behavior where it provides the desired interaction.
- If a server, framework, or submission integration becomes necessary, document the choice and update this file, `prd.md`, and `AGENTS.md`.
