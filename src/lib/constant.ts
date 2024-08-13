import { Mulish } from "next/font/google";
import {
  Airplane,
  AirplaneSquare,
  Building3,
  Category2,
  DocumentDownload,
  Folder,
  Icon,
  Instagram,
  Map1,
  MenuBoard,
  Message2,
  Messages1,
  Mobile,
  Sms,
  UserSquare,
} from "iconsax-react";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  TAddressFooter,
  TFaq,
  TLayanan,
  TMenu,
  TMenuPpid,
  TSidenav,
  TSosmedFooter,
  TTautanFooter,
} from "~/types";
import { IconType } from "react-icons/lib";

export interface IMenuDashboard {
  label: string;
  path: string;
  icon: IconType | Icon;
  // active: string;
}

export const mulish = Mulish({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const SIDENAV: Array<TSidenav> = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Category2,
  },
  {
    title: "Jadwal Penerbangan",
    path: "/dashboard/jadwal-penerbangan/departure",
    icon: Airplane,
  },
  {
    title: "Berita",
    path: "/dashboard/berita",
    icon: Folder,
  },
  {
    title: "Kegiatan Harian",
    path: "/dashboard/kegiatan-harian",
    icon: MenuBoard,
  },
  {
    title: "Kritik & Saran",
    path: "/dashboard/kritik-saran",
    icon: Message2,
  },
];

export const MENU: Array<TMenu> = [
  {
    title: "Berita",
    path: "/berita",
  },
  {
    title: "Kontak",
    path: "/kontak",
  },
];

export const PPID: Array<TMenuPpid> = [
  {
    title: "Informasi Publik",
    item: 2,
    submenu: [
      {
        title: "Informasi Berkala",
        path: "/ppid/informasi-publik/berkala"
      },
      {
        title: "Informasi Setiap Saat",
        path: "/ppid/informasi-publik/setiap-saat"
      },
      {
        title: "Informasi Serta Merta",
        path: "/ppid/informasi-publik/serta-merta"
      },
    ]
  },
  {
    title: "Pelayanan",
    item: 3,
    submenu: [
      {
        title: "Maklumat Pelayanan & Standar Biaya",
        path: "/ppid/pelayanan/maklumat-layanan"
      },
      {
        title: "Prosedur Permohonan Informasi",
        path: "/ppid/pelayanan/inf-publik"
      },
      {
        title: "Prosedur Permohonan Keberatan Informasi",
        path: "/ppid/pelayanan/keberatan-inf"
      },
      {
        title: "Prosedur Pengajuan Sengketa Informasi Publik",
        path: "/ppid/pelayanan/sengketa-inf"
      },
    ]
  },
];

export const MENUS: Array<TMenu> = [
  {
    title: "Layanan",
    path: "/layanan",
    item: 1,
    submenu: [
      {
        title: "Penerbangan Perintis",
        path: "/layanan/penerbangan-perintis/departure",
      },
      {
        title: "Permohonan PAS",
        path: "/layanan/permohonan-pas",
      },
    ],
  },
  {
    title: "Tentang",
    path: "/tentang",
    item: 2,
    submenu: [
      {
        title: "Struktur Organisasi",
        path: "/tentang/struktur-organisasi",
      },
      {
        title: "Peran dan Fungsi",
        path: "/tentang/peran-dan-fungsi",
      },
      {
        title: "Visi dan Misi",
        path: "/tentang/visi-dan-misi",
      },
      {
        title: "Maklumat Pelayanan",
        path: "/tentang/maklumat-pelayanan",
      },
    ],
  },
];

export const HOME_LAYANAN: Array<TLayanan> = [
  {
    thumbnail: AirplaneSquare,
    title: "Penerbangan Perintis",
    description:
      "Layanan penerbangan perintis mencakup berbagai fasilitas dan kemudahan bagi penumpang, mulai dari pemesanan tiket, check-in, hingga proses naik pesawat.",
    path: "/layanan/penerbangan-perintis/departure",
  },
  {
    thumbnail: UserSquare,
    title: "Permohonan PAS Bandara",
    description:
      "Kami juga menyediakan layanan permohonan pengajuan PAS Bandara untuk akses tertentu di dalam area bandar udara.",
    path: "/layanan/permohonan-pas",
  },
  // {
  //   thumbnail: DocumentDownload,
  //   title: "Permohonan Informasi",
  //   description:
  //     "Kami menyediakan layanan permohonan informasi bagi pihak-pihak yang memiliki kepentingan untuk dapat mengakses informasi seputar bandar udara.",
  //   path: "/layanan/permohonan-informasi",
  // },
];

export const FAQ: Array<TFaq> = [
  {
    item: "item-1",
    question: "Dimana letak Bandar Udara Harun Thohir?",
    answer:
      "Bandar Udara Harun Thohir - Gresik terletak di Desa Tanjungori, Kecamatan Tambak, Pulau Bawean, Kabupaten Gresik Provinsi Jawa Timur (xx Kilometer arah utara dari Pulau Jawa.",
  },
  {
    item: "item-2",
    question:
      "Apakah layanan pemesanan tiket pesawat dari dan ke Bandara Harun Thohir sudah bisa diakses melalui aplikasi?",
    answer:
      "Layanan pemesanan tiket pesawat dari dan ke Bandara Harun Thohir saat ini belum tersedia di dalam aplikasi dan hanya melayanai melalui pesan Whatsapp.",
  },
  {
    item: "item-3",
    question: "Bagaimana cara memesan tiket pesawat dari Pulau Bawean?",
    answer:
      "Pemesanan tiket penerbangan perintis dari Pulau Bawean (Bandara Harun Thohir) dapat dilakukan melalui Ticketing Susi Air Bawean pesan Whatsapp pada nomor 08123456789.",
  },
  {
    item: "item-4",
    question: "Bagaimana cara memesan tiket pesawat dari Surabaya?",
    answer:
      "Pemesanan tiket penerbangan perintis dari Surabaya (Bandara Juanda) dapat dilakukan melalui Ticketing Susi Air Surabaya pesan Whatsapp pada nomor 08123456789.",
  },
  {
    item: "item-5",
    question: "Bagaimana cara memesan tiket pesawat dari Sumenep?",
    answer:
      "Pemesanan tiket penerbangan perintis dari Sumenep (Bandara Trunojoyo) dapat dilakukan melalui Ticketing Susi Air Sumenep pesan Whatsapp pada nomor 08123456789.",
  },
];

export const ADDRESS_FOOTER: Array<TAddressFooter> = [
  {
    icon: Map1,
    name: "Jl. Raya Bandara Harun Thohir No. 1",
  },
  {
    icon: Mobile,
    name: "(0325) 424443",
  },
  {
    icon: Sms,
    name: "bandaraharunthohir@gmail.com",
  },
];

export const TAUTAN_LAIN: Array<TTautanFooter> = [
  {
    name: "Kementerian Perhubungan",
    path: "https://dephub.go.id/",
  },
  {
    name: "Direktorat Jenderal Perhubungan Udara",
    path: "https://hubud.dephub.go.id/hubud/website/",
  },
  {
    name: "Kantor Ototritas Bandar Udara Wil III",
    path: "https://otban3.dephub.go.id/",
  },
];

export const SOSMED: Array<TSosmedFooter> = [
  { icon: FaInstagram, path: "" },
  { icon: FaYoutube, path: "" },
  { icon: FaTiktok, path: "" },
  { icon: FaXTwitter, path: "" },
];
