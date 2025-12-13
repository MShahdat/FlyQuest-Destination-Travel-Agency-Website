import React from 'react';
import { Link } from 'react-router';
import { IoMdArrowRoundForward } from "react-icons/io";
const StoriesB = () => {
    return (
        <div className="relative w-full min-h-[50vh] flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                }}
            ></div>
            {/* Dark overlay for opacity */}
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            {/* Foreground content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-8 py-16">
                <p className="text-lg md:text-xl text-center text-white mb-12 drop-shadow ">
                    Behind every visa is a dream pursued, challenges overcome, and a family that never gave up. At Khan Global Vision, we’re proud to stand beside you on that journey.
                </p>
                <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
                    <a src="https://www.youtube.com/embed/fvE-bqlsvEk?start=16" className="">
                        <button className="flex items-center gap-2 px-4 py-2 text-[16px] md:text-lg font-bold bg-sky-700 rounded-full text-white shadow-md">
                            Watch Student Journeys <IoMdArrowRoundForward  className='mt-1'/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StoriesB;
