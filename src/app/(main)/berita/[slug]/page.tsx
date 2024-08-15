
import Container from "~/components/common/container";
import React from "react";
import { api } from "~/trpc/server";
import { Metadata } from "next";
import { Berita } from "~/server/db/schema";
import Link from "next/link";
import { Calendar } from "iconsax-react";
import { format } from "date-fns";
import Image from "next/image";
import DetailBerita from "~/components/common/berita/berita-detail";

interface PageParams {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  const post = await api.berita.getBeritaBySlug({ slug: params.slug });
  return {
    title: post?.judul + " - UPBU Harun Thohir",
    description: post?.summary,
    openGraph: {
      title: post?.judul + " - UPBU Harun Thohir",
      description: post?.summary,
      images: [post?.thumbnail as string],
    },
     twitter: {
      card: "summary_large_image",
      images: [post?.thumbnail as string],
    },
  };
};

export default async function BeritaDetail({params} : PageParams) {
    const beritaItems = await api.berita.getBeritaBySlug({ slug: params.slug });
    const beritaLain = await api.berita.getAll()
  return (
    <>
        <div className=" lg:flex relative pt-28 pb-10 gap-x-10">
          <div className=" max-w-4xl w-full min-w-px">
            <DetailBerita berita={beritaItems || ({} as Berita)} />
          </div>
          <Container>
          <div className=" flex flex-col w-full max-w-sm mt-5">
            <h1 className=" pb-2 border-b font-medium">Berita Terbaru</h1>
            <div className=" flex flex-col gap-x-4 mt-4 gap-y-4">
            {beritaLain?.slice(0, 6).map((berita : any) => (
                <>
                  <div className=" flex w-full items-center justify-start gap-x-4">
                    <div className=" relative w-full aspect-square max-w-20">
                      <Link href={berita?.slug}>
                        <Image
                          src={berita?.thumbnail}
                          alt=""
                          fill
                          className=" w-full h-full object-cover object-center"
                        />
                      </Link>
                    </div>
                    <div className=" flex flex-col">
                      <Link href={berita.slug}>
                        <h1 className=" text-base max-w-full line-clamp-2">
                          {berita.judul}
                        </h1>
                      </Link>
                      <span className=" flex gap-x-1 items-center mt-1">
                        <Calendar size="16" color="#333333" />
                        <p className=" text-xs">
                          {format(berita.tanggal, "PPP")}
                        </p>
                      </span>
                    </div>
                  </div>
                </>
              ))}   
            </div>
          </div>
        </Container>
        </div>
    </>
  );
}
