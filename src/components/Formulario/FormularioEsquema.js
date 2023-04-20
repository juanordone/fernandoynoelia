import * as yup from "yup"

export const FormularioEsquema = yup.object().shape({
    Nombre: yup.string().required("Obligatorio"),
    Apellidos: yup.string().required("bligatorio"),
    Email: yup.string().required("Obligatorio"),
    Mensaje: yup.string().required("obligatorio")

})