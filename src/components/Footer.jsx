import '../styles/Footer.css'
import { Link } from 'react-router-dom';
export const Footer=()=>{
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_section">
                    <h3 className="footer_titulo">Contacto</h3>
                    <p className="footer_info">Correo: info@info.com</p>
                    <p className="footer_info">Teléfono: (+593) 999999999</p>
                </div>
                <div className="footer_section">
                    <h3 className="footer_title">Enlaces</h3>
                    <ul className="footer_list">
                        <li className="footer_item"><Link to="/" className="footer_link">Inicio</Link></li>
                        <li className="footer_item"><Link to="/productos" className="footer_link">Productos</Link></li>
                        <li className="footer_item"><Link to="/nosotros" className="footer_link">Nosotros</Link></li>
                        <li className="footer_item"><Link to="/contacto" className="footer_link">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer_section">
                    <h3 className="footer_title">Redes Sociales</h3>
                    <ul className="footer_list">
                        <li className="footer_item"><a href="https://facebook.com" target="_blank"
                                                       rel="noopener noreferrer" className="footer_link">Facebook</a>
                        </li>
                        <li className="footer_item"><a href="https://twitter.com" target="_blank"
                                                        rel="noopener noreferrer" className="footer_link">Twitter</a>
                        </li>
                        <li className="footer_item"><a href="https://instagram.com" target="_blank"
                                                        rel="noopener noreferrer" className="footer_link">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_bottom">
                <p className="footer_copy"> Franda Online. Todos los derechos
                    reservados.</p>
            </div>
        </footer>

    );
};