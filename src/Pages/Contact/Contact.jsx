import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Contact1 from '../../Components/Contact/Contact1';
import Contact2 from '../../Components/Contact/Contact2';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Contact2></Contact2>
            <Contact1></Contact1>
            <Footer></Footer>
        </div>
    );
};

export default Contact;