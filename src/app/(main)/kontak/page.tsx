import { ArrowRight } from "iconsax-react";
import Container from "~/components/common/container";
import HeadingTitle from "~/components/common/heading";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "~/components/ui/form";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { createPesanRequest, CreatePesanRequest } from "~/lib/validation/pesan.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { Pesan } from "~/server/db/schema";
import axios from "axios";
import PesanForm from "~/components/common/pesan-form";


export default function KontakPage() {
  
  return (
    <>
      <HeadingTitle className=" z-20">
        <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-[480px] bg-black/60 absolute z-0"></div>
          <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
            <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
              Kontak
            </h1>
            <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-full">
              Berikan saran dan masukan anda agar pelayanan kami menjadi lebih
              baik lagi.
            </p>
          </div>
        </div>
      </HeadingTitle>
      <Container>
        <div className=" w-full mb-20 mt-10 grid lg:grid-cols-2 gap-10">
          <div className=" flex flex-col gap-y-3 w-full">
            <div className=" w-full">
              <PesanForm/>
          </div>
          </div>
          <div className=" flex flex-col w-full gap-y-4">
            <div className=" flex w-full relative aspect-[8/2] max-w-64">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                className=" w-full h-full"
              />
            </div>
            <h1 className=" font-semibold text-xl">
              Kantor Unit Penyelenggara Bandar Udara Kelas III Harun Thohir -
              Gresik
            </h1>
            <div>
              <h3 className=" font-semibold">Alamat :</h3>
              <p>
                Jl. Raya Bandara Harun Thohir No. 1, Desa Tanjungori
                <br />
                Kecamatan Tambak, Kabupaten Gresik
              </p>
            </div>
            <div>
              <h3 className=" font-semibold">Telepon :</h3>
              <p>(0325) 424443</p>
            </div>
            <div>
              <h3 className=" font-semibold">Email :</h3>
              <p>bandaraharunthohir@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
