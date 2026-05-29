// Post-build: turn dist/<slug>/index.html into dist/<slug>.html so GitHub Pages
// serves each principle at a clean, slash-free URL (/yama-niyama/santosha)
// instead of redirecting /santosha -> /santosha/. The root index.html stays put.
// Asset URLs are absolute (base-prefixed) so a page's location on disk is irrelevant.

import { readdirSync, renameSync, rmdirSync, existsSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const skip = new Set(["assets"]);

let flattened = 0;
for (const entry of readdirSync(dist, { withFileTypes: true })) {
  if (!entry.isDirectory() || skip.has(entry.name)) continue;
  const nested = resolve(dist, entry.name, "index.html");
  if (!existsSync(nested)) continue;
  renameSync(nested, resolve(dist, `${entry.name}.html`));
  try { rmdirSync(resolve(dist, entry.name)); } catch { /* non-empty: leave it */ }
  flattened++;
}

// Disable Jekyll so the static output is served verbatim.
writeFileSync(resolve(dist, ".nojekyll"), "");

console.log(`flattened ${flattened} page(s) to <slug>.html`);
