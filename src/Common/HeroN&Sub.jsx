import React from 'react';
import './HeroN&Sub.css'

const HeroNSub = (props) => {
    return ( <>
    
    <section className='section_hero_n_sub'>
        <h1 className='hero_h_n_sub'>{props.title}</h1>
        <p className='hero_p_n_sub'>{props.title2}</p>
    </section>
    
    
    </>

     );
}
 
export default HeroNSub;