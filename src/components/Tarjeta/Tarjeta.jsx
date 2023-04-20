import "./Tarjeta.css";

export default function Tarjeta() {
  return (
    <>
      <div className="container contenedor d-flex align-items-center justify-content-evenly position-relative flex-wrap mt-5">
        <div className="card d-flex position-relative flex-column mb-5">
          <div className="imgContainer">
            <img src="/ella1.png" />
          </div>
          <div className="content">
            <h2 className="fs-1 fw-bold">Ella</h2>
            <p className="fs-3">
              Noelia es una maestra de inglés en primaria de Málaga, amante de
              la repostería y el vino. Es una persona dedicada y apasionada por
              la enseñanza, con un toque dulce en su vida personal y un gusto
              por disfrutar de una buena copa de vino.
            </p>
          </div>
        </div>
        <div class="card d-flex position-relative flex-column mt-5">
          <div class="imgContainer">
            <img src="/el1.png" />
          </div>
          <div class="content">
            <h2 className="fs-1 fw-bold">El</h2>
            <p className="fs-3">
              Fernando es un banquero malagueño que disfruta de los deportes y
              la cerveza. Social y activo, le encanta pasar tiempo con amigos
              mientras practica sus deportes favoritos. Un hombre 
              que encuentra tiempo para su trabajo, sus amigos y sus hobbies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
