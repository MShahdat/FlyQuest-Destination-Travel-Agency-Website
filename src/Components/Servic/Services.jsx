import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';

const services = [
  {
    visa: 'IELTS',
    img: "https://media.istockphoto.com/id/1196117817/photo/red-word-letters-ielts-on-white-pedestal.jpg?s=2048x2048&w=is&k=20&c=wssa_9Ge7xvzqRo_wOT5acVd9dt65jFLAolNoynuoBM=",
    desc: "From application to approval, with expert care and personalized support.",
  },
  {
    visa: 'Student',
    img: "https://images.unsplash.com/photo-1665567032056-4d22d92638da?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Travel with confidence — our expert team ensures a smooth an"
  },
  {
    visa: 'Hajj',
    img: "https://images.unsplash.com/photo-1590108589108-3600131de843?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "we guide you through the modules with experienced instructors, practice tests, and step-by-step guidance.",
  },
  {
    visa: 'Tourist ',
    img: "https://images.unsplash.com/photo-1526662075745-edd1c71a4cff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Get that boost your confidence and refine your answers.",
  },
];

const Services = () => {
  return (
    <div className=' px-4 py-8 mx-auto max-w-7xl'>
      <div className=''>
        <h2 className='text-4xl sm:text-5xl text-center pb-8 font-bold text-cyan-600'>Our Services</h2>
        <p className='text-lg sm:text-lg max-w-5xl mx-auto text-center text-black/70 font-bold'>
          At FlyQuest Destinations, we are a trusted student visa consultant in Bangladesh, committed to turning your global education dream into reality.
          <span className='font-semibold'> From personalized guidance to smooth visa processing, we support you at every step—with honesty, care, and expertise.</span>
        </p>
      </div>

      <div className='py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
        {services.map((service, id) => (
          <div
            key={id}
            className="flex flex-col rounded-xl px-2 bg-white shadow-lg py-2 w-full mx-auto relative hover:scale-105 transform duration-500"
          >
            <h3 className='text-2xl font-bold mb-2'>{service.visa} Visa</h3>
            <img
              src={service.img}
              alt={service.title}
              className="rounded-xl w-full h-40 object-cover mb-2"
            />
            <div className="flex-1 text-gray-700 line-clamp-3 text-base font-medium mb-1 text-left">
              {service.desc}
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-md text-sky-800">Apply Now</span>
              <span className="ml-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg hover:scale-115 transform duration-500 hover:bg-gray-300">
                  <Link to={'/apply-now'}>
                    <FaArrowRight className="text-sky-900 text-md" />
                  </Link>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
