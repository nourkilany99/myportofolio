import React from 'react';
import './CardCatg.css'


const CardCatg  = (props) => {
    return ( 
        <>

        <div className='div_card_categ'>
            <img className='card_catg_img' src={props.img} alt='card_img'/>

            <div className='card_cntnt_all'>
                <p className='p_catg'>{props.title1}</p>
            </div>
        </div>
        

        </>
     );
}
 
export default CardCatg;