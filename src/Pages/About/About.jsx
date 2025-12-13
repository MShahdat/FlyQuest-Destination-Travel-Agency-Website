import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import About1 from '../../Components/About/About1';
import About2 from '../../Components/About/About2';
import Services from '../../Components/Servic/Services';
import About3 from '../../Components/About/About3';
import About4 from '../../Components/About/About4';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <About1></About1>
            <About2></About2>
            <Services></Services>
            <About4></About4>
            <About3></About3>
            <Footer></Footer>
        </div>
    );
};

export default About;