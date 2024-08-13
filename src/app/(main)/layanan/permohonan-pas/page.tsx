import Image from "next/image";
import Container from "../../../../components/common/container";
import React from "react";
import HeadingTitle from "~/components/common/heading";

export default function PermohonanPasPage() {
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Permohonan Penerbitan PAS Bandara
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Pelayanan Penerbitan Pas Bandar Udara yang digunakan untuk orang /
              pekerja yang berkegiatan pada Daerah Keamanan Terbatas di Bandar
              Udara.
            </p>
          </div>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-20">
          <h1 className=" text-4xl font-semibold text-center">
            Alur Penerbitan PAS Bandara
          </h1>
          <div className=" flex w-[420px] aspect-[2/4] mt-6 relative shadow-lg">
            <Image
              src="/images/layanan/flowchart-pas.png"
              alt=""
              fill
              className=" w-full h-full"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
