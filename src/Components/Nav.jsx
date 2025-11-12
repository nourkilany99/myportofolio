import React from 'react';
import logo from '../Img/logo.png';
import './Nav.css'

const Nav = () => {
    return ( 
        <div className='all_nav'>

            <div className='logo_div'>
                <img className='logo' src={logo} alt='logo' />
            </div>

            <div className='nav_cntnt_div'>
                <p>Portfolio</p>
                <p>UI/UX blog</p>
                <p>About me</p>
                <p>Services</p>
            </div>

        </div>
     );
}
 
export default Nav;