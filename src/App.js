import React, {useState} from "react";
import './App.css';
import {Footer} from './components/Footer'
import {MainHeader} from './components/MainHeader'
import {ShopRouter} from "./router/ShopRouter";
import {ShopContext} from "./context/ShopContext";
import {useProductos} from "./hook/useProductos";
function App() {

    const productos = useProductos();
    const [carrocompras,setCarroCompras]=useState(0);

    return (
      <>
          <ShopContext.Provider value={{productos,carrocompras,setCarroCompras}}>
                  <MainHeader/>
                  <ShopRouter/>
                  <Footer/>
          </ShopContext.Provider>

      </>
  );
}

export default App;
