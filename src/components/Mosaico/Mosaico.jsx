import "./Mosaico.css";
export default function Mosaico() {
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <img class="img-fluid" src="./fotomosaico1.png" />
              </div>
              <div class="col-md-6 col-sm-6">
                <img class="img-fluid" src="./fotomosaico2.png" />
              </div>
              <div class="col-md-12 mt-3">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <img class="img-fluid" src="./fotomosaico3.png" />
                  </div>
                  <div class="col-md-6  col-sm-6">
                    <img class="img-fluid" src="./fotomosaico4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img class="imagengrande" src="./fotomosaico5.png" />
          </div>
        </div>
      </div>
    </>
  );
}
