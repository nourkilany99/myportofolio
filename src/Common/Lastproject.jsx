import React from 'react';
import './Lastproject.css';
import lineabout from '../Img/line about name.png';
import {Link} from 'react-router-dom';




const Lastproject = (props) => {
    return ( <>

        <div className="hero_txt_s2_web">
            <p className="h_lst_prj">{props.title}</p>
            <p className="p_lst_prj">{props.title1}</p>
        </div>

        <div className="hero_d_s2_web">
            <img src={lineabout} alt='lineabout' className="line_prj" />
            <img src={props.img1} alt='graph4' className="web_prj_b1" />
            <img src={props.img2}  alt='graph1' className="web_prj_b2" />
            <p className="web_prj_b3">{props.title2}</p>
        </div>

        <div className="hero_d2_s2_web">
            <p className="date_w1">2024</p>
            <img src={props.img3} alt='vector43' className="line_rotate" />
            <p className="p_w1">{props.title3}</p>
            <Link to="ProjectDetails" ><p className="btn_exp_wb">Explore project</p></Link>
        </div>
        
       
     </>);
}
 
export default Lastproject;