
import NotFound from "../views/NotFound";
import { Productos } from "../views/Productos";
import { DetallesProducto } from "../views/DetallesProducto";
import { Resumen } from "../views/Resumen";
import { Routes, Route } from 'react-router-dom';
import {Nosotros }from "../views/Nosotros";
import {Contacto} from "../views/Contacto";

export const ShopRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Producto/:productid" element={<DetallesProducto />} />
            <Route path="/Resumen" element={<Resumen />} />
            <Route path="/Nosotros" element={<Nosotros/>} />
            <Route path="/Contacto" element={<Contacto/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
