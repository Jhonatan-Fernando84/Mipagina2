import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {HeaderComponte} from "./Componentes/Header/HeaderComponte"
import Producto from "./Componentes/Producto/ProductoComponente"
import Servicios from "./Componentes/Servicio/Servicios"
import Home from "./Componentes/Home/Home"
import { ContactoComponente } from "./Componentes/Contacto/ContactoComponente"
import FooterComponente from "./Componentes/Footer/FooterComponente"

const AppFarmacia = () => {
  return (
    <>
       <Router>
            <header>
                <HeaderComponte/>
            </header>
            <main className="contenedor">
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/productos" element={<Producto/>}/>
                    <Route path="/servicios" element={<Servicios/>}/>
                    <Route path="/contacto" element={<ContactoComponente/>}/>
                </Routes>
            </main>
            <footer>
                <FooterComponente/>
            </footer>
        </Router>
    </>
  )
}

export default AppFarmacia
