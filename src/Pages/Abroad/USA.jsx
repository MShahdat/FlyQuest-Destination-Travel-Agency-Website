import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import USAHero from '../../Components/Abroad/USAHero';
import Hero3 from '../../Components/Hero3';
import BannerCard from '../../Components/BannerCard';
const USA = () => {
    const text = 'Unlock Your Future: The Power of International Education in the USA'

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BannerCard text = {text}></BannerCard>
            <USAHero></USAHero>
            <Hero3></Hero3>
            <Footer></Footer>
        </div>
    );
};

export default USA;