import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "../views/NotFound";
import {Productos} from "../views/Productos";
import {DetallesProducto} from "../views/DetallesProducto";

export const ShopRouter =()=>{
    return(

            <Routes>
                <Route path="/" element={<Productos />}/>
                <Route path="/Productos" element={<Productos />}/>
                <Route path="/Producto/:productid" element={<DetallesProducto />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>

    );
};
