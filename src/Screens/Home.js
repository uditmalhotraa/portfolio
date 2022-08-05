import React from 'react';
import { Logo } from '../Assets/Logo';
import Udit from '../Assets/Udit.jpg';
import { Profile } from '../Assets/Profile';

const Home = () => {
    return (
      <div className='home h-auto min-h-screen relative flex justify-center items-center'>
        <div className='header absolute top-0 w-full h-16 sm:h-24 flex flex-row basis-full justify-between items-center px-6 sm:px-12'>
            <a href="/"><Logo /></a>
            <div className='hidden sm:flex flex-row justify-between items-start'>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>About</p>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Work</p>
                <p className='mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Skills</p>
                <p className='ml-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Contact</p>
            </div>
        </div>
        <div className='home-content h-auto pt-16 sm:pt-24 flex flex-col content-around justify-center items-center'>
            <p className='w-2/3 leading-tight sm:leading-relaxed text-center text-black dark:text-white text-4xl sm:text-6xl drop-shadow-dark dark:drop-shadow-light'>Making lives easier through intuitive interfaces</p>
            <div className='flex justify-center items-center m-12 sm:my-16 h-48 w-48 rounded-full drop-shadow-dark dark:drop-shadow-light bg-lightgray dark:bg-darkgray'><Profile /></div>
            {/* <img className="m-12 sm:my-16 h-48 w-48 rounded-full drop-shadow-dark dark:drop-shadow-light" alt="Udit's Profile" src={Udit} /> */}
            <p className='text-black dark:text-white text-2xl drop-shadow-dark dark:drop-shadow-light'>Creative Director</p>
        </div>
      </div>
    );
  }
  
  export default Home;