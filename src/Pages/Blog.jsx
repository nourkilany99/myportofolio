import React from 'react';
import './Blog.css';
import Nav from '../Components/Nav';
import Line from '../Common/Line';
import HeroNSub from '../Common/HeroN&Sub';
import Footer from '../Components/Footer';




const Blog = () => {
    return ( <>

    <Nav />
    <Line />
    <HeroNSub title='Blog' title2='A space where I share ideas, tips, and design discoveries — from usability principles to personal reflections.' />
    <section className='btns_blog_s'>

        <button className='btn_blog'>UI/UX Problems</button>
        <button className='btn_blog'>Sides of the UI/UX</button>
        <button className='btn_blog'>Tips from designer to designer</button>
        <button className='btn_blog'>Favorite quote</button>

    </section>
    <Line />
    
    <div className='blog1_card'>
        <div className='blog1_card_cntn'>
            <p className='date_card_blog'>20 Dec 2024</p>
            <h1>What are the UI/UX Problems?</h1>
        </div>
    </div>

    <Line />

    <div className='two_blog_d'>

        <div className='blog2_card'>
        <div className='blog1_card_cntn'>
            <p className='date_card_blog'>20 Dec 2024</p>
            <h1>Sides of the UI/UX</h1>
        </div>
        </div>

        <div className='blog3_card'>
        <div className='blog1_card_cntn'>
            <p className='date_card_blog'>20 Dec 2024</p>
            <h1>Tips from designer <br/> to designer</h1>
        </div>
        </div>

    </div>

    <Line />

    <div className='blog4_card'>
        <div className='blog1_card_cntn'>
            <p className='date_card_blog'>20 Dec 2024</p>
            <h1>Favorite quote</h1>
        </div>
    </div>

    <Footer />
    
    

    </>);
}
 
export default Blog;