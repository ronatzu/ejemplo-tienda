import Carrito_compra from '../imagen/Carrito_compra.webp';
import '../styles/Carrito.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useContext, useEffect, useState } from 'react';

export const Carrito = () => {
    const { carrocompras } = useContext(ShopContext);
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const handleLocalStorageChange = () => {
            const localStorageKeys = Object.keys(localStorage);
            const nuevoContador = localStorageKeys.length;
            setContador(nuevoContador);
        };

        window.addEventListener('storage', handleLocalStorageChange);

        handleLocalStorageChange();

        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    }, [carrocompras]);

    return (
        <div className="carrito">
            <Link to={'/Resumen'}>
                <img src={Carrito_compra} alt="carrito compras" width="32" height="32" />
                {contador > 0 && <span className="contador_carrito">{contador}</span>}
            </Link>
        </div>
    );
};
