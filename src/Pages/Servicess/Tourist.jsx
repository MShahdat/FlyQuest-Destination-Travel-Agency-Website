import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Tourist2 from '../../Components/Servic/Tourist2';
import Tourist3 from '../../Components/Servic/Tourist3';
import Services from '../../Components/Servic/Services';
import SBannerCard from '../../Components/Servic/SBannerCard';

const Tourist = () => {
    const info = {
        url: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        page: 'Tourist Visa',
        des: 'We offer fast, reliable, and expert-guided tourist visa services for your next international journey. From document preparation to final submission, we handle everything — so you can travel worry-free.',
    }

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <SBannerCard info = {info}></SBannerCard>
            <Tourist3></Tourist3>
            <Tourist2></Tourist2>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Tourist;