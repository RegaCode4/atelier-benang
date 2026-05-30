import { ServiceCategory, ClientRequestItem, PreparationItem, EstimationConfig } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "bespoke",
    title: "Jahit Custom (Bespoke)",
    description: "Pembuatan busana baru yang dirancang khusus mulai dari nol, disesuaikan dengan lekuk tubuh, pilihan bahan, dan model impian Anda.",
    benefits: [
      "Pola baju eksklusif digambar manual khusus untuk Anda",
      "Bebas menentukan kustomisasi kerah, saku, kancing, dan aksen",
      "Pas sempurna (perfect fit) melalui sesi fitting langsung",
      "Pilihan bahan & warna tidak terbatas sesuai keinginan"
    ],
    duration: "7 - 14 Hari Kerja",
    exampleItems: ["Jas Formal", "Kebaya Modern", "Gaun Pesta", "Kemeja Batik", "Seragam Kerja"],
    iconName: "Scissors"
  },
  {
    id: "alteration",
    title: "Permak Professional",
    description: "Modifikasi pakaian jadi yang kurang pas agar terasa nyaman dan terlihat proporsional saat Anda kenakan.",
    benefits: [
      "Mengecilkan/membesarkan lingkar pinggang, dada, atau pinggul",
      "Memotong panjang bagian bawah celana, rok, atau lengan kemeja",
      "Mengubah siluet celana (misal: dari regular fit menjadi slim fit)",
      "Penggantian resleting rusak, kancing lepas, atau karet elastis"
    ],
    duration: "2 - 5 Hari Kerja",
    exampleItems: ["Potong Celana Jeans", "Mengecilkan Jas", "Resize Gaun", "Ganti Resleting"],
    iconName: "RotateCcw"
  },
  {
    id: "replication",
    title: "Duplikasi Busana",
    description: "Punya pakaian favorit yang sudah usang atau kekecilan tapi modelnya sangat Anda sukai? Kami bisa membuat replikanya dengan bahan baru.",
    benefits: [
      "Menyalin pola baju lama Anda secara presisi tanpa merusaknya",
      "Kesempatan mengganti warna atau menaikkan kualitas kain",
      "Dapat disesuaikan ulang bila terdapat ukuran yang ingin direvisi",
      "Menghidupkan kembali kenyamanan pakaian andalan Anda"
    ],
    duration: "5 - 10 Hari Kerja",
    exampleItems: ["Kemeja Kasual", "Rok Favorit", "Blouse Santai", "Celana Chino"],
    iconName: "Copy"
  },
  {
    id: "redesign",
    title: "Rekonstruksi & Upcycling",
    description: "Mengubah pakaian lama milik Anda yang sudah bosan dipakai menjadi model baru yang lebih segar, stylish, dan relevan dengan tren saat ini.",
    benefits: [
      "Mendukung kelestarian lingkungan (sustainable fashion)",
      "Misal: Mengubah kemeja oversized pria menjadi setelan kasual wanita",
      "Mengubah celana panjang gombrang menjadi celana kargo pendek trendi",
      "Memadukan dua pakaian lama menjadi satu pieces busana yang unik"
    ],
    duration: "7 - 12 Hari Kerja",
    exampleItems: ["Daster ke Mini Dress", "Jeans Lama ke Jaket", "Jas Klasik ke Modern Vest"],
    iconName: "Sparkles"
  }
];

