import { fetchForm } from "@/lib/data"
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import { EditForm } from "@/lib/actions"

const SingleForm = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const form = await fetchForm(id)
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={EditForm} className={styles.form}>
          <input type="hidden" name="id" value={form.id} />
          <label>Tipo Trabajo</label>
          <input type="text" name="TipoTrabajo" placeholder={form.TipoTrabajo} />
          <label>Trabajo Realizado</label>
          <input type="number" name="TrabajoRealizado" placeholder={form.TrabajoRealizado} />
          <label>Ubicacion</label>
          <input type="text" name="Ubicacion" placeholder={form.Ubicacion} />
          <label>Grupo</label>
          <input
            type="text"
            name="color"
            placeholder={form.Grupo || "No"}
          />
          <label>Observacion</label>
          <textarea
            name="desc"
            id="desc"
            placeholder={form.Observacion}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
export default SingleForm
