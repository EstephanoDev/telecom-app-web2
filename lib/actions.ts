'use server'

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FORM_API, LOCAL_URL } from "./db";

export const addForm = async (formData: FormData): Promise<void> => {
  try {
    // Convertir formData a un objeto
    const formObject = Object.fromEntries(formData);

    console.log(formObject)
    // Crear una nueva instancia de la clase Form (si existe)
    // Realizar la solicitud POST con Axios

  } catch (error) {
    // Manejar errores, por ejemplo, lanzar una excepción o realizar algún registro
    console.error("Error al agregar formulario:", error);
    throw new Error("Error al agregar formulario");
  }
  revalidatePath("/Formularios")
  redirect("/Formularios")

  // This line will be reached after the try-catch block
};

export const deleteForm = async (formData: FormData) => {
  const formId = formData.get('id')
  try {
    await axios.delete(`${LOCAL_URL}/${FORM_API}/${formId}`)
  } catch (error) {
    console.error('Error al eliminar Formulario', error)
    throw new Error("Error Al Eliminar Fomulario")
  }
  revalidatePath('/dashboard/formularios')
  redirect('/dashboard/formularios')
}
export const EditForm = async (formData: FormData) => {
  const formId = formData.get('id') || undefined
  const Ubicacion = formData.get('Ubicacion') || undefined
  const TipoTrabajo = formData.get('TipoTrabajo') || undefined
  const TrabajoRealizado = formData.get('TrabajoRealizado') || undefined
  const Observacion = formData.get('Observacion') || undefined
  const data = { Ubicacion: Ubicacion, TipoTrabajo: TipoTrabajo, TrabajoRealizado: TrabajoRealizado, Observacion: Observacion }
  try {
    await axios.patch(`${LOCAL_URL}/${FORM_API}/${formId}`, data)
  } catch (e) {
    console.error('Error al Editer Formulario')
    throw new Error("Error al editar Fomulario")
  }
  revalidatePath('/dashboard/formularios')
  redirect('/dashboard/formularios')
}