export const clientRequests: ClientRequestItem[] = [
  {
    id: "fitting",
    title: "Minta Sesi Fitting / Coba Setengah Jadi",
    explanation: "Sebelum pakaian dijahit mati sepenuhnya, Anda bisa menjajal prototipenya (toile atau jahitan semi-permanen) untuk memeriksa jatuhnya kain.",
    options: ["Rekomendasi untuk: Gaun malam, kebaya pesta, jas pengantin, dan celana formal berat.", "Manfaat: Meminimalkan risiko kesalahan potong kain utama."],
    guidance: "Sangat dianjurkan untuk menjadwalkan fitting minimal 1 kali agar baju benar-benar mengikuti gestur tubuh saat Anda melangkah atau duduk."
  },
  {
    id: "pockets",
    title: "Minta Penambahan Saku Tersembunyi & Custom",
    explanation: "Seringkali pakaian wanita kekurangan saku, atau saku baju pria kurang dalam. Anda bisa meminta saku tambahan di lokasi tertentu.",
    options: ["Saku rahasia di dalam furing jas untuk dompet/paspor", "Saku samping tidak terlihat (dalam jahitan samping) pada gaun kasual", "Saku khusus pulpen atau smartphone berukuran lebar"],
    guidance: "Beri tahu penjahit sebelum kain dipotong agar saku dapat diletakkan di posisi paling ergonomis sesuai jangkauan tangan Anda."
  },
  {
    id: "lining",
    title: "Minta Jenis Furing (Lining) yang Bersirkulasi Baik",
    explanation: "Furing adalah lapisan kain bagian dalam. Menentukan jenis furing menentukan kenyamanan baju saat dipakai di cuaca panas.",
    options: ["Furing sutera/viscose yang dingin dan lembut di kulit", "Furing mesh/jaring untuk pakaian olahraga atau jaket kasual", "Furing katun tipis (hero) untuk kemeja agar menyerap keringat"],
    guidance: "Hindari furing poliester murni berkualitas rendah jika Anda mudah berkeringat atau sering berkegiatan di luar ruangan."
  },
  {
    id: "stitches",
    title: "Minta Jahitan Penguat (Double Stitch/Bar tack)",
    explanation: "Untuk pakaian aktif atau berukuran agak ngepas, jahitan sekali lurus terkadang rentan robek. Jahitan ganda memberikan daya tahan ekstra.",
    options: ["Jahitan ganda di bagian selangkangan celana", "Jahitan penguat bartack pada ujung saku dan sabuk loop celana", "Jalinan obras rapat 5-benang standard butik garment"],
    guidance: "Jika pakaian ditujukan untuk dipakai berkendara motor atau bergerak aktif, pastikan menyampaikan poin kekuatan jahitan ini."
  },
  {
    id: "buttons",
    title: "Minta Posisi Kancing Tambahan / Anti Melongo",
    explanation: "Kemeja wanita seringkali membuka (melongo) di sela-sela kancing bagian dada. Kami menyediakan solusi kancing jepret kecil rahasia.",
    options: ["Kancing jepret (snap button) transparan di sela kancing dada", "Kancing cadangan ekstra dijahit rapi di bagian lipatan bawah kemeja", "Kancing bungkus berlapis kain senada untuk gaun"],
    guidance: "Ini adalah trik penjahit butik yang membuat pakaian Anda selalu terlihat rapi dari sudut manapun tanpa ada bagian dada yang meregang terbuka."
  }
];

export const preparationSteps: PreparationItem[] = [
  {
    number: "01",
    title: "Siapkan Referensi Foto Model Baju",
    description: "Kumpulkan foto contoh model, kerah, kancing, atau siluet baju dari internet. Ini membantu penjahit menangkap imajinasi Anda.",
    tips: "Tunjukkan minimal 2-3 foto detail dari sisi depan, samping, dan belakang pakaian."
  },
  {
    number: "02",
    title: "Informasikan/Bawa Bahan Kain Anda sendiri",
    description: "Jika Anda sudah membeli kain, bawa saat datang. Jika belum, jangan ragu berkonsultasi mengenai jenis bahan apa yang cocok sebelum membelinya.",
    tips: "Tanyakan kepada kami jumlah meter kain yang dibutuhkan sebelum Anda pergi ke toko tekstil."
  },
  {
    number: "03",
    title: "Gunakan Pakaian Dalam & Sepatu yang Sesuai",
    description: "Saat datang untuk diukur tubuh atau fitting, gunakan bra yang biasa Anda pakai untuk jenis pakaian tersebut, serta sepatu dengan tinggi heels yang tepat.",
    tips: "Tinggi sepatu memengaruhi kepresisian jatuhnya ujung celana jas atau bagian gaun pesta di lantai."
  },
  {
    number: "04",
    title: "Sampaikan Selera Ketat/Longgarnya Baju",
    description: "Satu ukuran lingkar dada bisa terasa berbeda bagi orang yang menyukai baju span (ngepas), slim fit, atau casual loose (longgar).",
    tips: "Demonstrasikan gaya gerak aktif Anda saat diukur (misal mencabut saku atau membungkuk)."
  }
];

