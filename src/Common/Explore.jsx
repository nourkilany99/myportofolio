import React from 'react';
import './Explore.css';
import graph5 from '../Img/graph5.jpg';
import graph2 from '../Img/graph2.jpg';

const Explore = () => {
    return ( <>

        <div className='div_explore'>
        <img src={graph5} alt='graph5' className='img_explore1' />
        <p className="graph_end_cat"> <span className='spanP'>Focus project</span></p>
        </div>

        <div className='div_explore'>
        <img src={graph2} alt='graph5' className='img_explore1' />
        <p className="graph2_end_cat"> <span className='spanP'>Trape project</span></p>
        </div>

     </>);
}
 
export default Explore;