// src/data/site.ts — Edit sesuai data bengkel Anda

export const SITE = {
  name: `Adjie Jaya Makmur`,
  tagline: `Spesialis Kanopi · Tralis · Pagar · Konstruksi Besi`,
  description: `Bengkel las profesional di Kaliwungu, Jawa Tengah. Kanopi baja ringan, tralis jendela, pagar ornamen, pintu besi, tangga, dan railing — dikerjakan presisi, harga transparan.`,
  phone: `081393341889`,
  whatsapp: `6281393341889`,
  email: `info@adjiejayamakmur.com`,
  address: `Perumahan Kaliwungu Indah Blok B16 No. 15 RT 12/RW 10, Protomulyo, Kaliwungu Selatan, Kendal, Jawa Tengah`,
  openHours: `Senin - Sabtu, 07.00 - 17.00 WIB`,
  mapsEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d110.2545616!3d-6.9787079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b1f43c532a1%3A0x710befaf9dc6c1e7!2sADJIE+JAYA+MAKMUR!5e0!3m2!1sid!2sid!4v1725753600000!5m2!1sid!2sid`,
  instagram: `https://instagram.com/adjiejayamakmur`,
  facebook: `https://facebook.com/adjiejayamakmur`,
  yearFounded: 2014,
};

export const NAV = [
  { href: `#layanan`, label: `Layanan` },
  { href: `#produk`, label: `Produk` },
  { href: `#proses`, label: `Cara Kerja` },
  { href: `#testimoni`, label: `Testimoni` },
  { href: `#kontak`, label: `Kontak` },
];

export const STATS = [
  { value: `500+`, label: `Proyek Selesai` },
  { value: `10+`, label: `Tahun Pengalaman` },
  { value: `98%`, label: `Pelanggan Puas` },
  { value: `3 Hari`, label: `Rata-rata Selesai` },
];

export const LAYANAN = [
  { title: `Kanopi`, icon: `🏗️`, desc: `Baja ringan, WF, alderon, spandek, polycarbonate. Untuk carport, teras, area komersial. Bentang lebar, anti bocor, tahan cuaca ekstrem.` },
  { title: `Tralis`, icon: `🔒`, desc: `Tralis jendela dan pintu — motif polos, ornamen klasik, hingga modern minimalis. Finishing powder coating anti karat, berbagai warna.` },
  { title: `Pagar`, icon: `🛡️`, desc: `Pagar panel besi welded mesh, tempa artistik, hollow minimalis. Untuk hunian, perumahan, hingga kawasan komersial.` },
  { title: `Pintu Besi`, icon: `🚪`, desc: `Model swing, sliding, dan folding. Plat baja tebal 2-3mm, kunci tanam, finishing powder coating custom warna.` },
  { title: `Tangga Besi`, icon: `🪜`, desc: `Rangka hollow atau pipa, anak tangga plat bordes anti-slip, railing keselamatan. Desain lurus, putar, atau spiral.` },
  { title: `Railing dan Custom`, icon: `⚙️`, desc: `Railing balkon, rooftop, tangga dari besi kotak, pipa, atau stainless. Plus pergola, canopy, dan konstruksi custom lainnya.` },
];

