import React from "react";
import './App.css';
import {Footer} from './components/Footer'
import {MainHeader} from './components/MainHeader'

import {ShopRouter} from "./router/ShopRouter";
import {ShopContext} from "./context/ShopContext";
import {NuevoProduct} from "./components/NuevoProducto";
function App() {
  return (
      <>


          <MainHeader/>

                <NuevoProduct/>


          <Footer/>

      </>
  );
}

export default App;
