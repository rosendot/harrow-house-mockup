// @ts-check
import { defineConfig } from "astro/config";

// Static output — the mockup is a plain marketing site with no server routes.
// Deploys to Cloudflare Pages as a folder of HTML/CSS/JS.
export default defineConfig({
  site: "https://harrow-house-mockup.pages.dev",
  output: "static",
  build: {
    // Emit /rooms/index.html rather than /rooms.html so the preview URL reads
    // like a real site.
    format: "directory",
  },
});
