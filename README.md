# DueMate — premium animated Next.js landing app

A production-shaped, fully interactive marketing site for **DueMate**, a due-date
and bill reminder product. Next.js **App Router** + TypeScript + React 19, styled
with pure CSS custom properties. **Zero UI libraries, zero animation libraries,
zero runtime dependencies beyond React and Next.**

---

## 1. Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Requires Node 18.18+. Production: `npm run build && npm start`.

---

## 2. What is actually functional

This is not a static mockup — the following really works:

| Feature | Where | Behaviour |
| --- | --- | --- |
| Interactive dues dashboard | `components/DashboardDemo.tsx` | Add a due, mark paid/unpaid, delete, filter by Upcoming/Paid/All. Totals, the % ring and the progress bar all recompute live. |
| Signup form | `components/CtaSection.tsx` + `app/api/waitlist/route.ts` | Real `POST` to a Next.js Route Handler with validation, loading, success and error states. |
| Dark / light theme | `components/ThemeToggle.tsx` | Persists to `localStorage`, respects the OS preference, applied pre-paint so there is no flash. |
| Pricing switch | `components/Pricing.tsx` | Monthly ↔ annual, prices recalculated at −20%. |
| Testimonial carousel | `components/Testimonials.tsx` | Auto-advances every 6s, pauses on hover, clickable dots. |
| FAQ accordion | `components/Faq.tsx` | One-open-at-a-time, real `<button>` + `aria-expanded`/`aria-controls`. |
| Mobile nav sheet | `components/Navbar.tsx` | Slide-in menu, scroll-locked body, condenses the header on scroll. |
| Scroll reveals | `components/Reveal.tsx` | IntersectionObserver, staggered delays, progressive enhancement. |
| Animated counters | `components/CountUp.tsx` | rAF easing, fires once on first view. |

---

## 3. Animation inventory

All CSS, all GPU-friendly (`transform` / `opacity` only):

- Floating gradient orbs (`drift`, 22s) behind a masked grid layer
- Gradient hue-shift on every accent headline (`hue`, 9s)
- Infinite logo marquee, paused on hover (`marquee`, 34s)
- Hero app card float (`floaty`, 9s)
- Live-status pulse dot in the demo chrome
- Staggered scroll reveals, row insert fades, tile hover lift + glow sweep
- Animated nav underlines, button lift and shifting gradient on hover
- `prefers-reduced-motion` kills every animation and transition globally

---

## 4. File tree

```
duemate/
├─ app/
│  ├─ layout.tsx              # Metadata, viewport, pre-paint theme + js-anim boot script
│  ├─ page.tsx                # Page composition (server component)
│  ├─ globals.css             # Tokens, components, animations, responsive, both themes
│  └─ api/waitlist/route.ts   # POST endpoint with validation
├─ components/
│  ├─ Navbar.tsx              # client — scroll state, mobile sheet
│  ├─ ThemeToggle.tsx         # client — dark/light persistence
│  ├─ Hero.tsx                # server — gradient mesh, badge, CTAs
│  ├─ DashboardDemo.tsx       # client — the interactive product demo
│  ├─ Marquee.tsx             # server — infinite logo strip
│  ├─ Features.tsx            # server — 6-cell bento grid
│  ├─ HowItWorks.tsx          # server — 3-step flow with gradient rail
│  ├─ Metrics.tsx             # server — gradient-bordered stat band
│  ├─ CountUp.tsx             # client — animated numbers
│  ├─ Testimonials.tsx        # client — carousel
│  ├─ Pricing.tsx             # client — billing switch
│  ├─ Faq.tsx                 # client — accordion
│  ├─ CtaSection.tsx          # client — API-backed signup
│  ├─ Footer.tsx              # server
│  ├─ Reveal.tsx              # client — scroll reveal wrapper
│  └─ icons.tsx               # gradient logo + 16 inline SVG icons
├─ lib/content.ts             # ALL copy and data in one file
├─ next.config.mjs
├─ tsconfig.json              # "@/*" path alias
├─ next-env.d.ts
├─ .gitignore
└─ package.json
```

---

## 5. Design system

