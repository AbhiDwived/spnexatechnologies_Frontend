# Placeholder images to replace

This build uses placeholder images (generated locally, sized exactly to
match the original Figma design) under `public/assets/images/`. Replace
each file in place — same filename, same folder — with the real export
from Figma and the layout will not shift, since every `<Image>` usage in
the components already declares the correct `width`/`height`.

| File | What it should show | Size (px) | Used in |
|---|---|---|---|
| `logo.png` | Trickle Solutions "TS" logo mark | 52 × 49 | `components/layout/Header.tsx`, `Footer.tsx` |
| `flag-india.png` | India flag | 22 × 15 | `components/layout/Header.tsx` |
| `hero-woman.png` | Hero circle photo | 300 × 300 | `components/layout/Header.tsx` |
| `ux-illustration.png` | UI/UX phone mockup illustration | 666 × 444 | `data/services.ts` (all 6 tabs currently share this one image) |
| `coding-photo.png` | Developer working photo | 419 × 466 | `components/sections/WhyChooseUs.tsx` |
| `salon-photo-1.png` | Salon service photo | 526 × 335 | `data/industries.ts` (`industryPhotoCard`) |
| `underline-swash.png` | Decorative underline swash | 220 × 20 | `components/sections/Industries.tsx` |
| `quote-icon.png` | Testimonial quote mark | 61 × 46 | `components/sections/Testimonials.tsx` |
| `client-photo.png` | Testimonial author photo | 51 × 47 | `data/testimonials.ts` |
| `blog-1.png` / `blog-2.png` / `blog-3.png` | Blog post cover photos | 368 × 170 | `data/blogs.ts` |
| `industries-alt-education.png` | Hand with phone/notebook over a laptop | 700 × 420 | `data/industries.ts` (`industryAltRows`) |
| `industries-alt-grocery.png` | Grocery shopping / produce photo | 700 × 420 | `data/industries.ts` |
| `industries-alt-ecommerce.png` | Shopping cart with boxes | 700 × 420 | `data/industries.ts` |
| `industries-alt-salon.png` | Hands styling/braiding hair | 700 × 420 | `data/industries.ts` |
| `about-hero-bg.png` | Office/team photo banner | 1600 × 500 | `components/sections/about/AboutHero.tsx` |
| `about-team-photo.png` | "Who We Are" bio photo | 480 × 520 | `components/sections/about/AboutWhoWeAre.tsx` |

The four category icons (education / grocery / ecommerce / salon) are
hand-coded inline SVGs in `components/icons/IndustryIcons.tsx` rather than
images — swap the `<svg>` markup there if you have exact Figma icon
exports you'd rather use instead.

## Why these are placeholders

The real image assets live on Figma's asset CDN, and the sandbox this
project was built in doesn't have that host on its network allowlist, so
they couldn't be downloaded automatically. Exporting them from Figma
yourself (Right‑click layer → Export, or Copy/Paste as PNG) is the
fastest fix.

## Sections built without a verified Figma screenshot

- **Latest Blogs** (`components/sections/Blogs.tsx`) and **Footer**
  (`components/layout/Footer.tsx`) were built from layout data (text +
  positions) pulled from Figma, not a verified screenshot/color pull —
  the Figma API hit its rate limit partway through the original build.
  Double‑check colors/spacing against Figma once quota resets.
- **`IndustriesAlt`** (the full-width "Industries We Serve" section with
  diagonal photos, `components/sections/IndustriesAlt.tsx`) was rebuilt
  from a reference screenshot the user supplied rather than a Figma
  `get_design_context` pull, for the same rate-limit reason — it's a
  close match, not pixel-exact.

## Fonts

`src/app/layout.tsx` loads Lato/Roboto via a Google Fonts `<link>` tag
rather than `next/font/google`, because `next/font` fetches font files at
**build time**, and the sandbox this project was built in blocks outbound
requests to `fonts.googleapis.com`. If your build environment can reach
Google Fonts, switching to `next/font/google` is a drop-in change (see the
comment in `layout.tsx`) and gets you self-hosted, zero-layout-shift fonts.
