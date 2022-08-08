import { React, useRef, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gsap, Power3 } from 'gsap';
import { Logo } from '../Assets/Logo';
import { Udit } from '../Assets/Udit';

const Home = () => {

  let text1 = useRef(null);
  let text2 = useRef(null);
  let image1 = useRef(null);
  let nav = useRef(null);
  let logo = useRef(null);

  useEffect(() => {
    gsap.from(nav, { duration: 3, opacity: 0, delay: 4 })
    gsap.to(nav, { duration: 3, opacity: 1, delay: 4 })
    gsap.from('.nav-item', { opacity: 0, delay: 0 })
    gsap.to('.nav-item', { duration: 3, opacity: 1, delay: 1, stagger: 0.3 })
    gsap.from(logo, { duration: 4, opacity: 0, delay: 1 })
    gsap.to(logo, { duration: 4, opacity: 1, delay: 1 })
    gsap.from(text1, { duration: 4, opacity: 0, scale: 1.5, delay: 4 })
    gsap.to(text1, { duration: 4, opacity: 1, x: 0, y: -25, ease: Power3.easeOut, scale: 1, delay: 4 })
    gsap.from(text2, { duration: 4, opacity: 0, delay: 4 })
    gsap.to(text2, { duration: 4, opacity: 1, x: 0, y: 25, ease: Power3.easeOut, delay: 4 })
    gsap.from(image1, { rotation: -720, duration: 3 })
    gsap.to(image1, { rotation: 720, duration: 3 })

    gsap.to(".home", {
      scrollTrigger: {
        trigger: ".home",
        markers: false,
        start: "top top",
        pin: true,
        pinSpacing: false,
      },
      opacity: 1,
    });

  })

  return (
    <div className='home h-auto min-h-screen relative flex justify-center items-center bg-slate dark:bg-black'>
      <div className='header absolute top-0 w-full h-16 sm:h-24 flex flex-row basis-full justify-between items-center px-6 sm:px-12'>
        <a ref={el => { logo = el }} href="/"><Logo /></a>
        <div ref={el => { nav = el }} className='hidden sm:flex flex-row justify-between items-start'>
          <Link to={{pathname: '/', hash: 'about'}} className='nav-item mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>About</Link>
          <Link to={{pathname: '/', hash: 'work'}} className='nav-item mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Work</Link>
          <Link to={{pathname: '/', hash: 'skills'}} className='nav-item mx-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Skills</Link>
          <Link to={{pathname: '/', hash: 'contact'}} className='nav-item ml-5 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Contact</Link>
        </div>
      </div>
      <div className='text home-content h-auto pt-16 sm:pt-24 flex flex-col content-around justify-center items-center'>
        <p ref={el => { text1 = el }} className='main-title w-2/3 leading-tight sm:leading-relaxed text-center text-black dark:text-white text-4xl sm:text-6xl drop-shadow-dark dark:drop-shadow-light'>Making lives easier through intuitive interfaces</p>
        <div ref={el => { image1 = el }} className='flex justify-center items-center m-12 sm:my-16 h-40 w-40 rounded-full drop-shadow-dark dark:drop-shadow-light bg-lightgray dark:bg-lightgray'>
          <Udit />
        </div>
        <p ref={el => { text2 = el }} className='text-black dark:text-white text-2xl drop-shadow-dark dark:drop-shadow-light'>Creative Professional</p>
      </div>
    </div>
  );
}

export default Home;