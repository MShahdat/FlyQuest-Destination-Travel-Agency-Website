import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Duolingo1 from '../../Components/Couching/Duolingo1';
import Duolingo2 from '../../Components/Couching/Duolingo2';
import Duolingo3 from '../../Components/Couching/Duolingo3';

const Duolingo = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Duolingo1></Duolingo1>
            <Duolingo2></Duolingo2>
            <Duolingo3></Duolingo3>
            <Footer></Footer>
        </div>
    );
};

export default Duolingo;