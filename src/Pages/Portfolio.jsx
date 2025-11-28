import React from 'react';
import './Portfolio.css';
import Nav from '../Components/Nav';
import ScrollStack, { ScrollStackItem } from '../animation/ScrollStack';
import Footer2 from '../Components/Footer2'



const Portfolio = () => {
    return ( <>

    <Nav/>

    <div className='line1_div'>
     <hr className='hr2'></hr>
    </div>

    <div className='div1_port' >
    <h1 className='port_page_h'>Nour Elkilany Portfolio</h1>
    <p className='port_page_date'>Since 2022</p>
    </div>

     <section className="stack-section" style={{ height: "100vh" }}>
        <ScrollStack>
        <ScrollStackItem >
            <div className='ux_cntnt_folder'>
            <h2 className='ux_card'>UI / UX <br/>DESIGNS</h2>
            <div>
            <hr className='hr_card'></hr>
            </div>
            <div className='date_info_card'>
            <p>22 Dec 2024</p>
            <p>UI/UX projects selected focused on usability, clarity, and thoughtful visual design.</p>
            </div>
            </div>
        </ScrollStackItem>

        <ScrollStackItem >
            <div className='ux_cntnt_folder'>
            <h2 className='ux_card'>GRAPHIC<br/>DESIGNS</h2>
            <div>
            <hr className='hr_card'></hr>
            </div>
            <div className='date_info_card'>
            <p>22 Dec 2024</p>
            <p>UI/UX projects selected focused on usability, clarity, and thoughtful visual design.</p>
            </div>
            </div>
        </ScrollStackItem>

        <ScrollStackItem >
            <div className='ux_cntnt_folder'>
            <h2 className='ux_card'>MOTION<br/>GRAPHICS</h2>
            <div>
            <hr className='hr_card'></hr>
            </div>
            <div className='date_info_card'>
            <p>22 Dec 2024</p>
            <p>UI/UX projects selected focused on usability, clarity, and thoughtful visual design.</p>
            </div>
            </div>
        </ScrollStackItem>


        <ScrollStackItem >
            <div className='ux_cntnt_folder'>
            <h2 className='ux_card'>UI / UX <br/>DESIGNS</h2>
            <div>
            <hr className='hr_card'></hr>
            </div>
            <div className='date_info_card'>
            <p>22 Dec 2024</p>
            <p>UI/UX projects selected focused on usability, clarity, and thoughtful visual design.</p>
            </div>
            </div>
        </ScrollStackItem>

        <ScrollStackItem >
            <div className='ux_cntnt_folder'>
            <h2 className='ux_card'>UI / UX <br/>DESIGNS</h2>
            <div>
            <hr className='hr_card'></hr>
            </div>
            <div className='date_info_card'>
            <p>22 Dec 2024</p>
            <p>UI/UX projects selected focused on usability, clarity, and thoughtful visual design.</p>
            </div>
            </div>
        </ScrollStackItem>





        </ScrollStack>
      </section>

      <Footer2 />



    </>);
}
 
export default Portfolio;