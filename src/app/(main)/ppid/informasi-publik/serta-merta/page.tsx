import Container from "~/components/common/container";
import PpidHeadingTitle from "~/components/common/heading-ppid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { BERKALASUB, INFORMASIBERKALA, INFSERTAMERTA } from "~/lib/ppid.constant";
import Link from "next/link";
import Image from "next/image";

export default function InformasiSertaMerta() {
    return (
        <>
            <PpidHeadingTitle>
                <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
                <div className=" w-full h-[480px] bg-blue-950/80 absolute z-0"></div>
                <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
                    <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
                    Informasi Serta Merta
                    </h1>
                    <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-full">
                    
                    </p>
                </div>
                </div>
            </PpidHeadingTitle>
            <Container className=" lg:px-16 py-10">
                <div>
                    <Table className=" border">
                        <TableHeader>
                            <TableRow className=" font-bold text-lg">
                                <TableHead className=" w-14 border text-center">#</TableHead>
                                <TableHead>Judul</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {INFSERTAMERTA.map((sertaMerta) => (
                                <>
                                <TableRow className=" flex-1 w-full items-start">
                                <TableCell className=" border text-center">{sertaMerta.no}</TableCell>
                                <TableCell>
                                    <div className=" flex flex-col w-full gap-y-2">
                                        <h3 className=" text-base font-semibold">{sertaMerta.judul}</h3>
                                        <span className=" text-sm italic">Deskripsi</span>
                                        <p>{sertaMerta.deskripsi}</p>
                                        <Link href={`${sertaMerta.path}`} target="_blank" className=" text-blue-800 font-bold">{sertaMerta.link}</Link>
                                    </div>
                                </TableCell>
                            </TableRow></>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Container>
        </>
    )
}