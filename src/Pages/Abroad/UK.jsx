import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import UKHero from '../../Components/Abroad/UKHero';
import Hero3 from '../../Components/Hero3';
import BannerCard from '../../Components/BannerCard';

const UK = () => {
    const text = 'Unlock Your Future: The Power of International Education in the UK'

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BannerCard text = {text}></BannerCard>
            <UKHero></UKHero>
            <Hero3></Hero3>
            <Footer></Footer>
        </div>
    );
};

export default UK;