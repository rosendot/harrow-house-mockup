# The Harrow House — concept mockup

A six-page Astro site for **The Harrow House**, a fictional fourteen-room
boutique inn in a restored 1890s captain's house on Camden Harbor, Maine. Built
by Atlas Studio as a portfolio piece — this is a **concept build, not a client
site**. No such inn exists; the address, phone, rates, staff, and testimonials
are invented.

The site footer says so on every page, and links back to atlasstudio.dev.

> **No license numbers.** An inn carries no public credential in its footer, so
> there was nothing to strip here — the source footer only claims a copyright
> and an address. Re-check with:
> `grep -rioE "licen[sc]e #|lic\. ?#|#[0-9]{5,}" --include=*.html dist/`

Ported from the Atlas Studio design system in Claude Design (project
`5b78c5e0-3edd-4692-abc2-b097220f4fd1`) and rebuilt as a real deployable Astro
project. See `atlas-studio-internal/guides/mockup-workflow.md`, Stage 6.

## Stack

- **Astro 5**, static output — no server routes, no framework islands
- Plain CSS: [`src/styles/tokens.css`](src/styles/tokens.css) (Atlas design
  tokens) + [`src/styles/harrow.css`](src/styles/harrow.css) (the coastal-breeze
  brand theme — harbor blue, warm sand, deep navy). Everything else reads
  `var(--token)`.
- One shared `<script>` in the layout, vanilla JS, no dependencies
- Deploys to Cloudflare Pages

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # serve the built output
npm run deploy    # wrangler pages deploy dist
```

## Deploying

Intended for Cloudflare Pages via the GitHub integration — pushes to `main`
auto-deploy. Build command `npm run build`, output `dist/`.

For a one-off CLI deploy: `wrangler login`, then `npm run deploy`.

## Pages

| Route | Sections |
|-------|----------|
| `/` | 4-slide hero · three pillars · mosaic gallery · 4 room cards · testimonial slider · CTA |
| `/rooms/` | Crumb bar · 4 alternating room rows · comparison table · FAQ accordion · CTA |
| `/dining/` | Crumb strip · split hero · dinner list · breakfast grid with filters · CTA |
| `/events/` | Crumb strip · split hero · 3 spaces · process steps · 10-photo lightbox · inquiry form |
| `/the-inn/` | Crumb bar · innkeeper spotlight · team overlay grid · stats · seasons carousel · CTA |
| `/visit/` | Crumb bar · Google Maps embed · getting-here cards · hours card · contact bar · footer CTA |

## Content

Shared content lives in [`src/data/`](src/data/):

- [`rooms.ts`](src/data/rooms.ts) — the four guest rooms. Feeds the Home card
  grid, the Rooms zig-zag rows, **and** the comparison table, so a rate can't
  drift between the three places it appears.
- [`nav.ts`](src/data/nav.ts) — the mega-menu structure and the mobile drawer.
  These are deliberately separate: the source's drawer lists differ from the
  desktop panels (Rooms shows the four rooms without the amenities column).

Everything else is a frontmatter array at the top of its page.

## Images

The Claude Design source used `<image-slot>` — a drag-and-drop authoring element
backed by a sidecar file and the `window.omelette` bridge. That runtime doesn't
exist outside the design canvas, so every slot was replaced with
[`ImageSlot.astro`](src/components/ImageSlot.astro): a plain div rendering a
textured placeholder captioned with the photo that belongs there.

There are **47 slots** across the six pages. To drop in a real photo, pass `src`
(and `alt`):

```astro
<ImageSlot src="/photos/king-harbor.jpg" alt="The King Harbor room at dawn" />
```

The placeholder styling falls away automatically once `src` is set. Put files in
`public/` and reference them by absolute path.

`/visit/` has no slots — its map is a **real Google Maps iframe**, ported as-is.
No API key needed for the embed URL form the design used.

## Interactive pieces

All vanilla JS in one `<script>` in [`Layout.astro`](src/layouts/Layout.astro),
matching the source's single shared `harrow.js`. Each block guards on its own
selector, so it no-ops on pages without that markup:

- **Header** — shadow on scroll; hover mega-panels (CSS); slide-in mobile drawer
  with expandable sub-lists, closing on scrim click or Escape
- **Hero slideshow** — 4 slides, 5s crossfade, clickable dots (`/`)
- **Testimonial slider** — 3 quotes, 6s, clickable dots (`/`)
- **Breakfast filter** — All / Sweet / Savory / Sides (`/dining/`)
- **FAQ accordion** — height-animated, first item open (`/rooms/`)
- **Lightbox** — 10 photos, arrows, Escape and arrow keys (`/events/`)
- **Hours card** — live front-desk open/closed, 7am–9pm daily (`/visit/`)

The event inquiry form on `/events/` is **demo only** — `data-visual` makes the
shared handler swallow the submit. It posts nowhere; there's no backend.

## Notes versus the design source

Faithful port. Three deliberate changes:

- **Nav is route-derived.** The source hard-coded `class="active"` on each
  page's own nav link; with one shared header that would mark the same tab
  active everywhere, so it now compares `Astro.url.pathname`.
- **Reduced motion respected.** The hero and testimonial auto-advance are
  decorative, so both hold on the first slide under
  `prefers-reduced-motion: reduce`. Dots still work. (The source's infinite
  carousel already had a reduced-motion rule; that carried over as-is.)
- **The FAQ item marked open in markup gets its height set on load**, and the
  buttons carry `aria-expanded`. The source's accordion only measured height on
  click, so the initially-open answer rendered collapsed.

Everything else — copy, layout, colors, fonts, section order, rates, the hours
logic (7am–9pm, already correct in 24-hour form) — is unchanged.
