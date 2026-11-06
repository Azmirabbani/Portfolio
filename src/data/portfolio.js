// Semua isi portfolio ada di file ini. Ubah teks di sini, tampilan ikut berubah.
// Gambar diimpor dari src/assets, logo perusahaan dibaca dari src/assets/logos.

import portrait from "../assets/portrait.jpg";
import noir from "../assets/noir.webp";
import urban1 from "../assets/urban1.webp";
import sysgate1 from "../assets/sysgate1.webp";
import sysgate2 from "../assets/sysgate2.webp";
import toolbox1 from "../assets/toolbox1.webp";
import toolbox2 from "../assets/toolbox2.webp";
import cardd1 from "../assets/cardd1.webp";
import mlbb1 from "../assets/mlbb1.webp";
import mlbb2 from "../assets/mlbb2.webp";
import strava1 from "../assets/strava1.webp";
import strava2 from "../assets/strava2.webp";
import n8nFeedback from "../assets/n8n_feedback.webp";
import n8nWebinar from "../assets/n8n_webinar.webp";
import n8nSocial from "../assets/n8n_social.webp";
import n8nChat from "../assets/n8n_chat.webp";
import certMyskill from "../assets/certs/myskill-bootcamp.webp";
import certTalenthub from "../assets/certs/talenthub-data-science.webp";
import certIsritiAuthor from "../assets/certs/isriti-author.webp";
import certIsritiPresenter from "../assets/certs/isriti-presenter.webp";
import certHimaStaff from "../assets/certs/hima-staff-ahli.webp";
import certAnniv from "../assets/certs/hima-anniv-insight.webp";
import certAbdimas from "../assets/certs/abdimas-assuruur.webp";
import certAllianz from "../assets/certs/allianz-melek-finansial.webp";

export const profile = {
  name: "Azmi Rizqullah Rabbani",
  shortName: "Azmi Rabbani",
  initials: "AR",
  role: "Chatbot AI Specialist",
  school: "Informatika Telkom University",
  location: "Jakarta, Indonesia",
  email: "azmirrabbani@gmail.com",
  linkedin: "https://www.linkedin.com/in/azmi-rizqullah-rabbani-5094582a8",
  github: "https://github.com/Azmirabbani",
  ieee: "https://ieeexplore.ieee.org/document/11393155",
  cvUrl: "", // isi dengan link CV (Google Drive) jika ingin tombol "Unduh CV" muncul
  portrait,
  intro: [
    "Saya membangun, menguji, dan meluncurkan chatbot AI untuk klien B2B. Saat ini ",
    { strong: "Activation Intern di Mekari" },
    ", mengantar chatbot dari kebutuhan klien sampai go-live, dari Conversational AI hingga Agentic dan Autonomous AI. Di luar itu saya membuat aplikasi web sendiri dengan Next.js dan React.",
  ],
  facts: [
    { value: "15+", label: "klien B2B yang didukung lewat go-live, workshop, dan demo" },
    { value: "3", label: "jenis AI: Conversational, Agentic, Autonomous" },
    { value: "3,48", label: "IPK Informatika, lulus Januari 2026" },
    { value: "IEEE", label: "publikasi ISRITI 2025, deteksi kerusakan mobil" },
  ],
  testcase: {
    title: "Contoh test case chatbot",
    items: [
      { name: "Alur normal", detail: "tanya jam operasional" },
      { name: "Edge case", detail: "typo, pesan ganda, data kurang" },
      { name: "Di luar topik", detail: "dialihkan dengan sopan" },
    ],
  },
};

