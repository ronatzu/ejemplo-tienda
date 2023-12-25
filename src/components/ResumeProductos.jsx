
import React, { useState } from 'react';
import '../styles/ResumeProductos.css';

export const ResumeProductos = () => {
    const [cantidad, setCantidad] = useState(1);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const eliminarProducto = () => {
        // Lógica para eliminar el producto
    };

    return (
        <div className="resume_productos">
            <div className="resume_productos_imagen">
                <img src='https://bit.ly/3NA1ZJR' alt="Producto"/>
            </div>
            <div className="resume_productos_contenido">
                <div className="resume_productos_detalle">
                    <h3>Nombre: asdas</h3>
                    <p>Precio: fff</p>
                </div>
                <div className="resume_productos_cantidad">
                    <button onClick={disminuirCantidad}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={aumentarCantidad}>+</button>
                </div>
            </div>
            <button onClick={eliminarProducto} className="resume_productos_eliminar">
                Eliminar
            </button>
        </div>
    );
};
