import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMG_DIR = './public/img';
const QUALITY = 82;
const EXTS = new Set(['.png', '.jfif', '.jpg', '.jpeg']);

async function* walk(dir) {
  for (const f of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, f.name);
    if (f.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let saved = 0, count = 0;
for await (const src of walk(IMG_DIR)) {
  const ext = extname(src).toLowerCase();
  if (!EXTS.has(ext)) continue;
  const dest = src.replace(/\.[^.]+$/, '.webp');
  if (dest === src) continue; // already webp

  const before = (await stat(src)).size;
  await sharp(src).webp({ quality: QUALITY }).toFile(dest);
  const after = (await stat(dest)).size;
  saved += before - after;
  count++;
  console.log(`${basename(src)} → ${basename(dest)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`);
  await unlink(src); // delete original
}
console.log(`\nDone: ${count} files, saved ${(saved/1024/1024).toFixed(1)} MB`);
