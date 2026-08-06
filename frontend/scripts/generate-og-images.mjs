/**
 * Rasterises every SVG in public/blog-images to a 1200x630 PNG sibling.
 *
 * Social scrapers (LinkedIn, X, Facebook, WhatsApp, Slack, iMessage) do not
 * render SVG for og:image / twitter:image, so the SVG is kept as the editable
 * source and the PNG is what `blogImage` in the MDX frontmatter points at.
 *
 * Usage: pnpm og:images        (skips PNGs newer than their SVG)
 *        pnpm og:images --force
 */
import { createRequire } from 'node:module';
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const imagesDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../public/blog-images'
);
const force = process.argv.includes('--force');

const isStale = async (svgPath, pngPath) => {
  if (force) return true;
  try {
    const [svg, png] = await Promise.all([stat(svgPath), stat(pngPath)]);
    return svg.mtimeMs > png.mtimeMs;
  } catch {
    return true;
  }
};

const files = (await readdir(imagesDir)).filter((f) => f.endsWith('.svg'));

for (const file of files) {
  const svgPath = path.join(imagesDir, file);
  const pngPath = path.join(imagesDir, file.replace(/\.svg$/, '.png'));

  if (!(await isStale(svgPath, pngPath))) {
    console.log(`skip   ${path.basename(pngPath)} (up to date)`);
    continue;
  }

  // density 144 renders at 2x before the downscale, which keeps text edges
  // clean; flatten drops the alpha channel because some scrapers render
  // transparent PNGs on a black background.
  const png = await sharp(svgPath, { density: 144 })
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover' })
    .flatten({ background: '#0a0e1a' })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  await writeFile(pngPath, png);
  console.log(
    `write  ${path.basename(pngPath)} (${(png.length / 1024).toFixed(0)} KB)`
  );
}
