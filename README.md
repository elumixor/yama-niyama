# Yama &amp; Niyama

The ten moral principles of *Yama* and *Niyama* — from **A Guide to Human Conduct**. Each principle is presented as its own standalone page, reachable at:

```
https://elumixor.github.io/yama-niyama/          ← the index
https://elumixor.github.io/yama-niyama/santosha  ← one principle
https://elumixor.github.io/yama-niyama/ahimsa
...
```

No tabs, no single-page shell. Each principle's page is independent and can be designed however it likes.

## The principles

| # | Yama (outward) | # | Niyama (inward) |
|---|----------------|---|-----------------|
| 01 | ahimsa — non-harming | 06 | shaoca — purity |
| 02 | satya — truthfulness | 07 | santosha — contentment |
| 03 | asteya — non-stealing | 08 | tapah — sacrificing service |
| 04 | brahmacarya — remaining in Brahma | 09 | svadhyaya — clear understanding |
| 05 | aparigraha — non-accumulation | 10 | ishvara-pranidhana — shelter in the Cosmic |

## How it's built

- **Vite** multi-page build. Every directory with an `index.html` is its own page entry; `vite.config.js` discovers them automatically.
- **`src/shared/principles.js`** is the single source of content (lifted from `text.txt`).
- **`scripts/generate.mjs`** seeds a placeholder page for any principle that doesn't have one yet. It will **never** overwrite a page you've customised — it only touches files still carrying the `<!-- generated:scaffold -->` marker.
- **`src/shared/base.css`** holds the shared typographic DNA; each page layers its own palette/layout on top.

## Develop

```bash
npm install
npm run dev      # seeds missing pages, then starts Vite
```

## Build &amp; deploy

```bash
npm run build    # → dist/
```

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`. Enable Pages once under **Settings → Pages → Source: GitHub Actions**.

## Designing a principle page

1. Open `<slug>/index.html` (e.g. `santosha/index.html`).
2. Delete the `<!-- generated:scaffold -->` marker so the generator leaves it alone.
3. Design freely — it's a plain standalone HTML page. Pull content from `src/shared/principles.js` or write it inline.

---

Content after the discourses of Shrii Shrii Ánandamúrti. Source text: `text.txt`.
