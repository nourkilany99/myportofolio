import React from 'react';
import './Otheropt.css';

const Otheropt = (props) => {
    return ( 
        <>
    

        <div className="s3_other_d1">
            <p className="web_h_other">{props.title}</p>
            <p>{props.title1}</p>
        </div>

        <div className="s3_other_d2">
            <img src={props.img} alt='another' className="other_prj1" />
            <img  src={props.img2} alt='graph1' className="other_prj3" />
            <img  src={props.img3} alt='another3' className="other_prj1" />
        </div>

        <div className="other_info_div">

            <img src={props.img4} alt='vectorr' className="img_arr_vctr" />
            <div className="infoo_d">
                <p className="p1_infoo">{props.title2}</p>
                <p className="p2_infoo">{props.title3}</p>
                <p className="infoo_btn">{props.btn}</p>
            </div>
            <img src={props.img5} alt='vectorr2' />

        </div>

        
        
        
        </>
     );
}
 
export default Otheropt;