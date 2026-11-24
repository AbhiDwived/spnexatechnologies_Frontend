# Trickle Solutions — Home Page (Next.js)

Production-structured Next.js (App Router + TypeScript) port of the Trickle
Solutions marketing home page, originally built from a Figma design.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- Plain CSS (custom properties for design tokens), no CSS framework —
  matches the original design 1:1 without adding a Tailwind migration on
  top of an already-finished visual
- `next/image` for every image, with explicit `width`/`height` so there's
  no layout shift
- ESLint (`eslint-config-next`)

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint       # ESLint
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout: <html>/<body>, metadata, Google Fonts
    page.tsx           Composes the page out of the section components
    globals.css        Design tokens + every section's styles
  components/
    layout/
      Header.tsx        Nav + hero (client component: mobile nav toggle state)
      Footer.tsx
    sections/
      Services.tsx      Client component: tab-switching state
      SectionTransition.tsx
      Stats.tsx
      Process.tsx
      WhyChooseUs.tsx
      Industries.tsx        Card-grid "Industries We Serve" (Figma node 26:196)
      IndustriesAlt.tsx      Full-width alt "Industries We Serve" (Figma node 35:15)
      Testimonials.tsx
      Blogs.tsx
      index.ts            Barrel export
    icons/
      SocialIcons.tsx    Instagram/Facebook/LinkedIn/YouTube as components
      StatIcons.tsx       Rocket/building/clients/team/trophy
      IndustryIcons.tsx   Education/grocery/ecommerce/salon
  data/
    navigation.ts, services.ts, stats.ts, roadmap.ts, whyChooseUs.ts,
    industries.ts, testimonials.ts, blogs.ts, footer.ts
    — all page copy lives here, typed against src/types, so content edits
      never require touching a component
  types/
    index.ts            Shared domain types for everything in /data
public/
  assets/images/        Static images (see ASSETS_NEEDED.md)
```

### Why content is split into `/data`

Every section component reads its copy from a typed file in `src/data/`
instead of hardcoding strings in JSX. That means:

- Editing site copy (a stat, a testimonial, a blog excerpt, a nav link)
  never requires touching component code.
- Swapping in a CMS or API later is a matter of replacing what `/data`
  exports, not rewriting components.
- TypeScript (`src/types/index.ts`) catches a malformed content entry at
  compile time instead of at runtime in the browser.

## Notes carried over from the original build

- **Placeholder images**: every photo in `public/assets/images/` is a
  generated placeholder sized exactly like the real Figma asset (so
  swapping them in won't shift the layout). See `ASSETS_NEEDED.md` for the
  full replacement list and which Figma sections still need a verified
  design pull.
- **Fonts**: Lato/Roboto are loaded via a Google Fonts `<link>` tag in
  `src/app/layout.tsx` rather than `next/font/google` — see the comment
  there for why, and how to switch once you have a build environment that
  can reach `fonts.googleapis.com`.
- **Mobile nav**: the hamburger menu is now a real working dropdown
  (`Header.tsx` uses `useState`) — the original static HTML/JS toggled a
  CSS class with no matching styles, so the button didn't visibly do
  anything on mobile. That's fixed here (`.nav--open` in `globals.css`).
