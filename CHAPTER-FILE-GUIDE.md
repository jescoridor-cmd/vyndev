# Membuat dan memasang file chapter

Chapter adalah file JavaScript mandiri di `chapters/volume-1/`. Gunakan pola nama `chapter-02.js`, `chapter-03.js`, dan seterusnya.

## Bentuk data

```js
window.VYN_CHAPTERS = window.VYN_CHAPTERS || {};
window.VYN_CHAPTERS[2] = {
  id: 2,
  title: "Judul Chapter",
  status: "published",
  pages: [
    { page: 1, paragraphs: [
      "Paragraf pertama dengan 15 sampai 23 kata.",
      "Paragraf kedua dengan 15 sampai 23 kata.",
      "Paragraf ketiga dengan 15 sampai 23 kata.",
      "Paragraf keempat dengan 15 sampai 23 kata."
    ] }
    // Lanjutkan sampai page 30.
  ]
};
```

## Cara menerbitkan

1. Buat file `chapters/volume-1/chapter-02.js` berdasarkan format di atas.
2. Isi 30 halaman; setiap halaman harus memiliki tepat 4 paragraf.
3. Setiap paragraf harus berisi 15–23 kata.
4. Upload file ke folder yang sama di hosting.
5. Buka `chapter-manifest.js`, tambahkan path file baru sebagai item dalam array. Contoh: `"chapters/volume-1/chapter-02.js"`.
6. Pastikan nomor `window.VYN_CHAPTERS[2]` sama dengan nomor chapter.
7. Refresh website. Chapter akan muncul sebagai Published jika lolos validasi.

## Catatan

- Tidak perlu mengubah `app.js` atau `index.html` untuk menambah chapter.
- Sistem ini berbasis file statis; tidak memerlukan database atau backend.
- File yang belum didaftarkan di manifest tidak akan dimuat.
- Browser harus dapat mengakses file JavaScript tersebut melalui URL hosting. Untuk pengujian lokal, jalankan melalui local web server agar pemuatan file berjalan konsisten.
- Validasi dilakukan saat website dimuat. File yang tidak memenuhi 30 halaman, 4 paragraf per halaman, atau 15–23 kata per paragraf tidak diterbitkan oleh reader.


## Rentang kata per chapter
Setiap file chapter boleh mendeklarasikan `wordRange: [minimum, maksimum]`.
Jika properti ini tidak ada, reader memakai rentang default 15–23 kata.
Chapter 2 menggunakan `wordRange: [20, 40]`; Chapter 1 tetap 15–23 kata.
