import React from 'react';
import './Sendbtn.css';
import Send from '../Img/sendIcon.svg';

const Sendbtn = () => {
  return (
    <>
      <button className="sendbtn_div">
        <p>Send</p>
        <img src={Send} alt="send_icon" />
      </button>
    </>
  );
};

export default Sendbtn;