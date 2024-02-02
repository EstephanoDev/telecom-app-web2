import { Table, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TableBody } from "@mui/material"

function FilesTable() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Preview</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Creado</TableCell>
            <TableCell>Accion</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Preview</TableCell>
            <TableCell>Archivo1</TableCell>
            <TableCell>PNG</TableCell>
            <TableCell>12-12-2024</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default FilesTable
