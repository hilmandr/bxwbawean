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
import { JadwalPenerbangan } from "~/server/db/schema";
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
import { Trash, Warning2 } from "iconsax-react";
import BasePagination from "~/components/common/base-pagination";


export default function DepartureTable() {
  const [selectedDeparture, setSelectedDeparture] = useState<JadwalPenerbangan | undefined>(
    undefined,
  );
  const [showDilaog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = (dep: JadwalPenerbangan) => {
    setShowDialog((prev) => !prev);
    setSelectedDeparture(dep);
  };
  const deleteDepMutation = api.jadwal.deleteDeparture.useMutation({
    onSuccess: () => {
      toast.success("Delete Project Success!");
      refetch();
    },
  });

  const handleDep = useCallback(
    (id: string) => {
      if (selectedDeparture) {
        deleteDepMutation.mutate({ id: selectedDeparture.id })
      }
    },
    [deleteDepMutation, selectedDeparture],
  );

  // state
  const [searchDep, setSearchDep] = useState("");

  const debounceSearch = useDebounce(searchDep, 500);

  // query
  const { data: departures, refetch } = api.jadwal.getDeparture.useQuery({
    search: debounceSearch,
  });

  // pagination
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      <div className="my-5 flex w-full items-end justify-start space-x-3">
        <div><Link href="/dashboard/jadwal-penerbangan/arrival"  className=" bg-transparent flex items-end">Arrival</Link></div>
        <div className=" w-[1px] h-5 bg-neutral-900 flex"></div>
        <div className=""><Link href="/dashboard/jadwal-penerbangan/departure" className=" bg-blue-200 h-1 flex items-end">Departure</Link></div>
      </div>
     <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <p className=" pl-2">No</p>
                </TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Jam</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead>Maskapai</TableHead>
              </TableRow>
            </TableHeader>
            {departures?.length === 0 ? (
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
                {departures?.slice((page - 1) * 9, page * 9)
                  .map((deps, i) => (
                    <>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <p className=" pl-2">{i + 1}</p>
                          </TableCell>
                          <TableCell>{format(deps.tanggal, "PPP")}</TableCell>
                          <TableCell>{deps.jam}</TableCell>
                          <TableCell>{deps.kota}</TableCell>
                          <TableCell>{deps.maskapai}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              onClick={() => handleShowDialog(deps)}
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
                                  onClick={() => handleDep(deps.id)}
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
        <BasePagination totalCount={departures?.length} />
      </div>
    </>
  );
}
