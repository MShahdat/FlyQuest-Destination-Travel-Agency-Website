import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import EuropeHero from '../../Components/Abroad/EuropeHero';
import Hero3 from '../../Components/Hero3';
import BannerCard from '../../Components/BannerCard';

const Europe = () => {
    const text = 'Unlock Your Future: The Power of International Education in the Europe'

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BannerCard text = {text}></BannerCard>
            <EuropeHero></EuropeHero>
            <Hero3></Hero3>
            <Footer></Footer>
        </div>
    );
};

export default Europe;