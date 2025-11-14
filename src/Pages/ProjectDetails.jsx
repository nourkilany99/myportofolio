import React from 'react';
import './ProjectDetails.css';
import Nav2 from '../Components/Nav2';
import ReachBtn2 from '../Common/ReachBtn2';
import arow from '../Img/Vector.png';
import Walk from '../Common/Walk';
import DetailsHero from '../Common/DetailsHero';
import linename from '../Img/line about name.png';
import graph3 from '../Img/graph3.jpg';
import Overview from '../Common/Overview';
import orange from '../Img/orange.jpg';
import orange2 from '../Img/orange2.jpg';
import Otheropt from '../Common/Otheropt';
import another_prj1 from '../Img/another_prj1.png';
import another_prj2 from '../Img/another_prj2.png';
import graph1 from '../Img/graph1.jpg';
import vectorr from '../Img/Vector arr.png';
import vectorr2 from '../Img/Vector arr2.png';
import Explore from '../Common/Explore';
import Footer from '../Components/Footer';


const ProjectDetails = () => {
    return ( <>

        <div className='div_header'>
        <Nav2 />
        <ReachBtn2 title='Borio Rebranding' img={arow} />
        </div>

        <div className='walk_div'>
        <Walk title1='Home' title2='Graphic design' title3='Rebranding' slash='>' title4='Borio Rebranding' />
        </div>

        <section className='s1_det_chil'>
            <DetailsHero title='Orange poster Project' title1='Designing with intention. Creating with clarity.' title2='2025' img={linename} img1={graph3} />
        </section>

        <section className='s2_det_chil'>

            <Overview title='I redesigned the font poster with a focus on enhancing designing and visual clarity. The goal was to modernize the interface while keeping the brand’s lively, welcoming identity intact. Through clean layouts, balanced typography, and intuitive navigation, the design makes browsing the menu and placing orders effortless across all devices. The result is a fresh, minimal interface that reflects Chili’s energetic spirit while delivering a smooth, user-centered experience.' img2={orange} img3={orange2} />

        </section>

        <section class="s3_other">

            <Otheropt title='Graphic designs projects' title1='Since 2022' img={another_prj1} img2={graph1} img3={another_prj2} img4={vectorr} img5={vectorr2} title2='Age posters' title3='Designed a clean, intuitive real estate interface focused on seamless property exploration and user trust.' btn='Explore It' />

        </section>

        <section class="s4_end_det">
            <Explore />
        </section>

        <Footer />

     </>);
}
 
export default ProjectDetails;