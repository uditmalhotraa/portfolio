import { React, useRef, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gsap, Power3 } from 'gsap';
import { Udit } from '../Assets/Udit';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ArticleIcon from '@mui/icons-material/Article';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import CancelIcon from '@mui/icons-material/Cancel';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
    gsap.from(text1, { duration: 1, opacity: 0, scale: 1.3, delay: 2 })
    gsap.to(text1, { duration: 1, opacity: 1, x: 0, y: -25, ease: Power3.easeOut, scale: 1, delay: 2 })
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
    <div className='home relative flex flex-col justify-center items-center bg-slate dark:bg-black' id="top">

      {/* Header */}
      <div className='z-20 header nav-item absolute bg-slate dark:bg-black top-0 w-full h-16 flex flex-row basis-full justify-between items-center px-6'>
        <Tooltip title="Refesh" placement='bottom'><a href="/" className='text-black dark:text-white text-xl tracking-wide font-normal'><span className='text-accent-dark'>{"{"}</span>Udit Malhotra<span className='text-accent-dark'>{"}"}</span></a></Tooltip>
        <div className='flex flex-col border-2 border-black dark:border-white h-8 w-14 bg-transparent rounded-full relative justify-center cursor-pointer' onClick={() => { props.handleToggle(); setFlag(!flag) }}>
          {flag ? <LightModeIcon className='absolute left-0 mx-1' /> : <DarkModeIcon className=' text-white absolute right-0 mx-1' />}
        </div>
      </div>

      {/* Fold 1: Home */}
      <div className='text relative w-full mb-8 bg-slate dark:bg-black home-content h-screen py-6 px-4 flex flex-col justify-center items-center'>
        <p ref={el => { text1 = el }} className='main-title leading-tight sm:leading-relaxed text-center text-black dark:text-white text-2xl sm:text-6xl font-normal'>Making lives easier through <b><div class="inner-text select-none"><p className='text-accent-dark'>creative ideas</p><p className='text-accent-dark'>structured code</p><p className='text-accent-dark'>clean design</p><p className='text-accent-dark'>research & statistics</p><p className='text-accent-dark'>data analysis</p></div></b></p>
        <div ref={el => { image1 = el }} className='flex justify-center items-center mt-6 mx-12 my-2 sm:my-16 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-lightgray'>
          <Udit />
        </div>
        <p ref={el => { text2 = el }} className='text-darkgray dark:text-lightgray text-xl tracking-wide font-normal'>Developer</p>
      </div>

      {/* Fold 2: Journey */}
      <div className='skills relative w-full mt-16 mb-8 bg-slate dark:bg-black py-6 px-4 h-fit flex flex-col justify-between items-center'>
        <div className='absolute top-[-15%] sm:top-[-25%] left-[5%] h-[300vh] sm:h-[150vh] lg:h-[200vh] flex flex-col items-center'>
          <div className='circle absolute animate-ping rounded-full h-3 w-3 bg-accent-dark'></div>
          <div className='circle relative rounded-full h-3 w-3 bg-accent-dark'></div>
          <div className='circle w-0.5 bg-accent-dark h-full'></div>
          <div className='circle relative rounded-full h-3 w-3 bg-accent-dark'></div>
          <div className='circle absolute bottom-0 animate-ping rounded-full h-3 w-3 bg-accent-dark'></div>
        </div>
        <ul className='ml-6 sm:ml-0'>
          <li className='text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'><span className='text-accent-dark'>var</span> profile = <span className='text-accent-dark'>{"{"}</span></li>
          <li className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>"<span className='text-darkgray dark:text-lightgray'>Education</span>": <span className='text-darkgray dark:text-lightgray'>{"["}</span>
            <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "React JS", "TS", "Storybook" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "HTML", "CSS", "JS", "SCSS", "Git" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Bootstrap", "MUI", "Tailwind", "GSAP" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "C", "C++", "Java", "Python", "SQL" <span className='text-darkgray dark:text-lightgray'>{"]"}</span></li>
            </ul>
            <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,
          </li>
          <li className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>"<span className='text-darkgray dark:text-lightgray'>Tools</span>": <span className='text-darkgray dark:text-lightgray'>{"["}</span>
            <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Sketch", "XD", "Miro", "Jira", "Azure" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Adobe Photoshop", "Illustrator" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Excel", "Word", "Powerpoint" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Mac OS", "Windows OS" <span className='text-darkgray dark:text-lightgray'>{"]"}</span></li>
            </ul>
            <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,
          </li>
          <li className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>"<span className='text-darkgray dark:text-lightgray'>Interests</span>": <span className='text-darkgray dark:text-lightgray'>{"["}</span>
            <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Data Science", "Ethical Hacking" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Finance", "Markets", "Business" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Writing", "Reading", "Speaking" <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,</li>
              <li><span className='text-darkgray dark:text-lightgray'>{"["}</span> "Psychology", "Mathematics" <span className='text-darkgray dark:text-lightgray'>{"]"}</span></li>
            </ul>
            <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,
          </li>
          <li className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>"<span className='text-darkgray dark:text-lightgray'>Job Experience</span>": <span className='text-darkgray dark:text-lightgray'>{"["}</span>
            <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
              <li><span className='text-accent-dark'>{"{"}</span> "Company": "Spenda"
                <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
                  <li>&nbsp;"Role": "Associate Software Engineer"</li>
                  <li>&nbsp;"Time Served": "10 months +"</li>
                  <li>&nbsp;"Location": "Noida, IN"</li>
                </ul>
                <span className='text-accent-dark'>{"}"}</span>,</li>
              <li><span className='text-accent-dark'>{"{"}</span> "Company": "MintWorxs"
                <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
                  <li>&nbsp;"Role": "Web Developer"</li>
                  <li>&nbsp;"Time Served": "10 months"</li>
                  <li>&nbsp;"Location": "Noida, IN"</li>
                </ul>
                <span className='text-accent-dark'>{"}"}</span>,</li>
              <li><span className='text-accent-dark'>{"{"}</span> "Company": "Infosys"
                <ul className='ml-4 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal height-code'>
                  <li>&nbsp;"Role": "System Engineer"</li>
                  <li>&nbsp;"Time Served": "1 year"</li>
                  <li>&nbsp;"Location": "Pune, IN"</li>
                </ul>
                <span className='text-accent-dark'>{"}"}</span>,</li>
            </ul>
            <span className='text-darkgray dark:text-lightgray'>{"]"}</span>,
          </li>
          <span className='text-accent-dark text-base sm:text-xl tracking-wide font-normal height-code'>{"}"}</span><span className='text-black dark:text-white'>;</span>
        </ul>
      </div>

      {/* Fold 3: Contact */}
      <div className='contact relative w-full mt-16 mb-8 bg-slate dark:bg-black py-6 px-4 h-fit flex flex-col justify-between items-center'>
        <div className='absolute top-[-15%] sm:top-[-25%] right-[5%] h-[70vh] sm:h-[80vh] lg:h-[75vh] flex flex-col items-center'>
          <div className='circle absolute animate-ping rounded-full h-3 w-3 bg-accent-dark'></div>
          <div className='circle relative rounded-full h-3 w-3 bg-accent-dark'></div>
          <div className='circle w-0.5 bg-accent-dark h-full'></div>
          <div className='circle relative rounded-full h-3 w-3 bg-accent-dark'></div>
          <div className='circle absolute bottom-0 animate-ping rounded-full h-3 w-3 bg-accent-dark'></div>
        </div>
        <div className='h-screen w-full px-4 flex flex-col justify-center'>
        <p className='text-black dark:text-white text-base sm:text-xl tracking-wide font-normal'>You can check my resume here <a href="https://drive.google.com/file/d/1eEehKmYe2TJ9QVhKgyFSBIzJlGFVa12p/view?usp=sharing" rel="noopener noreferrer" className='text-black dark:text-white hover:text-darkgray hover:dark:text-lightgray text-base sm:text-xl tracking-wide font-normal'>{'<Link>'}<span className='text-accent-dark'>Resume</span>{"</Link>"}</a></p>
          <div className='h-fit w-full flex flex-col justify-center'>
            <ul className='flex flex-col sm:flex-row py-8'>
              <li className='nav-links sm:mr-5 text-black dark:text-white hover:text-darkgray hover:dark:text-lightgray text-base sm:text-xl tracking-wide font-normal height-code'><a href="https://www.linkedin.com/in/uditmalhotraa/" rel="noopener noreferrer">Linkedin()</a></li>
              <li className='nav-links sm:mx-5 text-black dark:text-white hover:text-darkgray hover:dark:text-lightgray text-base sm:text-xl tracking-wide font-normal height-code'><a href="https://medium.com/@uditmalhotraa" rel="noopener noreferrer">Medium()</a></li>
              <li className='nav-links sm:mx-5 text-black dark:text-white hover:text-darkgray hover:dark:text-lightgray text-base sm:text-xl tracking-wide font-normal height-code'><a href="https://instagram.com/uditmalhotraa" rel="noopener noreferrer">Instagram()</a></li>
              <li className='nav-links sm:ml-5 text-black dark:text-white hover:text-darkgray hover:dark:text-lightgray text-base sm:text-xl tracking-wide font-normal height-code'><a href="https://open.spotify.com/user/8m59lr39cu8zunxmrd9c2uavb?si=4bfc6150bf6b4145" rel="noopener noreferrer">Spotify()</a></li>
            </ul>
          </div>
        <a href="#top" className='absolute bottom-[5%] left-0 ml-8 text-black dark:text-white text-base sm:text-xl tracking-wide font-normal hover:text-darkgray hover:dark:text-lightgray'>return(<span className='text-accent-dark'>toTop</span>);</a>
        </div>
      </div>

      {/* Footer */}
      <div ref={el => { bottomBar = el }} className='z-20 bg-accent-dark absolute bottom-0 w-full h-8 flex flex-row basis-full justify-between items-center px-6 rounded-t-2xl'>
        <Tooltip title="Email" placement='top'><a href='mailto:uditmalhotra98@gmail.com' target="_parent" rel="noopener noreferrer" className='text-white w-full text-center dark:text-black text-xl tracking-wide font-normal'>uditmalhotra98@gmail.com</a></Tooltip>
      </div>
    </div>
  );
}

export default Home;