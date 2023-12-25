import '../styles/DetallesProducto.css';
import React, { useContext,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useLocalStorage } from '../hook/useLocalStorage';

export const DetallesProducto = () => {
    const { productid } = useParams();
    const { productos, setCarroCompras } = useContext(ShopContext);
    const product = productos.find(p => p.id === productid);
    const [countClic, setContador] = useLocalStorage(productid, 0);
    const [sumaTotalClics, setSumaTotalClics] = useState(0);

    // Efecto para actualizar la suma total cada vez que cambie countClic
    useEffect(() => {
        // Obtener todos los valores almacenados en localStorage
        const valoresLocalStorage = Object.values(localStorage);
        console.log(valoresLocalStorage);

        // Convertir los valores a números y sumarlos
        const suma = valoresLocalStorage.reduce((acumulador, valor) => acumulador + parseInt(valor, 10), 0);

        // Actualizar la suma total
        setSumaTotalClics(suma);
    }, [countClic]);

const keys = Object.keys(localStorage);
console.log('Claves en localStorage:', keys);


    const Comprar = () => {
        console.log(`Se hizo clic en Comprar. Cantidad de clics: ${countClic}, ID de la ruta: ${productid}`);
        setContador(prevCount => prevCount + 1);
        setCarroCompras({
            id: productid,
            contador: sumaTotalClics
        });
    };

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
