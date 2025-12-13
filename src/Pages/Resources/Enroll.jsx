import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import EnrollB from '../../Components/Resources/EnrollB';
import Enroll1 from '../../Components/Resources/Enroll1';
import Enroll2 from '../../Components/Resources/Enroll2';
import Enroll3 from '../../Components/Resources/Enroll3';

const Enroll = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <EnrollB></EnrollB>
            <Enroll1></Enroll1>
            <Enroll2></Enroll2>
            <Enroll3></Enroll3>
            <Footer></Footer>
        </div>
    );
};

export default Enroll;