import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Graphic from './Pages/Graphic';
import ProjectDetails from './Pages/ProjectDetails';
import ScrollToTop from "./animation/Scrollup";
import Error404 from "./Pages/Error404";
import Portfolio from "./Pages/Portfolio";

const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Graphic' element={<Graphic />} />
            <Route path='/Graphic/:id' element={<ProjectDetails />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;