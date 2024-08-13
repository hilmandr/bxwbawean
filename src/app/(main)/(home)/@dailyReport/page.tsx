"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Container from "~/components/common/container";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Label } from "~/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import useDebounce from "~/hooks/use-debounce";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export default function DailyReport() {
  const mediaScreen = useMediaQuery("(min-width: 768px)");
  // state
  const [searchLaporan, setSearchLaporan] = useState("");
  const [tanggal, setTanggal] = React.useState<Date | undefined>(undefined);

  const debounceSearch = useDebounce(searchLaporan, 500);

  // query
  const { data: laporans, refetch } = api.laporan.getLaporanHarian.useQuery({
    search: debounceSearch,
    created_at: tanggal,
  });
  return (
    <>
      <div className="flex w-full bg-[url('/images/pengaduan.png')] bg-cover bg-bottom z-0 text-neutral-50 bg-fixed">
        <Container className={cn("", {"px-16":mediaScreen})}>
          <div className="my-10 w-full items-start justify-between space-y-6 lg:space-x-32 space-x-0 lg:flex">
            <div className="text-left">
              <h1 className="text-4xl font-semibold leading-tight">
                Lihat Kegiatan Harian Bandara Harun Thohir
              </h1>
              <p className="mt-2 max-w-6xl text-neutral-100">
                Setiap harinya kami melaporkan kegiatan baik operasional maupun
                non-operasional yang dilakukan. Anda dapat melihatnya sesuai
                dengan tanggal yang anda pilih.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-end">
              <div className="flex w-full items-center justify-start gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-[240px] pl-3 text-left font-normal text-neutral-950",
                      !tanggal && "text-muted-foreground"
                    )}>
                      {tanggal ? (
                        format(tanggal, "PP")
                      ) : (
                        <span>Pilih Tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                    </Button>
                  </PopoverTrigger>   
                  <PopoverContent className=" w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={tanggal}
                      onSelect={setTanggal}
                      disabled={(date) => 
                        date > new Date() ||
                        date < new Date("1900-01-01")
                      }
                    initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              {tanggal ? (
                <>
                  {!laporans ? (
                    <Label className="flex mt-6 w-full max-w-xl border border-neutral-900 bg-white/50 px-4 py-2">
                      <p className="overflow-clip text-sm">Laporan Tidak Tersedia</p>
                    </Label>
                  ) : (
                    <>
                      {laporans?.map((dailyReport) => (
                        <>
                          <Link
                            href={dailyReport.link}
                            className="flex mt-6 w-full max-w-xl border border-neutral-900 bg-white/50 px-4 py-2"
                            target="_blank"
                          >
                            <p className="overflow-clip text-sm">{dailyReport.link}</p>
                          </Link>
                        </>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <Label className="flex mt-6 w-full max-w-xl border border-neutral-900 bg-white/50 px-4 py-2">
                  <p className="overflow-clip text-sm">Silakan Pilih Tanggal</p>
                </Label>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
