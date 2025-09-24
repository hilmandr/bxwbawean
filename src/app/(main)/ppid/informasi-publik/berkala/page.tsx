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
import { BARJAS, BERKALASUB, INFORMASIBERKALA } from "~/lib/ppid.constant";
import Link from "next/link";
import Image from "next/image";

export default function InformasiBerkala() {
  return (
    <>
      <PpidHeadingTitle>
        <div className="flex h-[480px] w-full flex-col items-center justify-center bg-[url('/images/banner.JPG')] bg-cover bg-bottom">
          <div className="absolute z-0 h-[480px] w-full bg-blue-950/80"></div>
          <div className="z-10 mt-10 flex w-full flex-col items-center justify-center">
            <h1 className="max-w-sm text-center text-3xl font-semibold text-white lg:max-w-full lg:text-5xl">
              Informasi Berkala
            </h1>
            <p className="mt-2 max-w-md text-center text-sm text-white lg:max-w-full lg:text-base"></p>
          </div>
        </div>
      </PpidHeadingTitle>
      <Container className="py-10 lg:px-16">
        <div>
          <Table className="border">
            <TableHeader>
              <TableRow className="text-lg font-bold">
                <TableHead className="w-14 border text-center">#</TableHead>
                <TableHead>Judul</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {INFORMASIBERKALA.map((berkala) => (
                <>
                  <TableRow className="w-full flex-1 items-start">
                    <TableCell className="border text-center align-top">
                      {berkala.no}
                    </TableCell>
                    <TableCell>
                      <div className="flex w-full flex-col gap-y-2">
                        <h3 className="text-base font-semibold">
                          {berkala.judul}
                        </h3>
                        <span className="text-sm italic">Deskripsi</span>
                        <p>{berkala.deskripsi}</p>
                        <div className="flex w-full flex-col-reverse">
                          {berkala.subLink?.map((subDoc) => (
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
              {BARJAS.map((barjas) => (
                <>
                  <TableRow className="w-full flex-1 items-start">
                    <TableCell className="border text-center align-top">
                      {barjas.no}
                    </TableCell>
                    <TableCell>
                      <div className="flex w-full flex-col gap-y-2">
                        <h3 className="text-base font-semibold">
                          {barjas.judul}
                        </h3>
                        <span className="text-sm italic">Deskripsi</span>
                        <p>{barjas.deskripsi}</p>
                        <div className="mt-4 flex w-full bg-neutral-100 p-6">
                          <div className="grid w-full grid-flow-col grid-rows-12 gap-x-8 gap-y-4">
                            {barjas.subDoc?.map((barjasSubDoc, i) => (
                              <>
                                <div className="flex w-full" key={i}>
                                  <Link
                                    href={`${barjasSubDoc.path}`}
                                    target="_blank"
                                    className="font-bold text-blue-800"
                                  >
                                    <p>
                                      {i + 1}. {barjasSubDoc.docName}
                                    </p>
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
                  <TableRow className="w-full flex-1 items-start">
                    <TableCell className="border text-center align-top">
                      {berkalaSub.no}
                    </TableCell>
                    <TableCell>
                      <div className="flex w-full flex-col gap-y-2">
                        <h3 className="text-base font-semibold">
                          {berkalaSub.judul}
                        </h3>
                        <span className="text-sm italic">Deskripsi</span>
                        <p>{berkalaSub.deskripsi}</p>
                        {berkalaSub.subIsi?.map((berkalaSubs) => (
                          <>
                            <div className="mt-4 flex w-full max-w-5xl gap-x-10 bg-neutral-100 p-6">
                              <div className="relative flex aspect-[2.2/3] w-full max-w-52">
                                <Image
                                  src={`${berkalaSubs.gambar}`}
                                  alt=""
                                  fill
                                  className="h-full w-full object-cover object-center"
                                ></Image>
                              </div>
                              <div className="flex w-full flex-col gap-4">
                                <p className="text-justify">
                                  {berkalaSubs.paragraf}
                                </p>
                                <Link
                                  href={`${berkalaSubs.path}`}
                                  target="_blank"
                                  className="font-bold text-blue-800"
                                >
                                  {berkalaSubs.link}
                                </Link>
                              </div>
                            </div>
                          </>
                        ))}
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
