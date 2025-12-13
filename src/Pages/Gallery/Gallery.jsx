import React from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import StoriesB from '../../Components/Gallery/StoriesB';
import Stories2 from '../../Components/Gallery/Stories2';
import Stories3 from '../../Components/Gallery/Stories3';

const Gallery = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <StoriesB></StoriesB>
            <Stories2></Stories2>
            <Stories3></Stories3>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;