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
import { BERKALASUB, INFORMASIBERKALA, INFSETIAPSAAT } from "~/lib/ppid.constant";
import Link from "next/link";
import Image from "next/image";

export default function InformasiSetiapSaat() {
    return (
        <>
            <PpidHeadingTitle>
                <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
                <div className=" w-full h-[480px] bg-blue-950/80 absolute z-0"></div>
                <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
                    <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
                    Informasi Setiap Saat
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
                            <TableRow className=" font-bold text-lg bg-blue-950 hover:bg-blue-950">
                                <TableHead className=" w-14 border text-center text-neutral-50">#</TableHead>
                                <TableHead className=" text-neutral-50">Judul</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {INFSETIAPSAAT.map((setiapSaat) => (
                                <>
                                <TableRow className=" flex-1 w-full items-start">
                                <TableCell className=" border text-center">{setiapSaat.no}</TableCell>
                                <TableCell>
                                    <div className=" flex flex-col w-full gap-y-2">
                                        <h3 className=" text-base font-semibold">{setiapSaat.judul}</h3>
                                        <span className=" text-sm italic">Deskripsi</span>
                                        <p>{setiapSaat.deskripsi}</p>
                                        <Link href={`${setiapSaat.path}`} target="_blank" className=" text-blue-800 font-bold">{setiapSaat.link}</Link>
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