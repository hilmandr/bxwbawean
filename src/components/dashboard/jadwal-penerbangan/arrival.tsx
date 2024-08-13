"use client";

import Link from "next/link";
import { format, getTime } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {  JadwalPenerbangan } from "~/server/db/schema";
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
import { Edit, Trash, Warning2 } from "iconsax-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import BasePagination from "~/components/common/base-pagination";


export default function ArrivalTable() {
  const [selectedArr, setSelectedArr] = useState<JadwalPenerbangan | undefined>(
    undefined,
  );
  const [showDilaog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = (arr: JadwalPenerbangan) => {
    setShowDialog((prev) => !prev);
    setSelectedArr(arr);
  };
  const deleteArrMutation = api.jadwal.deleteDeparture.useMutation({
    onSuccess: () => {
      toast.success("Delete Project Success!");
      refetch();
    },
  });

  const handleArr = useCallback(
    (id: string) => {
      if (selectedArr) {
        deleteArrMutation.mutate({ id: selectedArr.id });
      }
    },
    [deleteArrMutation, selectedArr],
  );

  // state
  const [searchArr, setSearchArr] = useState("");

  const debounceSearch = useDebounce(searchArr, 500);

  // query
  const { data: arrivals, refetch } = api.jadwal.getArrival.useQuery({
    search: debounceSearch,
  });

  // pagination
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      <div className="my-5 flex w-full items-end justify-start space-x-3">
        <div><Link href="/dashboard/jadwal-penerbangan/arrival"  className=" bg-blue-200 h-1 flex items-end">Arrival</Link></div>
        <div className=" w-[1px] h-5 bg-neutral-900 flex"></div>
        <div className=""><Link href="/dashboard/jadwal-penerbangan/departure" className=" bg-transparent h-1 flex items-end">Departure</Link></div>
      </div>
     <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <p className=" pl-2">No</p>
                </TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Jam</TableHead>
                <TableHead>Dari</TableHead>
                <TableHead>Maskapai</TableHead>
              </TableRow>
            </TableHeader>
            {arrivals?.length === 0 ? (
              <>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={6} className=" text-center">
                      Tidak data untuk ditampilkan.
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </>
            ) : (
              <>
                {arrivals?.slice((page - 1) * 9, page * 9)
                  .map((arrs, i) => (
                    <>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <p className=" pl-2">{i + 1}</p>
                          </TableCell>
                          <TableCell>{format(arrs.tanggal, "PPP")}</TableCell>
                          <TableCell>{arrs.jam} WIB</TableCell>
                          <TableCell>{arrs.kota}</TableCell>
                          <TableCell>{arrs.maskapai}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              onClick={() => handleShowDialog(arrs)}
                              className=" flex items-center justify-start left-0"
                            >
                              <Trash color="red" variant="Bold" size={20} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      <Dialog open={showDilaog} onOpenChange={setShowDialog}>
                        <DialogContent className="items-center justify-center sm:max-w-[425px]">
                          <div className="flex w-full flex-col items-center justify-center space-y-4 py-2">
                            <DialogHeader className="items-center justify-center">
                              <DialogTitle>
                                <Warning2 size="56" color="#3a3a3a" variant="Bold" />
                              </DialogTitle>
                              <DialogDescription className="flex flex-col items-center justify-center">
                                <p className="text-lg text-slate-900">
                                  Hapus Jadwal Penerbangan
                                </p>
                                <p>Anda yakin akan menghapus jadwal ini?</p>
                                <p>Data yang sudah dihapus tidak dapat dipulihkan</p>
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex w-full items-center justify-center gap-4">
                              <DialogClose asChild>
                                <Button className="w-28" variant="outline">
                                  Tidak
                                </Button>
                              </DialogClose>
                              <DialogClose asChild>

                              <Button
                                
                                className="w-28 cursor-pointer"
                                onClick={() => handleArr(arrs.id)}
                                variant="destructive"
                                >
                                <span>Ya</span>
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
        <BasePagination totalCount={arrivals?.length} />
      </div>
    </>
  );
}
