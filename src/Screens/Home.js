import { React, useRef, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gsap, Power3 } from 'gsap';
import { Logo } from '../Assets/Logo';
import { Udit } from '../Assets/Udit';
import './style.scss';

const Home = (props) => {

  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let image1 = useRef(null);
  let logo = useRef(null);

  useEffect(() => {
    gsap.from('.nav-item', { opacity: 0, delay: 1.5 })
    gsap.to('.nav-item', { duration: 1, opacity: 1, delay: 1, stagger: 0.2 })
    gsap.from(logo, { duration: 2, opacity: 0, delay: 1 })
    gsap.to(logo, { duration: 2, opacity: 1, delay: 1 })
    gsap.from(text1, { duration: 2, opacity: 0, scale: 1.5, delay: 1 })
    gsap.to(text1, { duration: 2, opacity: 1, x: 0, y: -25, ease: Power3.easeOut, scale: 1, delay: 1 })
    gsap.from(text2, { duration: 2, opacity: 0, delay: 1.5 })
    gsap.to(text2, { duration: 2, opacity: 1, x: 0, y: 25, ease: Power3.easeOut, delay: 1.5 })
    gsap.from(text3, { duration: 2, opacity: 0, delay: 1.5 })
    gsap.to(text3, { duration: 2, opacity: 1, x: 0, y: 25, ease: Power3.easeOut, delay: 1.5 })
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
  })

  const [flag, setFlag] = useState(0);

  return (
    <div className='home h-auto min-h-screen relative flex justify-center items-center bg-slate dark:bg-black'>
      <div className='header absolute top-0 w-full h-16 sm:h-24 flex flex-row basis-full justify-between items-center px-6 sm:px-12'>
        <a ref={el => { logo = el }} href="/" className='font-extralight text-3xl work-position-hover text-black dark:text-white'>Udit Malhotra</a>
        <div className='flex flex-row items-center'>
          {/* <div className='hidden sm:flex flex-row justify-between items-start mr-8'>
            <Link to={{ pathname: '/', hash: 'about' }} className='nav-item mx-5 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>About</Link>
            <Link to={{ pathname: '/', hash: 'work' }} className='nav-item mx-5 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Work</Link>
            <Link to={{ pathname: '/', hash: 'skills' }} className='nav-item mx-5 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Skills</Link>
            <Link to={{ pathname: '/', hash: 'contact' }} className='nav-item ml-5 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Contact</Link>
          </div> */}
          <div className='nav-item flex flex-col border-2 border-black dark:border-white h-8 w-14 bg-transparent rounded-full relative justify-center cursor-pointer' onClick={() => { props.handleToggle(); setFlag(!flag) }}>
            <div className={!flag ? "flex flex-col bg-white h-5 w-5 rounded-full absolute right-0 mx-1" : "flex flex-col bg-black h-5 w-5 rounded-full absolute left-0 mx-1"}></div>
          </div>
        </div>
      </div>
      <div className='text home-content h-auto pt-16 sm:pt-24 flex flex-col content-around justify-center items-center'>
        <p ref={el => { text1 = el }} className='main-title leading-tight sm:leading-relaxed text-center text-black dark:text-white text-4xl sm:text-6xl select-none mb-4'>Making lives easier through <b><div class="inner-text"><p className='work-position-light'>creative ideas</p><p className='work-position-light'>scalable code</p><p className='work-position-light'>clean design</p><p className='work-position-light'>research & statistics</p><p className='work-position-light'>design thinking</p></div></b></p>
        <div ref={el => { image1 = el }} className='flex justify-center items-center m-12 sm:my-16 h-40 w-40 rounded-full bg-lightgray dark:bg-lightgray'>
          <Udit />
        </div>
        <p ref={el => { text2 = el }} className='text-black dark:text-white text-2xl select-none'>Creative Professional</p>
        <p ref={el => { text3 = el }} className='text-black dark:text-white text-2xl select-none work-position-light font-thin tracking-wider'>Coming Soon</p>
      </div>
    </div>
  );
}

export default Home;