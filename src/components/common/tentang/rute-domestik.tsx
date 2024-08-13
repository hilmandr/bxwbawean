import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { ruteDomestik } from "~/lib/tentang.constant";

export default function RuteDomestik() {
  return (
    <>
      <div>
        <Table className=" border">
          <TableHeader>
            <TableRow>
              <TableHead>Keberangkatan</TableHead>
              <TableHead>Kedatangan</TableHead>
              <TableHead>Maskapai Penerbangan</TableHead>
              <TableHead>Tipe Pesawat</TableHead>
              <TableHead>Frekuensi Per Minggu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ruteDomestik.map((data, i) => (
              <>
                <TableRow key={i}>
                  <TableCell>{data.keberangkatan}</TableCell>
                  <TableCell>{data.kedatangan}</TableCell>
                  <TableCell>{data.maskapai}</TableCell>
                  <TableCell>{data.tipeAc}</TableCell>
                  <TableCell>{data.frekuensi}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
