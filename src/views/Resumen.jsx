
import React from 'react';
import { ResumeProductos } from '../components/ResumeProductos';
import '../styles/Resumen.css';

export const Resumen = () => {
    return (
        <div className="resumen">
            <h2 className="resumen__titulo">RESUMEN DE COMPRAS</h2>
            <div className="resumen__contenedor-productos">
                <ResumeProductos />
                <ResumeProductos />
                <ResumeProductos />
                <ResumeProductos />
                <ResumeProductos />

            </div>
            <div className="resumen__boton">
                <button>Continuar con el pago</button>
            </div>
        </div>
    );
};
