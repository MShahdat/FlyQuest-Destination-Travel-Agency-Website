import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Faq3 from '../../Components/Resources/Faq3';
import Faq2 from '../../Components/Resources/Faq2';

const Faq = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Faq3></Faq3>
            <Faq2></Faq2>
            <Footer></Footer>
        </div>
    );
};

export default Faq;