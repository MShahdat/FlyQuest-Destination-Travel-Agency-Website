import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Air1 from '../../Components/Servic/Air1';
import Air2 from '../../Components/Servic/Air2';
import Air3 from '../../Components/Servic/Air3';
import Services from '../../Components/Servic/Services';
import SBannerCard from '../../Components/Servic/SBannerCard';

const Air = () => {
    const info = {
        url: 'https://plus.unsplash.com/premium_photo-1679917737872-1ad9402cf39f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        page: 'Air Ticket',
        des: 'We offer fast, reliable, and expert-guided tourist visa services for your next international journey. From document preparation to final submission, we handle everything — so you can travel worry-free.',
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <SBannerCard info = {info}></SBannerCard>
            <Air1></Air1>
            <Air2></Air2>
            <Air3></Air3>
            <Footer></Footer>
            <Services></Services>
        </div>
    );
};

export default Air;