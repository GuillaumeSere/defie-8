import React, { useState } from 'react'
import './home.css'
import hero1 from '../images/desktop-image-hero-1.jpg'
import hero1mobile from '../images/mobile-image-hero-1.jpg'
import hero2 from '../images/desktop-image-hero-2.jpg'
import hero2mobile from '../images/mobile-image-hero-2.jpg'
import hero3 from '../images/desktop-image-hero-3.jpg'
import hero3mobile from '../images/mobile-image-hero-3.jpg'
import dark from '../images/image-about-dark.jpg'
import light from '../images/image-about-light.jpg'
import arrow from '../images/icon-arrow.svg'
import left from '../images/icon-angle-left.svg'
import right from '../images/icon-angle-right.svg'

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: hero1,
            alt: 'hero 1',
            mobileSrc: hero1mobile,
            text: ' Discover innovative ways to decorate',
            description: 'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a roomin your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
            src: hero2,
            alt: 'hero 2',
            mobileSrc: hero2mobile,
            text: 'We are available all across the globe',
            description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            src: hero3,
            alt: 'hero 3',
            mobileSrc: hero3mobile,
            text: 'Manufactured with the best materials',
            description: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        },
    ];

    const prevSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className='container'>
            <div className="slide-card">
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
                <img className='mobile-image' src={images[currentIndex].mobileSrc} alt={images[currentIndex].alt} />
                <div className="pagination">
                    <button className='btn-left' onClick={prevSlide}>
                        <img className='left' src={left} alt="button left" />
                    </button>
                    <button className="btn-right" onClick={nextSlide}>
                        <img className='right' src={right} alt="button right" />
                    </button>
                </div>
            </div>
            <div className="home-description">
                <h1>{images[currentIndex].text}</h1>
                <p>{images[currentIndex].description}</p>
                <span>SHOP NOW <img src={arrow} alt="arrow" /></span>
             
            </div>
            <div className="home-card">
                <div className="card-left">
                    <img src={dark} alt="dark" />
                </div>
                <div className="content">
                    <h2> About our furniture</h2>
                    <p>Our multifunctional collection blends design
                        and function to suit your individual taste.
                        Make each room unique, or pick a cohesive
                        theme that best express your interests and
                        what inspires you. Find the furniture
                        pieces you need, from traditional to
                        contemporary styles or anything in between.
                        Product specialists are available to
                        help you create your dream space.</p>
                </div>
                <div className="card-right">
                    <img src={light} alt="light" />
                </div>
            </div>
        </div>
    )
}

export default Home
