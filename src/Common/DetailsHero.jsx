import React from 'react';
import './DetailsHero.css';

const DetailsHero = (props) => {
    return ( <>
    
    
        <div className="div_hero_chil_det">
        <h1 className="h1_s1_det_chil">{props.title}</h1>
        </div>
        <div className="div2_hero_chil_det">
            <p>{props.title1}</p>
            <p>{props.title2}</p>
        </div>

        <div className="hero_chil_img_d">
            <img src={props.img} alt='linename' />
            <div  className="hero_chil_img_div_extra">
            <img src={props.img1} className="hero_chil_img" alt='graph3' />
            </div>
            <img src={props.img} alt='linename' />
        </div>

    
    </>

    );
}
 
export default DetailsHero;