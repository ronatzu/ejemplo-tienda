import React from "react";
import './App.css';
import {Footer} from './components/Footer'
import {MainHeader} from './components/MainHeader'

import {ShopRouter} from "./router/ShopRouter";
import {ShopContext} from "./context/ShopContext";
function App() {
  return (
      <>

          <MainHeader/>
          <Footer/>


      </>
  );
}

export default App;
