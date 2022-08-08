import { React, useEffect, useRef } from 'react';
import { gsap  } from 'gsap';

const Contact = () => {

    let credits = useRef(null);
    let email = useRef(null);
    let line = useRef(null);

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
              trigger: ".contact",
              toggleActions: "restart pause reverse pause",
              markers: false,
              start: "top 20%",
              end: "bottom 70%",
              scrub: 5,
            //   pin: ".home"
            }
          })
        .from('.nav-item-foot', {opacity: 0, delay: 0})
        .to('.nav-item-foot', { duration: 2, opacity: 1, delay:0, stagger: 0.5})
        .from(credits, {opacity: 0, xPercent: -100})
        .to(credits, { duration: 2, opacity: 1, xPercent: 0, stagger: 0.5})
        .from(email, {opacity: 0, xPercent: -100})
        .to(email, { duration: 2, opacity: 1, xPercent: 0, stagger: 0.5})
        // .from(line, {opacity: 0, xPercent: 100},"-=5")
        // .to(line, { duration: 2, opacity: 1, xPercent: 0, stagger: 0.5},"+=5")

        gsap.to(".contact", {
            scrollTrigger: {
              trigger: ".contact",
              markers: false,
              start: "top top",
              pin: true,
              pinSpacing: false,
            },
            opacity: 1,
          });
      })

    return (
        <div id="contact" className='contact h-auto min-h-screen flex flex-col px-6 sm:px-12 py-8 relative border-t border-black dark:border-white bg-slate dark:bg-black'>
            <div className='h-auto sm:h-screen flex flex-col items-start justify-start sm:justify-center'>
                <p ref={el => { line = el }} className=' text-black dark:text-white text-3xl mb-2 sm:text-6xl drop-shadow-dark dark:drop-shadow-light'>Say hi and let’s work together</p>
                <p ref={el => { email = el }} className=' text-black dark:text-white border-b-2 pb-2 text-2xl break-all font-semibold md:text-5xl lg:text-6xl drop-shadow-dark dark:drop-shadow-light hover:text-darkgray'>uditmalhotra98@gmail.com</p>
            </div>
            <div className='h-auto pb-6 sm:h-24 w-full absolute bottom-0 px-6 sm:px-12 left-0 flex flex-col sm:flex-row justify-between'>
                <p ref={el => { credits = el }} className='order-last sm:order-first mt-6 sm:mt-0 text-darkgray self-center dark:text-lightgray text-xl drop-shadow-dark dark:drop-shadow-light text-center sm:text-left'>© 2022, Designed & Developed by Udit Malhotra</p>
                <div className='flex flex-col sm:flex-row items-center'>
                    <p className='nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Spotify</p>
                    <p className='nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Medium</p>
                    <p className='nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Instagram</p>
                    <p className='nav-item-foot mx-5 sm:mr-0 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Linkedin</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;