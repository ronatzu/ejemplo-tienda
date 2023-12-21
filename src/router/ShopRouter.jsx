import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "../views/NotFound";
import {Inicio} from "../views/Inicio";

export const ShopRouter =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>

    );
};