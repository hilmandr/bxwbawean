import {
  TBarjas,
  TBerkala,
  TBerkalaSub,
  TSertaMerta,
  TSetiapSaat,
} from "~/types";

export const INFORMASIBERKALA: Array<TBerkala> = [
  {
    no: 1,
    judul: "Profil Unit Kerja",
    deskripsi:
      "Unit Penyelenggara Bandar Udara Kelas III Harun Thohir - Gresik (IATA: BXW), juga dikenal sebagai Bandar Udara Harun Thohir, adalah bandar udara yang terletak di Pulau Bawean, Kabupaten Gresik, Jawa Timur. Bandara ini dioperasikan oleh Kementerian Perhubungan Republik Indonesia. Nama bandara ini diambil dari Kopral Dua KKO (Anumerta) Harun Said bin Muhammad Ali, yang dikenal sebagai Harun Thohir. Bandara ini diresmikan oleh Menteri Perhubungan, Ignasius Jonan pada tanggal 30 Januari 2016. Bandara ini melayani rute penerbangan dari dan tujuan Bawean.",
    subLink: [
      {
        link: "Profil Bandar Udara Harun Thohir - Gresik",
        path: "/pdf/upbu.pdf",
      },
    ],
  },
  {
    no: 2,
    judul: "Laporan Pelaksanaan Kegiatan",
    deskripsi:
      "Informasi mengenai ringkasan laporan pelaksanaan kegiatan berjalan di lingkungan Kantor UPBU Harun Thohir - Gresik :",
    subLink: [
      {
        link: "Laporan Tahun 2023",
        path: "/pdf/LAKIP2023.pdf",
      },
      { link: "Laporan Tahun 2024", path: "/pdf/LAKIP2024.pdf" },
    ],
  },
  {
    no: 3,
    judul: "Kegiatan, Program dan Rencana",
    deskripsi:
      "Informasi mengenai Ringkasan Program dan Rencana Kegiatan yang di jalankan di lingkungan Kantor UPBU Harun Thohir - Gresik :",
    subLink: [
      {
        link: "Rencana Kerja Anggaran Tahun 2024",
        path: "/pdf/RKA2024.pdf",
      },
      {
        link: "Rencana Kerja Anggaran Tahun 2025",
        path: "/pdf/RKA2025.pdf",
      },
    ],
  },
  {
    no: 4,
    judul: "Statistik dan Informasi",
    deskripsi:
      "Informasi mengenai Statistik dan Informasi Kepegawaian dan Keuangan Setiap Tahunnya :",
    subLink: [
      {
        link: "Statistik Kepegawaian dan Keuangan Tahun 2023",
        path: "/images/ppid/statistik.jpeg",
      },
    ],
  },
  {
    no: 5,
    judul: "Laporan Keuangan",
    deskripsi: "Informasi mengenai laporan keuangan Kantor UPBU Harun Thohir :",
    subLink: [
      { link: "Laporan Keuangan Audited 2024", path: "/pdf/CALK2024.pdf" },
    ],
  },
];

export const BERKALASUB: Array<TBerkalaSub> = [
  {
    no: 6,
    judul: "Profil Pejabat",
    deskripsi:
      "Informasi mengenai Profil Pejabat Kantor UPBU Harun Thohir - Gresik berupa Nama, Jabatan, Sejarah Karir, Sejarah Pendidikan, Penghargaan dan Laporan Kekayaan",
    subIsi: [
      {
        judul: "Febria Setyowati Suyanto",
        deskripsi: "Kepala Kantor UPBU Harun Thohir - Gresik",
        gambar: "/images/ppid/febria.jpg",
        paragraf: "",
        link: "LHKPN Febria Setyowati Suyanto",
        path: "/pdf/LHKPN2024.pdf",
      },
    ],
  },
];

export const INFSERTAMERTA: Array<TSertaMerta> = [
  {
    no: 1,
    judul:
      "Informasi yang Dapat Mengancam Hajat Hidup Orang Banyak dan Ketertiban Umum",
    deskripsi:
      "Informasi Serta Merta yang dapat menggangu hajat hidup masyarakat.",
    link: "Informasi Serta Merta yang dapat menggangu hajat hidup masyarakat.",
    path: "https://www.instagram.com/p/DOUz-Whk3Q6/?img_index=1",
  },
];

export const INFSETIAPSAAT: Array<TSetiapSaat> = [
  {
    no: 1,
    judul: "Perizinan",
    deskripsi:
      "Informasi mengenai ringkasan berupa syarat dan SOP perizinan di lingkungan Kantor UPBU Harun Thohir - Gresik :",
    subLink: [
      {
        link: "SOP Penerbitan PAS Bandara",
        path: "/pdf/SOPPAS.pdf",
      },
    ],
  },
  {
    no: 2,
    judul: "Inventaris Barang Milik Negera (BMN)",
    deskripsi:
      "Informasi mengenai inventaris barang milik negara di lingkungan Kantor UPBU Harun Thohir - Gresik :",
    subLink: [
      {
        link: "Laporan BMN Tahun 2023",
        path: "/pdf/LapBMN2023.pdf",
      },
      {
        link: "Laporan BMN Tahun 2024",
        path: "/pdf/BMN2024.pdf",
      },
    ],
  },
];

