# Mother Always Cares About Me — Novel Reader

Versi ini memisahkan halaman utama dan setiap chapter menjadi file HTML. Tampilan menggunakan nuansa halaman kertas novel.

## Struktur
- `index.html` — halaman utama, daftar 22 chapter, dan reader.
- `styles.css` — desain kertas, tipografi, dan layout responsif.
- `reader.js` — memuat 22 file chapter dan mengatur navigasi.
- `chapters/chapter-01.html` sampai `chapter-22.html` — satu file HTML per chapter.

## Menambahkan / merilis chapter
1. Tulis chapter baru pada file slot yang sesuai, misalnya `chapters/chapter-03.html`.
2. Ganti isi placeholder dengan format di bawah. Jangan ubah nama file atau folder.
3. Upload file HTML tersebut ke hosting, menimpa file placeholder yang lama.
4. Selesai. Tidak perlu mengedit `index.html`, `styles.css`, atau `reader.js`. Daftar chapter akan otomatis menandainya sebagai TERSEDIA saat halaman dimuat ulang.

Contoh isi `chapters/chapter-03.html`:
```html
<!doctype html>
<html lang="id">
<head><meta charset="utf-8"><title>Judul Chapter</title></head>
<body data-chapter="03" data-title="Judul Chapter" data-status="published">
  <section class="chapter-page" data-page="1">
    <p>Paragraf pertama pada halaman ini.</p>
    <p>Paragraf kedua pada halaman ini.</p>
  </section>
  <section class="chapter-page" data-page="2">
    <p>Paragraf berikutnya.</p>
  </section>
</body>
</html>
```
Boleh menambahkan sebanyak mungkin elemen `<section class="chapter-page">`; setiap section menjadi satu halaman baca. Gunakan `<p>` untuk paragraf. `data-status="published"` wajib agar chapter muncul sebagai tersedia. Isi `data-title` menjadi judul yang akan ditampilkan di reader.

## Catatan
- Slot 01 dan 02 sudah diisi naskah yang tersedia pada arsip sumber.
- Slot 03–22 sudah disiapkan sebagai placeholder Coming Soon.
- Karena reader mengambil chapter HTML dengan `fetch`, jalankan melalui hosting HTTP/HTTPS atau local web server; membuka `index.html` langsung sebagai `file://` dapat diblokir browser.
- Untuk memperbarui judul/summary di kartu daftar, edit array `chapters` di `reader.js`. Jika judul kartu belum diperbarui, judul di halaman baca tetap mengikuti `data-title` file chapter.
