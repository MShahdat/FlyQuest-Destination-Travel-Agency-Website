import React from 'react';

const Video = () => {
    return (
        <div className='px-4 py-12 xl:px-40 mx-auto shadow-lg max-w-7xl'>
            <p className="py-6 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-cyan-800 ">FlyQuest Destinations – Study Abroad Made Simple</p>
            <div className="flex justify-center items-center w-full pt-10">
                <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden border-2 border-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Y-bVyB1MhYM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            <div className="border-b-3 text-gray-500 py-4"></div>
            <div className="pt-8 flex justify-center items-center w-full">
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

export default Video;