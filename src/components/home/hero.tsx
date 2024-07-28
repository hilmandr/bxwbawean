import { ArrowRight, Mouse } from "iconsax-react";
import { Button } from "../ui/button";
import Container from "../common/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="relative inset-0 top-0 z-0 flex h-screen w-full flex-col items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-bottom">
        <div className="absolute bottom-0 -z-10 flex h-screen w-full bg-black/40"></div>
        <div className="absolute bottom-0 -z-10 flex h-64 w-full bg-gradient-to-t from-white from-[5%] to-white/0 to-[100%]"></div>
        <Container>
          <div className="inset-1 z-10 flex w-full items-center justify-start">
            <div className="flex w-full max-w-2xl flex-col gap-y-5 text-white">
              <h1 className="text-3xl font-extrabold lg:text-5xl lg:leading-tight">
                Selamat Datang di Website Resmi Kantor UPBU Harun Thohir -
                Gresik
              </h1>
              <p className="text-sm lg:text-base">
                Bandar Udara Bawean, juga dikenal sebagai Bandar Udara Harun
                Thohir, adalah bandar udara yang terletak di Pulau Bawean,
                Kabupaten Gresik, Jawa Timur. Bandara ini dioperasikan oleh
                Kementerian Perhubungan Republik Indonesia.
              </p>
              <div className="flex w-full gap-4">
                <Link href="/layanan/penerbangan-perintis">
                  <Button
                    variant="default"
                    className="group rounded-full border bg-white px-6 text-neutral-900 transition-all duration-200 hover:bg-white"
                  >
                    <p className="relative left-4 transition-all duration-200 group-hover:left-0">
                      Lihat Jadwal Penerbangan
                    </p>
                    <ArrowRight
                      size="20"
                      variant="Linear"
                      className="relative left-0 opacity-0 transition-all duration-200 group-hover:left-2 group-hover:opacity-100"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <Mouse
          size="36"
          color="#555555"
          className="absolute bottom-14 animate-bounce"
          variant="Broken"
        />
      </div>
    </>
  );
}
