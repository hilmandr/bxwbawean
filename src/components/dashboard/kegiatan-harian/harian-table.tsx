"use client";

import Link from "next/link";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { LaporanHarian } from "~/server/db/schema";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { useSearchParams } from "next/navigation";
import useDebounce from "~/hooks/use-debounce";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Edit, Eye, Trash, Warning2 } from "iconsax-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import BasePagination from "~/components/common/base-pagination";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "~/components/ui/calendar";
import React from "react";


export default function KegiatanHarianTable() {
  const [selectedLaporan, setSelectedLaporan] = useState<LaporanHarian | undefined>(
    undefined,
  );
  const [showDilaog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = (laporan: LaporanHarian) => {
    setShowDialog((prev) => !prev);
    setSelectedLaporan(laporan);
  };

  const deleteLaporanMutation = api.laporan.deleteLaporanHarian.useMutation({
    onSuccess: () => {
      toast.success("Laporan Kegiatan Harian Telah Dihapus");
      refetch();
    },
  });

  const handleLaporan = useCallback(
    (id: string) => {
      if (selectedLaporan) {
        deleteLaporanMutation.mutate({id: selectedLaporan.id})
      }
    },
    [deleteLaporanMutation, selectedLaporan],
  );

  // state
  const [searchLaporan, setSearchLaporan] = useState("");
  const [tanggal, setTanggal] = React.useState<Date | undefined>(undefined);

  const debounceSearch = useDebounce(searchLaporan, 500);

  // query
  const { data: laporans, refetch } = api.laporan.getLaporanHarian.useQuery({
    search: debounceSearch,
    created_at: tanggal,
  });

  // pagination
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      <div className="my-5 flex w-80">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-[240px] pl-3 text-left font-normal",
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
     <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <p className=" pl-2">No</p>
                </TableHead>
                <TableHead>Tanggal Publish</TableHead>
                <TableHead>Link Laporan Kegiatan Harian</TableHead>
                <TableHead>{""}</TableHead>
              </TableRow>
            </TableHeader>
            {laporans?.length === 0 ? (
              <>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={6} className=" text-center">
                      Tidak data laporan untuk ditampilkan.
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </>
            ) : (
              <>
                {laporans?.slice((page - 1) * 9, page * 9)
                  .map((laporanItems, i) => (
                    <>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <p className=" pl-2">{i + 1}</p>
                          </TableCell>

                          {/* <TableCell>Tes</TableCell> */}
                          <TableCell>{format(laporanItems.tanggal, "PP")}</TableCell>
                          <TableCell>{laporanItems.link}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
                              <DropdownMenuContent className=" bg-white flex flex-col w-full items-start justify-start">
                                <DropdownMenuLabel>
                                  Pilih Action
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className=" w-full flex items-start justify-start">
                                  <Button
                                    asChild
                                    className=" h8 w-full flex items-center justify-start"
                                    variant="ghost"
                                  >
                                    <Link
                                       href={laporanItems.link}
                                       target="_blank"
                                      className=" flex gap-2 w-full items-center justify-start"
                                    >
                                      <Eye size={16} /> <p>Lihat</p>
                                    </Link>
                                  </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem className=" w-full flex items-start justify-start">
                                  <Button
                                    variant="destructive"
                                    onClick={() => handleShowDialog(laporanItems)}
                                    className=" flex gap-2 items-center justify-start left-0 w-full"
                                  >
                                    <Trash fill="red" size={16} />
                                    <p>Hapus</p>
                                  </Button>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      <Dialog open={showDilaog} onOpenChange={setShowDialog}>
                        <DialogContent>
                          <div className=" flex w-full flex-col items-center justify-center space-y-4 py-2">
                            <DialogHeader className=" flex flex-col w-full items-center justify-center">
                              <DialogTitle>
                                <Warning2 size="56" color="#3a3a3a" variant="Bold" />
                              </DialogTitle>
                              <DialogDescription>
                                <p className="text-lg text-slate-900 text-center">Hapus Laporan Kegiatan Harian</p>
                                <p className=" text-center">Anda yakin akan menghapus laporan ini?</p>
                                <p className=" text-center">Data yang sudah dihapus tidak dapat dipulihkan</p>
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex w-full items-center justify-center gap-4">
                              <DialogClose asChild>
                                <Button className=" w-28" variant={"outline"}>
                                  Tidak
                                </Button>
                              </DialogClose>
                              <DialogClose>
                                <Button
                                
                                className=" w-28 cursor-pointer"
                                onClick={() => handleLaporan(laporanItems.id)}
                                variant={"destructive"}>
                                    Ya
                                </Button>
                              </DialogClose>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  ))}
              </>
            )}
          </Table>
      <div className="mt-4 mb-6 flex w-full">
        <BasePagination totalCount={laporans?.length} />
      </div>
    </>
  );
}
