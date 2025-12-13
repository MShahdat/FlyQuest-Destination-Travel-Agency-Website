import React from 'react';
import { Link } from 'react-router';

const EnrollB = () => {
    return (
        <div className="relative w-full min-h-[50vh] flex items-center justify-center">
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
                    How to Enroll?
                </h2>
                <p className="text-2xl px-8 text-center text-white mb-12 drop-shadow mt-16">
                    Step-by-step guide to applying and securing your enrollment with us.
                </p>
            </div>
        </div>
    );
};

export default EnrollB;
