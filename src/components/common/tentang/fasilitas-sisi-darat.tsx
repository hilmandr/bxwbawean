import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { fasilitasSisiDarat } from "~/lib/tentang.constant";
export default function FasilitasSisiDarat() {
  return (
    <>
      <div>
        <h1 className=" font-semibold py-2">Gedung Terminal</h1>
        <Table className="">
          <TableHeader className="">
            <TableRow className=" flex flex-col hover:bg-white">
              {fasilitasSisiDarat.map((detail, i) => (
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
    </>
  );
}
