import '../styles/DetallesProducto.css';
import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


export const DetallesProducto = () => {
    const { productid } = useParams();
    const { productos,setCarroCompras } = useContext(ShopContext);
    const product = productos.find(p => p.id === productid);


    const [compraContador,setContador]=useState(1)

    const Comprar=()=>{
        console.log(`Se hizo clic en Comprar. Cantidad de clics: ${compraContador}, ID de la ruta: ${productid}`);
        setContador(prevCount => prevCount + 1)
        setCarroCompras({
            id: productid,
            contador: compraContador
        });

    }

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="product_detail_container">
            <div className="product_row">
                <div className="product_image">
                    <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className="product_info">
                    <h2>{product.nombre}</h2>
                    <p><strong>Color:</strong> {product.color}</p>
                    <p><strong>Talla:</strong> {product.talla}</p>
                    <button className="comprar_button" onClick={Comprar}>Comprar</button>
                </div>
            </div>

            <div className="product_row">
                <div className="producto_fabricante">
                    <p><strong>Descripción del Fabricante:<br />
                    </strong> {product.descripcion_larga}</p>
                </div>
            </div>
        </div>
    );
};
