import { TBerkala, TBerkalaSub, TSertaMerta, TSetiapSaat } from "~/types";

export const INFORMASIBERKALA: Array<TBerkala> = [
    {
        no: 1,
        judul: "Profil Unit Kerja",
        deskripsi: "Unit Penyelenggara Bandar Udara Kelas III Harun Thohir - Gresik (IATA: BXW), juga dikenal sebagai Bandar Udara Harun Thohir, adalah bandar udara yang terletak di Pulau Bawean, Kabupaten Gresik, Jawa Timur. Bandara ini dioperasikan oleh Kementerian Perhubungan Republik Indonesia. Nama bandara ini diambil dari Kopral Dua KKO (Anumerta) Harun Said bin Muhammad Ali, yang dikenal sebagai Harun Thohir. Bandara ini diresmikan oleh Menteri Perhubungan, Ignasius Jonan pada tanggal 30 Januari 2016. Bandara ini melayani rute penerbangan dari dan tujuan Bawean.",
        link: "Profil Bandar Udara Harun Thohir - Gresik",
        path: "/pdf/upbu.pdf",
    },
    {
        no: 2,
        judul: "Laporan Pelaksanaan Kegiatan",
        deskripsi: "Informasi mengenai ringkasan laporan pelaksanaan kegiatan berjalan di lingkungan Kantor UPBU Harun Thohir - Gresik :",
        link: "Laporan Tahun 2023",
        path: "/pdf/LAKIP2023.pdf",
    },
    {
        no: 3,
        judul: "Kegiatan, Program dan Rencana",
        deskripsi: "Informasi mengenai Ringkasan Program dan Rencana Kegiatan yang di jalankan di lingkungan Kantor UPBU Harun Thohir - Gresik :",
        link: "Rencana Kerja Anggaran Tahun 2023",
        path: "/pdf/Rencana Kinerja Tahunan 2024 BUHT.pdf",
    },
    {
        no: 4,
        judul: "Statistik dan Informasi",
        deskripsi: "Informasi mengenai Statistik dan Informasi Kepegawaian dan Keuangan Setiap Tahunnya :",
        link: "Statistik Kepegawaian dan Keuangan Tahun 2023",
        path: "/images/ppid/statistik.jpeg",
    },
]

export const BERKALASUB: Array<TBerkalaSub> = [
    {
        no: 5,
        judul: "Profil Pejabat",
        deskripsi: "Informasi mengenai Profil Pejabat Kantor UPBU Harun Thohir - Gresik berupa Nama, Jabatan, Sejarah Karir, Sejarah Pendidikan, Penghargaan dan Laporan Kekayaan",
        subIsi: [
            {
                judul: "Febria Setyowati Suyanto",
                deskripsi: "Kepala Kantor UPBU Harun Thohir - Gresik",
                gambar: "/images/ppid/febria.jpg",
                paragraf: "",
                link: "LHKPN Febria Setyowati Suyanto",
                path: "/"
            }
        ]
    }
]

export const INFSERTAMERTA: Array<TSertaMerta> = [
    {
        no: 1,
        judul: "Informasi yang Dapat Mengancam Hajat Hidup Orang Banyak dan Ketertiban Umum",
        deskripsi: "Informasi Serta Merta yang dapat menggangu hajat hidup masyarakat.",
        link: "Informasi Serta Merta yang dapat menggangu hajat hidup masyarakat.",
        path: "https://www.instagram.com/reel/C47TXWZyy9F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    }
]

export const INFSETIAPSAAT: Array<TSetiapSaat> = [
    {
        no: 1,
        judul: "Perizinan",
        deskripsi: "Informasi mengenai ringkasan berupa syarat dan SOP perizinan di lingkungan Kantor UPBU Harun Thohir - Gresik :",
        link: "SOP Penerbitan PAS Bandara",
        path: "/pdf/SOPPAS.pdf",
    },
    {
        no: 2,
        judul: "Inventaris Barang Milik Negera (BMN)",
        deskripsi: "Informasi mengenai inventaris barang milik negara di lingkungan Kantor UPBU Harun Thohir - Gresik :",
        link: "Laporan BMN Tahun 2023",
        path: "/pdf/LapBMN2023.pdf",
    }
]