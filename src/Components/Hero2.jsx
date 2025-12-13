import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

const checklist = [
  "One-on-One Sessions",
  "Transparent Process",
  "Apply to Your Choice of University",
  "Our student has full access to application process, including email, application portal, CGI Portal",
  "Unlimited Visa Interview Practice",
  "Embark Your Study Abroad Journey",
];

const Hero2 = () => {
  return (
    <div className='bg-cyan-50'>
      <div className="max-w-7xl px-4 py-8 mx-auto">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-cyan-800 ">
          Achieve Your Study Abroad Dreams
        </p>
        <div className="border-b-3 text-gray-500 pt-4 "></div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 min:h-[500px]">
          {/* Left Side: Card Image */}
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1693620714112-a79a7d27308b?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Counseling Promotion"
              className="rounded shadow-xl w-full h-full object-cover" />
          </div>
          {/* Right Side: Content */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
            <p className=" text-4xl text-sky-950 font-bold mb-4">
              Why Choose Us as Your Student Visa Consultant?
            </p>
            {/* Checklist with fixed icon size */}
            <div className="space-y-2 text-lg font-semibold w-full">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-lg font-semibold">
                  <FaArrowCircleRight className="text-sky-800 text-xl flex-shrink-0 mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            {/* Process and Button */}
            <div className="w-full flex flex-col items-center justify-center pt-8 pb-6">
              <div className="flex gap-16 items-center justify-center w-full max-w-md">
                <div className="flex-1">
                  <h3 className="font-bold text-3xl">150+</h3>
                  <p className="text-sm font-bold text-sky-700">visa process</p>
                </div>
                <div className="flex flex-col flex-1">
                  <p className="text-sm font-bold text-sky-700">Visa success 85%</p>
                  <div className="w-full bg-gray-300 rounded-full h-4 mt-1">
                    <div
                      className="bg-sky-600 h-4 rounded-full transition-all"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* Button centered under stats */}
              <div className="w-full flex justify-center mt-8">
                <Link to="/contact">
                  <button className="flex items-center gap-2 px-4 py-2 text-xl font-bold bg-sky-700 hover:scale-105 duration-300 transform hover:bg-sky-800 transition rounded-xl text-white shadow-md">
                    Registration Now <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
