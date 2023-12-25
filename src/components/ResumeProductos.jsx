import React, { useState, useEffect } from 'react';
import '../styles/ResumeProductos.css';

export const ResumeProductos = (props) => {
    const [cantidad, setCantidad] = useState(1);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const claveEncontrada = Object.keys(localStorage).find((key) => key === props.id);
        if (claveEncontrada) {
            setCantidad(parseInt(localStorage.getItem(claveEncontrada), 10) || 1);
        }
    }, [props.id]);

    const actualizarCantidadEnLocalStorage = (nuevaCantidad) => {
        localStorage.setItem(props.id, nuevaCantidad.toString());
    };

    const aumentarCantidad = () => {
        setCantidad((prevCantidad) => {
            const nuevaCantidad = prevCantidad + 1;
            actualizarCantidadEnLocalStorage(nuevaCantidad);
            return nuevaCantidad;
        });
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad((prevCantidad) => {
                const nuevaCantidad = prevCantidad - 1;
                actualizarCantidadEnLocalStorage(nuevaCantidad);
                return nuevaCantidad;
            });
        }
    };

    const eliminarProducto = () => {
        localStorage.removeItem(props.id);
        setVisible(false);
    };

    return  visible ? (
        <div className="resume_productos">
            <div className="resume_imagen">
                <img src={props.imagen} alt="Producto" />
            </div>
            <div className="resume_contenido">
                <div className="resume_detalle">
                    <h3>{props.nombre}</h3>
                    <p>{props.precio}</p>
                </div>
                <div className="resume_cantidad">
                    <button onClick={disminuirCantidad}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={aumentarCantidad}>+</button>
                </div>
            </div>
            <button onClick={eliminarProducto} className="resume_eliminar">
                Eliminar
            </button>
        </div>
    ):null;
};
