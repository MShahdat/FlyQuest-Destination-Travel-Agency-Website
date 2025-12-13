import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';

const services = [
  {
    visa:'F1 visa interview experience(Approved)',
    img: "/src/Images/1.jpg",
    desc: "Insights from successful applicants, including common questions, answers, key factors that led to approval, and strategies.",
  },
  {
    visa: 'F1 visa interview experience (Refused)',
    img: "/src/Images/2.jpg",
    desc: "Real experiences of applicants who faced rejection, highlighting reasons for refusal, lessons learned, and improvements."
  },
  {
    visa: 'F2 visa interview experience',
    img: "/src/Images/3.jpg",
    desc: "First-hand accounts of dependent visa applicants, detailing interview questions, approval challenges, and outcomes.",
  },
  {
    visa: 'F1&F2 visa interview experience ',
    img: "/src/Images/2.jpg",
    desc: "Combined experiences of both visa categories, covering approval and refusal cases with useful tips, insights, and strategies.",
  },
];

const VisaInterview2 = () => {
  return (
    <div className=''>
      <div className='px-4 mx-auto py-8 max-w-7xl'>
      <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {services.map((service,id) => (
          <div
            key={id}
            className="flex relative h-[400px] flex-col rounded-xl bg-white shadow-lg px-4 py-3 hover:scale-103 transform duration-500"
          >
            <h3 className='text-xl font-bold text-black/70'>{service.visa}</h3>
            <img
              src={service.img}
              alt={service.title}
              className="mt-2 rounded w-full h-50 object-cover"
            />
            <div className="mt-2 text-black/60 text-[16px] text-left line-clamp-2">
              {service.desc}
            </div>
            <Link to = {'/apply-now'} className="absolute bottom-4">
                <button className=" flex items-center gap-2 px-4 py-1 text-[16px] font-bold bg-sky-700 rounded-full text-white shadow-md">
                    Learn More <FaArrowRight  className='mt-1'/>
                </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default VisaInterview2;
