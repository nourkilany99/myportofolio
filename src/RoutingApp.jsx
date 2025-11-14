import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Graphic from './Pages/Graphic';
import ProjectDetails from './Pages/ProjectDetails';

const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Graphic' element={<Graphic />} />
            <Route path='/Graphic/ProjectDetails' element={<ProjectDetails />} />
        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;