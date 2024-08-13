"use client"
import { format } from "date-fns";
import { ArrowRight, Calendar } from "iconsax-react";
import Link from "next/link";
import Image  from "next/image";
import { Berita } from "~/server/db/schema";
import { Button } from "~/components/ui/button";
import BasePagination from "../base-pagination";
import { useSearchParams } from "next/navigation";

interface BeritaItemProps {
  beritaPage: Berita[];
}

export default function BeritaPageItems({beritaPage}: BeritaItemProps) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      <div className="mt-10 grid w-full gap-8 lg:grid-cols-3">
        {beritaPage.slice((page - 1) * 12, page * 12).map((berita, i) => (
          <>
            <div className="flex w-full flex-col shadow-lg" key={i}>
              <Link
                href={`/berita/${berita.slug}`}
                className="group relative flex aspect-video w-full overflow-hidden"
              >
                <Image
                  src={berita.thumbnail as string}
                  alt=""
                  fill
                  className="h-full w-full transition-all object-cover object-center duration-200 group-hover:scale-110"
                />
                ``
              </Link>
              <div className="flex h-60 w-full flex-col justify-between bg-white p-6">
                <Link
                  href={`/berita/${berita.slug}`}
                  className="text-xl font-semibold lg:text-2xl"
                >
                  {berita.judul}
                </Link>
                <div className="flex w-full items-center justify-between">
                  <p className="text-sm text-neutral-600">
                    {format(berita.tanggal, "PPP")}
                  </p>
                  <Link href={`/berita/${berita.slug}`}>
                    <Button
                      variant="default"
                      className="group rounded-full border border-neutral-950 bg-white px-6 text-neutral-900 transition-all duration-200 hover:bg-white"
                    >
                      <p className="relative left-3 transition-all duration-200 group-hover:left-0">
                        Baca Selengkapnya
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
          </>
        ))}
      </div>
      <div className=" mt-4 flex w-full">
        <BasePagination totalCount={beritaPage.length}/>
      </div>
    </>
  )
}