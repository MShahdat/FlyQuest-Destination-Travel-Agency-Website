

import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Air3 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                    <div className="w-full flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                            Domestic & International Routes – All in One Place
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            Whether you’re flying within Bangladesh — like Dhaka to Cox’s Bazar — or planning an international journey from one corner of the world to another, we make global air ticket booking simple and stress-free. Our platform allows you to search, compare, and book flights to and from any country with just a few clicks. By comparing fares from leading airlines worldwide, we help you find the most reliable and affordable options for every route, ensuring you always get the best deal for your journey.
                        </p>

                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            compare, and book flights to and from any country with just a few clicks. By comparing fares from leading airlines worldwide, we help you find the most reliable and affordable options for every route, ensuring you always get the best deal for your journey.
                        </p>


                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Air3;



