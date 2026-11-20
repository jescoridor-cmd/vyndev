VYN DEVELOPER — MY FIGHT IS NOT OVER, I JUST RESTART
Novel Reader (perbaikan kompatibilitas)

Perbaikan yang dilakukan:
- Daftar reader disesuaikan menjadi 30 chapter.
- Judul website diubah ke judul novel baru.
- Reader tidak lagi menolak chapter hanya karena data-status="draft".
- Reader membaca setiap <section class="chapter-page"> sebagai satu halaman.
- Navigasi halaman dan chapter menghitung jumlah secara dinamis.
- File chapter 23–30 disediakan sebagai slot HTML.

Format HTML chapter yang didukung:
<body data-chapter="01" data-title="Judul Chapter" data-status="draft">
  <section class="chapter-page" data-page="1">
    <p>Paragraf pertama...</p>
    <p>Paragraf kedua...</p>
  </section>
  <section class="chapter-page" data-page="2">
    <p>Paragraf halaman kedua...</p>
  </section>
</body>

PENTING:
1. File novel chapter-01.html sampai chapter-30.html boleh diletakkan sejajar dengan index.html (ini prioritas utama).
2. Jika file tidak ada di lokasi utama, reader otomatis mencari di folder chapters/.
3. Setiap halaman harus memakai class="chapter-page".
4. Reader menampilkan chapter jika ada minimal satu section chapter-page berisi paragraf; data-status="draft" tetap dapat dibaca.
5. Upload seluruh isi ZIP ke hosting, dengan index.html, reader.js, styles.css, dan folder chapters berada pada tingkat yang sama.
6. Jalankan melalui hosting HTTP/HTTPS, bukan membuka index.html langsung sebagai file lokal, karena reader memakai fetch().

Catatan isi:
File chapter-01 sampai chapter-22 yang berasal dari arsip lama dipertahankan apa adanya. Ganti file-file tersebut dengan HTML novel My Fight Is Not Over, I Just Restart yang sesuai. Slot 23-30 adalah placeholder.
