import React from 'react';
import './Blog.css';
import Nav from '../Components/Nav';
import Line from '../Common/Line';
import HeroNSub from '../Common/HeroN&Sub'


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
    
    

    </>);
}
 
export default Blog;