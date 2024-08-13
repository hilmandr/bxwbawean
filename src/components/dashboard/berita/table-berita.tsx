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
import { Berita } from "~/server/db/schema";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { useSearchParams } from "next/navigation";
import useDebounce from "~/hooks/use-debounce";
import { Input } from "~/components/ui/input";
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

export default function BeritaTable() {
  const [selectedBerita, setSelectedBerita] = useState<Berita | undefined>(
    undefined,
  );
  const [showDilaog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = (berita: Berita) => {
    setShowDialog((prev) => !prev);
    setSelectedBerita(berita);
  };
  const deleteBeritaMutation = api.berita.deleteBerita.useMutation({
    onSuccess: () => {
      toast.success("Delete Project Success!");
      refetch();
    },
  });

  const handleBerita = useCallback(
    (id: string) => {
      deleteBeritaMutation.mutate({ id });
    },
    [deleteBeritaMutation],
  );

  // state
  const [searchBerita, setSearchBerita] = useState("");

  const debounceSearch = useDebounce(searchBerita, 500);

  // query
  const { data: beritas, refetch } = api.berita.getBeritaItems.useQuery({
    search: debounceSearch,
  });

  // pagination
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      <div className="my-5 flex w-80">
        <Input
          type="search"
          placeholder="Cari judul berita..."
          value={searchBerita}
          onChange={(e) => setSearchBerita(e.target.value)}
        />
      </div>
     <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <p className=" pl-2">No</p>
                </TableHead>
                <TableHead>Judul Berita</TableHead>
                <TableHead>Tanggal Publish</TableHead>
                <TableHead>Penulis</TableHead>
                <TableHead>{""}</TableHead>
              </TableRow>
            </TableHeader>
            {beritas?.length === 0 ? (
              <>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={6} className=" text-center">
                      Tidak data berita untuk ditampilkan.
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </>
            ) : (
              <>
                {beritas?.slice((page - 1) * 9, page * 9)
                  .map((beritaItems, i) => (
                    <>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <p className=" pl-2">{i + 1}</p>
                          </TableCell>
                          <TableCell>{beritaItems.judul}</TableCell>
                          <TableCell>{format(beritaItems.tanggal, "PPP")}</TableCell>
                          <TableCell>{beritaItems.penulis}</TableCell>
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
                                      href={`/dashboard/berita/${beritaItems.slug}`}
                                      className=" flex gap-2 w-full items-center justify-start"
                                    >
                                      <Eye size={16} /> <p>Lihat</p>
                                    </Link>
                                  </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem className=" w-full flex items-start justify-start">
                                  <Button
                                    asChild
                                    className=" h-8 w-full flex items-center justify-start"
                                    variant="ghost"
                                  >
                                    <Link
                                      href={`/dashboard/berita/${beritaItems.slug}/edit`}
                                      className=" flex gap-2 w-full items-center justify-start"
                                    >
                                      <Edit size={16} />
                                      <p>Sunting</p>
                                    </Link>
                                  </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem className=" w-full flex items-start justify-start">
                                  <Button
                                    variant="destructive"
                                    onClick={() => handleShowDialog(beritaItems)}
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
                        <DialogContent className="items-center justify-center sm:max-w-[425px]">
                          <div className=" flex w-full flex-col items-center justify-center space-y-4 py-2">
                            <DialogHeader className="items-center justify-center">
                              <DialogTitle>
                                <Warning2 size="56" color="#3a3a3a" variant="Bold" />
                              </DialogTitle>
                              <DialogDescription className="flex flex-col items-center justify-center text-center">
                                <p className="text-lg text-slate-900">Hapus Berita</p>
                                <p>Anda yakin akan menghapus berita/kegiatan ini?</p>
                                <p>Data yang sudah dihapus tidak dapat dipulihkan</p>
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex w-full items-center justify-center gap-4">
                              <DialogClose asChild>
                                <Button className=" w-28" variant={"outline"}>
                                  Tidak
                                </Button>
                              </DialogClose>
                              <Button
                              
                              className=" w-28 cursor-pointer"
                              onClick={() => handleBerita(beritaItems.id)}
                              variant={"destructive"}>
                                Ya
                              </Button>
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
        <BasePagination totalCount={beritas?.length} />
      </div>
    </>
  );
}
