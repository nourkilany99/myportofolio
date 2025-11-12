import React from 'react';
import './Graphic.css';
import Nav2 from '../Components/Nav2';
import ReachBtn2 from '../Common/ReachBtn2';
import arow from '../Img/Vector.png'


const Graphic = () => {
    return ( <>

        <div className='div_header'>
        <Nav2 />
        <ReachBtn2 title='Websites' img={arow} />
        </div>

        <div class="walk">
        <p>Home</p>
        <p>{">"}</p>
        <p>Graphic designs</p>
        <p>{">"}</p>
        <p>Posters</p>
    </div>

     </>);
}
 
export default Graphic;