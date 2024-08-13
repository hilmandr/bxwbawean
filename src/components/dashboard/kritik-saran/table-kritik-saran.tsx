import { format } from "date-fns";
import { Eye } from "iconsax-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import useDebounce from "~/hooks/use-debounce";
import { api } from "~/trpc/react";

export default function TablePesan() {
    const [searchPesan, setSearchPesan] = useState("");
    const debounceSearch = useDebounce(searchPesan, 500);

    const {data: pesans} = api.pesan.getPesan.useQuery({
        search: debounceSearch
    })

    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead><p className="pl-2">No</p></TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Nama Pengirim</TableHead>
                        <TableHead>Email Pengirim</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                {pesans?.length === 0 ? (
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5} className=" text-center">
                                Tidak ada data untuk ditampilkan.
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                ) : (
                    <>
                        {pesans?.slice((page - 1) * 9, page * 9)
                        .map((pesanItem, i) => (
                            <>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><p className=" pl-2">{i + 1}</p></TableCell>
                                        <TableCell>{format(pesanItem.tanggal, "PPP")}</TableCell>
                                        <TableCell>{pesanItem.nama}</TableCell>
                                        <TableCell>{pesanItem.email}</TableCell>
                                        <TableCell>
                                            <Dialog>
                                                <DialogTrigger>
                                                    <Eye/>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogTitle>
                                                        Pesan dari : {pesanItem.nama}
                                                    </DialogTitle>
                                                    <DialogDescription className=" text-neutral-950">
                                                        <div className=" flex flex-col w-full">
                                                            <div className=" flex w-full">
                                                                <p className=" min-w-32">Email Pengirim</p>
                                                                <p>: {pesanItem.email}</p>
                                                            </div>
                                                            <div className=" flex w-full">
                                                                <p className=" min-w-32">Tanggal</p>
                                                                <p>: {format(pesanItem.tanggal, "PPP")}</p>
                                                            </div>
                                                            <div className=" flex w-full">
                                                                <p className=" min-w-32">No Telp Pengirim</p>
                                                                <p>: {pesanItem.telepon}</p>
                                                            </div>
                                                            <div className=" flex flex-col w-full mt-2">
                                                                <p>Isi Pesan</p>
                                                                <p>{pesanItem.pesan}</p>
                                                            </div>
                                                        </div>
                                                    </DialogDescription>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </>
                        ))}
                    </>
                )}
            </Table>
        </>
    )
}