Every colour is a token in `app/globals.css`. Change the gradient in one place
and the whole site follows — logo, buttons, headlines, rings, ribbons, rails.

```css
--grad: linear-gradient(100deg, #6366f1 0%, #8b5cf6 45%, #22d3ee 100%);
```

| Token | Dark | Light |
| --- | --- | --- |
| `--bg` | `#08080c` | `#ffffff` |
| `--bg-2` | `#0d0d14` | `#f7f7fb` |
| `--text` | `#f5f6fa` | `#14162b` |
| `--muted` | 62% white | 66% ink |
| `--border` | 10% white | 10% ink |

Radii `10 / 14 / 22 / 30`, spacing scale `4 → 64`, `1180px` max width.
Semantic accents (`--rose` overdue, `--amber` due soon, `--indigo` upcoming,
`--emerald` paid) are always paired with text, never colour alone.

---

## 6. Accessibility

- Full keyboard support with visible focus rings on every control
- `aria-expanded`, `aria-controls`, `aria-selected`, `aria-pressed`, `role="tablist"`, `role="status"`
- 44px minimum touch targets
- Semantic landmarks and a logical heading ladder
- Content is visible without JavaScript (reveals are opt-in via `.js-anim`)
- `prefers-reduced-motion` fully honoured
- Verified at 1440px and 390px — no overflow, no horizontal scroll

---

## 7. Deployment — GitHub Codespaces → live URL

### A. Get the code into your repo

1. Download `duemate-nextjs-pro.zip` and open your Codespace on github.com
   (**Code → Codespaces → Create codespace on main**).
2. Drag the zip into the **Explorer** file list to upload it.
3. In the terminal (**☰ → Terminal → New Terminal**):

   ```bash
   # remove the old version if you uploaded v1 before
   rm -rf app components lib package.json tsconfig.json next.config.mjs next-env.d.ts

   unzip -o duemate-nextjs-pro.zip
   mv duemate/* duemate/.gitignore .
   rm -rf duemate duemate-nextjs-pro.zip
   ls
   ```

   You should see: `app  components  lib  next.config.mjs  package.json  tsconfig.json`

### B. Run it

```bash
npm install
npm run dev
```

Click **Open in Browser** on the port-3000 toast (or the globe icon in the
**Ports** tab). To share the preview: **Ports → right-click 3000 → Port
Visibility → Public**.

### C. Verify the production build before deploying

```bash
npm run build
```

Fix anything reported here — Vercel runs the exact same command.

### D. Push to GitHub

```bash
git add .
git commit -m "DueMate: animated premium landing app"
git push
```

### E. Deploy on Vercel

1. vercel.com → **Continue with GitHub**
2. **Add New → Project** → import your `duemate` repo
3. Framework preset auto-detects **Next.js**. Build command `next build`,
   output `.next`, install `npm install` — leave all defaults.
4. No environment variables are required.
5. **Deploy** → you get `https://duemate-<hash>.vercel.app` in ~60 seconds.

Every later `git push` to `main` redeploys automatically; pull requests get
their own preview URL.

### F. Redeploying after changes

```bash
git add .
git commit -m "Update pricing copy"
git push
```

That is the whole loop. To force one manually: Vercel dashboard → project →
**Deployments** → ⋯ → **Redeploy**.

### Alternative hosts

- **Netlify** — import the repo; it auto-detects Next.js.
- **Cloudflare Pages** — framework preset "Next.js".
- **Self-host** — `npm run build && npm start` behind nginx, or `docker build`
  from the official `node:22-alpine` image.

---

## 8. Customising

| Goal | File |
| --- | --- |
| Reword anything, change plans, features, FAQs, seed dues | `lib/content.ts` |
| Rebrand colours / gradient | `--grad` and tokens in `app/globals.css` |
| Add or reorder sections | `app/page.tsx` |
| SEO, OG image, page title | `app/layout.tsx` |
| Store real signups | `app/api/waitlist/route.ts` — replace the `console.log` with Postgres, Resend, Loops, Airtable, etc. |
| Add pages (`/pricing`, `/login`) | create `app/pricing/page.tsx` — tokens and layout apply automatically |
