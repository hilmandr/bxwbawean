import Container from "../../../../components/common/container";
import HeadingTitle from "~/components/common/heading";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import React from "react";

export default function PermohonanInformasiPage() {
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Permohonan Informasi
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Angkutan udara perintis adalah kegiatan angkutan udara niaga dalam
              negeri yang melayani jaringan dan rute penerbangan untuk
              menghubungkan daerah terpencil dan tertinggal atau daerah yang
              belum terlayani oleh moda transportasi lain dan secara komersial
              belum menguntungkan
            </p>
          </div>
        </div>
      </HeadingTitle>

      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 -mt-10">
          <h1 className=" text-4xl font-semibold text-center">
            Unduh Formulir Permohonan Informasi
          </h1>
          <div className=" flex w-[420px] aspect-[3/4] mt-6 relative">
            <Image
              src="/images/layanan/permohonan-informasi.jpeg"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
          <Button className=" border border-neutral-950 rounded-full bg-white text-neutral-900 transition-all duration-200 hover:bg-white group px-6 mt-4">
            <Link
              href="/pdf/Formulir Permohonan Informasi.pdf"
              download
              className=" left-3 relative group-hover:left-0 transition-all duration-200 "
            >
              Unduh Formulir
            </Link>
            <ArrowRight
              size="20"
              variant="Linear"
              className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
            />
          </Button>
        </div>
      </Container>
    </>
  );
}
