"use client";
import { ArrowRight, Brodcast, Messages1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Container from "~/components/common/container";
import { Button } from "~/components/ui/button";
import { GiWhistle } from "react-icons/gi";

export default function Pengaduan() {
  const mediaScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="relative flex w-full bg-[url('/images/pengaduan.png')] bg-cover bg-bottom z-0 text-neutral-50 bg-fixed">
        {mediaScreen ? (<Container className="px-16">
          <div className="my-10 w-full items-center justify-start space-y-6 lg:flex">
            <div className="text-left">
              <h1 className="text-4xl font-bold leading-tight">
                Layanan Pengaduan Masyarakat
              </h1>
              <p className="mt-2 max-w-4xl text-neutral-50">
                Untuk menyampaikan pengaduan tentang ketidakpuasan layanan, adanya indikasi penyimpangan dan penyalahgunaan wewenang, serta adanya pungutan liar yang dilakukan staf kami,
              </p>
              <p className="mt-2 max-w-4xl text-neutral-50">
                Laporkan melalui portal <span className=" text-lg font-bold">Whistle Blowing System (WBS)</span> Kementerian Perhubungan.
              </p>
               <div className=" flex w-full items-center justify-start mt-6 gap-x-4">
                <Link href="https://simadu.kemenhub.go.id/" target="_blank" >
                  <Button
                    variant="default"
                    className="group rounded-full border border-neutral-50 bg-transparent px-6 text-neutral-900 transition-all duration-200 hover:bg-black"
                  >
                    <p className="relative flex items-center gap-2 left-2 transition-all duration-200 group-hover:-left-1 text-neutral-50">
                     <GiWhistle size="24" color="#fafafa"/> Portal WBS
                    </p>
                    <ArrowRight
                     size="20"
                     variant="Linear"
                     className="relative left-0 opacity-0 transition-all duration-200 group-hover:left-2 group-hover:opacity-100 text-neutral-50"
                    />
                  </Button>
                </Link>
                <Link href="https://www.lapor.go.id/" target="_blank" >
                  <Button
                    variant="default"
                    className="group rounded-full border border-neutral-50 bg-transparent px-6 text-neutral-900 transition-all duration-200 hover:bg-black"
                  >
                    <p className="relative flex items-center gap-2 left-2 transition-all duration-200 group-hover:-left-1 text-neutral-50">
                     <Image src="/images/spanlapor-logo.png" alt="" width={17} height={17} className=" w-full h-full object-cover object-center"/> SP4N Lapor
                    </p>
                    <ArrowRight
                      size="20"
                      variant="Linear"
                      className="relative left-0 opacity-0 transition-all duration-200 group-hover:left-2 group-hover:opacity-100 text-neutral-50"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>) : (<Container>
         <div className="my-10 w-full items-center justify-start space-y-6 lg:flex">
            <div className="text-left">
              <h1 className="text-4xl font-bold leading-tight">
                Layanan Pengaduan Masyarakat
              </h1>
              <p className="mt-2 max-w-4xl text-neutral-50">
                Untuk menyampaikan pengaduan tentang ketidakpuasan layanan, adanya indikasi penyimpangan dan penyalahgunaan wewenang, serta adanya pungutan liar yang dilakukan staf kami,
              </p>
              <p className="mt-2 max-w-4xl text-neutral-50">
                Laporkan melalui portal <span className=" text-lg font-bold">Whistle Blowing System (WBS)</span> Kementerian Perhubungan.
              </p>
              <div className=" flex w-full items-center justify-start mt-6 gap-x-4">
                <Link href="https://simadu.kemenhub.go.id/" target="_blank" >
                  <Button
                    variant="default"
                    className="group rounded-full border border-neutral-50 bg-transparent px-6 text-neutral-900 transition-all duration-200 hover:bg-black"
                  >
                    <p className="relative flex items-center gap-2 left-2 transition-all duration-200 group-hover:-left-1 text-neutral-50">
                     <GiWhistle size="24" color="#fafafa"/> Portal WBS
                    </p>
                    <ArrowRight
                     size="20"
                     variant="Linear"
                     className="relative left-0 opacity-0 transition-all duration-200 group-hover:left-2 group-hover:opacity-100 text-neutral-50"
                    />
                  </Button>
                </Link>
                <Link href="https://www.lapor.go.id/" target="_blank" >
                  <Button
                    variant="default"
                    className="group rounded-full border border-neutral-50 bg-transparent px-6 text-neutral-900 transition-all duration-200 hover:bg-black"
                  >
                    <p className="relative flex items-center gap-2 left-2 transition-all duration-200 group-hover:-left-1 text-neutral-50">
                     <Image src="/images/spanlapor-logo.png" alt="" width={17} height={17} className=" w-full h-full object-cover object-center"/> SP4N Lapor
                    </p>
                    <ArrowRight
                      size="20"
                      variant="Linear"
                      className="relative left-0 opacity-0 transition-all duration-200 group-hover:left-2 group-hover:opacity-100 text-neutral-50"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>)}
      </div>
    </>
  );
}