export const experience = [
  {
    when: "Jun 2026 – sekarang",
    place: "Jakarta",
    title: "Activation Intern, Chatbot AI Specialist",
    org: "PT Mid Solusi Nusantara (Mekari)",
    logo: "mekari",
    points: [
      "Memegang pengiriman chatbot AI dari awal sampai akhir untuk klien B2B: requirement gathering, blueprint, konfigurasi, pelatihan klien, UAT, dan go-live. Jenis yang dikerjakan: Conversational AI, Agentic AI, dan Autonomous AI.",
      "Menyusun dan merapikan knowledge base (struktur konten, format Q&A dan dokumen, pilihan kata) supaya AI memahami konteks bisnis klien dan menjawab sesuai harapan, lalu memperbaikinya berdasarkan hasil uji.",
      "Merancang test case untuk alur normal, edge case, dan pertanyaan di luar cakupan, serta menjalankan uji internal sebelum UAT.",
      "Membangun integrasi Agentic AI ke Booking Appointment dan CRM (membuat deal dan tiket) lewat Qontak API, serta konfigurasi chatbot Autonomous AI untuk tim internal Mekari e-Sign.",
      "Membuat konfigurasi demo Agentic AI untuk sesi showcase bersama Account Manager, menulis dokumentasi konfigurasi di GitBook, dan membantu workshop klien bulanan.",
    ],
    tools: ["Mekari Qontak", "GitBook", "REST API"],
  },
  {
    when: "Jul – Sep 2025",
    place: "Cikampek",
    title: "Front End Developer Intern",
    org: "PT Pupuk Kujang Cikampek",
    logo: "pupuk-kujang",
    points: [
      "Membuat antarmuka tiga aplikasi internal (Admin Dashboard, Toolbox Meeting, dan Sysgate) dengan Next.js, Tailwind CSS, dan Shadcn UI.",
      "Menyusun tampilan dashboard, rapat, dan monitoring yang responsif memakai data simulasi untuk meniru integrasi API.",
      "Menguji UI dan menerapkan perbaikan dari masukan tim IT.",
    ],
    tools: ["Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    when: "Jul – Agu 2024",
    place: "Pasuruan",
    title: "Independent Internship, Business Service Division",
    org: "Telkom Indonesia (WITEL Pasuruan)",
    logo: "telkom-indonesia",
    points: [
      "Mengelola dan memvalidasi 100+ data pelanggan di Google Sheets, serta memperbarui lembar harian kunjungan, target, dan capaian lintas wilayah.",
      "Memvalidasi POI di 50+ lokasi lewat aplikasi MyTens untuk mendukung survei lapangan, dengan akurasi data di atas 95%.",
    ],
    tools: ["Google Sheets"],
  },
];

// Kelompok proyek. `kind: "feature"` = baris besar dengan mockup browser, `kind: "cards"` = grid kartu.
export const projectGroups = [
  {
    label: "Aplikasi web",
    kind: "feature",
    items: [
      {
        meta: "Booking + chatbot AI · 2026",
        title: "NOIR Studio",
        summary:
          "Situs salon dengan booking online dan chatbot konsultasi yang merekomendasikan layanan sesuai keluhan pengunjung.",
        points: [
          "Pemilihan layanan, tanggal, dan jam dengan pengecekan slot lewat API sendiri, data tersimpan di Supabase.",
          "Chatbot berbasis Groq dengan system prompt peran ahli salon, mengingat percakapan sebelumnya, menampilkan saran cepat, dan mengembalikan kartu rekomendasi layanan.",
          "Galeri dengan lightbox, FAQ, tiga cabang dengan peta, dan dashboard admin.",
        ],
        tools: ["Next.js", "TypeScript", "Supabase", "Vercel"],
        extraChips: ["Groq API"],
        image: noir,
        imageAlt: "Halaman utama NOIR Studio dengan latar salon gelap dan tombol Telusuri Layanan",
        frameUrl: "noir-studio-rouge.vercel.app",
        links: [{ label: "Buka situs ↗", href: "https://noir-studio-rouge.vercel.app/", primary: true }],
      },
      {
        meta: "Marketplace sewa apartemen · 2026",
        title: "UrbanRent",
        summary:
          "Platform sewa apartemen harian dan mingguan yang mempertemukan pemilik dan penyewa, dengan tiga peran: Tenant, Owner, dan Admin.",
        points: [
          "Pencarian dengan filter kota, rentang harga, dan fasilitas, urutan hasil, dan halaman detail listing.",
          "Alur booking, daftar favorit, dan chat langsung antara penyewa dan owner.",
          "Dashboard owner untuk listing, booking masuk, dan pendapatan, serta panel admin untuk moderasi listing, pengguna, dan analitik.",
        ],
        tools: ["React", "Vite", "Tailwind CSS", "React Router", "Supabase"],
        extraChips: ["React 19"],
        image: urban1,
        imageAlt: "Halaman Jelajahi Apartemen di UrbanRent dengan filter kota, harga, dan fasilitas",
        frameUrl: "urbanrent.vercel.app/explore",
        links: [{ label: "Buka situs ↗", href: "https://urbanrent.vercel.app/", primary: true }],
      },
    ],
  },
  {
    label: "Otomasi dengan n8n",
    kind: "cards",
    note: "Empat workflow dari MySkill AI & Automation Bootcamp (Apr – Jun 2026). Skenario perusahaan berasal dari soal bootcamp dan datanya contoh.",
    items: [
      {
        meta: "Studi kasus BrewWave Coffee",
        title: "Analisis feedback pelanggan",
        flow: "Form → AI Agent → Google Sheets → Gmail",
        points: [
          "AI Agent membaca feedback lalu menentukan sentimen, kategori masalah, ringkasan, skor kepuasan, dan saran perbaikan.",
          "Semua hasil analisis tersimpan otomatis di Google Sheets sebagai database feedback untuk crew kedai.",
          "Pelanggan menerima email balasan berisi ucapan terima kasih dan hasil analisisnya.",
        ],
        tools: ["n8n", "Google Sheets", "Gmail"],
        extraChips: ["OpenAI"],
        image: n8nFeedback,
        imageAlt: "Workflow n8n: On form submission, AI Agent dengan OpenAI Chat Model, Append row in sheet, Send a message",
        mediaClass: "flow",
      },
      {
        meta: "Studi kasus webinar online",
        title: "Pendaftaran webinar otomatis",
        flow: "Google Form → Webhook → Google Sheets → Gmail",
        points: [
          "Google Apps Script mengirim data pendaftar dari form ke Webhook n8n setiap ada yang submit.",
          "Setiap field dipetakan ke kolom spreadsheet dengan ekspresi n8n, lengkap dengan timestamp otomatis.",
          "Peserta menerima email HTML dengan subjek yang menyebut nama mereka, berisi link Zoom dan unduhan virtual background.",
        ],
        tools: ["n8n", "Google Apps Script", "Google Sheets", "Gmail"],
        extraChips: ["Webhook"],
        image: n8nWebinar,
        imageAlt: "Workflow n8n: Webhook, Append row in sheet, Send a message, semua node sukses",
        mediaClass: "flow",
      },
      {
        meta: "Studi kasus InsightWave Consulting",
        title: "Caption LinkedIn otomatis",
        flow: "Sheets → filter → Aggregate → AI Agent → Sheets",
        points: [
          "Rencana konten satu minggu ada di Google Sheets. Kode JavaScript hanya meloloskan baris berstatus \"waiting\", jadi konten yang sudah diproses tidak memakai token lagi.",
          "Node Aggregate menggabungkan 8 baris supaya model dipanggil sekali, bukan delapan kali.",
          "AI Agent dengan Groq (Llama 3.1) menulis caption Bahasa Indonesia sesuai target audience dan hashtag, lalu status baris berubah menjadi \"generated\".",
        ],
        tools: ["n8n", "JavaScript", "Google Sheets"],
        extraChips: ["Groq", "Llama 3.1"],
        image: n8nSocial,
        imageAlt: "Workflow n8n: Get rows, Code in JavaScript, Aggregate, AI Agent dengan Groq Chat Model, Code in JavaScript, Update row in sheet",
        mediaClass: "flow",
      },
      {
        meta: "Chatbot",
        title: "Chatbot dengan n8n",
        flow: "Chat trigger → AI Agent → Groq Chat Model",
        points: [
          "System message mengatur karakter asisten: ramah, singkat, jelas, dan selalu berbahasa Indonesia.",
          "Model llama-3.3-70b-versatile lewat API key Groq yang disimpan di Credentials n8n.",
          "Pada uji coba, AI Agent membalas dalam 645 ms dengan 230 token.",
        ],
        tools: ["n8n"],
        extraChips: ["Groq", "Llama 3.3 70B", "AI Agent"],
        image: n8nChat,
        imageAlt: "Workflow n8n: When chat message received, AI Agent dengan Groq Chat Model, semua node sukses",
        mediaClass: "flow light",
      },
    ],
  },
  {
    label: "Magang di PT Pupuk Kujang",
    kind: "cards",
    logo: "pupuk-kujang",
    items: [
      {
        meta: "Dashboard monitoring",
        title: "SysGate",
        summary: "Dashboard pemantauan keluar-masuk area perusahaan.",
        points: [
          "Menampilkan jumlah personel di dalam gedung per kategori: karyawan, kontraktor/PHL, praktikan, dan visitor.",
          "Memuat aktivitas harian dan kartu kondisi lingkungan seperti kualitas udara dan suhu.",
          "Memakai data simulasi untuk meniru integrasi API.",
        ],
        tools: ["Next.js", "Tailwind CSS", "shadcn/ui"],
        images: [
          { src: sysgate1, alt: "Dashboard Sysgate menampilkan jumlah personel per kategori" },
          { src: sysgate2, alt: "Dashboard Sysgate versi ringkas dengan total personel di dalam gedung" },
        ],
        mediaClass: "two tall",
      },
      {
        meta: "Manajemen tugas dan rapat",
        title: "Toolbox",
        summary: "Aplikasi untuk mengelola tugas dan rapat secara terpusat.",
        points: [
          "Daftar tugas berdasarkan status, penjadwalan dan pemantauan rapat, serta notulensi terstruktur.",
          "Notifikasi dan pelacakan aktivitas untuk koordinasi tim.",
          "Memakai data simulasi untuk meniru integrasi API.",
        ],
        tools: ["Next.js", "Tailwind CSS", "shadcn/ui"],
        images: [
          { src: toolbox1, alt: "Dashboard Toolbox dengan daftar tugas dan rapat" },
          { src: toolbox2, alt: "Halaman Meeting Management di Toolbox" },
        ],
        mediaClass: "two tall",
      },
    ],
  },
  {
    label: "Riset AI dan analisis data",
    kind: "cards",
    items: [
      {
        wide: true,
        meta: "Computer vision · Publikasi IEEE ISRITI 2025",
        title: "Car Damage Detection",
        summary:
          "Sistem deteksi kerusakan kendaraan berbasis deep learning untuk 6 jenis kerusakan pada dataset CarDD (4.000 gambar). YOLOv11m, YOLOv10m, dan RT-DETR-L dilatih dengan konfigurasi yang sama lalu dibandingkan.",
        points: [
          "YOLOv11m paling akurat dengan mAP@50:95 63,34%.",
          "YOLOv10m paling cocok untuk kebutuhan real-time dengan 61,6 FPS.",
          "Berpotensi dipakai untuk inspeksi kendaraan otomatis dan klaim asuransi.",
        ],
        tools: ["Python", "PyTorch", "Ultralytics", "NVIDIA"],
        extraChips: ["RT-DETR", "Tesla T4"],
        images: [{ src: cardd1, alt: "Perbandingan hasil deteksi kerusakan mobil oleh YOLOv11m, YOLOv10m, dan RT-DETR-L pada empat sampel" }],
        mediaClass: "",
        links: [{ label: "Baca makalah di IEEE Xplore ↗", href: "https://ieeexplore.ieee.org/document/11393155" }],
      },
      {
        meta: "Analisis sentimen",
        title: "Ulasan Mobile Legends",
        summary:
          "Analisis 52.000 ulasan Mobile Legends: Bang Bang dari Google Play Store untuk memahami persepsi pengguna dan masalah utama permainan.",
        points: [
          "52,3% ulasan positif dan 43,5% negatif, dengan rating terpolarisasi di bintang 5 dan 1.",
          "Keluhan terbanyak: matchmaking tidak seimbang, lag, dan stabilitas permainan.",
          "Rekomendasi: perbaikan algoritma matchmaking, optimasi server, dan komunikasi pengembang.",
        ],
        tools: ["Python", "Pandas", "Plotly"],
        extraChips: ["NLP"],
        images: [
          { src: mlbb1, alt: "Grafik distribusi sentimen dan rating ulasan Mobile Legends" },
          { src: mlbb2, alt: "Heatmap aktivitas ulasan berdasarkan hari dan jam" },
        ],
        mediaClass: "strip",
      },
      {
        meta: "Eksplorasi data",
        title: "Analisis Data Lari Strava",
        summary: "Analisis aktivitas lari dari dataset Strava dengan visualisasi interaktif.",
        points: [
          "Pembersihan data, konversi satuan, dan feature engineering.",
          "Visualisasi tren jarak bulanan, kebiasaan waktu berlari, hubungan jarak dengan pace, dan pola mingguan.",
        ],
        tools: ["Python", "Pandas", "Plotly"],
        extraChips: ["EDA"],
        images: [
          { src: strava1, alt: "Grafik batang tren jarak lari bulanan" },
          { src: strava2, alt: "Diagram donat kebiasaan waktu berlari" },
        ],
        mediaClass: "strip",
      },
    ],
  },
  {
    label: "Dokumentasi sistem",
    kind: "cards",
    items: [
      {
        wide: true,
        meta: "Computing Project, Telkom University · Des 2025",
        title: "Endogvest: manajemen keuangan peternakan ayam",
        summary:
          "Saya berkontribusi pada dokumen kebutuhan dan desain (SRS dan SDD) untuk sistem berbasis web yang mencatat keuangan peternakan ayam.",
        points: [
          "Merancang arsitektur client-server: frontend, backend, database, autentikasi, dan modul deteksi anomali berbasis Random Forest Classifier.",
          "Memodelkan alur data dan proses lewat DFD level 0, 1, dan 2, Activity Diagram, dan State Machine Diagram.",
          "Menyusun ERD dan skema database untuk pengguna, pasar, kandang, transaksi, dan investasi, serta wireframe untuk 15+ halaman sebagai acuan tim pengembang.",
        ],
        tools: ["Vue.js", "Node.js", "Express", "Convex", "Vercel"],
      },
    ],
  },
];

// Bagian Keahlian: satu blok per kelompok (ikon, judul, deskripsi, daftar tools).
// `icon` dipilih dari: chat, code, braces, chart, flow, database.
export const expertise = [
  {
    icon: "chat",
    title: "Conversational & Agentic AI",
    desc: "Merancang, mengonfigurasi, dan meluncurkan chatbot AI untuk klien B2B di platform Mekari Qontak, dari knowledge base dan test case sampai integrasi API dan go-live.",
    items: ["Mekari Qontak", "Konfigurasi AI agent", "Desain knowledge base", "NLU / decision tree", "Test case & UAT", "Webhook / API"],
  },
  {
    icon: "code",
    title: "Pengembangan web",
    desc: "Membangun aplikasi web dengan Next.js dan React, termasuk NOIR Studio, UrbanRent, dan antarmuka internal selama magang.",
    items: ["HTML", "CSS", "Next.js", "React", "Tailwind CSS", "Node.js", "Express", "Laravel"],
  },
  {
    icon: "braces",
    title: "Bahasa pemrograman",
    desc: "Bahasa yang saya pakai untuk web, data, dan riset AI.",
    items: ["Python", "JavaScript", "PHP"],
  },
  {
    icon: "chart",
    title: "Data & AI",
    desc: "Praproses dan analisis data, serta melatih dan membandingkan model computer vision (YOLOv11, RT-DETR) untuk publikasi IEEE ISRITI 2025.",
    items: ["Pandas", "NumPy", "PyTorch", "Data preprocessing", "EDA", "Machine learning", "Computer vision"],
  },
  {
    icon: "flow",
    title: "Otomasi & integrasi",
    desc: "Workflow n8n yang menghubungkan form, webhook, Google Sheets, Gmail, dan AI Agent.",
    items: ["n8n", "REST API", "Webhook", "Workflow automation"],
  },
  {
    icon: "database",
    title: "Database & tools",
    desc: "Database relasional dan tools harian untuk pengembangan, pengujian API, dan analisis jaringan.",
    items: ["PostgreSQL", "MySQL", "Supabase", "Git", "Postman", "Wireshark"],
  },
];

export const education = {
  left: {
    title: "Pendidikan dan publikasi",
    records: [
      {
        title: "S1 Informatika, Telkom University",
        when: "Sep 2022 – Jan 2026 · IPK 3,48 / 4,00",
        text: "Mata kuliah terkait: Struktur Data dan Algoritma, Machine Learning, Basis Data, Rekayasa Perangkat Lunak, Jaringan Komputer, Kecerdasan Buatan.",
        logo: "telkom-university",
      },
      {
        title: "Car Damage Detection using YOLOv11 and RT-DETR",
        when: "ISRITI 2025 · IEEE",
        text: "A. R. Rabbani dan G. Kosala. Proceedings of the 2025 8th International Seminar on Research of Information Technology and Intelligent Systems.",
        link: { label: "IEEE Xplore ↗", href: "https://ieeexplore.ieee.org/document/11393155" },
        tools: ["IEEE"],
      },
    ],
  },
  right: {
    title: "Sertifikasi, lomba, dan organisasi",
    records: [
      { title: "AI & Automation Bootcamp, MySkill", when: "Batch 3 · Apr – Jun 2026", text: "Predikat Distinction, nilai 94/100.", logo: "myskill" },
      { title: "Data Science Fundamentals, TalentHub", when: "Kementerian Ketenagakerjaan RI", text: "Nilai 92,3/100.", logo: "talenthub" },
      { title: "Peserta lomba", text: "Web Design Open Competition, Interfest 2024 (HIMA IF Telkom University), dan AI Infographic Competition, Falcon Project 2024 (Universitas Pelita Harapan)." },
      { title: "Organisasi", logo: "hima-if", text: "HIMA IF Telkom University 2022 – 2024 (Junior Staff Managerial, lalu Expert Staff Bisnis dan Kewirausahaan), Head of Finance Division Anniv Insight 2024, dan Staff of Society IEEE Telkom University Student Branch 2024 – 2025." },
    ],
  },
};

// Logo perusahaan/lembaga. Letakkan file logo di src/assets/logos/<slug>.png (atau .svg/.webp/.jpg).
// Selama file belum ada, yang tampil adalah monogram (inisial) otomatis.
export const companies = {
  mekari: "Mekari",
  "pupuk-kujang": "Pupuk Kujang",
  "telkom-indonesia": "Telkom Indonesia",
  "telkom-university": "Telkom University",
  myskill: "MySkill",
  talenthub: "TalentHub",
  "hima-if": "HIMA IF",
};

// Deretan di bawah hero ("Pernah bersama").
export const companyStrip = ["mekari", "pupuk-kujang", "telkom-indonesia", "telkom-university"];

// Bagian Sertifikat. Berkas lengkap ada di public/sertifikat (dibuka di tab baru), thumbnail di src/assets/certs.
export const certificateGroups = [
  {
    label: "Pelatihan dan bootcamp",
    items: [
      {
        title: "AI & Automation Bootcamp",
        issuer: "MySkill Intensive Bootcamp · Batch 3",
        when: "28 Apr – 23 Jun 2026",
        id: "No. 325039/AIA/LM/7/2026",
        detail: "Predikat Distinction dengan nilai akhir 94/100: kehadiran 80, tugas personal 100, post test 100.",
        thumb: certMyskill,
        alt: "Sertifikat Certificate of Completion MySkill AI & Automation Bootcamp atas nama Azmi Rizqullah Rabbani",
        files: [
          { label: "Sertifikat", href: "/sertifikat/myskill-bootcamp.jpg" },
          { label: "Rincian nilai", href: "/sertifikat/myskill-bootcamp-nilai.jpg" },
        ],
      },
      {
        title: "Data Science Fundamentals",
        issuer: "Talent Class Batch 14 · Talenthub, Pusat Pasar Kerja Kemnaker RI",
        when: "15 – 26 Jul 2024",
        id: "No. B-1/1425/PK.00/VIII/2024",
        detail: "Dinyatakan lulus dengan nilai 92,3/100. Materi: SQL, Python, pengolahan data, visualisasi, EDA, machine learning, dan proyek portofolio.",
        thumb: certTalenthub,
        alt: "Sertifikat kelulusan Talent Class Batch 14 Data Science Fundamentals atas nama Azmi Rizqullah Rabbani",
        files: [{ label: "Sertifikat dan nilai (PDF)", href: "/sertifikat/talenthub-data-science.pdf" }],
      },
    ],
  },
  {
    label: "Publikasi dan konferensi",
    items: [
      {
        title: "Author, ISRITI 2025",
        issuer: "2025 8th International Seminar on Research of Information Technology and Intelligent Systems · Universitas Teknologi Digital Indonesia",
        when: "11 Des 2025 · Yogyakarta",
        detail: "Penulis makalah Car Damage Detection using YOLOv11 and RT-DETR bersama Gamma Kosala.",
        thumb: certIsritiAuthor,
        alt: "Sertifikat penulis makalah ISRITI 2025 atas nama Azmi Rizqullah Rabbani dan Gamma Kosala",
        files: [{ label: "Lihat sertifikat (PDF)", href: "/sertifikat/isriti-author.pdf" }],
      },
      {
        title: "Presenter, ISRITI 2025",
        issuer: "2025 8th International Seminar on Research of Information Technology and Intelligent Systems · Universitas Teknologi Digital Indonesia",
        when: "11 Des 2025 · Yogyakarta",
        detail: "Pemakalah (presenter) untuk makalah yang sama.",
        thumb: certIsritiPresenter,
        alt: "Sertifikat presenter ISRITI 2025 atas nama Azmi Rizqullah Rabbani",
        files: [{ label: "Lihat sertifikat (PDF)", href: "/sertifikat/isriti-presenter.pdf" }],
      },
    ],
  },
  {
    label: "Organisasi dan kepanitiaan",
    items: [
      {
        title: "Staff Ahli Divisi Bisnis dan Kewirausahaan",
        issuer: "HIMA S1 Informatika Telkom University · Kabinet Baskara",
        when: "Periode 2024",
        detail: "Sertifikat penghargaan atas kepengurusan di Badan Pengurus Harian.",
        thumb: certHimaStaff,
        alt: "Sertifikat penghargaan Staff Ahli Divisi Bisnis dan Kewirausahaan HIMA S1 Informatika Telkom University 2024",
        files: [{ label: "Lihat sertifikat (PDF)", href: "/sertifikat/hima-staff-ahli.pdf" }],
      },
      {
        title: "Kepala Divisi Finance, Anniv Insight 2024",
        issuer: "HIMA IF Telkom University",
        when: "Anniv Insight HIMA IF 2024",
        id: "No. 003/SER/KMS/1/2025",
        detail: "Kepala Divisi Finance pada acara perayaan hari terbentuknya HIMA IF dan sesi insight untuk mahasiswa S1 Informatika.",
        thumb: certAnniv,
        alt: "Sertifikat Kepala Divisi Finance Anniv Insight HIMA IF 2024 atas nama Azmi Rizqullah Rabbani",
        files: [{ label: "Lihat sertifikat (PDF)", href: "/sertifikat/hima-anniv-insight.pdf" }],
      },
      {
        title: "Panitia Workshop Kecerdasan Artifisial dan Kejahatan Siber",
        issuer: "Pengabdian kepada Masyarakat · PPM Universitas Telkom",
        when: "10 Mei 2025 · Pondok Pesantren Modern Assuruur",
        id: "No. 2541/ABD08/PPM-JPM/2025",
        detail: "Panitia kegiatan pengabdian kepada masyarakat: workshop pengenalan kecerdasan artifisial dan kejahatan siber.",
        thumb: certAbdimas,
        alt: "Sertifikat panitia workshop pengenalan kecerdasan artifisial dan kejahatan siber, PPM Universitas Telkom",
        files: [{ label: "Lihat sertifikat (PDF, NIM disamarkan)", href: "/sertifikat/abdimas-assuruur.pdf" }],
      },
    ],
  },
  {
    label: "Relawan",
    items: [
      {
        title: "Relawan, Program Anak Muda Melek Finansial",
        issuer: "Program Belajar Digital Allianz · Solve Education! Foundation dan Yayasan Allianz Peduli",
        when: "11 Okt 2023",
        detail: "Berpartisipasi sebagai relawan dalam program literasi keuangan untuk anak muda (sertifikat partisipasi).",
        thumb: certAllianz,
        alt: "Certificate of Participation Program Belajar Digital Allianz atas nama Azmi Rizqullah Rabbani",
        files: [{ label: "Lihat sertifikat (PDF)", href: "/sertifikat/allianz-melek-finansial.pdf" }],
      },
    ],
  },
];
