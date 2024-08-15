"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import React, { useState } from "react";
import Container from "../container";
import useDebounce from "~/hooks/use-debounce";
import { api } from "~/trpc/react";
import { format } from "date-fns";
import { id } from "date-fns/locale/id";

export default function DeparturesPage() {
  const THeadLg = useMediaQuery("(min-width: 768px)");
  const [searchArr, setSearchArr] = useState("");
  const debounceSearch = useDebounce(searchArr, 500);
  const locale = id;

  const {data: arrivals} = api.jadwal.getArrival.useQuery({
    search: debounceSearch
  })
  return (
    <>
      <Container>
        <div className="my-5 flex w-full items-end justify-start space-x-3">
        <div><Link href="/layanan/penerbangan-perintis/arrival"  className=" bg-blue-200 h-1 flex items-end">Kedatangan</Link></div>
        <div className=" w-[1px] h-5 bg-neutral-900 flex"></div>
        <div className=""><Link href="/layanan/penerbangan-perintis/departure" className=" bg-transparent h-1 flex items-end">Keberangkatan</Link></div>
      </div>
        <div className=" flex flex-col w-full items-center justify-center mb-20">
          <div className=" w-full mt-10">
            <Table>
              <TableCaption>
                Perubahan jadwal penerbangan perintis akan kami informasikan
                melalui media sosial dan website resmi Bandar Udara Harun Thohir
                - Gresik
              </TableCaption>
              {THeadLg && (
                <TableHeader>
                  <TableRow>
                    <TableHead>HARI / TANGGAL</TableHead>
                    <TableHead>JAM KEBERANGKATAN</TableHead>
                    <TableHead>TUJUAN</TableHead>
                    <TableHead>MASKAPAI</TableHead>
                  </TableRow>
                </TableHeader>
              )}
            {arrivals?.length === 0 ? (
                <>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={6} className=" text-center">
                      Tidak data untuk ditampilkan.
                    </TableCell>
                  </TableRow>
                </TableFooter>
                </>
            ) : (
                <>
                {arrivals?.map((arrs, i) => (
                    <>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className=" md:p-0 p-2">
                      {format(arrs.tanggal, "PPPP", {locale})}
                      {!THeadLg && (
                        <>
                          <div>
                            <p>{arrs.jam} WIB</p>
                          </div>
                        </>
                      )}
                    </div>
                  </TableCell>
                  {THeadLg && (
                    <TableCell>
                      <p className=" p-2 bg-slate-200 w-fit">{arrs.jam} WIB</p>
                    </TableCell>
                  )}
                  {!THeadLg && (
                    <>
                      <div className=" flex flex-col p-6">
                        <p className=" font-semibold">{arrs.kota}</p>
                        <p>{arrs.maskapai}</p>
                      </div>
                    </>
                  )}
                  {THeadLg && (
                    <>
                      <TableCell className=" font-semibold">{arrs.kota}</TableCell>
                      <TableCell>{arrs.maskapai}</TableCell>
                    </>
                  )}

                  {/* <TableCell>
                    <Link
                      href=""
                      className=" flex transition-all duration-200 group "
                    >
                      <p className=" left-3 relative group-hover:left-0 transition-all duration-200 ">
                        Detail
                      </p>
                      <ArrowRight
                        size="20"
                        variant="Linear"
                        className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
                      />
                    </Link>
                  </TableCell> */}
                </TableRow>
              </TableBody>
                    </>
                ))}
                </>
            )}
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}
