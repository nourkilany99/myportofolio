import React from 'react';
import './Graphic.css';
import Nav2 from '../Components/Nav2';
import ReachBtn2 from '../Common/ReachBtn2';
import arow from '../Img/Vector.png';
import Walk from '../Common/Walk';
import Herocat from '../Common/Hero_cat';
import graph1 from '../Img/graph1.jpg';
import graph2 from '../Img/graph2.jpg';
import Lastproject from '../Common/Lastproject';
import graph4 from '../Img/graph4.jpg';
import Vector43 from '../Img/Vector 43.png';
import AllProjects from '../Common/AllProjects';
import lineaboutname from '../Img/line about name.png';
import graph5 from '../Img/graph5.jpg';
import graph6 from '../Img/graph6.jpg';
import graph7 from '../Img/graph7.jpg';
import Footer from '../Components/Footer'




const Graphic = () => {
    return ( <>

        <div className='div_header'>
        <Nav2 />
        <ReachBtn2 title='Websites' img={arow} />
        </div>

        <div className='walk_div'>
            <Walk title1='Home' title2='Graphic design' title3='Rebranding' slash='>' />
        </div>

        <div className='hero_div_cat'>
        <Herocat title={<>Graphic designs PROJECTS <br/>— INSPIRED BY  “DESIGN”<br/>FOR </>} img={graph1} title2='EXPERIENCE N.A™ 2025.' img2={graph2} />
        </div>

        <div className='s2_web'>
        <Lastproject title='Last project' title1={<>'Designing with intention.'</>} img1={graph4} img2={graph1} title2={<>I’m a multidisciplinary<br/>designer with a<br/>background </>} img3={Vector43} title3={<>I’m a multidisciplinary designer<br/>with a background in fashion and a focus<br/>on UI/UX and frontend design.</>} />
        </div>.

        <section className="s3_web">
        <AllProjects title='All Graphic designs' img={lineaboutname} title1='1.Research' title2='2.Inspo' title3='3.Mood board' title4='4.Final design' img1={graph5} img2={graph6} img3={graph7} img4={graph1} />
        </section>

        <Footer />

     </>);
}
 
export default Graphic;