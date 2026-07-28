# RitmoKit — Marketing Landing Page

High-converting trilingual (FR / EN / ES) marketing site for **RitmoKit**, the operating system for dance & fitness studios.

## Stack

- **Next.js 16** (App Router, `[lang]` locale routing, `proxy.ts` locale negotiation)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-variable design tokens, dark theme default)
- **next-themes** (dark / light toggle, respects `prefers-color-scheme`, persisted in `localStorage`)
- **framer-motion** (scroll reveals, live Parity Radar cockpit animation)
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to your negotiated locale (`/fr`, `/en`, or `/es`).

## Structure

```
src/
  proxy.ts                     # Locale detection + redirect (/ → /fr|/en|/es)
  lib/i18n/
    config.ts                  # Locales (fr default), labels
    dictionaries.ts            # Full trilingual marketing copy
  app/
    globals.css                # Design tokens: dark (studio) + light (reception)
    [lang]/layout.tsx          # Fonts (Plus Jakarta Sans + Inter), ThemeProvider, metadata
    [lang]/page.tsx            # Landing page assembly
  components/
    site-header.tsx            # Sticky header: nav, lang switcher, theme toggle
    cockpit-mock.tsx           # Animated Studio Cockpit / Parity Radar demo
    sections/                  # Hero, Problem, Transformation, Features, Offer, CTA
```

## Design tokens

| Surface | Dark (Studio Vibe) | Light (Reception Mode) |
| --- | --- | --- |
| Canvas | `#0D0E11` | `#F8FAFC` |
| Accent gradient | `#00F2FE → #FF007A` | `#4F46E5 → #D946EF` |
| Text | `#F8FAFC` / `#94A3B8` | `#0F172A` / `#475569` |

Powered by Arsitech.
