import React from 'react';

const About = () => {
    return (
        <div className='about h-screen flex flex-col justify-center items-center'>
            <p className='mb-16 w-2/3 sm:w-1/2 text-black font-light dark:text-white text-center tracking-wide leading-normal text-2xl sm:text-4xl drop-shadow-dark dark:drop-shadow-light'>I love working with people who keep the world spinning ✱
                I make use of heuristic approaches to design thinking and user analysis which enable me to continuously iterate on solutions and craft increasingly effective and delightful digital products.</p>
            <button className='hover:bg-darkgray text-white dark:text-black bg-black dark:bg-white px-6 py-3 rounded drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-105'>Download Resume</button>
        </div>
    );
}

export default About;