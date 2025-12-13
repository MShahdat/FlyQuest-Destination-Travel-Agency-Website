import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import VisaInterview1 from '../../Components/Resources/VisaInterview1';
import VisaInterviewB from '../../Components/Resources/VisaInterviewB';
import VisaInterview2 from '../../Components/Resources/VisaInterview2';

const Visa = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <VisaInterviewB></VisaInterviewB>
            <VisaInterview1></VisaInterview1>
            <VisaInterview2></VisaInterview2>
            <Footer></Footer>
        </div>
    );
};

export default Visa;