import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import AustraliaHero from '../../Components/Abroad/AustraliaHero';
import Hero3 from '../../Components/Hero3';
import BannerCard from '../../Components/BannerCard';
const Australia = () => {
    
    const text = 'Unlock Your Future: The Power of International Education in the Australia'

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BannerCard text = {text}></BannerCard>
            <AustraliaHero></AustraliaHero>
            <Hero3></Hero3>
            <Footer></Footer>
        </div>
    );
};

export default Australia;