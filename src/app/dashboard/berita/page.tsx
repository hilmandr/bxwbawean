"use client";
import Link from "next/link";
import Container from "~/components/common/container";

import { Button } from "~/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";
import { Suspense } from "react";
import BeritaTable from "~/components/dashboard/berita/table-berita";
import { AddCircle } from "iconsax-react";

export default function BeritaPageDashboard() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <div className="flex w-full flex-col pt-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center gap-4">
                <div className="">
                  <h1 className="text-lg font-bold">Tabel Unggahan Berita & Kegiatan</h1>
                </div>
                <div className="">
                  <Button asChild className="h-10 w-full">
                    <Link href="/dashboard/berita/input" className="gap-2">
                      <AddCircle /> <p>Tambahkan</p>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Suspense>
                <BeritaTable />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
