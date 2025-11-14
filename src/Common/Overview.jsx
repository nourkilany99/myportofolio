import React, { Component } from 'react';
import './Overview.css';

const Overview = (props) => {
    return ( <>

     

        <div className="d1_det_chil_d2">

            <p1 className="prj_overview">Project Overview</p1>

            <p>Designing with intention. Creating with clarity.</p>

            <p className="prj_overview_p1">{props.title}</p>

        </div>

        <div className="d2_det_chil_d2">
            <img src={props.img2} alt='orange' className="width_det_ch" />
            <img src={props.img3} alt='orange2' className="width_det_ch" />
        </div>


    
    
    </>

     );
}
 
export default Overview;