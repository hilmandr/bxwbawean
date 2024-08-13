import Image from "next/image";
import Container from "~/components/common/container";
import PpidHeadingTitle from "~/components/common/heading-ppid";

export default function MaklumatLayanan() {
    return (
        <>
            <PpidHeadingTitle>
                <div className=" flex flex-col w-full h-[480px] items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
                    <div className=" w-full h-[480px] bg-blue-950/80 absolute z-0"></div>
                    <div className=" flex flex-col w-full items-center justify-center z-10 mt-10">
                        <h1 className="text-white lg:text-5xl text-3xl font-semibold max-w-sm text-center lg:max-w-full">
                        Maklumat Pelayanan & Standar Biaya
                        </h1>
                        <p className=" text-white mt-2 text-center lg:text-base text-sm max-w-md lg:max-w-full">
                        
                        </p>
                    </div>
                </div>
            </PpidHeadingTitle>
            <Container className=" lg:px-16 py-10 items-center justify-center flex flex-col w-full gap-y-10">
                <div className=" flex w-full max-w-4xl items-center justify-center relative aspect-[4.2/3]">
                    <Image src="/images/ppid/maklumat-layanan.jpg" alt="" fill className=" w-full h-full object-cover object-center"/>
                </div>
                <div className=" flex w-full max-w-4xl items-center justify-center relative aspect-[4.2/3]">
                    <Image src="/images/ppid/standar-biaya.jpg" alt="" fill className=" w-full h-full object-cover object-center"/>
                </div>
            </Container>
        </>
    )
}