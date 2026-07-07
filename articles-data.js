// EFEKSAINS — Article data (shared across index.html, artikel.html, artikel-detail.html)
// Gampang diganti/ditambah manual di sini dulu (sebelum ada dashboard admin).
// category: "iklim" | "kesehatan" | "riset"

const ARTICLES = [
  {
    "id": 3,
    "slug": "apa-itu-gelombang-panas",
    "title": "Apa Itu Gelombang Panas, dan Kenapa Berbahaya?",
    "category": "iklim",
    "excerpt": "Istilah 'heatwave' makin sering muncul di berita. Ini penjelasan simpelnya, dan kenapa fenomena ini nggak boleh dianggap remeh.",
    "readTime": "4 menit",
    "date": "24 Jun 2026",
    "author": "Shofiya",
    "content": [
      "Gelombang panas (heatwave) terjadi ketika suhu di suatu wilayah jauh lebih tinggi dari rata-rata normalnya, dan berlangsung beberapa hari berturut-turut. Ini beda dari 'hari panas biasa' karena tubuh dan lingkungan nggak sempat 'istirahat' dingin di malam hari.",
      "Yang bikin berbahaya adalah durasinya. Tubuh manusia bisa menyesuaikan diri dengan panas sesaat, tapi paparan panas ekstrem yang terus-menerus tanpa jeda bisa memicu heat exhaustion, bahkan heatstroke yang mengancam nyawa, terutama pada lansia, anak kecil, dan orang dengan kondisi kesehatan tertentu.",
      "Menurut berbagai laporan iklim global, frekuensi dan intensitas gelombang panas meningkat signifikan dalam beberapa dekade terakhir, sejalan dengan naiknya suhu rata-rata bumi akibat perubahan iklim.",
      "Kota-kota besar biasanya lebih terdampak karena efek 'urban heat island', beton dan aspal menyerap panas di siang hari dan melepaskannya perlahan di malam hari, bikin suhu kota nggak turun banyak meski matahari udah tenggelam."
    ]
  },
  {
    "id": 5,
    "slug": "riset-suhu-kesehatan-mental-remaja",
    "title": "Riset Terbaru: Suhu Bumi dan Kesehatan Mental Remaja",
    "category": "riset",
    "excerpt": "Ada hubungan yang mulai banyak diteliti antara suhu ekstrem dan kondisi kesehatan mental, khususnya di kalangan remaja.",
    "readTime": "6 menit",
    "date": "14 Jun 2026",
    "author": "Shofiya",
    "content": [
      "Beberapa studi psikologi lingkungan mulai menyoroti istilah 'eco-anxiety', yaitu kecemasan kronis terkait kekhawatiran akan masa depan bumi akibat perubahan iklim. Remaja disebut sebagai kelompok yang cukup rentan terhadap kondisi ini.",
      "Selain faktor kecemasan terhadap masa depan, ada juga hubungan yang lebih langsung: suhu ekstrem yang berkepanjangan dikaitkan dengan gangguan pola tidur, dan kualitas tidur yang buruk diketahui berdampak besar terhadap suasana hati dan kemampuan mengatur emosi pada remaja.",
      "Riset di sejumlah negara juga menemukan adanya peningkatan kunjungan ke layanan kesehatan mental pada periode gelombang panas ekstrem, meski hubungan sebab-akibatnya masih terus diteliti lebih lanjut.",
      "Yang cukup menarik, riset lain menunjukkan bahwa keterlibatan aktif dalam aksi lingkungan (bukan cuma khawatir pasif) justru dikaitkan dengan rasa kontrol dan harapan yang lebih baik, memberi sedikit gambaran soal apa yang bisa membantu."
    ]
  },
  {
    "id": 6,
    "slug": "5-fakta-perubahan-iklim",
    "title": "5 Fakta Perubahan Iklim yang Jarang Diajarkan di Sekolah",
    "category": "iklim",
    "excerpt": "Beberapa fakta dasar soal perubahan iklim yang sering kelewat dari pelajaran sekolah, padahal penting buat dipahami.",
    "readTime": "5 menit",
    "date": "9 Jun 2026",
    "author": "Shofiya",
    "content": [
      "Pertama, perubahan iklim dan cuaca itu beda. Cuaca adalah kondisi jangka pendek (hari ini hujan atau panas), sementara iklim adalah pola rata-rata dalam jangka panjang (puluhan tahun). Satu hari dingin nggak berarti perubahan iklim itu nggak nyata.",
      "Kedua, efek rumah kaca sebenarnya alami dan dibutuhkan, gas seperti CO2 di atmosfer membantu menjaga bumi tetap hangat dan layak huni. Masalahnya muncul ketika jumlah gas ini meningkat drastis akibat aktivitas manusia, bikin efek pemanasannya jadi berlebihan.",
      "Ketiga, dampak perubahan iklim nggak merata. Negara-negara yang menyumbang emisi paling sedikit seringkali justru yang paling merasakan dampak buruknya, seperti negara kepulauan kecil yang terancam naiknya permukaan laut.",
      "Keempat, lautan menyerap sebagian besar panas berlebih di bumi, ini yang bikin lautan makin hangat dan berkontribusi pada mencairnya es di kutub serta naiknya permukaan laut secara bertahap.",
      "Kelima, solusi perubahan iklim nggak cuma soal teknologi besar, perubahan kecil yang dilakukan banyak orang (efisiensi energi, kurangi limbah makanan, dukung transportasi publik) tetap berkontribusi signifikan kalau dilakukan secara kolektif."
    ]
  }
];

const CATEGORY_LABELS = {
  iklim: "Iklim",
  kesehatan: "Kesehatan",
  riset: "Riset"
};

const CATEGORY_COLORS = {
  iklim: "var(--teal)",
  kesehatan: "var(--coral)",
  riset: "var(--signal)"
};

function thumbIcon(category) {
  const color = CATEGORY_COLORS[category];
  if (category === 'iklim') {
    return `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="14" stroke="${color}" stroke-width="2.5"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/></svg>`;
  }
  if (category === 'kesehatan') {
    return `<svg viewBox="0 0 48 48" fill="none"><path d="M6 26h8l4-10 6 18 4-12h14" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  return `<svg viewBox="0 0 48 48" fill="none"><circle cx="16" cy="16" r="4" stroke="${color}" stroke-width="2.5"/><circle cx="32" cy="16" r="4" stroke="${color}" stroke-width="2.5"/><circle cx="24" cy="34" r="4" stroke="${color}" stroke-width="2.5"/><path d="M18.5 18.5L21.5 30.5M29.5 18.5L26.5 30.5M20 16H28" stroke="${color}" stroke-width="2"/></svg>`;
}

function cardHTML(a) {
  const color = CATEGORY_COLORS[a.category];
  const label = CATEGORY_LABELS[a.category];
  return `
    <a class="card" href="artikel-detail.html?id=${a.id}">
      <div class="card-thumb" style="background:${color}18;">
        ${thumbIcon(a.category)}
      </div>
      <div class="card-body">
        <span class="tag mono" style="color:${color};"><span class="dot" style="background:${color};"></span>${label}</span>
        <h3 class="display">${a.title}</h3>
        <p>${a.excerpt}</p>
        <div class="card-meta mono">
          <span>${a.readTime}</span>
          <span>&middot;</span>
          <span>${a.date}</span>
        </div>
      </div>
    </a>`;
}
