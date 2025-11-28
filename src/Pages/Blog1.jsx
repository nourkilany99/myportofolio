import React from 'react';
import './Blog1.css';
import Nav from '../Components/Nav';
import Line from '../Common/Line';
import HeroNSub from '../Common/HeroN&Sub';
import Letter from '../Img/letter.svg';
import Footer2 from '../Components/Footer2';

const Blog1 = () => {
    return (<>

    <Nav />
    <Line />
    <HeroNSub title={<> UI/UX Problems <br/><br/> Blog</>} title2={<>Blog 001 <br/> 20 Dec 2024</>}/>

    <section className='sec_letter'>
        <img src={Letter} alt='letter' className='letter' />
    </section>

    <Footer2 />

    </>);
}
 
export default Blog1;
