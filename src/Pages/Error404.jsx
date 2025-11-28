import React from 'react';
import logoall from '../Img/logoAll.png';
import menu_brgr from '../Img/burgermenu.png';
import lostimg from '../Img/lostimg.png';
import './Error.css';

const Error404 = () => {
    return ( <>

        <section className='errorSec'>
            <img src={logoall} alt='logoall' className='logoerror'/>
            <img src={menu_brgr} alt='menuburgr' />
        </section>

        <section className="s_lost">
            <h1 className="lost_h">Lost???</h1>
            <img src={lostimg} className="errorimg" alt='lost' />
            <p className="lost_p">You were just <span className="lost_h">Found</span></p>
            <button className="btn_home">Back to Home</button>
        </section>

</>
     );
}
 
export default Error404 ;