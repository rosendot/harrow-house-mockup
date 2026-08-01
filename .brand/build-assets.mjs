// Renders The Harrow House brand assets. Run from the repo root. sharp isn't
// installed here — borrow the vault's:
//   NODE_PATH="…/atlas-studio-internal/node_modules" node .brand/build-assets.mjs
//
// Harrow House is a WORDMARK-ONLY brand (a serif "The Harrow House · Est. 1890",
// no header/footer icon — that's intentional for a heritage boutique inn). So we
// generate NO on-site mark. We only make what a wordmark brand still needs:
//   • favicon / PWA / apple-touch — an "HH" serif monogram (a browser tab is too
//     small for the full name; the monogram is just the wordmark's initials, so
//     it introduces no pictorial icon)
//   • an OG share card — the elegant wordmark itself + tagline
//
// All drawn as SVG (no Gemini, no crop, no watermark).
import sharp from "sharp";

const NAVY  = "#023047";   // --color-dark
const BLUE  = "#0077b6";   // --color-primary (harbor blue)
const SAND  = "#f4a261";   // --color-secondary (warm sand)
const CREAM = "#f8f6f2";   // --color-cream
const SERIF = "'DM Serif Display', Georgia, 'Times New Roman', serif";

// "HH" monogram on a navy tile with a thin sand rule between the letters —
// echoes the wordmark's serif + the inn's palette. Rendered from SVG.
const monogram = (px) => `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="${NAVY}"/>
  <text x="50" y="50" dominant-baseline="central" text-anchor="middle"
        font-family="${SERIF}" font-size="52" font-weight="400" fill="${CREAM}">HH</text>
  <rect x="30" y="72" width="40" height="2" fill="${SAND}"/>
</svg>`;

const R = (svg, size) => sharp(Buffer.from(svg), { density: 300 }).resize(size, size);
const out = [];

// ── Favicons / PWA / Apple touch ──────────────────────────────────────────
await R(monogram(100), 32).webp({ quality: 92 }).toFile("public/favicon-32.webp"); out.push("favicon-32.webp");
await R(monogram(100), 192).webp({ quality: 90 }).toFile("public/icon-192.webp"); out.push("icon-192.webp");
await R(monogram(100), 512).webp({ quality: 90 }).toFile("public/icon-512.webp"); out.push("icon-512.webp");
await R(monogram(100), 512).png().toFile("public/icon-512.png"); out.push("icon-512.png");
await R(monogram(100), 180).png().toFile("public/apple-touch-icon.png"); out.push("apple-touch-icon.png");

// ── OG / social share card, 1200x630 — the wordmark, no icon ──────────────
// Cream card, centred serif wordmark + "EST. 1890", tagline, meta strip with
// the CONCEPT BUILD tag. Mirrors the site's own typographic identity.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${CREAM}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${NAVY}"/>
  <text x="600" y="270" text-anchor="middle" font-family="${SERIF}" font-size="92" fill="${NAVY}">The Harrow House</text>
  <text x="600" y="322" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="9" fill="${BLUE}">EST. 1890 · CAMDEN HARBOR, MAINE</text>
  <line x1="480" y1="366" x2="720" y2="366" stroke="${SAND}" stroke-width="2"/>
  <text x="600" y="436" text-anchor="middle" font-family="${SERIF}" font-size="34" fill="${NAVY}">A boutique inn on the Maine coast.</text>
  <text x="100" y="588" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="600" letter-spacing="3.2" fill="${BLUE}">ROOMS · DINING · EVENTS</text>
  <text x="1100" y="588" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="600" letter-spacing="3.2" fill="${SAND}">CONCEPT BUILD</text>
</svg>`;
await sharp(Buffer.from(og), { density: 150 }).resize(1200, 630).png().toFile("public/og-image.png"); out.push("og-image.png");
await sharp(Buffer.from(og), { density: 150 }).resize(1200, 630).webp({ quality: 88 }).toFile("public/og-image.webp"); out.push("og-image.webp");

console.log("wrote:", out.join(", "));
