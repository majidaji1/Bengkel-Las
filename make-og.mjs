import sharp from 'sharp';

const W = 1200, H = 630;

// step 1: logo → file sementara PNG
const logoMeta = await sharp('./public/img/logo.webp')
  .resize(280, 280, { fit: 'inside' })
  .png()
  .toFile('./public/logo-tmp.png');

const logoW = logoMeta.width;
const logoH = logoMeta.height;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#1a1a1a"/>
  <rect x="0" y="0" width="${W}" height="8" fill="#e8a427"/>
  <text x="600" y="440" font-family="sans-serif" font-size="52" font-weight="bold" fill="white" text-anchor="middle">Adjie Jaya Makmur</text>
  <text x="600" y="498" font-family="sans-serif" font-size="28" fill="#e8a427" text-anchor="middle">Bengkel Las Profesional - Kaliwungu, Kendal</text>
  <text x="600" y="545" font-family="sans-serif" font-size="22" fill="#aaaaaa" text-anchor="middle">Kanopi - Tralis - Pagar - Konstruksi Besi</text>
</svg>`;

// step 2: composite logo PNG file ke atas SVG background
await sharp(Buffer.from(svg))
  .composite([{
    input: './public/logo-tmp.png',
    top: 80,
    left: Math.round((W - logoW) / 2),
  }])
  .jpeg({ quality: 90 })
  .toFile('./public/og.jpg');

// cleanup
import { unlink } from 'fs/promises';
await unlink('./public/logo-tmp.png');

console.log('done: public/og.jpg', logoW, 'x', logoH);
