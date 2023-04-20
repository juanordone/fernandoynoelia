import "./TarjetaInfo.css";

export default function TarjetaInfo() {
  return (
    <div className="fondo">
      <div className="container ">
      <h1 className="fw-bold text-center ">Ceremonia y Celebracion.</h1>
      <div className=" row justify-content-between  mt-5 flex-md-row flex-column ">
        <div className=" col-md-6">
          <h2 className="text-center">Iglesia</h2>
          <p className="fs-4 text-center">Sagrado Corazon</p>
          <div className="mapa-container">
          <iframe
            className="border  border-3  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.6094342181552!2d-4.423722773142718!3d36.721643499835125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7be003b21a1%3A0xb0d83ac64fd24aed!2sIglesia%20del%20Sagrado%20Coraz%C3%B3n!5e0!3m2!1ses!2ses!4v1678992346617!5m2!1ses!2ses"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        <div className="col-md-6 flex-column order-md-2">
          <h2 className="text-center">Celebración</h2>
          <p className="fs-4 text-center">La Casona del Molino</p>
          <div className="mapa-container">
          <iframe
            className="border border-3 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.204499310073!2d-4.23145608442433!3d36.7416621799606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7245ddf8616d51%3A0x9ebcf03be5088112!2sLa%20Casona%20del%20Molino!5e0!3m2!1ses!2ses!4v1678992798642!5m2!1ses!2ses"
            width="100%"
            height="450"
           
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
