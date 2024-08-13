
import { Table, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { detailBandarUdara1, detailBandarUdara2 } from "~/lib/tentang.constant";

export default function DetailBandara() {
  return (
    <>
      <div className=" grid lg:grid-cols-2 w-full gap-x-5">
        <div className=" flex w-full">
          <Table className="">
            <TableHeader className="">
              <TableRow className=" flex flex-col hover:bg-white">
                {detailBandarUdara1.map((detail, i) => (
                  <>
                    <TableCell className=" flex w-full py-2 px-4 gap-x-2 border-t border-b hover:bg-slate-100">
                      <p className=" min-w-60">{detail.ket}</p>
                      <p>{detail.semicolon}</p>
                      <p className=" font-semibold">{detail.isi}</p>
                    </TableCell>
                  </>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <div className=" flex w-full">
          <Table className="">
            <TableHeader className="">
              <TableRow className=" flex flex-col hover:bg-white">
                {detailBandarUdara2.map((detail, i) => (
                  <>
                    <TableCell className=" flex w-full py-2 px-4 gap-x-2 border-t border-b hover:bg-slate-100">
                      <p className=" min-w-60">{detail.ket}</p>
                      <p>{detail.semicolon}</p>
                      <p className=" font-semibold">{detail.isi}</p>
                    </TableCell>
                  </>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </div>
    </>
  );
}
