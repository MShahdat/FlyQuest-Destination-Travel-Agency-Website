import React from 'react';
import { FaRegKeyboard, FaRegFileAlt, FaRegIdCard } from "react-icons/fa";


const Faq2 = () => {
  return (
    <div className=''>
      <div className='relative overflow-hidden px-4 py-8 mx-auto max-w-7xl'>
        <h3 className='text-3xl sm:text-4xl md:text-5xl text-cyan-800 text-center font-black mb-30'>Immigration Choose Your Country!</h3>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-16 gap-20 md:gap-8">
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-14 bg-[#0A1A3F] w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <FaRegKeyboard className="text-green-400 text-5xl" />
            </div>
            <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
              <h3 className="text-2xl font-bold text-gray-900">Complete Online Form</h3>
              <p className="text-gray-600 mt-2 text-lg">Our team can assist you in transforming business through Latest Tech</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="absolute -top-14 bg-[#0A1A3F] w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <FaRegFileAlt className="text-yellow-400 text-5xl" />
            </div>
            <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
              <h3 className="text-2xl font-bold text-gray-900">Documents & Payment</h3>
              <p className="text-gray-600 mt-2 text-lg">Our team can assist you in transforming business through Latest Tech</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="absolute -top-14 bg-[#0A1A3F] w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <FaRegIdCard className="text-yellow-400 text-5xl" />
            </div>
            <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
              <h3 className="text-2xl font-bold text-gray-900">Receive Your Visa</h3>
              <p className="text-gray-600 mt-2 text-lg">Our team can assist you in transforming business through Latest Tech</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Faq2;
