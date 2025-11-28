import React from 'react';
import './Footer2.css';
import msg2_icon from '../Img/msg2_icon.png';
import insta_icon from '../Img/insta_icon.png';
import phone_icon2 from '../Img/phone2_icon.png';

const Footer2 = () => {
    return ( <>

        <footer className='footerno'>
        <div className="name_footer_d">
            <p>Nour Elkilany</p>
        </div>

        <div className="d_all_fot_cntn">

            <div className="cntn_f_1">

                <div className="f_email_d">
                    <img src={msg2_icon} alt='msg_icon2' className="emil_icn" />
                    <p className="txt_mil_p">Info@nourelkilany.com</p>
                </div>

                <div className="f_email_d">
                    <img src={insta_icon} alt='insta_icon'  className="ins_icn" />
                    <p className="txt_mil_p">Nourelkilany</p>
                </div>

                <div className="f_email_d">
                    <img src={phone_icon2} alt='phone_icon2' className="ins_icn" />
                    <p className="txt_mil_p">01000110754</p>
                </div>

            </div>

            <div className="cntn_f_2">
                <p>Blog</p>
                <p>Contact me</p>
                <p>Gallery</p>
            </div>


            <div className="cntn_f_2">
                <p>Blog</p>
                <p>Contact me</p>
                <p>Gallery</p>
            </div>
        </div>

        <div className="line_foot">
            <p>NourElkilany2025 . Copyrights </p>
            <p>All rights reserved</p>
        </div>
        </footer>
        
    </> );
}
 
export default Footer2;