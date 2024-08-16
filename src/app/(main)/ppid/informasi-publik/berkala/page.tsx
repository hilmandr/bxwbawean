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
import { BARJAS, BERKALASUB, INFORMASIBERKALA } from "~/lib/ppid.constant";
import Link from "next/link";
import Image from "next/image";

export default function InformasiBerkala() {
    return (
        <>
            <PpidHeadingTitle>
                <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
                <div className=" w-full h-[480px] bg-blue-950/80 absolute z-0"></div>
                <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
                    <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
                    Informasi Berkala
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
                            {INFORMASIBERKALA.map((berkala) => (
                                <>
                                <TableRow className=" flex-1 w-full items-start">
                                <TableCell className=" border text-center align-top">{berkala.no}</TableCell>
                                <TableCell>
                                    <div className=" flex flex-col w-full gap-y-2">
                                        <h3 className=" text-base font-semibold">{berkala.judul}</h3>
                                        <span className=" text-sm italic">Deskripsi</span>
                                        <p>{berkala.deskripsi}</p>
                                        <Link href={`${berkala.path}`} target="_blank" className=" text-blue-800 font-bold">{berkala.link}</Link>
                                    </div>
                                </TableCell>
                            </TableRow></>
                            ))}
                            {BARJAS.map((barjas) => (
                                <>
                                    <TableRow className=" flex-1 w-full items-start">
                                        <TableCell className=" border text-center align-top">{barjas.no}</TableCell>
                                        <TableCell>
                                            <div className=" flex flex-col w-full gap-y-2">
                                                <h3 className=" text-base font-semibold">{barjas.judul}</h3>
                                                <span className=" text-sm italic">Deskripsi</span>
                                                <p>{barjas.deskripsi}</p>
                                                <div className=" flex  bg-neutral-100 p-6 w-full mt-4">
                                                    <div className=" grid grid-rows-12 grid-flow-col gap-x-8 gap-y-4 w-full">
                                                        {barjas.subDoc?.map((barjasSubDoc, i) => (
                                                            <>
                                                                <div className=" flex w-full" key={i}>
                                                                    <Link href={`${barjasSubDoc.path}`} target="_blank" className=" text-blue-800 font-bold">
                                                                        <p>{i+1}. {barjasSubDoc.docName}</p>
                                                                    </Link>
                                                                </div>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))}
                            {BERKALASUB.map((berkalaSub) => (
                                <>
                                <TableRow className=" flex-1 w-full items-start">
                                <TableCell className=" border text-center align-top">{berkalaSub.no}</TableCell>
                                <TableCell>
                                    <div className=" flex flex-col w-full gap-y-2">
                                        <h3 className=" text-base font-semibold">{berkalaSub.judul}</h3>
                                        <span className=" text-sm italic">Deskripsi</span>
                                        <p>{berkalaSub.deskripsi}</p>
                                        {berkalaSub.subIsi?.map((berkalaSubs) => (
                                            <>
                                            <div className=" flex bg-neutral-100 p-6 gap-x-10 w-full max-w-5xl mt-4">
                                                <div className=" flex w-full max-w-52 aspect-[2.2/3] relative">
                                                    <Image src={`${berkalaSubs.gambar}`} alt="" fill className=" w-full h-full object-cover object-center"></Image>
                                                </div>
                                                <div className=" flex flex-col w-full gap-4">
                                                    <p className=" text-justify">{berkalaSubs.paragraf}</p>
                                                    <Link href={`${berkalaSubs.path}`} target="_blank" className=" text-blue-800 font-bold">{berkalaSubs.link}</Link>   
                                                </div>
                                            </div>
                                            </>
                                        ))}
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