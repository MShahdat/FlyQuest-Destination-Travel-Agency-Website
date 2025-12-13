import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";

const Chairman1 = () => {
    return (
        <div className='bg-blue-50'>
            <div className="max-w-7xl px-4 py-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1681822103234-b75690421f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Counseling Promotion"
                            className="rounded-l-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="px-4 shadow-2xl rounded-r-2xl">
                        {/* Headline */}
                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-cyan-700 mt-2">
                            Jhow Deo
                        </h2>
                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl mt-1 text-black/60 font-semibold">
                            Chairman
                        </p>
                        <div className='text-[16px] md:text-[16px] leading-relaxed tracking-wide mt-6 text-black/60'>
                            <p className="">
                            At GenZ Global Vision, our mission is rooted in empowering students to achieve their dreams of global education. Founded by Rayhan Khan, our team brings firsthand experience as former international students, which fuels our passion for guiding others on their journey. We understand the challenges and opportunities that come with studying abroad, and we are committed to making the process seamless and rewarding for you.
                        </p>
                        <p className="mt-6 pb-8">
                            Ethical counseling is at the core of what we do. We take pride in offering honest, unbiased, and personalized advice to help you navigate every step—from choosing the right course and university to securing visas and preparing for life abroad. To stay ahead, we’ve embraced innovation, ensuring our services are modern, transparent, and tailored to your needs. Our goal goes beyond just placements; we aim to empower your entire journey and celebrate your success as you embark on this life-changing experience. Let us help you write your next chapter with confidence and clarity.
                        </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Chairman1;