export const estimationConfigs: EstimationConfig[] = [
  {
    itemType: "Kemeja Lengan Pendek (Pria/Wanita)",
    fabricNeeded: "Kain lebar 150cm: butuh 1.25 meter | Kain lebar 115cm: butuh 1.5 meter",
    baseDuration: "4 - 7 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 120.000 - Rp 180.000 (belum termasuk bahan kain)",
    notes: "Tambahkan kain sekitar 0.25 meter apabila ingin menambahkan kantong bermotif lurus atau manset kerah lebar."
  },
  {
    itemType: "Kemeja Lengan Panjang (Pria/Wanita)",
    fabricNeeded: "Kain lebar 150cm: butuh 1.5 meter | Kain lebar 115cm: butuh 1.8 - 2.0 meter",
    baseDuration: "5 - 8 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 150.000 - Rp 220.000 (belum termasuk bahan kain)",
    notes: "Jika tubuh berukuran XL ke atas, siapkan minimal 1.75 meter kain lebar besar."
  },
  {
    itemType: "Celana Panjang Kasual / Chinos",
    fabricNeeded: "Kain lebar 150cm: butuh 1.3 - 1.5 meter | Kain lebar 115cm: tidak disarankan karena kurang lebar kaki celana",
    baseDuration: "4 - 7 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 130.000 - Rp 190.000 (belum termasuk bahan kain)",
    notes: "Disarankan berbahan katun stretch, drill, atau corduroy."
  },
  {
    itemType: "Celana Panjang Jas / Formal Seterika",
    fabricNeeded: "Kain lebar 150cm: butuh 1.5 meter",
    baseDuration: "6 - 10 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 180.000 - Rp 250.000 (belum termasuk bahan kain)",
    notes: "Menggunakan kain semi-wool atau serat wool dingin dengan furing bagian pinggang standar jas."
  },
  {
    itemType: "Rok Kasual / Rok Kerja (Slim atau A-Line)",
    fabricNeeded: "Kain lebar 150cm: butuh 1.2 meter | Kain lebar 115cm: butuh 1.5 meter",
    baseDuration: "3 - 5 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 100.000 - Rp 150.000",
    notes: "Model mengembang penuh (full circle skirt) membutuhkan kain minimal 2.5 hingga 3 meter."
  },
  {
    itemType: "Blouse Kasual Wanita",
    fabricNeeded: "Kain lebar 150cm: butuh 1.25 - 1.5 meter",
    baseDuration: "4 - 6 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 110.000 - Rp 160.000",
    notes: "Sangat direkomendasikan menggunakan katun premium, kain rayon linen, atau sutera crepe yang jatuh lembut."
  },
  {
    itemType: "Gaun Kasual / Tunik",
    fabricNeeded: "Kain lebar 150cm: butuh 2.0 - 2.5 meter | Kain lebar 115cm: butuh 2.5 - 3.0 meter",
    baseDuration: "6 - 10 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 160.000 - Rp 260.000",
    notes: "Jika model tunik bertingkat (ruffle stack), sediakan tambahan kain 0.5 - 1 meter lagi."
  },
  {
    itemType: "Jas / Blazer Formal Berfuring Kuat",
    fabricNeeded: "Kain celana 1.5 meter + Kain Jas 2.0 meter (Lebar 150cm)",
    baseDuration: "14 - 21 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 600.000 - Rp 1.200.000 (Struktur padding bahu lengkap, interlining, & full-fitting)",
    notes: "Proses jahit mencakup minimal 2 kali fitting langsung demi memastikan presisi drape jas kelas eksekutif."
  },
  {
    itemType: "Kebaya Tradisional / Modern",
    fabricNeeded: "Kain brokat/lace: 1.5 - 2.0 meter + Bahan furing satin/kamisol: 1.5 meter",
    baseDuration: "10 - 18 hari",
    priceEstimateInfo: "Biaya jasa jahit berkisar Rp 250.000 - Rp 650.000 (tergantung tingkat kerumitan payet tangan)",
    notes: "Pemasangan payet dihitung manual berdasarkan luasan panel dada, ujung lengan, dan kerah sabrina."
  }
];

export const reviews = [
  {
    name: "Ahmad Fauzi",
    role: "Pelanggan Jahit Jas Custom",
    rating: 5,
    text: "Sangat puas! Jas pernikahan saya pas sekali saat fitting utama tanpa perlu diubah lagi. Jahitan pundak sangat tegak dan rapi khas pengerjaan butik mahal. Sangat direkomendasikan bagi yang menghargai kualitas jahit premium."
  },
  {
    name: "Nabila Putri",
    role: "Langganan Permak Gaun & Rok",
    rating: 5,
    text: "Biasanya sulit cari penjahit yang mau permak gaun brokat tanpa merusak corak motifnya. Di Atelier Benang, hasilnya tidak kelihatan bekas jahitan ulangnya. Pinggang ngepas sempurna sekarang."
  },
  {
    name: "Rian Hendrawan",
    role: "Pelanggan Duplikasi Jaket Corduroy",
    rating: 5,
    text: "Duplikasi jaket vintage kesayangan saya hasilnya 99% mirip, bahkan lebih nyaman dipakai karena furing dalamnya diganti dengan katun sutra atas usulan penjahitnya. Sangat komunikatif dan banyak mengedukasi."
  }
];
