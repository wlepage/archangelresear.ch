// Generates public/og.png from scripts/og.svg.
// Run with: npm run generate:og
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const svgPath = fileURLToPath(new URL('./og.svg', import.meta.url));
const outPath = fileURLToPath(new URL('../public/og.png', import.meta.url));

const svg = await readFile(svgPath);
await sharp(svg, { density: 96 }).resize(1200, 630).png().toFile(outPath);

console.log(`Wrote ${outPath}`);
