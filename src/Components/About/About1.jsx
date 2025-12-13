import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const About1 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                    <div className="bg-white shadow rounded-l-lg py-4 px-4 flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                            FlyQuest Destination – Your Trusted Study Abroad Partner
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/80">
                            <span>Founded in <span className='font-bold'>December 2025</span> by <span className='font-bold'> Shahdat Hossain</span> (student at <span className='font-bold'>California State University, LA</span>), FlyQuest Destination is a Bangladesh-based education consultancy helping students study abroad with <span className='font-bold'>honest, affordable</span>, and <span className='font-bold'>transparent</span> support.We’ve guided <span className='font-bold'>300+ students</span>, with <span className='font-bold'>40+ U.S. visa approvals</span> in just one year.</span>
                        </p>
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/80">
                            <span>Our <span className='font-bold'>hybrid model</span> (online + offline) ensures full control and transparency—covering everything from <span className='font-bold'>university applications to visa interviews</span>—all for under <span className='font-bold'>100,000 BDT</span>.</span>
                        </p>
                        <h2 className='mt-4 text-xl md:text-2xl font-bold text-cyan-900'>
                            Get IELTS Admission
                        </h2>
                        {/* Button */}
                        <Link to={'/apply-now'} className="">
                            <button className="flex items-center gap-2 px-4 py-2 text-[15px] md:text-lg font-bold bg-sky-700 rounded-full text-white shadow-md">
                                Get Addmision <FaArrowRight className='mt-1' />
                            </button>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1717726974145-c4ac14bee0bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                            alt="Counseling Promotion"
                            className="rounded-r-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;