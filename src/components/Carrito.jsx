import Carrito_compra from '../imagen/Carrito_compra.webp';
import '../styles/Carrito.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useContext, useEffect, useState } from 'react';

export const Carrito = () => {
    const { carrocompras } = useContext(ShopContext);
    const [contador, setContador] = useState(0);

    useEffect(() => {
        // Función para manejar cambios en el localStorage
        const handleLocalStorageChange = () => {
            console.log("LocalStorage ha cambiado");
            const localStorageKeys = Object.keys(localStorage);
            const nuevoContador = localStorageKeys.length;
            setContador(nuevoContador);
        };


        // Agrega un evento para escuchar cambios en el localStorage
        window.addEventListener('storage', handleLocalStorageChange);

        // Llama a handleLocalStorageChange para establecer el contador inicial
        handleLocalStorageChange();

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    }, [carrocompras]); // Añade carrocompras como dependencia si también depende de él

    return (
        <div className="carrito">
            <Link to={'/Resumen'}>
                <img src={Carrito_compra} alt="carrito compras" width="32" height="32" />
                {contador > 0 && <span className="contador_carrito">{contador}</span>}
            </Link>
        </div>
    );
};
