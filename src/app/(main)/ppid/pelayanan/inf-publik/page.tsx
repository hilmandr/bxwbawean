import Link from "next/link";
import Image from "next/image";
import Container from "~/components/common/container";
import PpidHeadingTitle from "~/components/common/heading-ppid";
import { Button } from "~/components/ui/button";

export default function PermohonanInformasiPublik() {
    return (
        <>
            <PpidHeadingTitle>
                <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
                    <div className=" w-full h-[480px] bg-blue-950/80 absolute z-0"></div>
                    <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
                        <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
                        Permohonan Informasi Publik
                        </h1>
                        <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-full">
                        
                        </p>
                    </div>
                </div>
            </PpidHeadingTitle>
            <Container className=" lg:px-16 py-10 items-center justify-center flex flex-col w-full">
                <div className=" flex w-full max-w-4xl items-center justify-center relative aspect-[4.1/3]">
                    <Image src="/images/ppid/permohonan-inf-publik.png" alt="" fill className=" w-full h-full object-cover object-center"/>
                </div>
                <Link href="/pdf/1. Formulir permohonan informasi.docx" target="_blank" className=" mt-4">
                    <Button>Unduh Formulir Permohonan Informasi</Button>
                </Link>
            </Container>
        </>
    )
}