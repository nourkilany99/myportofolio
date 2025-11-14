import React from 'react';
import Nav from '../Components/Nav';
import './Home.css';
import send_icon from '../Img/send icon.png';
import ReachBtn from '../Common/ReachBtn';
import line_about from '../Img/line about name.png';
import hand_hero from '../Img/hand hero.png';
import chilis1_mock from '../Img/chilis1_mock.png';
import chilis1_mock2 from '../Img/chilis1_mock2.png';
import chilis1_mock3 from '../Img/chilis1_mock3.png';
import chilis1_mock4 from '../Img/chilis1_mock4.png';
import purple_arrow from '../Img/purple arrow.png';
import CardCatg from '../Common/CardCatg';
import Borio from '../Img/borio graphic.png';
import ui_img from '../Img/ui ux mock.png';
import motion_img from '../Img/motion graphic .png';
import photo_img from '../Img/photography.png';
import video_img from '../Img/216025093c90c67e30b86cf5ec544ee0.jpg';
import msg_icon from '../Img/msg_icon.png';
import phone_icon from '../Img/phone_icon.png';
import web_icon from '../Img/web_icon.png';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';



const Home = () => {
    return ( <>
        <section className='s1'>
         <Nav />


        <div className="line_div">

            <div className="content_hero">
            <div className="p_hero_1">
                <p className="ui_p_hero">UI/UX<br/>designer</p>
            </div>

            <div className="p_hero_2">
            <p className="name_p_hero">Nour<br/>Elkilany</p>
            </div>

            <div  className="p_hero_3">

            <p className="line_p_hero">Minimal lines<br/>huge difference </p>

            
            <ReachBtn className="div_btn_rch" title="Reach me out" img={send_icon}/>
        
          
            
            </div>

            </div>
        </div>

        </section>


        <section className="s2">

            <div className="s2_d1">
            <p className="about_s2_p">About</p>
            <p className="name_s2_p">Nour<br/>Elkilany</p>
            <img src={line_about} alt='line_about' className="line_under_name" />
            <p className="p_about_hero">I’m a multidisciplinary designer with a background in fashion and a focus on UI/UX and frontend design. My approach combines structure and style — creating digital experiences that feel minimal, modern, and human. Beyond interfaces, I explore 3D modeling, videography, and visual storytelling to bring ideas to life with simplicity and depth.</p>
            </div>

            <div className="s2_d2">
            <p className="about_s2_p2">designer</p>
            <div className="img_des_about">
            <p className="hint_s2_p2">Designing with intention. Creating with clarity.</p>
            <img src={hand_hero} alt='hand_hero' className="img_hnd" />
            </div>
            </div>

        </section>

        <section className="s3">

            <div className="s3_d1">
        
            <img src={chilis1_mock} alt='chilis1_mock' className="chili1_img" />
            
            
            <div class="chili_img1_div">
            <p className="p1_chili_d1">Ongoing<br/>User interface &<br/>user experience project</p>
            </div>
            
            
            <img src={chilis1_mock2} alt='chilis1_mock2' className="chili1_img2" />
            
            </div>

            <div  className="s3_d2">
            

            
            <img src={chilis1_mock3} alt='chilis1_mock3' className="chili1_img3" />
            
            <div className="chili1_img4_div">
            <img src={chilis1_mock4} alt='chilis1_mock4' className="chili1_img4" />
            </div> 

            <div className="last_chili_btn_d">
                
                <p>View project</p>
                <img src={purple_arrow} alt='purple_arrow ' />
             </div>
        </div>
        </section>

        <section className="s4">

            <p>Graphic designer</p>
            <hr className="hr_line" />
            <p>3D modeling </p>
            <hr className="hr_line" />
            <p>video editing</p>
            <hr className="hr_line" />
            <p>UI/UX designer</p>
            <hr className="hr_line" />
            <p>Photography</p>

        </section>

        <section className='s5'>
            <Link to="/Graphic"><CardCatg title1='Graphic design' img={Borio} /></Link>
            <Link to="/Graphic"><CardCatg title1='UI/UX design' img={ui_img} /></Link>
            <Link to="/Graphic"><CardCatg title1='Motion graphic' img={motion_img} /></Link>
            <Link to="/Graphic"><CardCatg title1='Photography' img={photo_img} /></Link>
            <Link to="/Graphic"><CardCatg title1='Videography' img={video_img} /></Link>
        </section>

        <section className="s6">

        <div className="form_contact_d">
            <p className="cntct">Contact me</p>

            <div className="cntct_1">
                <img src={msg_icon} alt='msg_icon' />
                <p>Info@nourelkilany.com</p>
            </div>

            <div className="cntct_1">
                <img src={phone_icon} alt='phone_icon' />
                <p>01000110754</p>
            </div>

            <div className="cntct_1">
                 <img src={web_icon} alt='web_icon' />
                <p>nourelkilany.com</p>
            </div>

             <div className="cntct_1">
                <p>Till we meet again</p>
            </div>
        </div>

        </section>

        <Footer />


     </>);
}
 
export default Home;