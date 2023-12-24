import Carrito_compra from '../imagen/Carrito_compra.webp'
import '../styles/Carrito.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import {useContext} from "react";
export const Carrito=()=>{
    const {carrocompras} = useContext(ShopContext);
    console.log(carrocompras.contador)
    return (
        <div className="carrito">
            <Link to={'/'}>
                <img src={Carrito_compra} alt="carrito compras" width="32" height="32"/>
                {carrocompras.contador> 0 && (
                    <span className="contador_carrito">{carrocompras.contador}</span>
                )}
            </Link>
        </div>
    );
};