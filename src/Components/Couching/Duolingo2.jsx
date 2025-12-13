import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Duolingo2 = () => {
    return (
        <div className='bg-sky-800 text-white'>
            <div className="max-w-7xl mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img
                        src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Counseling Promotion"
                        className="rounded shadow-xl w-full h-full object-cover"
                    />

                    <div className="flex-1 flex flex-col items-center justify-center ">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-8 ">
                            Duoling Online Batch
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] lg:text-lg leading-relaxed tracking-wide ">
                            Get personalized online IELTS tutoring tailored to your unique strengths and challenges. This expert-led program helps you clearly identify areas for improvement and equips you with smart, effective strategies to increase your score. You'ill learn how to study with purpose, overcome common pitfalls, and build the confidence needed for real test conditions. This isn't just about practicing questions - it's a full learning experience that sharpens time management, enhances problem-solving skills, and strengthens yor test-day mindset so you're fully prepared to perform at your best.
                        </p>
                        {/* Button */}
                        <Link to={'/apply-now'} className="mt-10">
                            <button className="flex items-center gap-2 px-4 py-2 text-[16px] md:text-lg font-bold text-sky-700 rounded-full bg-white/95 shadow-md">
                                Book Now <FaArrowRight className='mt-1' />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Duolingo2;
