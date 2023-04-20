import "./Formulario.css";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { initialValues } from "./utils/form";
import { FormularioEsquema } from "./FormularioEsquema";

export default function Formulario() {
  const {
    values,
    errors,
    touched,

    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: FormularioEsquema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_fl53j4l",
          "template_zof2bpb",
          {
            from_name: `${values.Email} ${values.Mensaje}`,
            reply_to: values.Email,
            Mensaje: values.Mensaje,
          },
          "_eKwt9-o65mTqxiZW"
        )
        .then(
          (response) => {
            alert("Enviado", response.status, response.text);
          },
          (err) => {
            alert("error...", err);
          }
        );
    },
  });

  return (
    <>
      <div className="container  ">
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <div className=" text-center  ">
                    <h1>Confirma tu asistencia</h1>
                  </div>
                  <form id="contact-form" role="form" onSubmit={handleSubmit}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="Nombre">Nombre *</label>
                            <input
                              id="Nombre"
                              type="text"
                              name="Nombre"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Firstname is required."
                              value={values.Nombre}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="Apellidos">Apellidos *</label>
                            <input
                              id="Apellidos"
                              type="text"
                              name="Apellidos"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Lastname is required."
                              value={values.Apellidos}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mt-3">
                          <div className="form-group">
                            <label for="Email">Email *</label>
                            <input
                              id="Email"
                              type="Email"
                              name="Email"
                              className="form-control"
                              placeholder=""
                              required="required"
                              data-error="Valid email is required."
                              value={values.Email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mt-4">
                          <div className="form-group">
                            <label for="Mensaje">Mensaje *</label>
                            <textarea
                              id="Mensaje"
                              name="Mensaje"
                              className="form-control"
                              placeholder="Escribe tu mensaje aqui...."
                              required="required"
                              data-error="Please, leave us a message."
                              value={values.Mensaje}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-12 mt-3">
                          <input
                            type="submit"
                            className="btn btn-primary btn-send "
                            value="Enviar"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
