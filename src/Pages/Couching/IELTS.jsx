import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Couching1 from '../../Components/Couching/Couching1';
import Couching2 from '../../Components/Couching/Couching2';
import Couching3 from '../../Components/Couching/Couching3';

const IELTS = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Couching1></Couching1>
            <Couching2></Couching2>
            <Couching3></Couching3>
            <Footer></Footer>
        </div>
    );
};

export default IELTS;