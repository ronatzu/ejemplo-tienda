
import '../styles/MainHeader.css'
import {Buscador} from "./Buscador";
import {Carrito} from "./Carrito";
export  const MainHeader=()=>{
  return(
      <header className='header'>
          <div className='header_container'>
              <div className='header_logo'>
                  <img src="../imagen/Logo_generico.webp" alt="Logo"/>
              </div>
              <div className="header_buscador">
                  <Buscador/>
              </div>
              <div className="header_carrito">
                  <Carrito/>
              </div>
          </div>

</header>
);
};