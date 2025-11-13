import React from 'react';
import './Hero_cat.css';
import heroveccat from '../Img/hero_vector_cat.png';

const Hero_cat = (props) => {
    return ( <>

        <section className="s1_web">

        <div className="s1_d1_web">
            <div className="extra_mini_pix">
            <img src={props.img} alt='graph1' className="mini_pix" />
            </div>
            <p className="hero_web_page">{props.title}</p>
        </div>

        <div className="s1_d2_web">
            <p className="exp_p">{props.title2}</p>
            <div className="extra2_mini_pix">
            <img src={props.img2} alt='graph2' className="mini_pix" />
            </div>
        </div>

        <img src={heroveccat} alt='hero_vec_cat' className='vector_hero_cat' />



        </section>

    </>);
}
 
export default Hero_cat;