import { React, useRef, useEffect, useState } from 'react';
import { gsap, Power3, Sine } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Udit } from '../Assets/Udit';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';
import { Tooltip } from '@mui/material';

const HomeNew = (props) => {

    const [flag, setFlag] = useState(0);

    return (
        <div className='home h-screen w-full relative flex flex-col justify-center items-center bg-white dark:bg-black' id="top">
            <div className='h-screen w-full relative flex flex-col lg:flex-row items-center overflow-x-hidden overflow-y-auto mb-14 px-5 pb-10'>
                <div className='flex flex-col w-full lg:w-[50%] items-center py-20'>
                    <p className='text-2xl text-black dark:text-white'>Udit Malhotra</p>
                    <p className='text-8xl text-black dark:text-white mb-2'>24</p>
                    <p className='text-xl font-light text-black dark:text-white'>India</p>
                </div>
                <div className='flex flex-col w-full lg:w-[50%] items-center gap-4'>
                    <div className='flex flex-col items-center bg-white dark:bg-black shadow-boxy-light dark:shadow-boxy-dark h-28 w-[90%] mx-2 p-3 rounded-[10px]'>A</div>
                    <div className='flex flex-col items-center bg-white dark:bg-black shadow-boxy-light dark:shadow-boxy-dark h-28 w-[90%] mx-2 p-3 rounded-[10px]'>A</div>
                    <div className='flex flex-col items-center bg-white dark:bg-black shadow-boxy-light dark:shadow-boxy-dark h-60 w-[90%] mx-2 p-3 rounded-[10px]'>A</div>
                </div>
            </div>
            <div className='footer absolute bottom-0 lg:top-0 flex flex-row justify-between items-center bg-white dark:bg-black p-3 shadow-mob dark:shadow-mob-dark lg:shadow-md lg:dark:shadow-web-dark h-14 w-full'>
                <MenuIcon fontSize='large' className='cursor-pointer text-black dark:text-white' />
                <div className='flex flex-col border-2 border-black dark:border-white h-8 w-14 bg-transparent rounded-full relative justify-center cursor-pointer' onClick={() => { props.handleToggle(); setFlag(!flag) }}>
                    {flag ? <LightModeIcon className='absolute left-0 mx-1' /> : <DarkModeIcon className=' text-white absolute right-0 mx-1' />}
                </div>
            </div>
        </div>
    );
}

export default HomeNew;