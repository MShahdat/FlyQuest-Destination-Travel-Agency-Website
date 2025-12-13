import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Hero1 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto ">
                <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-cyan-800 ">GenZ Global Vision - Your Trusted Student Visa Consultant</p>
                <div className="border-b-3 text-gray-500 pt-4 "></div>

                <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-7xl mx-auto">
                    {/* Left Side: Card Image */}
                    <div className="">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661540889781-03422cc0fa99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded shadow-xl w-full h-100 object-cover"
                        />
                    </div>
                    {/* Right Side: Content */}
                    <div className="flex-1 flex flex-col  max-w-2xl">
                        {/* Headline */}
                        <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-2">
                            <span className="text-sky-600">Free Counseling &</span>
                            <br className="hidden sm:block" />
                            <span className="text-gray-900"> Support Services</span>
                        </h2>
                        {/* Subtitle */}
                        <p className="mt-6 text-xl sm:text-3xl font-bold text-sky-700 mb-4">
                            FlyQuest Destinations & Immigration Center
                        </p>
                        {/* Details */}
                        <p className="text-lg text-gray-800 mb-1">
                            <span className="font-bold ">Venue:</span> FlyQuest Destinations Office
                        </p>
                        <p className="text-lg text-gray-800 mb-6">
                            <span className="font-bold ">Date & Time :</span> Every Day 11am to 4pm
                        </p>
                        {/* Button */}
                        <Link to="apply-now" className="mt-2">
                            <button className="flex items-center gap-2 px-8 py-3 text-lg sm:text-xl font-bold bg-sky-800 hover:scale-103 transform duration-300 hover:bg-sky-900 transition rounded-xl text-white shadow-md">
                                Registration Now <FaArrowRight className='mt-1' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero1;
