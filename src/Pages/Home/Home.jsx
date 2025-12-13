import Banner from "../../Components/Banner";
import Consultation from "../../Components/Consultation/Consultation";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Hero1 from "../../Components/Hero1";
import Hero2 from "../../Components/Hero2";
import Hero3 from "../../Components/Hero3";
import Navbar from "../../Components/Navbar";
import Review from "../../Components/Review";
import Services from "../../Components/Servic/Services";
import Video from "../../Components/Video";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <Hero1></Hero1>
            <Video></Video>
            <Hero2></Hero2>
            <Services></Services>
            <Hero3></Hero3>
            <Review></Review>
            <Consultation></Consultation>
            <Footer></Footer>
        </div>
    );
};

export default Home;