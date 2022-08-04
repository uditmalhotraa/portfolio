import React from 'react';
import { Logo } from '../Assets/Logo';
import Udit from '../Assets/Udit.jpg';

const Home = () => {
    return (
      <div className='home h-screen relative'>
        <div className='header absolute top-0 w-full h-16 sm:h-24 flex flex-row basis-full justify-between items-center px-6 sm:px-12'>
            <a href="/"><Logo /></a>
            <div className='hidden sm:flex flex-row justify-between items-start'>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>About</p>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Work</p>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Skills</p>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Contact</p>
            </div>
        </div>
        <div className='home-content h-full pt-16 sm:pt-24 flex flex-col justify-center items-center'>
            <p className='mb-12 w-1/2 leading-tight sm:leading-relaxed text-center text-black dark:text-white text-5xl sm:text-6xl drop-shadow-dark dark:drop-shadow-light'>Making lives easier through intuitive interfaces</p>
            <img className="h-48 w-48 rounded-full drop-shadow-dark dark:drop-shadow-light" alt="Udit's Profile" src={Udit} />
            <p className='mt-12 text-black dark:text-white text-2xl drop-shadow-dark dark:drop-shadow-light'>Creative Director</p>
        </div>
      </div>
    );
  }
  
  export default Home;