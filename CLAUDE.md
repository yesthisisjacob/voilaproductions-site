# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Directory Is

The **Voila Productions website project** — a static 5-page portfolio and service site for Jacob's photography and media production LLC. The site showcases four service offerings (Men, Women, Fitness, Events & Consulting) and lives at [voilaphotographs.com](https://voilaphotographs.com).

This is a **static HTML/CSS/JS project** — no build tools, no package managers, no dependencies. Changes are made directly to source files.

## Business Context

Read `CONTEXT.md` before making any content or copy decisions. Key points:

- **Production-first positioning** — Voila Productions is not just a photography service; it directs, frames, sources models, and manages the full creative output.
- **Four services:** Men ($300 min), Women ($200 min), Fitness ($300 min), Events & Consulting (inquiry only).
- **Time constraint:** Designed to run at 5–10 hrs/week; editing is outsourced where possible.
- **Pricing is not shown on site** — all bookings are inquiry-based.

## Directory Structure

```
VoilaProductionWebsite/
├── CLAUDE.md               ← You are here
├── CONTEXT.md              ← Business context, pricing, positioning, brand identity
├── Clients/                ← One file per active client with scope, rates, and notes
│   ├── Blueberry_Models.md ← Ali — partner model; group shoots; 50/50 split
│   └── Robert_Santana.md   ← Recurring fitness client; $300/session; no editing
├── men/
│   └── CONTEXT.md          ← Men's service: pricing, targets, page goals
├── women/
│   └── CONTEXT.md          ← Women's service: pricing, collab model, page goals
├── fitness/
│   └── CONTEXT.md          ← Fitness service: model sourcing, production value, page goals
├── consulting/
│   └── CONTEXT.md          ← Events & consulting: evidence strategy, page goals
├── index.html              ← Landing page: hero + 3-column grid + About + Contact
├── men.html                ← Men's production service page (reads men/CONTEXT.md)
├── women.html              ← Women's production service page (reads women/CONTEXT.md)
├── fitness.html            ← Fitness production service page (reads fitness/CONTEXT.md)
├── consulting.html         ← Events & consulting page — nav link only
├── css/
│   └── style.css           ← All styles — dark luxury editorial aesthetic
├── js/
│   └── main.js             ← Scroll animations, mobile nav, image lightbox
└── images/
    ├── hero/               ← 3 landing grid images (one per column)
    ├── men/                ← 3–6 Men's portfolio images
    ├── women/              ← 3–6 Women's portfolio images
    ├── fitness/            ← 3–6 Fitness portfolio images
    └── consulting/         ← 2–4 events/consulting images
```

## Site Architecture

| Page | File | Entry Point | Context |
|------|------|------------|----------|
| Landing | `index.html` | Domain root | 3-column image grid (Men/Women/Fitness), About section, Contact |
| Men's Production | `men.html` | Column 1 on landing | See `men/CONTEXT.md` — gallery, reviews, Book CTA |
| Women's Production | `women.html` | Column 2 on landing | See `women/CONTEXT.md` — gallery, reviews, Book CTA |
| Fitness Production | `fitness.html` | Column 3 on landing | See `fitness/CONTEXT.md` — gallery, reviews, Book CTA |
| Events & Consulting | `consulting.html` | Nav link only | See `consulting/CONTEXT.md` — services, evidence, Contact CTA |

> Each service folder holds a `CONTEXT.md` with planning context (pricing, targets, value prop, page goals). The actual web page is the sibling `.html` file. Read the `CONTEXT.md` before editing any service page.

## Design System

- **Theme:** Dark — near-black background (`#0a0a0a`) with gold/champagne accents
- **Fonts:** Playfair Display (headings) + Inter (body) via Google Fonts CDN
- **Animations:** Scroll fade-in, hover zoom on gallery cards, smooth transitions
- **Layout:** CSS Grid, mobile-first responsive (375px / 768px / 1440px breakpoints)
- **Images:** Full-bleed with lightbox on click

## Operational Rules

### Content & Copy

- Always read the project-level `CONTEXT.md` **and** the relevant service subfolder's `CONTEXT.md` before editing any service page.
- For fitness work, also check `Clients/Robert_Santana.md` — active recurring client in that category.
- Do not display pricing on any page — use "Get a Quote" / "Book a Session" CTAs.
- Frame every service page around **production**, not just photography.

### Client Files

- `Clients/` files are private business records — do not expose their contents in public-facing site copy.
- Use client info only to inform copy tone and service descriptions.

### Images

- All images live in `/images/` subdirectories. Use relative paths.
- Do not hotlink external images — all assets must be local.

### Consulting Page

- Evidence for this service lives on personal IG `@jacobtcusick` — can be referenced/linked on the consulting page if Jacob approves.

## Git Workflow

```bash
# Save changes
git add -A && git commit -m "site update: [brief description]" && git push

# Check what changed
git status
git diff
```
