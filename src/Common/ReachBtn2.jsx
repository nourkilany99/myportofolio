import React from 'react';
import './ReachBtn.css'

const  ReachBtn2 = (props) => {
    return ( <>
    
    <div className="div_btn2_rch">
        <p>{props.title}</p>
        <img src={props.img} alt='send_icon' />
    </div>

     </>);
}
 
export default ReachBtn2;