export const BARJAS: Array<TBarjas> = [
  {
    judul: "Dokumen Pengadaan Barang dan Jasa",
    deskripsi: "Dokumen Pengadaan Barang dan Jasa",
    no: 5,
    subDoc: [
      {
        docName: "Rencana Umum Pengadaan (RUP)",
        path: "",
      },
      {
        docName: "Kerangka Acuan Kerja (KAK)",
        path: "/pdf/barjas/2. KAK.pdf",
      },
      {
        docName: "Harga Perkiraan Sendiri (HPS) & Riwayat HPS",
        path: "",
      },
      {
        docName: "Spesifikasi Teknis",
        path: "",
      },
      {
        docName: "Rancangan Kontrak",
        path: "/pdf/barjas/5. Rancangan Kontrak.pdf",
      },
      {
        docName: "Dokumen Persyaratan Penyedia",
        path: "",
      },
      {
        docName: "Dokumen Persyaratan Proses Pemilihan",
        path: "",
      },
      {
        docName: "Daftar Kuantitas dan Harga",
        path: "",
      },
      {
        docName: "Jadwal pelaksanaan dan data lokasi pekerjaan",
        path: "/pdf/barjas/9 Jadwal dan Lokasi Pekerjaan.pdf",
      },
      {
        docName: "Gambar Rancangan Pekerjaan",
        path: "/pdf/barjas/GAMBAR PEKERJAAN PEMBANGUNAN MESS PEGAWAI TIPE 1.pdf",
      },
      {
        docName: "Dokumen Studi Kelayakan dan Dokumen Lingkungan Hidup",
        path: "",
      },
      {
        docName: "Dokumen Penawaran Administratif",
        path: "",
      },
      {
        docName: "Surat Penawaran Penyedia",
        path: "/pdf/barjas/12. Penawaran Penyedia.pdf",
      },
      {
        docName: "Sertifikat atau Lisensi Dirjen HAKI",
        path: "",
      },
      {
        docName: "Berita Acara Pemberian Penjelasan",
        path: "/pdf/barjas/15. BA Penjelasan.pdf",
      },
      {
        docName: "Berita Acara Pengumuman Negosiasi",
        path: "",
      },
      {
        docName: "Berita Acara Sanggah dan Sanggah Banding",
        path: "/pdf/barjas/17. Sanggah Banding.pdf",
      },
      {
        docName: "Berita Acara Penetapan atau Pengumuman Penyedia",
        path: "/pdf/barjas/Pemilihan Penyedia.pdf",
      },
      {
        docName: "Berita Acara Penetapan atau Pengumuman Penyedia",
        path: "",
      },
      {
        docName: "Surat Penunjukan Penyedia Barang/Jasa (SPPBJ)",
        path: "pdf/barjas/20. SPPBJ.pdf",
      },
      {
        docName: "Surat Perjanjian Kemitraan",
        path: "pdf/barjas/Perjanjian Kerja.pdf",
      },
      {
        docName: "Surat Penugasan atau Surat Pembentukan Tim Swakelola",
        path: "",
      },
      {
        docName: "Nota Kesepahaman atau Memorandum of Understanding",
        path: "",
      },
      {
        docName: "Dokumen Kontrak",
        path: "",
      },
      {
        docName: "Ringkasan Kontrak",
        path: "",
      },
      {
        docName: "Surat Perintah Mulai Kerja",
        path: "pdf/barjas/SPMK.pdf",
      },
      {
        docName: "Surat Jaminan Pelaksanaan",
        path: "",
      },
      {
        docName: "Surat Jaminan Uang Muka",
        path: "/pdf/barjas/28.DOK PDF LAINNYA1755160917980702.pdf",
      },
      {
        docName: "Surat Jaminan Pemeliharaan",
        path: "",
      },
      {
        docName: "Surat Tagihan",
        path: "",
      },
      {
        docName: "Surat Pesanan E-purchasing",
        path: "",
      },
      {
        docName: "Surat Perintah Membayar",
        path: "/pdf/barjas/32.SPM_111_00153A_1755161210701.pdf",
      },
      {
        docName: "SP2D",
        path: "/pdf/barjas/33.Daftar SP2D Satker - 2025-09-02T132721.401.pdf",
      },
      {
        docName: "Laporan Pelaksanaan Pekerjaan",
        path: "",
      },
      {
        docName: "Laporan Penyelesaian Pekerjaan",
        path: "",
      },
      {
        docName: "Berita Acara Pemeriksaan Hasil Pekerjaan",
        path: "",
      },
      {
        docName: "BA Serah Terima Sementara",
        path: "",
      },
      {
        docName: "BA Serah Terima Hasil PEK",
        path: "",
      },
    ],
  },
];
