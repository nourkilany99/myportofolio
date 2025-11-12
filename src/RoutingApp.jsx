import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Graphic from './Pages/Graphic'

const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Graphic' element={<Graphic />} />
        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;