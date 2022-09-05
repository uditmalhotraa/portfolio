import { React, useRef, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gsap, Power3 } from 'gsap';
import { Udit } from '../Assets/Udit';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import './style.scss';
import { IconButton, Tooltip } from '@mui/material';

const Home = (props) => {

  const [show, setShow] = useState();

  const handleTogglee = () => {
    setShow(!show)
  }

  const [skills, setSkills] = useState();

  const handleSkillsToggle = () => {
    setSkills(!skills)
  }

  let text1 = useRef(null);
  let text2 = useRef(null);
  let image1 = useRef(null);
  let logo = useRef(null);
  let bottomBar = useRef(null)

  useEffect(() => {
    gsap.from('.nav-item', { duration: 1, opacity: 0, delay: 1.5 })
    gsap.to('.nav-item', { duration: 1, opacity: 1, ease: Power3.easeOut, delay: 1.5 })
    gsap.from('.circle', { duration: 1, opacity: 0, delay: 2 })
    gsap.to('.circle', { duration: 1, opacity: 1, delay: 2 })
    gsap.from(logo, { duration: 2, opacity: 0, delay: 1 })
    gsap.to(logo, { duration: 2, opacity: 1, delay: 1 })
    gsap.from(text1, { duration: 2, opacity: 0, scale: 1.5, delay: 2 })
    gsap.to(text1, { duration: 2, opacity: 1, x: 0, y: -25, ease: Power3.easeOut, scale: 1, delay: 2 })
    gsap.from(text2, { duration: 2, opacity: 0, delay: 2 })
    gsap.to(text2, { duration: 2, opacity: 1, x: 0, y: 25, ease: Power3.easeOut, delay: 2 })
    gsap.from(bottomBar, { duration: 1, opacity: 0, delay: 1.5 })
    gsap.to(bottomBar, { duration: 1, opacity: 1, ease: Power3.easeOut, delay: 1.5 })
    gsap.from(image1, { rotation: -720, duration: 1 })
    gsap.to(image1, { rotation: 720, duration: 1.5 })

    gsap.to(".home", {
      scrollTrigger: {
        trigger: ".home",
        toggleActions: "restart pause reverse pause",
        markers: false,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true
      },
      opacity: 1,
    });
  }, [])

  const [flag, setFlag] = useState(0);

  return (
    <div className='home h-full min-h-screen relative flex justify-center items-center bg-slate dark:bg-black'>
      <div className='z-20 header nav-item absolute bg-slate dark:bg-black top-0 w-full h-16 flex flex-row basis-full justify-between items-center px-6 shadow-md shadow-lightgray dark:shadow-darkgray'>
        <div className='flex flex-row justify-between items-center'>
          <a href="https://medium.com/@uditmalhotraa" rel="noreferrer" target="_blank" className=' font-normal tracking-wide nav-item-foot sm:my-0 text-black dark:text-white text-lg transition ease-in-out duration-700 hover:scale-105 select-none '><button className=' border px-3 py-1 font-light hover:text-[#00CCFF]'>Work</button></a>
          <a href="https://drive.google.com/file/d/1vZLC6Jq4nVV-YMVfvSOY7jkug3w315A6/view?usp=sharing" rel="noreferrer" target="_blank" className=' font-normal tracking-wide nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-lg transition ease-in-out duration-700 hover:scale-105 select-none '><button className=' border px-3 py-1 font-light hover:text-[#FF3300]'>Resume</button></a>
        </div>
        <div className='flex flex-col border-2 border-black dark:border-white h-8 w-14 bg-transparent rounded-full relative justify-center cursor-pointer' onClick={() => { props.handleToggle(); setFlag(!flag) }}>
          <div className={flag ? "flex flex-col bg-white h-5 w-5 rounded-full absolute right-0 mx-1" : "flex flex-col bg-black h-5 w-5 rounded-full absolute left-0 mx-1"}></div>
        </div>
      </div>
      {!skills ?
        <div className='text w-full mt-16 mb-8 bg-slate dark:bg-black home-content h-max min-h-[350px] py-8 flex flex-col justify-between items-center'>
          <p ref={el => { text1 = el }} className='main-title leading-tight sm:leading-relaxed text-center text-black dark:text-white text-2xl sm:text-6xl font-normal'>Making lives easier through <b><div class="inner-text select-none"><p className='work-position-light'>creative ideas</p><p className='work-position-light'>structured code</p><p className='work-position-light'>clean design</p><p className='work-position-light'>research & statistics</p><p className='work-position-light'>data analysis</p></div></b></p>
          <div ref={el => { image1 = el }} className='flex justify-center items-center mt-6 mx-12 sm:my-16 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-lightgray'>
            <Udit />
          </div>
          <p ref={el => { text2 = el }} className='text-black dark:text-white text-2xl tracking-wide font-normal'>Developer</p>
        </div>
        :
        <div className='skills w-full mt-16 mb-8 bg-slate dark:bg-black h-max min-h-[350px] py-8 flex flex-col lg:flex-row justify-between items-center lg:w-[80%]'>
          <div className='languages flex flex-col justify-center m-auto min-w-[300px] lg:w-auto mb-5 lg:mb-auto pl-4 pr-24 sm:px-0'>
            <p className='text-black dark:text-white text-2xl tracking-wide font-medium mb-3 '>Languages</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>React JS, TS, Storybook</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>HTML, CSS, JS, SCSS</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Bootstrap, MUI, Tailwind, GSAP</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light border-l-2 pl-2'>C, C++, Java, Python</p>
          </div>
          <div className='tools flex flex-col justify-center m-auto min-w-[300px] lg:w-auto mb-5 lg:mb-auto pl-4 pr-24 sm:px-0'>
            <p className='text-black dark:text-white text-2xl tracking-wide font-medium mb-3 '>Tools</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Sketch, Adobe XD</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Adobe Photoshop, Illustrator</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Excel, Word, Powerpoint</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light border-l-2 pl-2'>Mac OS, Windows OS</p>
          </div>
          <div className='tools flex flex-col justify-center m-auto min-w-[300px] lg:w-auto mb-5 lg:mb-auto pl-4 pr-24 sm:px-0'>
            <p className='text-black dark:text-white text-2xl tracking-wide font-medium mb-3 '>Interests</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Data Science, Ethical Hacking</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Finance, Markets, Business</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light mb-1 border-l-2 pl-2'>Writing, Reading, Speaking</p>
            <p className='text-black dark:text-white text-xl tracking-wide font-light border-l-2 pl-2'>Psychology, Mathematics, etc</p>
          </div>
        </div>
      }
      <div ref={el => { bottomBar = el }} className='z-20 bg-slate dark:bg-black absolute bottom-0 w-full h-8 flex flex-row basis-full justify-between items-center px-6 shadow-boxy-light dark:shadow-boxy-dark'>
        <p className='text-darkgray w-full text-center dark:text-lightgray text-xl tracking-wide font-normal'>uditmalhotra98@gmail.com</p>
      </div>

      {show ?
        <div className='z-20 nav-item absolute right-[0.5rem] bottom-[2.5rem] flex flex-col justify-center items-center mr-1'>
          {!skills ?
            <IconButton onClick={handleSkillsToggle}><Tooltip title="Skills" placement='left'><SchoolIcon fontSize='large' className='text-[#666] dark:text-lightgray cursor-pointer' sx={{ fontSize: '3rem' }} /></Tooltip></IconButton>
            :
            <IconButton onClick={handleSkillsToggle}><Tooltip title="Home" placement='left'><HomeIcon fontSize='large' className='text-[#666] dark:text-lightgray cursor-pointer' sx={{ fontSize: '3rem' }} /></Tooltip></IconButton>
          }
          <IconButton href="https://linkedin.com/in/uditmalhotraa" target="_blank" rel="noopener noreferrer"><Tooltip title="Linkedin" placement='left'><LinkedInIcon fontSize='large' className='text-[#666] dark:text-lightgray cursor-pointer' sx={{ fontSize: '3rem' }} /></Tooltip></IconButton>
          <IconButton href="https://instagram.com/uditmalhotraa" target="_blank" rel="noopener noreferrer"><Tooltip title="Instagram" placement='left'><InstagramIcon fontSize='large' className='text-[#666] dark:text-lightgray cursor-pointer' sx={{ fontSize: '3rem' }} /></Tooltip></IconButton>
          <IconButton href="https://open.spotify.com/user/8m59lr39cu8zunxmrd9c2uavb?si=64c34848a0954120" target="_blank" rel="noopener noreferrer"><Tooltip title="Spotify" placement='left'><PlayCircleIcon fontSize='large' className='text-[#666] dark:text-lightgray cursor-pointer' sx={{ fontSize: '3rem' }} /></Tooltip></IconButton>
          <IconButton onClick={handleTogglee} ><CancelIcon fontSize='large' className='cursor-pointer' sx={{ color: '#DA5636', fontSize: '4rem', textShadow: "0px 0px 4px #666" }} /></IconButton>
        </div>
        :
        <div className='z-20 circle absolute right-[0.5rem] bottom-[2.5rem] flex flex-col justify-center items-center gap-y-2 mr-1'>
          <IconButton onClick={handleTogglee} ><AddCircleIcon fontSize="large" className='cursor-pointer' sx={{ color: '#36BADA', fontSize: '4rem' }} /></IconButton>
        </div>
      }
    </div>
  );
}

export default Home;