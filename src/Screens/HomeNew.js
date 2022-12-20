import { React, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';

const HomeNew = (props) => {

    const [flag, setFlag] = useState(1);

    return (

        <div className='home h-screen w-full relative flex flex-col justify-center items-center bg-white dark:bg-black' id="top">
            <div className='h-screen w-full relative flex flex-col lg:flex-row items-center overflow-x-hidden overflow-y-auto mb-14 px-5 pb-10'>
                <div className='flex flex-col w-full lg:w-[50%] items-center py-20'>
                    <p className='text-2xl text-black dark:text-white font-medium'>Udit Malhotra</p>
                    <p className='text-8xl text-black dark:text-white mb-2 font-normal'>24</p>
                    <p className='text-xl font-light text-black dark:text-white'>India</p>
                </div>
                <div className='flex flex-col w-full lg:w-[50%] items-center gap-4'>
                    <div className='flex flex-col items-center bg-white/10 dark:bg-black/10 shadow-boxy-light dark:shadow-boxy-dark h-auto w-[90%] lg:w-[60%] mx-2 p-3 rounded-[10px] border border-[#eeeeee60] dark:border-[#66666680] backdrop-blur-[7px]'>
                        <p className='text-base font-light text-black dark:text-white'>Making lives easier through structured code, plain design and flabbergasting mindfucking ideas about this fucking life.</p>
                    </div>
                    <div className='flex flex-col items-start bg-white/10 dark:bg-black/10 shadow-boxy-light dark:shadow-boxy-dark h-auto w-[90%] lg:w-[60%] mx-2 py-3 rounded-[10px] border border-[#eeeeee60] dark:border-[#66666680] backdrop-blur-[7px]'>
                        <p className='px-3 text-[18px] font-normal text-darkgray dark:text-lightgray'>STUDY</p>
                        <a rel='noreferrer' href="https://www.chitkara.edu.in/" target="_blank" className='w-full hover:bg-[#eeeeee] dark:hover:bg-[#222222]'><p className='px-3 cursor-pointer w-full text-base leading-8 font-normal text-black dark:text-white'>Chitkara University</p><p className='px-3 cursor-pointer w-full text-[14px] font-normal text-darkgray dark:text-lightgray'>General studies and merryment</p></a>
                        <a rel='noreferrer' href="https://kvsangathan.nic.in/" target="_blank" className='w-full hover:bg-[#eeeeee] dark:hover:bg-[#222222]'><p className='px-3 cursor-pointer w-full text-base leading-8 font-normal text-black dark:text-white'>Kendriya Vidyalaya</p><p className='px-3 cursor-pointer w-full text-[14px] font-normal text-darkgray dark:text-lightgray'>Graduation study and activities</p></a>
                    </div>
                    <div className='flex flex-col items-start bg-white/10 dark:bg-black/10 shadow-boxy-light dark:shadow-boxy-dark h-auto w-[90%] lg:w-[60%] mx-2 py-3 rounded-[10px] border border-[#eeeeee60] dark:border-[#66666680] backdrop-blur-[7px]'>
                        <p className='px-3 text-[18px] font-normal text-darkgray dark:text-lightgray'>WORK</p>
                        <a rel='noreferrer' href="https://spenda.co/" target="_blank" className='w-full hover:bg-[#eeeeee] dark:hover:bg-[#222222]'><p className='px-3 cursor-pointer w-full text-base leading-8 font-normal text-black dark:text-white'>Spenda</p><p className='px-3 cursor-pointer w-full text-[14px] font-normal text-darkgray dark:text-lightgray'>Jan 2022 - Present</p></a>
                        <a rel='noreferrer' href="https://in.linkedin.com/company/mintworxs" target="_blank" className='w-full hover:bg-[#eeeeee] dark:hover:bg-[#222222]'><p className='px-3 cursor-pointer w-full text-base leading-8 font-normal text-black dark:text-white'>Mintworxs</p><p className='px-3 cursor-pointer w-full text-[14px] font-normal text-darkgray dark:text-lightgray'>Mar 2021 - Dec 2021</p></a>
                        <a rel='noreferrer' href="https://www.infosys.com/" target="_blank" className='w-full hover:bg-[#eeeeee] dark:hover:bg-[#222222]'><p className='px-3 cursor-pointer w-full text-base leading-8 font-normal text-black dark:text-white'>Infosys</p><p className='px-3 cursor-pointer w-full text-[14px] font-normal text-darkgray dark:text-lightgray'>Feb 2020 - Feb 2021</p></a>
                    </div>
                </div>
            </div >
            <div className='footer absolute bottom-0 lg:top-0 flex flex-row lg:flex-row-reverse justify-between items-center bg-white dark:bg-black p-3 shadow-mob dark:shadow-mob-dark lg:shadow-md lg:dark:shadow-web-dark h-14 w-full'>
                <div className='flex flex-col border-2 border-black dark:border-white h-8 w-14 bg-transparent rounded-full relative justify-center cursor-pointer' onClick={() => { props.handleToggle(); setFlag(!flag) }}>
                    {flag ? <LightModeIcon className='absolute left-0 mx-1' /> : <DarkModeIcon className=' text-white absolute right-0 mx-1' />}
                </div>
                <MenuIcon fontSize='large' className='cursor-pointer text-black dark:text-white' />
            </div>
        </div >
    );
}

export default HomeNew;