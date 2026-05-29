# Building a principle page — design + build spec

This is the reusable brief for turning one principle of *Yama & Niyama* into a
beautiful, scroll-driven, GSAP-animated single page. **`santosha/index.html` is
the canonical reference implementation — read it in full before you start and
mirror its architecture, quality bar, and JS patterns.** Your page should feel
like a sibling of it, not a clone: same bones, its own palette, imagery, and copy.

## What you're making

A standalone `<slug>/index.html` (plain HTML + inline `<style>` + one
`<script type="module">`). It is a cinematic, editorial scrollytelling page that
walks a reader through one principle's argument, alternating quiet typographic
panels with full-bleed photographic scenes.

Content comes from two places, both in this repo:
- `text.txt` — the source discourse. Find this principle's section and read it.
- `src/shared/principles.js` — this principle's `sutra`, `definition`, `note`.

## Page structure (mirror Santośa)

1. **Hero** — full-bleed photo, Devanāgarī glyph, transliterated name, the gloss,
   one distilled essence line, and a scroll cue. Kicker: `<Group> · <ordinal> · NN`.
2. **~5–6 body sections** that tell the argument. Alternate:
   - **Light typographic panels** (`.panel`) on paper — definitions, contrasts,
     method cards, pull-quotes.
   - **Dark full-bleed photo scenes** (`.scene`) — one strong idea each, white text
     over a tinted photo.
   Pull the principle's real teaching points and parables from the source (e.g.
   Santośa uses the millionaire quote and the "need vs greed" caveat). Use the
   principle's actual sūtra somewhere.
   - Include **one signature interactive moment** like Santośa's pinned counter if
     the content suggests it (a count, a list that reveals, a before/after). Optional
     but encouraged — make it specific to this principle, don't just copy the counter.
3. **Closing scene** — where the principle leads / how it connects to its
   neighbours, then a nav block: prev · index · next.

## Typography & palette

- Fonts are already loaded site-wide: **Fraunces** (display) + **Spectral** (body).
  Load only the weights you use. Use Fraunces **upright** — light (300) for big
  display, 500/600 for emphasis. **Keep italics and cursive to a near-minimum**
  (project preference). Earn emphasis through weight, size, letter-spacing, colour.
- Commit to a **distinct, cohesive palette** for this principle (your brief names a
  mood + hue anchor). Define `--ink`, `--paper`, `--accent`, and usually one warm
  secondary. Dark scenes use white text over a tinted photo. Do **not** reuse
  Santośa's blue — each principle is visually its own.
- Add atmosphere: the faint SVG grain overlay (copy from Santośa), generous
  negative space, asymmetric scene alignment (Santośa right-aligns the wheat scene).

## Stock photos — source and VERIFY them yourself

You have `curl`, `WebSearch`, `WebFetch`, and `Read`. Real photos, no MCP needed.

1. Make `<slug>/img/`. Download **6–9 candidates** as `.jpg` (not `.jpeg`).
2. Primary source — **Unsplash CDN** (free licence, hotlinkable, no key):
   `https://images.unsplash.com/photo-<ID>?w=2000&q=80&fm=jpg&fit=crop`
   Find good photo IDs with `WebSearch`/`WebFetch` (e.g. search Unsplash for your
   theme and read the `images.unsplash.com/photo-…` URL from the page).
3. Reliable keyless topical fallback if you can't pin an ID — **LoremFlickr**:
   `https://loremflickr.com/2000/1200/<keywords>` (Flickr CC, always returns a
   topical photo). `https://picsum.photos/seed/<word>/2000/1200` is a last resort
   (not topical). `source.unsplash.com` is **dead** — don't use it.
4. **Verify every image with the Read tool** (it renders the picture). Keep only
   the ones that genuinely fit the section and look good; `rm` the rest. A page
   with 5 strong, on-theme photos beats 9 random ones.
5. Reference them in HTML as `src="./img/name.jpg"` — Vite bundles these to
   hashed, base-prefixed asset URLs automatically. Always write meaningful `alt`.
6. Keep each file roughly < 1.2 MB (the `w=2000&q=80` params handle this).

## GSAP (already installed: `gsap@^3.15`, all plugins free)

Import what you use and **register before** the main loop:

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
```

Patterns to reuse (all in Santośa):
- **Scroll progress bar** scrubbed to page scroll.
- **Hero entrance** timeline. **Gotcha:** the anti-flash CSS (`.anim .hero [data-load]{opacity:0}`)
  pre-hides hero pieces, so a plain `.from()` would animate `0 → 0`. Use **`.fromTo()`
  with explicit visible end values** for hero pieces.
- **Parallax** on `[data-parallax]` scene images (`yPercent` scrubbed).
- **Line reveals** via `SplitText` on `[data-split]` headings.
- **Fade-up reveals** via `gsap.from()` on `[data-reveal]` (these are below the fold,
  so `from()` with default `immediateRender` hides them at init — no flash, no CSS gate).
- Optional **one pinned/scrubbed signature moment**.

**Reduced motion:** wrap all scroll/entrance animation in
`if (!matchMedia("(prefers-reduced-motion: reduce)").matches) { … }` and only add the
`.anim` class (the hero gate) in that same no-preference case (see Santośa's `<head>`
inline script). With motion reduced, every element must be fully visible with no JS.
Run animation setup inside `document.fonts.ready.then(...)` so SplitText measures
correct line breaks.

## Keyboard navigation (include it)

Copy Santośa's `setupKeyboardNav()` verbatim: ←/→, ↑/↓, PageUp/PageDown step between
sections, Home/End jump to ends; it recomputes section tops live with
`getBoundingClientRect` (so GSAP pin-spacers can't desync it) and respects reduced
motion. It must run **outside** the reduced-motion gate (keyboard nav always works),
with `ScrollToPlugin` registered unconditionally.

## Links & URLs (strict)

- All internal links are **absolute and slash-free**: `/yama-niyama/<slug>` and home
  `/yama-niyama/`. No relative `../`, no trailing slash. (The build flattens pages to
  `<slug>.html` served at clean URLs; relative links would break.)
- The home crumb/link and the prev/index/next nav all use this form. Your brief gives
  the exact prev/next slugs.

## Hard rules

- **Remove the `<!-- generated:scaffold -->` marker** (so the generator never
  overwrites your page). Don't add any `generated:` marker.
- Edit **only** `<slug>/index.html` and add files under `<slug>/img/`. Touch nothing
  else — no shared files, no other principles, no `package.json`.
- **Do not run `npm run build`/`dev`** and **do not commit** — the orchestrator builds
  and commits. (You may `curl` images and `Read` them; that's it for shell.)
- Match Santośa's polish: real copy from the source text (no lorem), accessible
  `alt`/contrast, clean code that reads like the reference.
