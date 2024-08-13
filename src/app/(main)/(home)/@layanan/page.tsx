"use client"
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Container from "~/components/common/container";
import { Button } from "~/components/ui/button";
import { HOME_LAYANAN } from "~/lib/constant";

export default function Layanan() {
  const mediaScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
     {mediaScreen ? ( <Container className="px-16">
        <div className="my-10 flex w-full flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold leading-relaxed">
              Layanan Kami
            </h1>
            <p className="max-w-2xl text-neutral-500">
              Kepuasan masyarakat bagi kami adalah nomor satu. Dengan begitu,
              kami akan selalu memberikan hasil yang sesuai ekspektasi di setiap
              layanan yang kami berikan.
            </p>
          </div>
          <div className="mt-10 grid w-full items-start justify-center gap-8 lg:grid-cols-2">
            {HOME_LAYANAN.map((layanan) => (
              <>
                <div className="flex w-full flex-col items-start justify-between gap-6 text-slate-900">
                  <Link
                    href={layanan.path}
                    className="flex aspect-video w-full items-center justify-center bg-neutral-700 transition-all duration-200 hover:scale-105"
                  >
                    <layanan.thumbnail
                      size="150"
                      color="#fafafa"
                      variant="Bulk"
                    />
                  </Link>
                  <div className="flex w-full flex-col justify-start gap-2">
                    <h1 className="font-semibold">{layanan.title}</h1>
                    <p className="text-sm">{layanan.description}</p>
                  </div>
                  <div className="flex w-full items-end gap-4">
                    <Link href={layanan.path}>
                      <Button
                        variant="default"
                        className="group rounded-full items-end border border-neutral-950 bg-white px-6 text-neutral-900 transition-all duration-200 hover:bg-white"
                      >
                        <p className="relative left-3 transition-all duration-200 group-hover:left-0">
                          Lihat Selengkapnya
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
              </>
            ))}
          </div>
        </div>
      </Container>) : ( <Container>
        <div className="my-10 flex w-full flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold leading-relaxed">
              Layanan Kami
            </h1>
            <p className="max-w-2xl text-neutral-500">
              Kepuasan masyarakat bagi kami adalah nomor satu. Dengan begitu,
              kami akan selalu memberikan hasil yang sesuai ekspektasi di setiap
              layanan yang kami berikan.
            </p>
          </div>
          <div className="mt-10 grid w-full items-center justify-center gap-8 lg:grid-cols-2">
            {HOME_LAYANAN.map((layanan) => (
              <>
                <div className="flex w-full flex-col items-center justify-between gap-6 text-slate-900">
                  <Link
                    href=""
                    className="flex aspect-video w-full items-center justify-center bg-neutral-700 transition-all duration-200 hover:scale-105"
                  >
                    <layanan.thumbnail
                      size="150"
                      color="#fafafa"
                      variant="Bulk"
                    />
                  </Link>
                  <div className="flex w-full flex-col justify-start gap-2">
                    <h1 className="font-semibold">{layanan.title}</h1>
                    <p className="text-sm">{layanan.description}</p>
                  </div>
                  <div className="flex w-full items-end gap-4">
                    <Link href={layanan.path}>
                      <Button
                        variant="default"
                        className="group rounded-full border border-neutral-950 bg-white px-6 text-neutral-900 transition-all duration-200 hover:bg-white"
                      >
                        <p className="relative left-3 transition-all duration-200 group-hover:left-0">
                          Lihat Selengkapnya
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
              </>
            ))}
          </div>
        </div>
      </Container>)}
    </>
  );
}
