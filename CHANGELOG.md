# Changelog

## Version 1.0.4 — 2026-11-21

### Modular chapter files
- Moved Chapter 1 prose into `chapters/volume-1/chapter-01.js`.
- Added `chapter-manifest.js` as the single registry for chapter files.
- Added `chapter-loader.js` to load registered classic JavaScript chapter files before the app starts.
- Added `CHAPTER-FILE-GUIDE.md` with the chapter file schema and hosting workflow.
- New chapters can be added by uploading a separate `chapter-NN.js` file and adding one path to the manifest; `app.js` and `index.html` do not need edits.

### Validation and reader
- Reader only publishes chapter modules with the correct ID, exactly 30 pages, exactly 4 paragraphs per page, and 15–23 words per paragraph.
- Library and previous/next chapter navigation recognize every valid published chapter.
- Invalid, missing, or unregistered chapter files remain outlines rather than appearing as completed chapters.
- Updated visible version labels and documentation to 1.0.4.

### Preservation
- Kept the existing V1.0.3 app foundation, CSS, companion chat, profile, avatar/background upload, settings, export/import, and reader design.
- Kept LocalStorage keys and preserved existing reader page progress during the update.
- No backend or database was added; chapter delivery remains static-file based.

### Known limitations
- Only Chapter 1 is fully written; Chapters 2–22 remain outlines.
- Chat AI remains a scripted offline demo, not a live LLM.
- Guess the Image remains a coming-soon item.


## V1.0.4 — Chapter 2 content update
- Menerbitkan Chapter 2, **A Note on the Refrigerator**, sebagai file mandiri `chapter-02.js`.
- Chapter 2 berisi 30 halaman × 4 paragraf (120 paragraf).
- Chapter 2 menggunakan 20–40 kata per paragraf; Chapter 1 tetap menggunakan 15–23 kata.
- Validator reader kini membaca `wordRange` masing-masing file chapter.
- Manifest dan metadata library diperbarui agar Chapter 2 otomatis tampil sebagai Published.
- Chapter 3–22 tetap berstatus Outline.


## v1.0.4 FIX — Chapter reader boot
- Loader memuat chapter manifest secara berurutan.
- `app.js` dijalankan tepat satu kali setelah chapter tersedia.
- Menghapus pemanggilan `app.js` langsung dari `index.html` untuk mencegah inisialisasi ganda.
