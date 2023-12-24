import React from "react";
import './App.css';
import {Footer} from './components/Footer'
import {MainHeader} from './components/MainHeader'
import {ShopRouter} from "./router/ShopRouter";
import {ShopContext} from "./context/ShopContext";
import {useProductos} from "./hook/useProductos";
function App() {

    const productos = useProductos();

    return (
      <>

          <ShopContext.Provider value={{productos}}>

              <MainHeader/>
              <ShopRouter/>
              <Footer/>
          </ShopContext.Provider>

      </>
  );
}

export default App;
