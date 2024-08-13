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
        path: "/",
    },
    // {
    //     no: 0,
    //     judul: "",
    //     deskripsi: "",
    //     link: "",
    //     path: "/",
    // },
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
                paragraf: "Alamat kantor JI. Medan Merdeka Barat No.8 Gd. Karsa Lt. 8 Jakarta Pusat 10110 Telp. (021) 3840789, 3455665 Ext. 1267. Lahir di Palembang pada tanggal 18 Desember 1956. Menempuh pendidikan sarjana di bidang arsitektur Universitas Gajah Mada pada tahun 1981. Pernah menjabat sebagai Presiden Direktur PT Pembangunan Jaya Ancol sejak tahun 2004, kemudian menjadi Direktur Utama PT Jakarta Propertindo (JakPro) hingga tahun 2013. Terakhir Beliau menjabat sebagai Direktur Utama Angkasa Pura II pada tahun 2015 sampai Juli 2016. Pada tanggal 27 Juli 2016, Presiden Joko Widodo melantik beliau sebagai Menteri Perhubungan pada Kabinet Kerja Tahun 2014-2019, pada Oktober 2019 Budi Karya Sumadi kembali dilantik sebagai Menteri Perhubungan pada Kabinet Indonesia Maju periode 2019-2024.",
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
        path: "/",
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