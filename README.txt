VYN DEVELOPER — PANDUAN SETUP
================================

ISI FOLDER
----------
- index.html                 Website portfolio
- login.html                 Login member
- register.html              Registrasi member
- member-area.html           Daftar plugin dan download
- admin.html                 Upload plugin untuk admin
- firebase-config.js         Konfigurasi Firebase
- styles.css                 Tampilan bersama
- firebase-rules-firestore.txt
- firebase-rules-storage.txt

PERSYARATAN
-----------
1. Akun Google untuk Firebase.
2. Browser modern.
3. Hosting HTTPS (Netlify direkomendasikan).
4. File plugin .jar yang memang Anda berhak distribusikan.

1. MEMBUAT PROJECT FIREBASE
---------------------------
1. Buka https://console.firebase.google.com/
2. Klik Add project / Tambahkan project.
3. Ikuti wizard sampai project selesai dibuat.
4. Di Project Overview, tambahkan aplikasi Web (ikon </>).
5. Beri nama aplikasi, lalu daftarkan.
6. Salin objek firebaseConfig yang ditampilkan.

2. AKTIFKAN AUTHENTICATION
-------------------------
1. Firebase Console > Build > Authentication.
2. Klik Get started.
3. Buka Sign-in method.
4. Aktifkan Email/Password lalu Save.

3. AKTIFKAN FIRESTORE
---------------------
1. Build > Firestore Database > Create database.
2. Pilih lokasi database yang sesuai.
3. Buat database. Setelah itu buka tab Rules.
4. Salin isi firebase-rules-firestore.txt, lalu Publish.

4. AKTIFKAN STORAGE
-------------------
1. Build > Storage > Get started.
2. Ikuti wizard untuk membuat bucket.
3. Buka tab Rules.
4. Salin isi firebase-rules-storage.txt, lalu Publish.
5. Pastikan nilai storageBucket di firebase-config.js cocok dengan bucket
   yang tampil pada Firebase Console. Format bucket dapat berbeda menurut
   project/konfigurasi Firebase; jangan menebak nilainya.

5. ISI FIREBASE CONFIG
---------------------
Buka firebase-config.js. Ganti seluruh nilai GANTI_... dengan nilai dari
Firebase Console > Project settings > General > Your apps > SDK setup.
Jangan mengunggah private service-account key ke website. Konfigurasi web
Firebase memang berada di sisi browser; keamanan data ditegakkan oleh Rules.

6. JADIKAN AKUN PERTAMA SEBAGAI ADMIN
------------------------------------
1. Buka website yang sudah di-host, lalu daftar akun melalui register.html.
2. Login sekali agar akun dan dokumen members/{UID} terbentuk.
3. Firebase Console > Authentication > Users: salin UID akun tersebut.
4. Firestore Database > Data > members > pilih dokumen dengan UID tersebut.
5. Ubah field role dari "member" menjadi "admin".
6. Simpan. Muat ulang admin.html.

Jangan pernah membuka izin create member secara bebas dengan role admin.
Firestore Rules di paket ini memaksa registrasi baru menggunakan role member.
Promosi admin dilakukan secara manual melalui Firebase Console.

7. TEST UPLOAD PLUGIN
--------------------
1. Login dengan akun admin yang sudah dipromosikan.
2. Buka /admin.html.
3. Isi nama, deskripsi, pilih file .jar, lalu Upload Plugin.
4. Tunggu progress mencapai 100%.
5. Periksa Storage > Files > plugins dan Firestore > plugins.

8. TEST DOWNLOAD MEMBER
----------------------
1. Daftar akun baru (akun ini otomatis role member).
2. Login dan buka /member-area.html.
3. Klik Download .jar.
4. File diambil menggunakan getBlob() Firebase Storage SDK yang memakai
   autentikasi pengguna. Cara ini dipilih agar file tidak dibagikan melalui
   URL token download permanen. Browser akan mengunduh blob secara lokal.

9. DEPLOY KE NETLIFY
--------------------
1. Pastikan semua file berada dalam satu folder.
2. Buka https://app.netlify.com/ dan login/daftar.
3. Dari halaman Sites, pilih Add new site > Deploy manually
   (label menu dapat berubah).
4. Drag & drop folder project atau ZIP hasil ekstrak ke area deploy.
5. Tunggu deploy selesai dan buka URL HTTPS dari Netlify.
6. Tes halaman portfolio, register, login, admin, dan download.
7. Jika memakai domain sendiri, tambahkan domain di pengaturan site.

PENTING: Jalankan website melalui server lokal atau hosting HTTPS, bukan
membuka file HTML dengan protokol file://. Untuk uji lokal, bisa memakai
ekstensi Live Server pada editor kode.

10. TROUBLESHOOTING
-------------------
- auth/operation-not-allowed:
  Metode Email/Password belum diaktifkan di Firebase Authentication.

- auth/email-already-in-use:
  Email sudah memiliki akun. Login atau gunakan email lain.

- auth/invalid-credential:
  Email/password salah atau kredensial tidak valid.

- Missing or insufficient permissions:
  Periksa Firestore Rules, Storage Rules, dan pastikan user sudah login.
  Pastikan dokumen members/{UID} tersedia.

- storage/unauthorized:
  Akun belum login, rules belum dipublikasikan, atau role bukan admin
  ketika melakukan upload.

- Firebase: No Firebase App '[DEFAULT]' has been created:
  Pastikan firebase-config.js berhasil dimuat dan semua halaman memakai
  import module yang benar.

- Plugin tidak muncul:
  Periksa koleksi Firestore bernama plugins dan pastikan dokumen metadata
  berhasil dibuat. Urutan halaman memakai uploadPada.

- Storage bucket not found:
  Salin storageBucket yang tepat dari Project settings. Jangan mengasumsikan
  akhiran bucket tertentu.

- Upload berhasil tetapi metadata gagal:
  Periksa Firestore Rules. Hapus file yatim dari Storage bila diperlukan.

CATATAN KEAMANAN
----------------
1. Jangan pernah memberi user biasa role admin.
2. Jangan menghapus pemeriksaan autentikasi dari Rules.
3. Jangan menyimpan file .jar di folder publik Netlify.
4. Rules Storage membatasi tulis ke admin dan membatasi ukuran 100 MB serta
   content type application/java-archive.
5. Download menggunakan getBlob() agar permintaan file melewati Firebase
   SDK dengan sesi pengguna. getDownloadURL() menghasilkan URL bertoken
   yang dapat berperilaku seperti bearer link jika dibagikan; karena itu
   implementasi ini tidak memakai URL tersebut.
6. Tambahkan domain Netlify pada Authentication > Settings > Authorized
   domains bila Firebase meminta domain diizinkan.
7. Rules adalah batas keamanan utama. Pemeriksaan role di HTML hanya untuk
   pengalaman pengguna, bukan pengganti Rules.

TEKNOLOGI
---------
HTML5, CSS3, JavaScript vanilla, Firebase Authentication, Cloud Firestore,
Firebase Storage, Google Fonts, dan Netlify.

Tidak ada WhatsApp, GitHub, blog, atau framework frontend dalam project ini.
