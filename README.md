# Portfolio Azmi Rabbani

Vite + React 19, CSS biasa (tanpa Tailwind), mode gelap/terang, semua teks di satu file.
Tata letak dan gayanya mengikuti template [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) (MIT):
hero bergelombang ungu, blok keahlian, timeline riwayat, grid proyek dua kolom, dan form kontak.

## Jalankan di komputer

```bash
npm install
npm run dev        # buka http://localhost:5173
npm run build      # hasil ke folder dist
```

## Mengubah isi

- **Teks, proyek, pengalaman, keahlian:** `src/data/portfolio.js`. Cukup ubah teks di sana.
- **Link CV:** isi `cvUrl` di `profile` (misalnya link Google Drive). Tombol "Unduh CV" muncul otomatis.
- **Warna dan font:** variabel di bagian atas `src/styles.css` (aksen ungu ada di `--purple` dan `--accent`).
- **Form kontak:** tanpa server. Tombol "Kirim lewat email" membuka aplikasi email pengunjung dengan isi yang sudah terisi.
- **Logo tools:** otomatis dari paket `simple-icons`. Untuk tool baru, tambahkan importnya di
  `src/components/Logos.jsx` dan namanya di objek `ICONS`. Nama tanpa ikon tetap tampil sebagai teks.
- **Logo perusahaan:** taruh file di `src/assets/logos/` dengan nama `mekari.png`, `pupuk-kujang.png`,
  `telkom-indonesia.png`, `telkom-university.png` (opsional `myskill.png`, `talenthub.png`).
  Format png, svg, webp, atau jpg diterima. Selama file belum ada, yang tampil adalah monogram inisial.

## Deploy

1. Buat repo baru di GitHub, lalu:

   ```bash
   git init
   git add .
   git commit -m "Portfolio awal"
   git branch -M main
   git remote add origin https://github.com/Azmirabbani/portfolio.git
   git push -u origin main
   ```

2. Di vercel.com pilih **Add New → Project**, impor repo itu. Preset Vite terdeteksi otomatis, lalu klik **Deploy**.

Setiap `git push` berikutnya memperbarui situs secara otomatis.
