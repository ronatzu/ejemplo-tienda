
import React from 'react';
import '../styles/Contacto.css';

export const Contacto = () => {
    return (
        <div className="contacto_container">
            <h1 className="contacto_title">Contáctanos</h1>
            <p className="contacto_text">
                ¡Estamos aquí para ayudarte! Si tienes alguna pregunta, comentario o simplemente quieres saludar, no
                dudes en
                ponerte en contacto con nosotros.
            </p>
            <form className="contacto_form">
                <label htmlFor="contacto_form_nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>

                <label htmlFor="contacto_form_email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="contacto_form_mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" readOnly={false}></textarea>

                <button type="submit">Enviar Mensaje</button>
            </form>
        </div>
    );
};


