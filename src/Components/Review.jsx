import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineRateReview, MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// --- Review Data ---
const reviews = [
  {
    user: 'Md. Nasir Uddin',
    img: 'https://plus.unsplash.com/premium_photo-1682431801983-e95621e4050c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '9 months ago',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum quia illo, facere cupiditate eligendi!',
    google: true,
  },
  {
    user: 'Mynul Khan',
    img: 'https://plus.unsplash.com/premium_photo-1681822103234-b75690421f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
    time: '9 months ago',
    rating: 5,
    text: 'Best of luck . trusted person Nasir bhai',
    google: true,
  },
  {
    user: 'Zerin Nahar',
    img: 'https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    time: '9 months ago',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum quia illo, facere cupiditate eligendi!',
    google: true,
  },
  {
    user: 'Another Reviewer',
    img: 'https://images.unsplash.com/photo-1713946598509-c8be7b08bf5b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D',
    time: '5 months ago',
    rating: 5,
    text: 'Step With Trust ❤️',
    google: true,
  },
  {
    user: 'Shahdat Reviewer',
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '5 months ago',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum quia illo, facere cupiditate eligendi!',
    google: true,
  },
];

// --- Star Rating ---
const StarRow = ({ rating = 0 }) => (
  <div className="flex text-amber-400 text-xl">
    {[1, 2, 3, 4, 5].map(i =>
      rating >= i
        ? <MdStar key={i} />
        : rating > i - 1
          ? <MdStarHalf key={i} />
          : <MdStarBorder key={i} />
    )}
  </div>
);

const Review = () => {

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
    <div className='bg-gray-50'>
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <h2 className='text-4xl sm:text-5xl pb-8 text-center font-bold text-cyan-600'>Reviews</h2>
        <div className='-mt-4 flex flex-col items-center justify-center'>
          <MdOutlineRateReview className="text-blue-500 text-5xl mb-2 shadow-lg rounded-full" />
          <div className="font-bold text-lg mb-1">FlyQuest Destination</div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            4.7
            <StarRow rating={4.5} />
          </div>
          <div className="text-gray-600 mt-1 mb-1 text-sm">Based on 12 reviews</div>
        </div>
        <div className="mt-8 relative" >
          <Slider ref={slickRef} {...settings}>
            {reviews.map((review, rIdx) => (
              <div key={rIdx} className='px-2'>
                <div className=" bg-white rounded-xl shadow-lg px-4 py-4 flex flex-col gap-1 h-60" >
                  <div className="flex items-center gap-3">
                    <img
                      src={review.img}
                      alt={review.user}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <div className="font-bold text-sky-800">{review.user}</div>
                      <div className="text-gray-500 text-sm">{review.time}</div>
                    </div>
                    {review.google && <FcGoogle className="text-2xl ml-auto" />}
                  </div>
                  <div className="mt-4 mb-1"><StarRow rating={review.rating} /></div>
                  <div className="mt-4 text-black/60 line-clamp-4 overflow-y-auto">
                    {review.text}
                  </div>
                </div>
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

      </div>
    </div>
  );
};

export default Review;
