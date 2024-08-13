"use client";
import Link from "next/link";
import Container from "~/components/common/container";

import { Button } from "~/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";
import { Suspense } from "react";
import BeritaTable from "~/components/dashboard/berita/table-berita";
import TablePesan from "~/components/dashboard/kritik-saran/table-kritik-saran";

export default function KritikSaranPageDashboard() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <div className="flex w-full flex-col pt-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center gap-4">
                <div className="">
                  <h1 className="text-lg">Tabel Kritik & Saran Masuk</h1>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Suspense>
                <TablePesan />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
