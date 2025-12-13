import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

import CanadaHero from '../../Components/Abroad/CanadaHero';
import Hero3 from '../../Components/Hero3';
import BannerCard from '../../Components/BannerCard';

const Canada = () => {
    const text = 'Unlock Your Future: The Power of International Education in the Canada'

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <BannerCard text = {text}></BannerCard>
            <CanadaHero></CanadaHero>
            <Hero3></Hero3>
            <Footer></Footer>
        </div>
    );
};

export default Canada;