export const PRODUK = [
  { kategori: 'Kanopi', nama: 'Kanopi Baja Ringan', bahan: 'Hollow galvanis + atap alderon/spandek', harga: 'Mulai Rp 250.000/m', foto: '/img/kanopi-baja-ringan.svg', wa: 'Halo, saya tertarik kanopi baja ringan. Boleh info harga dan ukuran?' },
  { kategori: 'Kanopi', nama: 'Kanopi Baja WF', bahan: 'Profil WF/IWF + spandek/polycarbonate', harga: 'Mulai Rp 400.000/m', foto: '/img/kanopi-baja-wf.svg', wa: 'Halo, saya tertarik kanopi baja WF. Boleh info harga dan ukuran?' },
  { kategori: 'Tralis', nama: 'Tralis Minimalis', bahan: 'Besi kotak 2x2 cm, powder coating', harga: 'Mulai Rp 180.000/m', foto: '/img/tralis-minimalis.svg', wa: 'Halo, saya tertarik tralis minimalis. Boleh info harga dan ukuran?' },
  { kategori: 'Tralis', nama: 'Tralis Ornamen', bahan: 'Besi tempa + motif klasik/modern', harga: 'Mulai Rp 280.000/m', foto: '/img/tralis-ornamen.svg', wa: 'Halo, saya tertarik tralis ornamen. Boleh info harga dan ukuran?' },
  { kategori: 'Pagar', nama: 'Pagar Panel Modern', bahan: 'Welded mesh + tiang hollow galvanis', harga: 'Mulai Rp 220.000/m', foto: '/img/pagar-panel-modern.svg', wa: 'Halo, saya tertarik pagar panel. Boleh info harga dan ukuran?' },
  { kategori: 'Pagar', nama: 'Pagar Tempa Klasik', bahan: 'Besi tempa artistik + galvanis', harga: 'Mulai Rp 450.000/m', foto: '/img/pagar-tempa-klasik.svg', wa: 'Halo, saya tertarik pagar tempa. Boleh info harga dan ukuran?' },
  { kategori: 'Pintu', nama: 'Pintu Sliding Garasi', bahan: 'Plat baja 2.5mm + sistem rel smooth', harga: 'Mulai Rp 1.800.000/unit', foto: '/img/pintu-sliding-garasi.svg', wa: 'Halo, saya tertarik pintu sliding. Boleh info harga dan ukuran?' },
  { kategori: 'Tangga', nama: 'Tangga Besi Lurus', bahan: 'Hollow + plat bordes anti-slip + railing', harga: 'Mulai Rp 2.500.000/unit', foto: '/img/tangga-besi-lurus.svg', wa: 'Halo, saya tertarik tangga besi. Boleh info harga dan ukuran?' },
  { kategori: 'Railing', nama: 'Railing Balkon', bahan: 'Besi kotak/pipa, powder coating', harga: 'Mulai Rp 150.000/m', foto: '/img/railing-balkon.svg', wa: 'Halo, saya tertarik railing balkon. Boleh info harga dan ukuran?' },
];

export const PROSES = [
  { step: `01`, title: `Hubungi dan Konsultasi`, desc: `Ceritakan kebutuhan Anda via WhatsApp atau telepon. Konsultasi awal gratis, tanpa syarat.` },
  { step: `02`, title: `Survei Lokasi`, desc: `Tim kami datang ke lokasi, mengukur, melihat kondisi nyata. Hasilnya jadi dasar penawaran harga akurat.` },
  { step: `03`, title: `Desain dan Penawaran`, desc: `Kami buat gambar kerja dan rincian harga transparan. Revisi bebas hingga Anda benar-benar setuju.` },
  { step: `04`, title: `Fabrikasi di Bengkel`, desc: `Pengerjaan di bengkel dengan peralatan las modern. Setiap sambungan dicek kekuatan dan kerapiannya.` },
  { step: `05`, title: `Pasang dan Finishing`, desc: `Tim instalasi memasang di lokasi Anda. Finishing cat atau powder coating untuk hasil yang rapi dan awet.` },
];

export const TESTIMONI = [
  {
    nama: `Budi Santoso`,
    lokasi: `Semarang`,
    pekerjaan: `Pemilik Rumah`,
    rating: 5,
    foto: `/img/avatar-budi.svg`,
    teks: `Kanopi baja ringan sudah terpasang lebih dari setahun. Tidak bocor, tidak karatan, tampilannya masih bagus. Pengerjaannya cepat dan tim-nya sangat sopan.`,
  },
  {
    nama: `Siti Rahma`,
    lokasi: `Kaliwungu`,
    pekerjaan: `Ibu Rumah Tangga`,
    rating: 5,
    foto: `/img/avatar-siti.svg`,
    teks: `Pesan pagar plus tralis jendela sekaligus. Harga sesuai penawaran, tidak ada biaya tersembunyi. Las-nya sangat rapi, saya benar-benar puas.`,
  },
  {
    nama: `Ahmad Fauzi`,
    lokasi: `Demak`,
    pekerjaan: `Kontraktor Bangunan`,
    rating: 5,
    foto: `/img/avatar-ahmad.svg`,
    teks: `Pintu sliding garasi dan tangga besi dikerjakan bersamaan, selesai tepat waktu. Hasilnya kuat dan desainnya persis sesuai keinginan.`,
  },
  {
    nama: `Dewi Lestari`,
    lokasi: `Jepara`,
    pekerjaan: `Pengusaha Kuliner`,
    rating: 5,
    foto: `/img/avatar-dewi.svg`,
    teks: `Railing balkon yang dipasang bikin rumah jadi lebih elegan. Material bagus, pengerjaan rapi. Teman-teman langsung tanya bengkelnya di mana.`,
  },
];
