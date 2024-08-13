import React from "react";
import Container from "~/components/common/container";
import HeadingTitle from "~/components/common/heading";
export default function VisiMisiPage() {
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Visi dan Misi
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Terwujudnya penyelenggaraan transpotasi udara yang handal, berdaya
              saing dan memberikan nilai tambah dalam mendukung ketahanan
              nasional.
            </p>
          </div>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" flex flex-col w-full items-center justify-center mb-10 mt-10">
          {/* <h1 className=" text-4xl font-semibold text-center">
            Jadwal Penerbangan Perintis Dari & Ke Bandara Harun Thohir
          </h1> */}
          <div className=" flex flex-col w-full items-center justify-center mb-10">
            <div className=" flex flex-col w-full">
              <h1 className=" text-3xl font-bold">
                Penjelasan Visi secara garis besar :
              </h1>
              <div className=" flex">
                <ul className=" list-disc ml-4">
                  <div className=" border-b py-5">
                    <li className=" text-lg font-semibold">
                      PELAYANAN TRANSPORTASI UDARA YANG HANDAL
                    </li>
                    <p>
                      Diindikasikan oleh penyelenggaraan transportasi yang aman,
                      selamat, nyaman, tepat waktu, terpelihara, mencukupi
                      kebutuhan, menjangkau seluruh pelosok tanah air serta
                      mampu mendukung pembangunan nasional.
                    </p>
                  </div>
                  <div className=" border-b py-5">
                    <li className=" text-lg font-semibold">
                      PELAYANAN TRANSPORTASI UDARA YANG BERDAYA SAING
                    </li>
                    <p>
                      Diindikasikan oleh penyelenggaraan transportasi yang
                      efisien, dengan harga terjangkau oleh semua lapisan
                      masyarakat, dilayani oleh SDM yang profesional, mandiri
                      dan produktif.
                    </p>
                  </div>
                  <div className=" py-5">
                    <li className=" text-lg font-semibold">
                      PELAYANAN TRANSPORTASI UDARA YANG MEMBERIKAN NILAI TAMBAH
                    </li>
                    <p>
                      Diindikasikan oleh penyelenggaraan perhubungan yang mampu
                      mendorong pertumbuhan produksi nasional melalui iklim
                      usaha yang kondusif bagi berkembangnya peran serta
                      masyarakat, usaha kecil, menengah dan koperasi.
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
