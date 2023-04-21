import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
      
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 ">
          <Link
            to={"/"}
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              
            </svg>
            <span class="fs-1">Noelia & Fernando</span>
          </Link>

          <ul class="nav nav-pills me-5">
            <li class="nav-item">
              <Link to={"/"} class="nav-link fs-3" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/informacion"} class="nav-link fs-3">
              Info
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/contacto"} class="nav-link fs-3">
                Contacto
              </Link>
            </li>
           
            
          </ul>
        </header>
      
    </>
  );
}
