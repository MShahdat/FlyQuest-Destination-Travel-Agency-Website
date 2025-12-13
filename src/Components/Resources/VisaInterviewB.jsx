import React from 'react';
import { Link } from 'react-router';

const VisaInterviewB = () => {
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
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl">
                <h2 className="text-6xl font-bold text-center text-cyan-100 drop-shadow-lg">
                    Visa Interview Experience
                </h2>
            </div>
        </div>
    );
};

export default VisaInterviewB;
