
import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Air1 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    <div className="flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                            Book Air Tickets Easily and Quickly
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            With our easy-to-use and intuitive platform, booking your preferred airline tickets has never been easier. Whether you’re planning a business trip or a family vacation, you can search, compare, and confirm your flights in just a few simple steps. Save valuable time and enjoy a smooth, hassle-free booking experience — travel planning made truly effortless and reliable.
                        </p>
                        {/* Button */}
                        <Link to={'/apply-now'} className="mt-4">
                            <button className="flex items-center gap-2 px-4 py-2 text-xl font-bold bg-sky-700 hover:scale-105 transform duration-300 hover:bg-sky-800 transition rounded-xl text-white shadow-md">
                                Book Now <FaArrowRight className='mt-1' />
                            </button>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1655722724447-2d2a3071e7f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Air1;


