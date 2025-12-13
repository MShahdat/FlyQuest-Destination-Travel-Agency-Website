import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
const About4 = () => {
    return (
        <div className='bg-sky-800 text-white'>
            <div className=' px-4 py-8 mx-auto max-w-6xl'>
            <div className='flex flex-col items-center'>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center">
                    Our Vision
                </h3>
                <p className=" mt-8 text-[16px] md:text-lg  text-white">
                    <span>At <span className='font-bold'>GenZ Global Vision</span>, our core mission is to become <span className='font-bold'>Bangladesh’s most transparent, affordable, and trustworthy education consultancy</span>—helping students access top-ranked global universities without the burden of high service fees or misleading promises.</span>
                </p>
                <p className="text-[16px] md:text-lg mt-6">
                    <span>We are committed to <span className='font-bold'>rebuilding trust</span> in the education consultancy industry by proving that <span className='font-bold'>ethical, student-first service</span> can lead to real success. To us, students are not just clients—they are <span className='font-bold'>our responsibility</span>.</span>
                </p>
                <p className="text-[16px] md:text-lg  mt-6">
                    <span>We envision a future where <span className='font-bold'>every capable student in Bangladesh</span>, regardless of background, can confidently pursue higher education in the <span className='font-bold'>USA, UK, Canada, Australia</span>, and beyond—with <span className='font-bold'>honest guidance, risk-free preparation</span>, and full transparency at every step. Our long-term goal is to become a <span className='font-bold'>global education partner</span>, collaborating with international universities and institutions to create <span className='font-bold'>seamless admission and visa pathways</span> for Bangladeshi students.</span>
                </p>
                <Link to = {'/apply-now'} className="mt-8">
                    <button className="flex items-center gap-2 px-4 py-2 text-[16px] md:text-lg font-bold active:bg-white/80 text-sky-700 rounded-full bg-white shadow-md">
                        Apply Now <FaArrowRight  className='mt-1'/>
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default About4;
