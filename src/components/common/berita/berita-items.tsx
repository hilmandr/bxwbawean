"use client";

import Link from "next/link";
import Image from "next/image";
import { Berita } from "~/server/db/schema";
import { ArrowRight } from "iconsax-react";
import { Button } from "../../ui/button";
import { format } from "date-fns";

interface BeritaItemProps {
  beritaItems: Berita[];
}

export default function BeritaItems({ beritaItems }: BeritaItemProps) {
  return (
    <>
      <div className="mt-10 grid w-full gap-8 lg:grid-cols-2">
        {beritaItems.slice(0, 2).map((berita, i) => (
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
                  className="h-full w-full object-cover object-center transition-all duration-200 group-hover:scale-110"
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
    </>
  );
}
