# DueMate — Next.js landing page (demo)

A production-shaped marketing landing page for **DueMate**, a due-date and bill
reminder product. Built with the Next.js **App Router**, TypeScript, React
server components, and plain CSS custom properties (no UI framework, no build
plugins, zero runtime dependencies beyond React/Next).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node 18.18+.

## File tree

```
duemate/
├─ app/
│  ├─ layout.tsx        # Root layout, <html>/<body>, metadata + viewport
│  ├─ page.tsx          # Landing page composition (server component)
│  └─ globals.css       # Design tokens, components, responsive + dark mode
├─ components/
│  ├─ Navbar.tsx        # Sticky translucent header
│  ├─ Hero.tsx          # Headline, CTAs, stats, dashboard mock
│  ├─ LogoCloud.tsx     # Social proof strip
│  ├─ Features.tsx      # 6 feature cards with inline SVG icons
│  ├─ HowItWorks.tsx    # 3-step flow
│  ├─ Testimonial.tsx   # Pull quote
│  ├─ Pricing.tsx       # 3 tiers, featured plan highlighted
│  ├─ Faq.tsx           # "use client" accordion (useState)
│  ├─ CtaBanner.tsx     # "use client" email capture form
│  ├─ Footer.tsx        # Link columns + legal row
│  └─ icons.tsx         # Logo mark + stroke icon set (SVG, no icon lib)
├─ lib/
│  └─ content.ts        # All copy/data: features, steps, plans, faqs, dues
├─ next.config.mjs
├─ tsconfig.json         # "@/*" path alias
├─ next-env.d.ts
├─ .gitignore
└─ package.json
```

## Design system

All styling comes from CSS custom properties in `app/globals.css`:

| Token | Light | Dark |
| --- | --- | --- |
| `--text` | `#2C2C2B` | `#FFFFFF` |
| `--canvas` | `#FFFFFF` | `#191919` |
| `--soft` | `#F9F8F7` | `#202020` |
| `--border` | `#E6E5E3` | `rgba(255,255,255,.2)` |
| `--blue` (accent) | `#2783DE` | `#5E9FE8` |
| `--green` / `--orange` / `--red` | semantic status only | |

Spacing scale `4 → 64`, `8px` radius (`12px` on large surfaces), borders before
shadows, `1120px` max content width.

## Accessibility & responsiveness

- Automatic dark mode via `prefers-color-scheme`; `prefers-reduced-motion` respected.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), labelled
  primary nav, visually hidden form label.
- Accordion uses real `<button>`s with `aria-expanded` / `aria-controls`.
- 44px minimum tap targets, visible focus rings, WCAG AA text contrast.
- Breakpoints at `960px` (2-column) and `640px` (single column, no horizontal scroll).

## Where to extend it

- Copy and pricing live entirely in `lib/content.ts`.
- `CtaBanner.tsx` currently fakes submission — point `handleSubmit` at an
  `app/api/signup/route.ts` handler.
- Add routes by creating `app/pricing/page.tsx`, `app/login/page.tsx`, etc.;
  the layout and tokens already apply.
