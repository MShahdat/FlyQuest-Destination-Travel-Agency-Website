import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const About2 = () => {
    return (
        <div className='bg-sky-800 text-white'>
            <div className=' px-4 py-16 mx-auto max-w-5xl'>
            <div>
                <h3 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-8 ">
                    Why Collaborate with Khan Global Vision?
                </h3>
                <div className='space-y-4 text-lg'>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Proven visa success rate: 40+ USA student visas in under two years</p>
                    </div>
                    <div className='flex istart gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Transparent, student-first approach—every step is accessible and traceable</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Lowest consultancy cost in the market with premium-quality service</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Strong brand trust and positive student feedback</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Online service availability for partnerships and student support</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Dedicated teams for country-specific admissions</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Rapid expansion into new destinations and visa categories</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <FaArrowRight size={18} className="shrink-0 mt-1" />
                        <p>Focused on ethical, long-term partnerships—no false commitments</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About2;
