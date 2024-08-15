"use client"

import Container from "~/components/common/container";
import PpidHeadingTitle from "~/components/common/heading-ppid";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export default function TentangPpid() {
    const mediaScreen = useMediaQuery("(min-width: 768px)");
    return (
        <>

        {/* Heading */}
            <PpidHeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
          <div className=" w-full h-[480px] bg-blue-950/80 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Tentang PPID
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-full">
              
            </p>
          </div>
        </div>
      </PpidHeadingTitle>

      {/* Profil */}
      <Container className={cn("", {"px-16 py-10":mediaScreen})}>
        <div className=" flex flex-col w-full">
            <h1 className=" font-semibold text-7xl tracking-wide">Profil PPID</h1>
            <div className=" flex w-full items-center mt-5">
                <p className=" font-normal text-md uppercase">Pejabat Pengelola Informasi & Dokumen</p>
                <div className="w-32 origin-right border-t-2 border-current ml-4"></div>
            </div>
            <div className=" grid lg:grid-cols-2 w-full gap-x-20 gap-y-10 mt-5">
                <div className=" flex flex-col w-full gap-4 mt-5 max-w-3xl">
                    <p className=" text-justify">Sejak Undang-Undang Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik (UU KIP) diberlakukan secara efektif pada tanggal 30 April 2010 telah mendorong bangsa Indonesia satu langkah maju ke depan, menjadi bangsa yang transparan dan akuntabel dalam mengelola sumber daya publik. UU KIP sebagai instrumen hukum yang mengikat merupakan tonggak atau dasar bagi seluruh rakyat Indonesia untuk bersama-sama mengawasi secara langsung pelayanan publik yang diselenggarakan oleh Badan Publik.</p>
                    <p className=" text-justify">Keterbukaan informasi adalah salah satu pilar penting yang akan mendorong terciptanya iklim transparansi. Terlebih di era yang serba terbuka ini, keinginan masyarakat untuk memperoleh informasi semakin tinggi. Diberlakukannya UU KIP merupakan perubahan yang mendasar dalam kehidupan bermasyarakat, berbangsa dan bernegara, oleh sebab itu perlu adanya kesadaran dari seluruh elemen bangsa agar setiap lembaga dan badan pemerintah dalam pengelolaan informasi harus dengan prinsip good governance, tata kelola yang baik dan akuntabilitas.</p>
                    <p className=" text-justify">Sejalan dengan amanah Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, Kementerian Perhubungan telah membentukan Pejabat Pengelola Informasi dan Dokumentasi (PPID) dan Pedoman pelaksanaan layanan informasi publik  yang ditetapkan melalui Peraturan Menteri Perhubungan Nomor PM. 46 Tahun 2018 Tentang Pedoman Pengelolaan Informasi dan Dokumentasi di lingkungan Kementerian Perhubungan.</p>
                </div>
                <div className=" flex relative w-full aspect-[2/2]">
                    <Image src="/images/Drone-5.png" alt="" fill className=" w-full h-full object-cover object-center"></Image>
                </div>
            </div>
        </div>
      </Container>

      {/* Tugas & Fungsi */}
      <div className=" flex w-full bg-stone-500/10">
        <Container className=" px-16 py-14">
            <div className=" flex flex-col w-full">
                <ul className=" list-decimal text-2xl ml-6 leading-relaxed">
                    <li>Melakukan pengelolaan informasi publik;</li>
                    <li>Menyampaikan informasi secara baik dan efisien sehingga dapat diakses dengan mudah;</li>
                    <li>Melakukan pemutakhiran dalam pengelolaan maupun pengembangan digital;</li>
                    <li>Menyediakan Sarana dan Prasarana dalam pelaksanaan pelayanan informasi.</li>
                </ul>
                <div className=" flex w-full items-center mt-10 justify-end">
                    <p className=" font-normal text-md uppercase">Tugas dan Fungsi PPID</p>
                    <div className="w-28 origin-right border-t-2 border-current ml-4"></div>
                </div>
            </div>
        </Container>
      </div>

      {/* Visi & Misi */}
      <Container>
        <div className="flex w-full lg:max-w-2xl flex-col mx-auto mt-14">
            <h1 className=" font-semibold text-3xl text-center">Visi Misi PPID</h1>
            <div className=" flex flex-col w-full mt-5">
                <h2 className=" font-semibold text-xl">Visi</h2>
                <p className=" mt-2">Terwujudnya layanan informasi publik yang Transparan, Objektif dan Prima untuk meningkatkan peran serta aktif masyarakat dalam penyelenggaraan pembangunan sektor transportasi.</p>
                <ul className=" list-decimal ml-4 space-y-1 mt-2">
                    <li>Layanan Informasi Publik</li>
                    <p>Suatu usaha untuk memberikan informasi publik sesuai Undang- Undang No. 14 tahun 2008 tentang Keterbukaan Informasi Publik di lingkungan Kementerian Perhubungan;</p>
                    <li>Transparan</li>
                    <p>Memberikan akses seluar-luasnya kepada masyarakat dalam memperoleh informasi publik dengan cepat dan tepat waktu, biaya ringan, dan cara yang sederhana;</p>
                    <li>Objektif</li>
                    <p>Memberikan akses informasi kepada setiap kalangan, baik Perorangan, Kelompok, maupun Badan Hukum;</p>
                    <li>Prima</li>
                    <p>Terus Berupaya penuh dalam peningkatan Pelayanan, Pengelolaan dan Pendokumentasian Informasi Publik secara Akuntabel, Efisien dan Mudah Diakses.</p>
                </ul>
            </div>
            <div className=" flex flex-col w-full mt-5">
                <h2 className=" font-semibold text-xl">Misi</h2>
                <ul className=" list-decimal ml-4 space-y-1 mt-2">
                    <li>Menjamin akses informasi publik sesuai Undang-Undang No. 14 tahun 2008 tentang Keterbukaan Informasi Publik;</li>
                    <li>Meningkatkan kualitas layanan informasi publik;</li>
                    <li>Meningkatkan profesionalisme SDM layanan informasi publik;</li>
                    <li>Meningkatkan sarana-prasarana dalam rangka efisiensi dan efektivitas layanan informasi publik;</li>
                </ul>
            </div>
        </div>
        </Container>


        <div className=" flex w-full bg-[url('/images/pengaduan.png')] bg-cover bg-center bg-fixed text-white mt-10">
            <Container className=" lg:flex w-full px-16 py-14 space-y-5">
                <div className=" flex flex-col w-full items-start justify-center">
                    <h1 className=" text-5xl font-bold">Waktu Pelayanan</h1>
                </div>
                <div className=" flex flex-col w-full gap-y-6 text-lg">
                    <div className=" flex flex-col w-full">
                        <p>Senin - Kamis</p>
                        <p>Pukul 09:00 - 11:00</p>
                        <p>Pukul 14:00 - 15:00</p>
                    </div>
                    <div className=" flex flex-col w-full">
                        <p>Jumat</p>
                        <p>Pukul 09:00 - 10:30</p>
                        <p>Pukul 14:00 - 16:00</p>
                    </div>
                    <p>Jl. Bandara Harun Thohir No. 1, Dusun Pajinggahan, Desa Tanjungori, Kec Tambak, Kab Gresik</p>
                </div>
            </Container>
        </div>

        <Container>
        {/* Struktur Org */}
        <div className=" flex flex-col w-full my-14 items-center justify-center">
            <h1 className=" font-semibold text-3xl text-center">Struktur Organisasi PPID</h1>
            <div className=" w-full max-w-lg aspect-[1/1.5] relative">
                <Image src="/images/ppid/struktur-org-ppid.png" alt="" fill className=" w-full h-full object-center object-cover"/>
            </div>
        </div>
      </Container>

        </>
    )
}