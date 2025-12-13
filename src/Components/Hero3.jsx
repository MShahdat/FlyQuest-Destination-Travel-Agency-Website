import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';

const studyAbroad = [
  {
    img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhfGVufDB8fDB8fHww", // Change to your UK image
    country: "Canada",
    link: "/canada",
  },
  {
    img: "https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Change to your Denmark image
    country: "Malaysia",
    link: "/malaysia",
  },
  {
    img: "https://images.unsplash.com/photo-1526958977630-bc61b30a2009?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Change to your Australia image
    country: "Australia",
    link: "/australia",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1694475331421-40cf7f468690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D", // Change to your Denmark image
    country: "UK",
    link: "/uk",
  },
  {
    img: "https://images.unsplash.com/photo-1723307433504-00aa6851998e?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Change to your Australia image
    country: "Europe",
    link: "/europe",
  },
  {
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Change to your Australia image
    country: "USA",
    link: "/usa",
  },
];

const Hero3 = () => {
  return (
    <div className='bg-blue-50'>
      <div className=' px-4 py-8 mx-auto max-w-7xl'>
        <h2 className='text-3xl md:text-4xl pb-8 font-bold text-cyan-600 text-center'>Wherever you want to go, we'll get you there.</h2>
        <p className=' text-center text-black/70 text-lg md:text-xl max-w-5xl mx-auto font-semibold'>
          Explore the best study destinations in the world! Learn all about the countries’ top universities, scholarships, cost of living, post-study work rights, and more.
        </p>
        <div className=' py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {studyAbroad.map((service, id) => (
            <div
              key={id}
              className="flex flex-col rounded-2xl bg-white shadow-xl px-4 py-4 w-full relative hover:scale-105 transform duration-300"
            >
              <img
                src={service.img}
                alt={service.country}
                className="rounded-xl w-full h-52 object-cover mb-2"
              />
              <div className="font-bold text-xl text-black mb-2">
                Study In {service.country}
              </div>
              <div className="mt-auto hover:scale-101 transform duration-500">
                <Link to={service.link} className="flex items-center gap-2 text-cyan-600 text-xl font-bold hover:underline hover:text-cyan-800">
                  Learn more <FaArrowRight className='mt-1.5' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
