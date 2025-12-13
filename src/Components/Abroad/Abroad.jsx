import React from 'react';
import { Link } from 'react-router';

const Abroad = () => {
    return (
        <div className="relative w-full min-h-[60vh] flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/src/Images/2.jpg')"
                }}
            ></div>
            {/* Dark overlay for opacity */}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            {/* Foreground content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 py-16">
                <h2 className="text-7xl font-bold text-center text-cyan-50 drop-shadow-lg">
                    Study Abroad
                </h2>
                <p className="text-xl text-center text-white mb-12 drop-shadow mt-16">
                    Planning to study in the UK, USA, Canada, Australia, or other top destinations? 
                    Khan Global Vision is your trusted student visa consultancy in Bangladesh, 
                    offering expert guidance throughout your global education journey. From university 
                    admissions and scholarships to visa processing, our dedicated team ensures 
                    personalized support at every stage.
                </p>
            </div>
        </div>
    );
};

export default Abroad;
