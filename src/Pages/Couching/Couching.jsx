import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Couching1 from '../../Components/Couching/Couching1';
import Couching2 from '../../Components/Couching/Couching2';
import Couching3 from '../../Components/Couching/Couching3.jsx';

const Couching = () => {
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

export default Couching;