import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Hajjbo from '../../Components/Servic/Hajjbo';
import Services from '../../Components/Servic/Services';
import SBannerCard from '../../Components/Servic/SBannerCard';

const Hajj = () => {
    const info = {
        url: 'https://images.unsplash.com/photo-1567215378181-6ecf3590646f?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        page: 'Hajj & Umrah',
        des: 'We offer fast, reliable, and expert-guided hajj & umrah visa services for your next international journey. From document preparation to final submission, we handle everything — so you can travel worry-free.',
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <SBannerCard info = {info}></SBannerCard>
            <Hajjbo></Hajjbo>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Hajj;