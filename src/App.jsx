import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./views/Home/Home";
import Informacion from "./views/Informacion/Informacion";
import Contacto from "./views/Contacto/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="informacion" element={<Informacion/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;