import { AddCircle } from "iconsax-react";
import Link from "next/link";
import { Suspense } from "react";
import Container from "~/components/common/container";
import DepartureTable from "~/components/dashboard/jadwal-penerbangan/departure";
import InputJadwal from "~/components/dashboard/jadwal-penerbangan/input";
import { Button } from "~/components/ui/button";

export default function Departure() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <div className="flex w-full flex-col pt-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center gap-4">
                <div className="">
                  <h1 className="text-lg font-bold">Jadwal Penerbangan Perintis UPBU Harun Thohir - Gresik</h1>
                </div>
                <div className="">
                  <InputJadwal/>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Suspense>
                <DepartureTable/>
              </Suspense>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}