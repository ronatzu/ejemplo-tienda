import React from 'react';
import {Link} from 'react-router-dom';
import Logo_generico from '../imagen/Logo_generico.webp';
import '../styles/MainHeader.css';
import { Buscador } from "./Buscador";
import { Carrito } from "./Carrito";

export const MainHeader = () => {


    return (
        <header className='header'>
            <div className='header_container'>
                <div className='header_logo'>
                    <Link to={'/'}>
                        <img src={Logo_generico} alt="Logo"/>
                    </Link>
                </div>
                <div className="header_buscador">
                    <Buscador />
                </div>
                <div className="header_carrito">
                    <Carrito />
                </div>
            </div>
        </header>
    );
};
