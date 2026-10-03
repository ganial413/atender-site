# Product requirements document — Mega Tender landing page

## Product summary

Mega Tender is a Russian-language landing page that presents training programs in tenders and public procurement. It promotes online and offline learning and invites prospective students to submit an application.

## Objective

Convert interested visitors into training applications while clearly communicating the value, format, and practical focus of the programs.

## Target audience

- Suppliers who want to participate in procurements and prepare applications with confidence.
- Customers who need to organise procurements correctly and transparently.
- Learners seeking online or offline training in Shymkent.

## Core message

The program is positioned as practical training with expert support: it teaches real procurement work, application preparation, and current processes rather than theory alone.

## Current page content

| Section | Purpose |
| --- | --- |
| Header | Brand, navigation, and WhatsApp call to action |
| Hero | Primary value proposition and registration call to action |
| Programs | Supplier and customer training options, each in online and offline formats |
| About | Practical-result positioning |
| Problems | Explains common shortcomings of alternative courses |
| Advantages | Individual review, six months of support, expert access, current knowledge base |
| Application | Main lead form |
| Reviews | Social proof |
| Modal application | Focused conversion path from selected calls to action |

## Primary user flow

```text
Visitor arrives
→ understands training offer
→ explores programs and benefits
→ selects a call to action
→ fills in an application form
→ receives an on-page confirmation
```

## Functional requirements

- Navigation must lead to the corresponding sections of the same page.
- The mobile navigation must be operable on small screens.
- Calls to action in the hero and program cards must open the application modal.
- The main form and modal form must validate required fields in the browser and show accessible confirmation feedback.
- The modal must support close control, backdrop close, and Escape close.

## Current limitations

- Form success is simulated in the browser; applications are not delivered, stored, or sent to WhatsApp/email.
- The WhatsApp header link currently scrolls to the application section rather than opening a WhatsApp conversation.
- There is no analytics, consent flow, privacy policy, or backend integration in the project.

## Open product decisions

- Where should applications be delivered: CRM, email, Telegram, WhatsApp, or a custom backend?
- What exact WhatsApp number and prefilled message should the header call to action use?
- Which personal-data consent text, privacy policy, and analytics requirements apply?
- What are the course prices, dates, instructors, and next enrollment deadline?
- Which reviews are approved for publication and can be attributed by name?

## Success signals after analytics is added

- Application form completion rate.
- Modal-open-to-submission rate.
- Click-through rate for primary calls to action and WhatsApp.
- Mobile versus desktop conversion rate.
