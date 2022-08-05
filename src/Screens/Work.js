import React from 'react';
import { Arrow } from '../Assets/Arrow';
import WorkImage from '../Assets/Work.jpg';

const Work = () => {
    return (
        <div className='work h-auto min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 py-8'>
            <div className='w-full flex flex-col lg:flex-row items-top justify-between'>
                <h1 className='text-black dark:text-white text-2xl sm:text-5xl drop-shadow-dark dark:drop-shadow-light'>Winuall Dashboard</h1>
                <p className='w-full lg:w-1/2 mt-0 sm:mt-2 l:mt-0 text-black dark:text-white text-xl sm:text-2xl font-light lg:text-end drop-shadow-dark dark:drop-shadow-light'>Designing a complex, scalable dashboard that helps over 1,00,000 Indian tutors manage more than 1M+ students on a daily basis</p>
            </div>
            <img className='w-full h-auto my-6 max-w-7xl' alt="Work" src={WorkImage} />
            <div className='w-full flex flex-col md:flex-row items-top justify-between'>
                <div className='w-auto lg:w-1/2 flex flex-col lg:flex-row items-top justify-between'>
                    <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light'>DATE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>AUGUST 2021</span></p>
                    <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light'>TYPE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>UI/UX DESIGN</span></p>
                </div>
                <div className='cursor-pointer w-auto flex flex-row items-center'>
                    <p className='text-black mr-4 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-105'>READ MORE</p>
                    <Arrow />
                </div>
            </div>
        </div >
    );
}

export default Work;