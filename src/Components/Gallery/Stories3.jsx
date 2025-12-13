import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

const success = [
    { url: 'https://plus.unsplash.com/premium_photo-1682431801983-e95621e4050c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://plus.unsplash.com/premium_photo-1681822103234-b75690421f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8' },
    { url: 'https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' },
    { url: 'https://images.unsplash.com/photo-1713946598509-c8be7b08bf5b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D' },
    { url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://images.unsplash.com/photo-1623813754430-44650fd2a905?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]
const Stories3 = () => {

    const slickRef = useRef(null)

    const getSlidesToShow = (width) => {
        if (!width) return 3
        if (width <= 640) return 1
        if (width <= 1024) return 2
        if (width <= 1280) return 3
        return 3
    }

    const [slidesToShow, setSlidesToShow] = useState(() => {
        if (typeof window !== 'undefined') return getSlidesToShow(window.innerWidth)
        return 3
    })

    useEffect(() => {
        const handleResize = () => setSlidesToShow(getSlidesToShow(window.innerWidth))
        // ensure correct value on mount
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };
    return (
        <div className='bg-blue-50 '>
            <div className='px-4 py-8 mx-auto max-w-7xl'>
                <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-cyan-800 text-center mb-8'>
                    Each photo is a story of success — built on trust, courage, and the will to move forward
                </h2>
                <div className='relative'>
                    <Slider ref={slickRef} {...settings}>
                        {success.map((suc, idx) => (
                            <div key={idx} className='px-2'>
                                <img src={suc.url} className='h-64 object-cover rounded  '></img>
                            </div>
                        ))}
                    </Slider>
                    <div className='flex items-center justify-between absolute left-1 right-1 top-[40%]'>
                        <div onClick={() => slickRef.current.slickPrev()} className='bg-gray-200 px-1 py-1 rounded-full'>
                            <RiArrowLeftLine className='text-black' />
                        </div>
                        <div onClick={() => slickRef.current.slickNext()} className='bg-gray-200 px-1 py-1 rounded-full'>
                            <RiArrowRightLine className='text-black' />
                        </div>
                    </div>
                </div>
                <h2 className='text-xl sm:text-2xl font-bold text-center text-cyan-800 mt-6'>
                    Be The Next Success Story!
                </h2>
                <div className="w-full flex justify-center">
                    <Link to="/apply-now">
                        <button className="flex items-center gap-2 px-4 py-1.5 mt-2 text-[16px] md:text-lg font-bold bg-sky-700  rounded-full text-white shadow-md">
                            Registration Now <IoMdArrowRoundForward className='mt-1' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Stories3;
