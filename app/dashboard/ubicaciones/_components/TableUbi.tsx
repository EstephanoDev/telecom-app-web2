'use client'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { fetchUbis } from '@/lib/data';
import { Coordinates } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

const TableUbi = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["ubicacion"],
    queryFn: fetchUbis
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Latitud</TableCell>
            <TableCell>Longitud</TableCell>
            <TableCell>Descripcion</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((ubis: Coordinates) => (
            <TableRow key={ubis.id}>
              <TableCell>{ubis.latitud}</TableCell>
              <TableCell>{ubis.longitud}</TableCell>
              <TableCell>{ubis.Descripcion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default TableUbi
