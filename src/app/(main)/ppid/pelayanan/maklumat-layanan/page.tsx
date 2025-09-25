import Image from "next/image";
import Container from "~/components/common/container";
import PpidHeadingTitle from "~/components/common/heading-ppid";

export default function MaklumatLayanan() {
  return (
    <>
      <PpidHeadingTitle>
        <div className="flex h-[480px] w-full flex-col items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
          <div className="absolute z-0 h-[480px] w-full bg-blue-950/80"></div>
          <div className="z-10 mt-10 flex w-full flex-col items-center justify-center">
            <h1 className="max-w-sm text-center text-3xl font-semibold text-white lg:max-w-full lg:text-5xl">
              Maklumat Pelayanan & Standar Biaya
            </h1>
            <p className="mt-2 max-w-md text-center text-sm text-white lg:max-w-full lg:text-base"></p>
          </div>
        </div>
      </PpidHeadingTitle>
      <Container className="flex w-full flex-col items-center justify-center gap-y-10 py-10 lg:px-16">
        <div className="relative flex aspect-[4.2/3] w-full max-w-4xl items-center justify-center">
          <Image
            src="/images/ppid/Maklumat-Pelayanan.png"
            alt=""
            fill
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative flex aspect-[4.2/3] w-full max-w-4xl items-center justify-center">
          <Image
            src="/images/ppid/Standar-Biaya-Layanan.png"
            alt=""
            fill
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Container>
    </>
  );
}
