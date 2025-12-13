

import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Duolingo1 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    <div className="bg-white shadow rounded-lg py-4 px-4 flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                             Achieve Duolingo Success – Prepare with US, Succeed Globally
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            Duolingo is a popular language-learning app that offers a fun, game-like experience to help users learn new languages. It’s completely free to use and is trusted by millions around the world to learn English, Spanish, French, and many other languages.
                        </p>
                        <h2 className='mt-4 text-xl md:text-2xl font-bold text-cyan-900'>
                        Get Duolingo Admission
                    </h2>
                        {/* Button */}
                        <Link to={'/apply-now'} className="">
                            <button className="flex items-center gap-2 px-4 py-2 text-[16px] md:text-lg font-bold bg-sky-700 rounded-full text-white shadow-md">
                                Get Addmision <FaArrowRight className='mt-1' />
                            </button>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1679042346932-f1131ce3c31d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Duolingo1;


