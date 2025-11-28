import React from 'react';
import './Contact.css';
import HeroNSub from '../Common/HeroN&Sub';
import Nav from '../Components/Nav';
import Line from '../Common/Line'
import ContactForm from '../Common/ContactForm';


const Contact = () => {
    return ( 
        <>
        <Nav />

        <HeroNSub title='Contact me' title2='Whether it’s a product, an experience, or a fresh visual direction, I’m ready to bring your vision to life. Reach out anytime.'/>
        <Line />

        <ContactForm />

        <section>
            
        </section>


        </>
     );
}
 
export default Contact;