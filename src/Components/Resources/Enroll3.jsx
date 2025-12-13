import React from 'react';
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Enroll1 = () => {
  return (
    <div className='bg-sky-50'>
      <div className=' relative overflow-hidden px-2 sm:px-4 py-10 mx-auto max-w-7xl'>
      <h3 className='text-3xl sm:text-4xl md:text-5xl text-cyan-800 text-center font-black mb-10'>3. Payment Methods</h3>
      <p className='text-[16px] md:text-lg text-cyan-800 font-semibold text-center mb-30'>Pay securely using our available methods – BDT 15,000 required for file opening.</p>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 space-y-12 gap-20 md:gap-8">
        <div className="relative flex flex-col items-center">
          <img src='https://yt3.googleusercontent.com/ytc/AIdro_kfgKlp22w3_zZbhHhYhc279q-rVbYRMy1xZ8gJMZRcsQ=s900-c-k-c0x00ffffff-no-rj' className='absolute -top-14 object-cover w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white'></img>

          <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">Bkash</h3>
            <p className="text-gray-600 mt-2 text-lg">+8801885374041</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <img src='https://images.dwncdn.net/images/t_app-icon-l/p/f4b4a183-6c79-4b79-a2d2-8249707aee04/3154843298/2057_4-78566033-logo' className='absolute -top-14 object-cover w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white'></img>
          <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">Nagad</h3>
            <p className="text-gray-600 mt-2 text-lg">+8801885374041</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <img src='https://miro.medium.com/v2/resize:fit:1400/1*1JMzKz_LENBDkVN83qyE0Q.png' className='absolute -top-14 object-cover w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white'></img>
          <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">Rocket</h3>
            <p className="text-gray-600 mt-2 text-lg">+8801885374041</p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJb3McQwaKMz80QuXNGEVpK3qSVxGjy5Gdw&s' className='absolute -top-14 object-cover w-28 h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white'></img>
          <div className="bg-white rounded-full pt-14 md:pt-18 pb-8 px-6 text-center shadow-md w-full">
            <h3 className="text-2xl font-bold text-gray-900">DBBL</h3>
            <p className="text-gray-600 mt-2 text-lg">AC/1234569874587</p>
          </div>
        </div>

      </div>

    </div>
    </div>
  );
};

export default Enroll1;
