'use client'

import { fetchForms } from "@/lib/data"
import { pb } from "@/lib/db"
import styles from '@/app/ui/dashboard/products/products.module.css'
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import Search from '@/app/ui/dashboard/search/search'
import { deleteForm } from "@/lib/actions"

function FormTable() {
  const workerId = pb.authStore.model?.id
  const { data, error, isLoading } = useQuery({
    queryKey: ['formularios', workerId],
    queryFn: () => fetchForms(workerId)
  })
  if (isLoading) return 'Loading...'
  if (error) return 'Error...'
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/formularios/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Fecha</td>
            <td>Grupo</td>
            <td>TipoTrabajo</td>
            <td>TrabajoRealizado</td>
            <td>Ubicacion</td>
            <td>Observacion</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
            <tr key={product.id}>
              <td>{product.Fecha?.toString().slice(4, 16)}</td>
              <td>{product.Grupo}</td>
              <td>{product.TipoTrabajo}</td>
              <td>{product.TrabajoRealizado}m</td>
              <td>{product.Ubicacion}</td>
              <td>{product.Observacion}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/formularios/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteForm}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FormTable
