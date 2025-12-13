import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="relative w-full min-h-[70vh] flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1714348661832-a0d4960c601e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                }}
            ></div>
            {/* Dark overlay for opacity */}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            {/* Foreground content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 py-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-center text-cyan-50 drop-shadow-lg mb-5">
                    Start Building Your Successful Future Here!
                </h2>
                <p className="text-lg tracking-wide leading-relaxed sm:text-xl text-center text-white mt-8 mb-12 drop-shadow">
                    Planning to study in the UK, USA, Canada, Australia, or other top destinations? 
                    GenZ Global Vision is your trusted student visa consultancy in Bangladesh, 
                    offering expert guidance throughout your global education journey. From university 
                    admissions and scholarships to visa processing, our dedicated team ensures 
                    personalized support at every stage.
                </p>
                <Link to={'/contact'}>
                    <button className="px-4 py-1.5 text-lg rounded-full bg-sky-800 font-bold text-white shadow-lg hover:scale-105 transform duration-300 hover:bg-sky-900 transition">
                        Start Your Journey
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
