import React from 'react';

const Stories2 = () => {
    return (
        <div className='px-4 py-12 mx-auto max-w-5xl'>
            <p className="py-6 font-bold  text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center text-cyan-800 ">Our Visa Success Stories</p>
            <div className="flex justify-center items-center w-full pt-10">
                <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden border-2 border-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_czIoTS5W80"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Stories2;