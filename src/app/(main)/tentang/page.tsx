import React from "react";
import Container from "../../../components/common/container";
import HeadingTitle from "../../../components/common/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import DetailBandara from "~/components/common/tentang/detail-bandara";
import BandaraTerdekat from "~/components/common/tentang/bandara-terdekat";
import RuteDomestik from "~/components/common/tentang/rute-domestik";
import FasilitasSisiDarat from "~/components/common/tentang/fasilitas-sisi-darat";
import PetaBandara from "~/components/common/tentang/peta-bandara";

export default function TentangPage() {
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Informasi Umum
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-3xl">
              Informasi detail terkait Bandar Udara Harun Thohir - Gresik
            </p>
          </div>
        </div>
      </HeadingTitle>

      <Container>
        <div className=" flex w-full items-center justify-center mb-20 -mt-10">
          <Tabs
          defaultValue="detail bandara"
          className="w-full items-center justify-center flex flex-col"
        >
          <TabsList className=" scale-110 my-10">
            <div className="flex lg:columns-2">
              <TabsTrigger value="detail bandara">Detail Bandara</TabsTrigger>
              <TabsTrigger value="bandara terdekat">
                Bandara Terdekat
              </TabsTrigger>
              <TabsTrigger value="rute domestik">Rute Domestik</TabsTrigger>
              <TabsTrigger value="fasilitas sisi darat">
                Fasilitas Sisi Darat
              </TabsTrigger>
              <TabsTrigger value="peta bandara">Peta Bandar Udara</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="detail bandara">
            <DetailBandara />
          </TabsContent>
          <TabsContent
            value="bandara terdekat"
            className="w-[768px] items-center justify-center"
          >
            <BandaraTerdekat />
          </TabsContent>
          <TabsContent value="rute domestik" className=" w-full">
            <RuteDomestik />
          </TabsContent>
          <TabsContent value="fasilitas sisi darat" className=" w-full">
            <FasilitasSisiDarat />
          </TabsContent>
          <TabsContent value="peta bandara" className=" w-full">
            <PetaBandara />
          </TabsContent>
        </Tabs>
        </div>
      </Container>
    </>
  );
}
