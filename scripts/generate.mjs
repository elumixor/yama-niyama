// Seeds one standalone page per principle into <slug>/index.html.
// Each generated page carries a marker comment; pages WITHOUT the marker
// (i.e. ones you've customised) are never overwritten. Run via `npm run
// generate`, or automatically before `dev` / `build`.

import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { principles, groups, site } from "../src/shared/principles.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MARKER = "<!-- generated:scaffold -->";

// Each principle gets its own hue so the placeholders already feel distinct.
const hue = (i) => Math.round((i * 360) / principles.length);

function template(p, i) {
  const g = groups[p.group];
  const h = hue(i);
  return `<!doctype html>
${MARKER}
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${p.translit} — ${p.gloss} · ${site.title}</title>
  <meta name="description" content="${p.definition.replace(/"/g, "&quot;")}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,400&family=Spectral:wght@300;400;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/src/shared/base.css" />
  <style>
    :root {
      --accent: hsl(${h} 58% 52%);
      --accent-soft: hsl(${h} 48% 92%);
      --ink: hsl(${h} 30% 12%);
      --paper: hsl(${h} 40% 97%);
    }
    body { background: var(--paper); color: var(--ink); }
    .stage { min-height: 100svh; display: grid; grid-template-rows: auto 1fr auto; max-width: 860px; margin-inline: auto; padding: clamp(1.5rem, 5vw, 4rem); }
    .crumb { font-family: var(--font-body); font-size: .8rem; letter-spacing: .18em; text-transform: uppercase; color: var(--accent); }
    .crumb a { color: inherit; text-decoration: none; }
    .glyph { font-size: clamp(4rem, 16vw, 10rem); line-height: 1; color: var(--accent); opacity: .9; }
    .translit { font-family: var(--font-display); font-weight: 600; font-size: clamp(2.5rem, 9vw, 5.5rem); line-height: .95; margin: .1em 0 0; }
    .gloss { font-style: italic; font-size: clamp(1.1rem, 3vw, 1.5rem); color: var(--accent); margin-top: .4rem; }
    .sutra { font-style: italic; border-left: 3px solid var(--accent); padding-left: 1rem; margin: 2.5rem 0; color: hsl(${h} 25% 30%); }
    .definition { font-size: clamp(1.15rem, 2.6vw, 1.5rem); line-height: 1.5; }
    .note { margin-top: 1.5rem; color: hsl(${h} 18% 32%); line-height: 1.7; }
    .seam { font-family: var(--font-body); font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; color: hsl(${h} 15% 55%); }
  </style>
</head>
<body>
  <main class="stage">
    <p class="crumb"><a href="${site.base}">${site.title}</a> · ${g.title} · ${String(p.order).padStart(2, "0")}</p>
    <div>
      <div class="glyph" lang="sa">${p.sanskrit}</div>
      <h1 class="translit">${p.translit}</h1>
      <p class="gloss">${p.gloss}</p>
      <blockquote class="sutra">${p.sutra}</blockquote>
      <p class="definition">${p.definition}</p>
      <p class="note">${p.note}</p>
    </div>
    <p class="seam">${site.tagline} — scaffold placeholder, design pending</p>
  </main>
</body>
</html>
`;
}

let made = 0;
let kept = 0;
for (let i = 0; i < principles.length; i++) {
  const p = principles[i];
  const file = resolve(root, p.slug, "index.html");
  if (existsSync(file) && !readFileSync(file, "utf8").includes(MARKER)) {
    kept++; // customised — leave it alone
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, template(p, i));
  made++;
}

console.log(`seeded ${made} page(s), kept ${kept} customised page(s)`);
