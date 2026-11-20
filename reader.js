const chapters=[{title:'Kematian Sang Pahlawan',summary:'Kaito gugur melawan Aliansi Senja dan terbangun kembali pada hari kelahirannya.'},{title:'Dua Belas Tahun Kemudian',summary:'Kaito tumbuh dengan ingatan masa depan dan mulai mencari lambang misterius.'},{title:'Tetangga Bernama Riri',summary:'Kaito bertemu kembali dengan Riri, tetangga yang pernah hilang dari hidupnya.'},{title:'Lambang di Balik Jam',summary:'Jam saku keluarga menyimpan simbol dan petunjuk tentang organisasi Aster.'},{title:'Ujian Pertama',summary:'Kaito mengikuti ujian sambil menyembunyikan kecerdasan dan pengetahuan masa depannya.'},{title:'Akademi dan Janji Lama',summary:'Kaito bersiap memasuki akademi, sementara Meily semakin protektif.'},{title:'Hari Pertama, Pengawasan Pertama',summary:'Hari pertama sekolah membawa Kaito ke lingkungan pertemanan baru.'},{title:'Gadis di Ruang Arsip',summary:'Sena, siswi ruang arsip, menemukan kejanggalan dalam catatan sejarah.'},{title:'Festival yang Tidak Biasa',summary:'Festival sekolah menyembunyikan kode menuju gudang tua.'},{title:'Jejak Aster',summary:'Dokumen Aster mengungkap organisasi penjaga keseimbangan waktu.'},{title:'Rahasia Sang Ibu',summary:'Meily mengakui keterkaitan masa lalunya dengan artefak Aster.'},{title:'Teman yang Menjadi Rival',summary:'Persaingan Kaito dan Ren berubah menjadi kerja sama saat bahaya muncul.'},{title:'Retakan di Langit',summary:'Retakan langit memperlihatkan kilasan masa depan yang hancur.'},{title:'Surat dari Masa Depan',summary:'Surat misterius dengan tulisan Kaito memperingatkan tentang perubahan takdir.'},{title:'Perjalanan ke Kota Utara',summary:'Perjalanan sekolah ke kota utara membuka rahasia sejarah.'},{title:'Nama yang Dihapus',summary:'Sena menemukan nama Meily dalam daftar anggota Aster.'},{title:'Malam Penjaga Menara',summary:'Makhluk peniru suara menyerang Kaito dan Ren di menara pengawas.'},{title:'Pengakuan Riri',summary:'Riri menceritakan mimpi berulang tentang Kaito di medan perang.'},{title:'Turnamen Antar Akademi',summary:'Turnamen antar akademi menarik perhatian pengamat bertopeng.'},{title:'Guru yang Menghilang',summary:'Guru sejarah menghilang setelah meninggalkan petunjuk tentang jam saku.'},{title:'Observatorium Ketujuh',summary:'Observatorium menunjukkan tujuh kemungkinan masa depan Kaito.'},{title:'Aliansi Senja Bergerak',summary:'Aliansi Senja mulai bergerak dan mencari Jangkar Waktu.'},{title:'Harga Sebuah Perubahan',summary:'Menyelamatkan seseorang mengubah ingatan Kaito tentang masa depan.'},{title:'Kebenaran tentang Kelahiran',summary:'Meily mengungkap fenomena aneh pada malam kelahiran Kaito.'},{title:'Topeng Tanpa Wajah',summary:'Sosok bertopeng mengaku sebagai anggota terakhir Aster.'},{title:'Perpecahan',summary:'Kelompok Kaito terpecah dan jam saku dicuri.'},{title:'Mengejar Detak Terakhir',summary:'Kaito dan Riri mengejar pencuri ke terowongan waktu.'},{title:'Sahabat dari Garis Waktu Lain',summary:'Seorang sahabat dari masa depan membawa pesan mengejutkan.'},{title:'Pilihan Meily',summary:'Meily mempertaruhkan kekuatannya untuk menyelamatkan anak-anak.'},{title:'Jangkar Waktu',summary:'Kaito mengetahui bahwa dirinya adalah Jangkar Waktu.'}];
const chapterFiles=chapters.map((_,i)=>String(i+1).padStart(2,'0'));
const $=id=>document.getElementById(id);
let loaded=[],active=0,page=0;

async function readChapter(url,i){
  try{
    const response=await fetch(url,{cache:'no-store'});
    if(!response.ok) return null;
    const doc=new DOMParser().parseFromString(await response.text(),'text/html');
    const body=doc.body;
    const pageElements=[...doc.querySelectorAll('.chapter-page')];
    const pages=pageElements.map(el=>el.innerHTML).filter(content=>content.trim());
    if(!pages.length || !pageElements.some(el=>el.querySelector('p'))) return null;
    return {title:body.dataset.title||doc.querySelector('title')?.textContent||chapters[i].title,pages};
  }catch(error){return null;}
}
async function loadAll(){
  loaded=await Promise.all(chapterFiles.map(async(file,i)=>{
    // Utamakan file chapter di samping index.html (hasil ZIP novel).
    // Jika belum ada, gunakan folder chapters/ dari template reader.
    return await readChapter(`chapter-${file}.html`,i)
      || await readChapter(`chapters/chapter-${file}.html`,i);
  }));
  renderLibrary();
}

function renderLibrary(){
  $('chapter-list').innerHTML=chapters.map((ch,i)=>{
    const ready=!!loaded[i];
    return `<button class="chapter-card" ${ready?'':'disabled'} data-open="${i}">
      <span class="num">CHAPTER ${String(i+1).padStart(2,'0')}</span>
      <strong>${escapeHTML(ch.title)}</strong>
      <small>${escapeHTML(ch.summary)}</small>
      <span class="status">${ready?'TERSEDIA':'SEGERA HADIR'}</span>
    </button>`;
  }).join('');
  document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>openChapter(+button.dataset.open,0)));
}

function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function openChapter(index,pageIndex=0){
  if(!loaded[index]) return;
  active=index;
  page=Math.max(0,Math.min(pageIndex,loaded[index].pages.length-1));
  $('library').hidden=true;
  $('reader').hidden=false;
  renderPage();
  window.scrollTo(0,0);
}
function renderPage(){
  const chapter=loaded[active];
  $('chapter-title').textContent=chapter.title;
  $('chapter-count').textContent=`CHAPTER ${String(active+1).padStart(2,'0')} / ${chapters.length}`;
  $('page-count').textContent=`HALAMAN ${page+1} DARI ${chapter.pages.length}`;
  $('paper').innerHTML=chapter.pages[page];
  $('page-number').textContent=`${page+1} / ${chapter.pages.length}`;
  $('prev-page').disabled=page===0;
  $('next-page').disabled=page===chapter.pages.length-1;
  $('prev-chapter').disabled=!loaded.slice(0,active).some(Boolean);
  $('next-chapter').disabled=!loaded.slice(active+1).some(Boolean);
}
$('back').onclick=()=>{$('reader').hidden=true;$('library').hidden=false;window.scrollTo(0,0);};
$('prev-page').onclick=()=>{if(page>0){page--;renderPage();window.scrollTo(0,0);}};
$('next-page').onclick=()=>{if(page<loaded[active].pages.length-1){page++;renderPage();window.scrollTo(0,0);}};
$('prev-chapter').onclick=()=>{for(let i=active-1;i>=0;i--)if(loaded[i])return openChapter(i,loaded[i].pages.length-1);};
$('next-chapter').onclick=()=>{for(let i=active+1;i<loaded.length;i++)if(loaded[i])return openChapter(i,0);};
loadAll();
