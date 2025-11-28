import React from 'react';
import './ContactForm.css'
import Sendbtn from './Sendbtn';
const ContactForm = () => {
    return ( <>

    <section className='s1_contact_form'>

        <div className='infoPart1'>

            <div className='req1_div'>
                <p className='req1'>First name</p>
                <div className='lineForm_div'>
                <hr className='hr2'></hr>
                </div>
            </div>

            <div className='req1_div'>
                <p className='req1'>Email</p>
                <div className='lineForm_div'>
                <hr className='hr2'></hr>
                </div>
            </div>

        </div>

        <div className='infoPart1'>

            <div className='req1_div'>
                <p className='req1'>Contact number</p>
                <div className='lineForm_div'>
                <hr className='hr2'></hr>
                </div>
            </div>

            <div className='req1_div'>
                <p className='req1'>Subject</p>
                <div className='lineForm_div'>
                <hr className='hr2'></hr>
                </div>
            </div>

        </div>

        <div className='infoPart1'>

            <div className='req1_div2'>
                <p className='req1'>Message..</p>
                <div className='lineForm_div'>
                <hr className='hr2'></hr>
                </div>
            </div>


        </div>

        <Sendbtn />



    </section>
    
    </>
    );
}
 
export default ContactForm;