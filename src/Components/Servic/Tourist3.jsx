import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Tourist3 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    <div className="flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                            Explore the World with Confidence
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            Plan your trip with confidence — we assist with tourist visa applications for a wide range of top travel destinations around the world. Our experienced team supports applications for the USA, UK, Canada, Australia, Schengen countries, UAE (Dubai), Malaysia, Singapore, Thailand, Indonesia, and many more.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tourist3;
