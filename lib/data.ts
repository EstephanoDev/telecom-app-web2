import axios from "axios";
import { CARP_API, FILE_API, FORM_API, LOCAL_URL, UBIS_API, pb } from "./db"

export const cards = [
  {
    id: 1,
    title: "Formularios enviados",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "RD Semanal",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "DP Semanal",
    number: 6.642,
    change: 18,
  },
];

export const fetchForms = async (workerId: string) => {
  try {
    const records = await pb.collection('Formulario').getList(1, 50, {
      filter: "Trabajador='6ibspqnkozxup3p'"
    })
    console.log(records)
    return records.items
  } catch (error) {
    console.error('error al fetch Forms', error)
  }
}
export const fetchUbis = async () => {
  try {
    const records = await axios.get(`${LOCAL_URL}/${UBIS_API}`)
    return records.data.items
  } catch (error) {
    console.error('Error al fetch Ubicacion:', error)

  }
}

export const fetchFiles = async () => {
  try {
    const records = await axios.get(`${LOCAL_URL}/${FILE_API}`)
    return records.data.items
  } catch (e) {
    console.error('Error al fetch Files:', e)

  }
}
export const fetchCarp = async () => {
  try {
    const records = await axios.get(`${LOCAL_URL}/${CARP_API}`)
    return records.data.items

  } catch (e) {
    console.error('Error al fetch Files:', e)

  }
}
export const fetchForm = async (id: string) => {
  const records = await axios.get(`${LOCAL_URL}/${FORM_API}/${id}`)
  return records.data
}
