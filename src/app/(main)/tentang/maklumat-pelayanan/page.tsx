"use client";
import React from "react";
import Container from "~/components/common/container";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import HeadingTitle from "~/components/common/heading";

export default function MaklumatPelayanan() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Maklumat Pelayanan
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Maklumat Pelayanan
            </p>
          </div>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-20 mt-10">
          {/* <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1> */}
          <div className=" flex w-[912px] lg:max-w-4xl max-w-md aspect-[4.2/3] relative shadow-lg ">
            <button type="button" onClick={() => setOpen(true)}>
              <Image
                fill
                src="/images/tentang/makluat-pelayanan.jpg"
                alt=""
                className=" "
              />
            </button>
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[
                {
                  src: "/images/tentang/makluat-pelayanan.jpg",
                  width: 3840,
                  height: 2560,
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
