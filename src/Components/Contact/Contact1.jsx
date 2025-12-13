import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
const Contact1 = () => {
    return (
        <div className=''>
            <div className=' px-4 py-8 pb-16 mx-auto max-w-7xl'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-800 text-center'>Contact Us</h2>
            <div className='mt-8 md:mt-16 flex flex-col md:flex-row gap-4 md:gap-10 '>
                {/* Left: Contact Info */}
                <div className="w-full md:w-2/5 lg:w-1/3 flex flex-col items-start mb-8 md:mb-0">
                    <h2 className='text-2xl sm:text-3xl font-bold mb-8'>Location</h2>
                    <div className='flex items-center gap-2 text-[16px] sm:text-[18px] mb-4'>
                        <IoLocationSharp className='text-2xl text-cyan-800' />
                        <p>Nurbag, Siddirganj, Narayanganj, Dhaka</p>
                    </div>
                    <div className='flex items-center gap-2 text-[16px] sm:text-[18px] mb-4'>
                        <MdAddIcCall className='text-2xl text-green-700' />
                        <p>+880188534041</p>
                    </div>
                    <div className='flex items-center gap-2 text-[16px] sm:text-[18px] mb-4'>
                        <IoMail className='text-2xl text-amber-600' />
                        <p>shahdat@gmail.com</p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <a href="https://www.facebook.com/">
                            <FaFacebook className='size-8 text-blue-600' />
                        </a>
                        <a href='https://www.youtube.com/'>
                            <IoLogoYoutube className='size-8 text-red-500' />
                        </a>
                        <a href='#'>
                            <FaWhatsappSquare className='size-8 text-green-600' />
                        </a>
                    </div>
                </div>
                {/* Right: Map */}
                <div className="w-full md:w-3/5 lg:w-2/3 flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.03627697898312!2d90.49932327136906!3d23.699374681651424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef045b692f%3A0x72ac0cae5d660029!2sMFXX%2BRP4%2C%20Narayanganj%201361!5e1!3m2!1sen!2sbd!4v1754135541920!5m2!1sen!2sbd"
                        className="w-full rounded-xl shadow-md"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0, minHeight: 420, maxHeight: 480 }}
                        title="Nurbag, Siddirganj, Narayanganj Location"
                    ></iframe>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact1;
