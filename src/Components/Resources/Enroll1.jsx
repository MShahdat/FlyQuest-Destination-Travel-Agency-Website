import React from 'react';
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const steps = [
  {
    icon: <MdAddIcCall size={36} className="text-green-500" />,
    title: "Call Us/WhatsApp",
    desc: "+8801885374041"
  },
  {
    icon: <MdEmail size={36} className="text-yellow-300" />,
    title: "Email",
    desc: "shahdat@gmail.com"
  },
];

const Enroll1 = () => {
  return (
    <div className='bg-blue-50'>
      <div className=' relative overflow-hidden px-4 py-16 mx-auto max-w-7xl'>
        <h3 className='text-3xl sm:text-4xl md:text-5xl text-cyan-800 text-center font-black mb-10'>1. Counselling</h3>
        <p className='px-4 max-w-4xl mx-auto text-[16px] md:text-xl text-cyan-800 font-semibold text-center'>Our experts provide personalized counseling to help you choose the right program and understand the enrollment process.</p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 space-y-16 md:gap-8">
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-14 bg-[#0A1A3F] w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <MdAddIcCall className="text-green-400 text-3xl" />
            </div>
            <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
              <h3 className="text-2xl font-bold text-gray-900">Call Us/WhatsApp</h3>
              <p className="text-gray-600 mt-2 text-lg">+8801885374041</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="absolute -top-14 bg-[#0A1A3F] w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <MdEmail className="text-yellow-400 text-3xl" />
            </div>
            <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
              <h3 className="text-2xl font-bold text-gray-900">Email</h3>
              <p className="text-gray-600 mt-2 text-lg">shahdat@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Enroll1;
