

import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Couching3 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                     <div className="w-full flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1713947505221-8a11da8aa744?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-white shadow rounded-lg py-4 px-4 flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                            Your IELTS Success Starts with the Right Plan
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            We understand that every student has different goals, timelines, and learning preferences. That’s why we offer a range of flexible coaching plans designed to meet your specific needs. Whether you’re aiming for a high band score on a tight schedule or seeking a more in-depth, relaxed preparation – we have a solution for you.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Couching3;