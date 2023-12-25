import React, { useContext } from 'react';
import { ResumeProductos } from '../components/ResumeProductos';
import '../styles/Resumen.css';
import { ShopContext } from '../context/ShopContext';

export const Resumen = () => {
    const { productos } = useContext(ShopContext);
    const productos_almacenados = Object.keys(localStorage);

    return (
        <div className="resumen">
            <h2 className="resumen__titulo">RESUMEN DE COMPRAS</h2>
            <div className="resumen__contenedor-productos">
                {productos_almacenados.map((clave) => {
                    // Buscar el producto en el array productos usando la clave
                    const producto = productos.find((p) => p.id === clave);

                    return producto && (
                        <ResumeProductos
                            key={producto.body}
                            id={producto.id}
                            imagen={producto.imagen}
                            nombre={producto.nombre}
                            precio={producto.precio}
                        />
                    );
                })}
            </div>
            <div className="resumen__boton">
                <button>Continuar con el pago</button>
            </div>
        </div>
    );
};
