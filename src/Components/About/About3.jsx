import React from 'react';
import { Link } from 'react-router';

const country = [
    {
        url: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cou: 'Australia',
        to: '/australia',
    },
    {
        url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cou: 'Canada',
        to: '/canada'
    },
    {
        url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cou: 'Malaysia',
        to: '/malaysia',
    },
    {
        url: 'https://images.unsplash.com/photo-1597086831879-756db15e81d3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cou: 'Europe',
        to: '/europe',
    },   
    {
        url: 'https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cou: 'UK',
        to: '/uk',
    },
    {
        url: 'https://images.unsplash.com/photo-1499188073299-5bd9060e044b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cou: 'United Sataes',
        to: '/usa'
    },

]
const About3 = () => {
    return (
        <div className='bg-blue-50'>
            <div className=' px-4 py-12 mx-auto max-w-7xl'>
                <h3 className='text-cyan-800 text-3xl sm:text-4xl xl:text-5xl font-bold text-center mb-8'>Destinations We Cover:</h3>

                <p className=' px-2 text-lg  xl:text-2xl font-semibold'>We help students access high-quality education in:</p>
                <div className=' mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 space-y-2'>
                    {country.map((coun, idx) => (
                        <div key={idx} className=''>
                            <Link to={`${coun.to}`} className='hover:scale-102 transform duration-300'>
                                <div className='bg-white pb-2 shadow-2xl rounded-xl flex flex-col items-center'>
                                    <img src={coun.url} className='p-2 rounded-2xl w-full h-60 object-cover '></img>
                                    <p className='text-2xl font-semibold -mt-1'>{coun.cou}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About3;