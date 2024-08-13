"use client";

import Container from "~/components/common/container";
import HeadingTitle from "~/components/common/heading";
import { useMediaQuery } from "usehooks-ts";
import React, { Suspense } from "react";
import ArrivalTable from "~/components/common/penerbangan/arrival-table";
import { cn } from "~/lib/utils";

export default function ArrivalPage() {
  const mediaScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Penerbangan Perintis
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
      <Container className={cn("", {"px-16":mediaScreen})}>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis
          </h1>
          <div className=" w-full">
                <Suspense>
                    <ArrivalTable/>
                </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
}
