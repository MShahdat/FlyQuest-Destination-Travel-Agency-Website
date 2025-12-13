import React from 'react';
import { AiFillBilibili } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdCopyright, MdAddCall, MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Footer = () => {
    return (
        <div className='bg-cyan-950 text-white'>
            <div className=' max-w-7xl px-4 pt-12 pb-4 mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 space-y-4'>
                    <div className='flex flex-col items-center sm:items-start'>
                        <div className='flex items-center gap-2 mb-2'>
                            <img src='https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-12 h-12 object-cover rounded-full'></img>
                            <Link to={'/'} className='flex flex-col'>

                                <p className='text-3xl font-bold text-white/90'>FlyQuest</p>
                                <p className='font-bold text-[14px] text-white/80'>Destination</p>

                            </Link>
                        </div>
                        <p className=' text-[16px] w-5/6 sm:w-full text-center sm:text-start text-white/80'>
                            We inspire minds, shape the future, and stand beside you at every step toward success.
                        </p>
                    </div>

                    <div className='flex flex-col items-center '>
                        <h1 className='font-semibold text-[18px] uppercase text-white/90'>Study In</h1>

                        <div className='mt-2 space-y-1 text-white/80 text-[16px]'>
                            <div className='flex gap-0 items-center'>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/uk'} className=''>UK</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/usa'} className=''>USA</Link>
                            </div>
                            <div className='flex gap-0 items-center'>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/canada'} className='uppercase'>Canada</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/australia'} className='uppercase'>Australia</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/europe'} className='uppercase'>Europe</Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center '>
                        <h1 className='font-semibold text-[18px] uppercase text-white/90'>Quick Link</h1>

                        <div className='mt-2 space-y-1 text-[16px] text-white/80'>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/uk'} className=''>Tourist Visa</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/usa'} className=''>Hajj & Umrah</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/canada'} className=''>Air Ticket</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/australia'} className=''>IELTS</Link>
                            </div>
                            <div className='flex gap-0 items-center '>
                                <MdNavigateNext className='size-6' />
                                <Link to={'/europe'} className=''>Duolingo</Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center '>
                        <h1 className='font-semibold text-[18px] text-white/90'>CONTACT US</h1>
                        <div className='mt-2 space-y-2 text-[16px] text-white/80'>
                            <div className='flex gap-2 items-center'>
                                <MdAddCall className='size-4' />
                                <Link className=''>+8801885374041</Link>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <MdOutlineMail className='size-4' />
                                <a href="https://mail.google.com/mail/u/0/#inbox" className=''>shahdat@gmail.com</a>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaLocationDot className='size-4' />
                                <Link className=''>Narayanganj, Dhaka</Link>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <SlCalender className='size-4' />
                                <Link className=''>10am to 9pm</Link>
                            </div>
                        </div>
                    </div>

                    <div className='mx-auto'>
                        <img src='https://plus.unsplash.com/premium_photo-1714348661832-a0d4960c601e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-32 h-32 object-cover rounded-full' />
                    </div>

                </div>

            </div>
            <h3 className='border-t border-white/40 '></h3>
            <div className='text-white text-center py-3 px-4 '>
                Copyright ©2025 All rights reserved. This template is made by Shahdat
            </div>
        </div>
    );
};

export default Footer;
