import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { bandaraTerdekat } from "~/lib/tentang.constant";


export default function BandaraTerdekat() {
  return (
    <>
      <Table className=" border">
        <TableHeader>
          <TableRow>
            <TableHead>Kode IATA</TableHead>
            <TableHead>Nama Bandara</TableHead>
            <TableHead>Jarak</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bandaraTerdekat.map((data, i) => (
            <>
              <TableRow key={i}>
                <TableCell>{data.iata}</TableCell>
                <TableCell>{data.nama}</TableCell>
                <TableCell>{data.jarak} km</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
