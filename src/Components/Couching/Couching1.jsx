

import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Couching1 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    <div className="bg-white shadow rounded-lg py-4 px-4 flex flex-col items-center justify-center gap-4">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-normal text-cyan-700">
                             Achieve IELTS Excellence in Bangladesh–Train with US
                        </h2>
                        {/* Subtitle */}
                        <p className="text-[16px] leading-relaxed tracking-wide lg:text-lg text-black/60">
                            Dreaming of studying abroad? Get the IELTS score you need with our top-rated coaching in Bangladesh – perfect for admission to universities in Canada, the UK, Australia, and more.
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
                            className="rounded-md shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Couching1;










