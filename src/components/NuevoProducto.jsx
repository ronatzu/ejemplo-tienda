import React, { useContext } from 'react';
import {Productos} from "./Productos"
import '../styles/NuevoProduct.css'
import {ShopContext} from "../context/ShopContext";
import {Link} from 'react-router-dom'
export const NuevoProduct=()=>{
    const { productos } = useContext(ShopContext);

    return(
        <>
            <ul className="Nuevo">
                {productos.map((producto) => (
                    <Link to={`/Producto/${producto.id}`} key={producto.id} >
                        <Productos
                            key={producto.body}
                            imagen={producto.imagen}
                            categoria={producto.categoria}
                            nombre={producto.nombre}
                            empresa={producto.empresa}
                            descripcion_corta={producto.descripcion_corta}
                            precio={producto.precio}
                        />
                    </Link> ))}
            </ul>
        </>

    );
};