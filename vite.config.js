import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync, existsSync } from "node:fs";

const root = dirname(fileURLToPath(import.meta.url));

// Every directory that contains an index.html is a standalone page:
// the landing page (root) plus one directory per principle.
function discoverPages() {
  const input = { main: resolve(root, "index.html") };
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (["node_modules", "dist", "src", "public", "scripts", ".git", ".github"].includes(entry.name))
      continue;
    const page = resolve(root, entry.name, "index.html");
    if (existsSync(page)) input[entry.name] = page;
  }
  return input;
}

export default defineConfig({
  // Served from https://elumixor.github.io/yama-niyama/
  base: "/yama-niyama/",
  build: {
    outDir: "dist",
    rollupOptions: { input: discoverPages() },
  },
});
