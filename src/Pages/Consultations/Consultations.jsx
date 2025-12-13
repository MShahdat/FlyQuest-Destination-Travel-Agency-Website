import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Consultation from '../../Components/Consultation/Consultation';

const Consultations = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Consultation></Consultation>
            <Footer></Footer>
        </div>
    );
};

export default Consultations;