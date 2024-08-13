"use client"
import { Calendar, Folder, ReceiptEdit } from "iconsax-react";
import Image from "next/image";
import { Berita } from "../../../server/db/schema";
import { format } from "date-fns";
import React from "react";
import Container from "../container";

interface PageParams {
  berita: Berita;
}

export default function DetailBerita({ berita }: PageParams) {
  return (
    <>
        <h1 className=" text-3xl font-semibold">{berita.judul}</h1>
        <div className=" flex w-full items-center justify-start gap-8 py-5 text-neutral-500 text-sm">
        <span className=" flex gap-x-1">
          <Folder size="18" color="#333333" />
          <p>Berita</p>
        </span>
        <span className=" flex gap-x-1">
          <Calendar size="18" color="#333333" />
          <p>{format(berita.tanggal, "PPP")}</p>
        </span>
        <span className=" flex gap-x-1">
          <ReceiptEdit size="18" color="#333333" />
          <p>{berita.penulis}</p>
        </span>
      </div>
      <div className=" w-full aspect-video relative">
        <Image
          src={berita.thumbnail as string}
          alt=""
          fill
          className=" w-full h-full"
        />
      </div>
      <div className=" flex flex-col w-full text-base mt-12 gap-y-4 text-justify">
        <div
          dangerouslySetInnerHTML={{ __html: berita.konten }}
          className=" pt-4"
        />
      </div>
    </>
  );
}
