import '../styles/DetallesProducto.css'
import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import {ShopContext} from "../context/ShopContext";
export const DetallesProducto=()=>{

    const { productid } = useParams();
    const { productos} = useContext(ShopContext);
    const product = productos.find(p => p.id === productid);

    console.log(product)
    if (!product) {
        // Manejar el caso en el que el producto no se encuentra
        return <p>Producto no encontrado</p>;
    }
    return (
        <div className="product-detail-container">

            <div className="product-row">
                <div className="product-image">
                    <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className="product-info">
                    <h2>{product.nombre}</h2>
                    <p><strong>Color:</strong> {product.color}</p>
                    <p><strong>Talla:</strong> {product.talla}</p>
                    <button >Comprar</button>
                </div>
            </div>

            <div className="product-row">
                <div className="producto-fabricante">
                    <p><strong>Descripción del Fabricante:<br/>
                    </strong> {product.descripcion_larga}</p>
                </div>
            </div>
        </div>
    );
};