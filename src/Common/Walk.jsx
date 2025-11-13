import React from 'react';
import './Walk.css';

const Walk = (props) => {
    return (
        <div class="walk">
        <p>{props.title1}</p>
        <p>{props.slash}</p>
        <p>{props.title2}</p>
        <p>{props.slash}</p>
        <p>{props.title3}</p>
        <p>{props.slash}</p>
        <p>{props.title4}</p>
        </div>
      );
}
 
export default Walk;