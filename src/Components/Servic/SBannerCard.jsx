import React from 'react';
import { Link } from 'react-router';

const SBannerCard = (props) => {
    return (
        <div className="relative w-full  lg:h-[50vh] flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${props.info.url})`
                }}
            ></div>
            {/* Dark overlay for opacity */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            {/* Foreground content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 py-16">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-cyan-50 drop-shadow-lg">
                    {props.info.page} Services
                </h2>
                <p className="text-[16px] lg:text-xl text-center text-white/90 drop-shadow mt-8">
                    {props.info.des}
                </p>
            </div>
        </div>
    );
};

export default SBannerCard;
