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
} from "~/components/ui/table";
import {
  BERKALASUB,
  INFORMASIBERKALA,
  INFSETIAPSAAT,
} from "~/lib/ppid.constant";
import Link from "next/link";
import Image from "next/image";

export default function InformasiSetiapSaat() {
  return (
    <>
      <PpidHeadingTitle>
        <div className="flex h-[480px] w-full flex-col items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
          <div className="absolute z-0 h-[480px] w-full bg-blue-950/80"></div>
          <div className="z-10 mt-10 flex w-full flex-col items-center justify-center">
            <h1 className="max-w-sm text-center text-3xl font-semibold text-white lg:max-w-full lg:text-5xl">
              Informasi Setiap Saat
            </h1>
            <p className="mt-2 max-w-md text-center text-sm text-white lg:max-w-full lg:text-base"></p>
          </div>
        </div>
      </PpidHeadingTitle>
      <Container className="py-10 lg:px-16">
        <div>
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-blue-950 text-lg font-bold hover:bg-blue-950">
                <TableHead className="w-14 border text-center text-neutral-50">
                  #
                </TableHead>
                <TableHead className="text-neutral-50">Judul</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {INFSETIAPSAAT.map((setiapSaat) => (
                <>
                  <TableRow className="w-full flex-1 items-start">
                    <TableCell className="border text-center">
                      {setiapSaat.no}
                    </TableCell>
                    <TableCell>
                      <div className="flex w-full flex-col gap-y-2">
                        <h3 className="text-base font-semibold">
                          {setiapSaat.judul}
                        </h3>
                        <span className="text-sm italic">Deskripsi</span>
                        <p>{setiapSaat.deskripsi}</p>
                        <div className="flex w-full flex-col-reverse">
                          {setiapSaat.subLink?.map((subDoc) => (
                            <>
                              <Link
                                href={`${subDoc.path}`}
                                target="_blank"
                                className="font-bold text-blue-800"
                              >
                                {subDoc.link}
                              </Link>
                            </>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </>
  );
}
