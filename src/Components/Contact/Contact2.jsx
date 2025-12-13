import React from 'react';

const Contact2 = () => {
    return (
        <div className='bg-blue-50'>
            <div className=' px-4 py-8 mx-auto max-w-7xl'>
                <h2 className='text-4xl sm:text-5xl pb-8 font-bold text-cyan-600 text-center'>Contact Form</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center bg-sky-50 rounded-xl">
                        <h2 className="text-2xl md:text-4xl font-bold text-sky-800 text-center">
                            Turn Your Global Education Goals Into Reality With Us!
                        </h2>
                        <p className="mt-6  md:text-lg text-black/60 text-center">
                            At <span className="font-bold">FlyQuest Destination</span>, we believe that studying abroad isn’t just about earning a degree — it’s about opening the door to a world of opportunities, experiences, and personal growth. Whether you’re aiming for a top-ranked university, a specialized course, or a fully funded scholarship, we are here to guide you every step of the way.
                        </p>
                        <h3 className="mt-8 text-2xl md:text-3xl font-bold text-sky-800 text-center">
                            Contact For Any Query!
                        </h3>
                    </div>

                    {/* Right side: Form */}
                    <form className="px-4 py-8 flex-1 flex flex-col gap-2 min-w-[350px] rounded-xl shadow-xl">
                        <label className="font-bold">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Full Name"
                            className="rounded p-2 border border-gray-300 mb-2"
                            required
                        />

                        <label className="font-bold">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Phone Number"
                            className="rounded p-2 border border-gray-300 mb-2"
                            required
                        />

                        <label className="font-bold">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Mail"
                            className="rounded p-2 border border-gray-300 mb-2"
                            required
                        />

                        <label className="font-bold">
                            English Proficiency <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="ex: IELTS"
                            className="rounded p-2 border border-gray-300 mb-2"
                            required
                        />

                        <label className="font-bold mt-2">
                            Choose Your Destination <span className="text-red-500">*</span>
                        </label>
                        <select
                            className="rounded p-2 border border-gray-300 mb-2"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Your Country
                            </option>
                            <option className='font-semibold'>USA</option>
                            <option className='font-semibold'>UK</option>
                            <option className='font-semibold'>Canada</option>
                            <option className='font-semibold'>Australia</option>
                            <option className='font-semibold'>Germany</option>
                            {/* Add more countries as needed */}
                        </select>
                        <button
                            type="submit"
                            className="bg-cyan-600 text-white text-xl font-bold py-2 px-6 rounded mt-4 active:bg-cyan-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact2;
