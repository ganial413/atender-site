# Mega Tender landing page

## Goal

Maintain a Russian-language landing page for Mega Tender training programs in tenders and public procurement. Its main conversion is an application for training.

## Structure

- `index.html` — page markup and user-facing copy.
- `styles.css` — styling and responsive layout.
- `app.js` — client-side interactions.

## Important constraints

- The project is static and framework-free. Do not add a build system, package manager, framework, or dependency for a small change unless explicitly requested.
- Forms currently provide client-side UI feedback only; do not present them as a working lead-delivery integration without implementing one.
- Keep user-facing text in Russian unless a task explicitly requests another language.
- Before writing any persistent memory, ask the user for permission.

## Run and verify

- Open `index.html` in a browser; no build or server command is required.
- After layout or interaction changes, check desktop plus approximately 720 px and 440 px views. Check mobile navigation, forms, and the modal when relevant.

## Project references

- [Design system](Design-system.md) — visual language, components, responsive rules, and accessibility conventions.
- [Architecture](architecture.md) — implementation structure and interaction behavior.
- [Product requirements](prd.md) — product purpose, audience, page content, and known open questions.
