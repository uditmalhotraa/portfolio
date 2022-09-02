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
              start: "top top",
              end: "top bottom",
              scrub: -1,
            }
          })
          .from('.resume', {opacity: 1, scale: 1, ease: Power3.easeInOut },"-=2")
          .to('.resume', {opacity: 1, scale: 1.5,  ease: Power3.easeInOut, duration: 2},"+=2")

          gsap.to(".about", {
            scrollTrigger: {
              trigger: ".about",
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

return (
    <div id="about" className='about h-auto min-h-screen flex flex-col justify-center items-center border-t border-black dark:border-white bg-slate dark:bg-black'>
        <p id="split" className='mb-16 w-2/3 sm:w-1/2 text-black font-light dark:text-white text-center tracking-wide leading-normal text-2xl sm:text-4xl select-none'>I love working with people who use creative and time saving approach to yield awesome results.
            I make use of heuristic approaches to design thinking and user analysis which enable me to continuously iterate on solutions.</p>
        <button className='resume hover:bg-darkgray hover:dark:bg-lightgray text-white dark:text-black bg-black dark:bg-white px-6 py-3 rounded transition ease-in-out duration-700 hover:scale-105 select-none'>Download Resume</button>
    </div>
);
}

export default About;