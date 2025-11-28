import React from 'react';
import './Contact.css';
import HeroNSub from '../Common/HeroN&Sub';
import Nav from '../Components/Nav';
import Line from '../Common/Line'
import ContactForm from '../Common/ContactForm';
import Insta_icon from '../Img/instagram.svg';
import link_icon from '../Img/linkedin.svg';
import beh_icon from '../Img/devicon_behance.svg';
import Footer2 from '../Components/Footer2';
import map from '../Img/map.svg';


const Contact = () => {
    return ( 
        <>
        <Nav />

        <HeroNSub title='Contact me' title2='Whether it’s a product, an experience, or a fresh visual direction, I’m ready to bring your vision to life. Reach out anytime.'/>
        <Line />

        <section className='all_contact_s'>

        <ContactForm />

        <hr className='contact_hr'></hr>

        <section className='socials_sec'>

            <div className='insta_div'>
                <img src={Insta_icon} alt='insta_icon' />
                <p>Instagram</p>
            </div>

             <div className='link_div'>
                <img src={link_icon} alt='insta_icon' />
                <p>Instagram</p>
            </div>

             <div className='be_div'>
                <img src={beh_icon} alt='insta_icon' />
                <p>Instagram</p>
            </div>

            <div className='info_add_f'>
                <p>01000110754</p>
                <p>info@nourelkilany.com</p>
                <p>583 madinaty ,4rth park view 223442</p>
            </div>
            
        </section>

        </section>

        <div className='map_div'>
            <img src={map} alt='map' className='map' />
        </div>

        <Footer2/>


        </>
     );
}
 
export default Contact;