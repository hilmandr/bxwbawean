"use client";

import Container from "~/components/common/container";
import { Suspense } from "react";
import KegiatanHarianTable from "~/components/dashboard/kegiatan-harian/harian-table";
import InputKegiatanHarian from "~/components/dashboard/kegiatan-harian/dialog-input-harian";

export default function KegiatanHarianPageDashboard() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <div className="flex w-full flex-col pt-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center gap-4">
                <div className="">
                  <h1 className="text-lg">Tabel Laporan Kegiatan Harian</h1>
                </div>
                <div>
                    <InputKegiatanHarian/>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Suspense>
                <KegiatanHarianTable />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}