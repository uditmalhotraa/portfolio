import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
              trigger: ".about",
              toggleActions: "restart pause reverse pause",
              markers: false,
              start: "top 10%",
              end: "center center",
              scrub: -1,
            }
          })
          .from('.resume', {opacity: 1, scale: 1, ease: Power3.easeInOut },"-=2")
          .to('.resume', {opacity: 1, scale: 1.5,  ease: Power3.easeInOut, duration: 2},"+=2")

          gsap.to(".about", {
            scrollTrigger: {
              trigger: ".about",
              markers: false,
              start: "top top",
              pin: true,
              pinSpacing: false,
            },
            opacity: 1,
          });
      })

return (
    <div id="about" className='about h-auto min-h-screen flex flex-col justify-center items-center border-t border-black dark:border-white bg-slate dark:bg-black'>
        <p id="split" className='mb-16 w-2/3 sm:w-1/2 text-black font-light dark:text-white text-center tracking-wide leading-normal text-2xl sm:text-4xl drop-shadow-dark dark:drop-shadow-light'>I love working with people who keep the world spinning ✱
            I make use of heuristic approaches to design thinking and user analysis which enable me to continuously iterate on solutions and craft increasingly effective and delightful digital products.</p>
        <button className='resume hover:bg-darkgray hover:dark:bg-lightgray text-white dark:text-black bg-black dark:bg-white px-6 py-3 rounded drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-105'>Download Resume</button>
    </div>
);
}

export default About;