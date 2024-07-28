"use client";
import { ArrowRight, Mouse, SearchNormal } from "iconsax-react";

import Link from "next/link";
import React from "react";
import Container from "~/components/common/container";
import DatePicker from "~/components/common/date-picker";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";

export default function DailyReport() {
  return (
    <>
      <div className="flex w-full bg-neutral-100">
        <Container className="px-16">
          <div className="my-10 w-full items-center justify-between space-y-6 lg:flex">
            <div className="text-left">
              <h1 className="text-4xl font-semibold leading-tight">
                Lihat Kegiatan Harian Bandara Harun Thohir
              </h1>
              <p className="mt-2 max-w-2xl text-neutral-500">
                Setiap harinya kami melaporkan kegiatan baik operasional maupun
                non-operasional yang dilakukan. Anda dapat melihatnya sesuai
                dengan tanggal yang anda pilih.
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-end">
              <div className="flex w-full items-center justify-center gap-4">
                <DatePicker />
                <Button
                  variant="default"
                  className="group rounded-full border border-neutral-950 bg-white px-6 text-neutral-900 transition-all delay-0 duration-200 hover:bg-black hover:text-white"
                >
                  <p className="relative left-3 transition-all duration-200 group-hover:left-0 lg:visible">
                    Cari Laporan Kegiatan Harian
                  </p>
                  <SearchNormal
                    size={26}
                    variant="Linear"
                    className="visible lg:hidden"
                  />
                  <ArrowRight
                    size="20"
                    variant="Linear"
                    className="relative left-0 opacity-0 transition-all duration-200 group-hover:left-2 group-hover:opacity-100 lg:visible"
                  />
                </Button>
              </div>
              <Link
                href="/"
                className="fle mt-6 w-full max-w-xl border border-neutral-900 px-4 py-2"
              >
                <Label className="overflow-clip">link</Label>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
