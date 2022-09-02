import { React, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from '@mui/material';

const Contact = () => {

  let credits = useRef(null);
  let email = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        toggleActions: 'restart pause reverse pause',
        markers: false,
        start: "top 20%",
        end: "bottom 70%",
        scrub: 5,
      }
    })
      .from('.nav-item-foot', { opacity: 0, delay: 1.5 })
      .to('.nav-item-foot', { duration: 1, opacity: 1, delay: 1, stagger: 0.2 })
      .from(credits, { opacity: 0, xPercent: -100 })
      .to(credits, { duration: 2, opacity: 1, xPercent: 0, stagger: 0.5 })
      .from(email, { opacity: 0, xPercent: -100 })
      .to(email, { duration: 2, opacity: 1, xPercent: 0, stagger: 0.5 })

    gsap.to(".contact", {
      scrollTrigger: {
        trigger: ".contact",
        toggleActions: 'restart pause reverse pause',
        markers: false,
        start: "top top",
        pin: true,
        pinSpacing: true,
        scrub: true
      },
      opacity: 1,
    });
  })

  const [state, setState] = useState({ value: 'uditmalhotra98@gmail.com', copied: false });

  const onCopy = () => {
    setState({ copied: true });
  };

  return (
    <div id="contact" className='contact h-screen max-h-screen flex flex-col px-6 sm:px-12 py-8 relative border-t border-black dark:border-white bg-slate dark:bg-black'>
      <div className='h-auto sm:h-screen flex flex-col items-start justify-start sm:justify-center'>
        <p className=' text-black dark:text-white text-3xl mb-4 sm:text-6xl select-none'>Say hi and let’s work together</p>
        <CopyToClipboard onCopy={onCopy} text={state.value}>
          <Tooltip
            disableFocusListener disableTouchListener
            title="Click to copy"
            arrow>
            <p ref={el => { email = el }} className=' work-position-light border-b-2 border-black dark:border-white pb-2 text-2xl break-all font-semibold md:text-5xl lg:text-6xl hover:text-darkgray'>uditmalhotra98@gmail.com</p>
          </Tooltip>
        </CopyToClipboard>
      </div>
      <div className='h-auto pb-6 sm:h-24 w-full absolute bottom-0 px-6 sm:px-12 left-0 flex flex-col sm:flex-row justify-between'>
        <p ref={el => { credits = el }} className='order-last sm:order-first mt-6 sm:mt-0 text-lightgray self-center dark:text-darkgray text-lg text-center sm:text-left select-none'>© 2022, Designed & Developed by Udit Malhotra</p>
        <div className='flex flex-col sm:flex-row items-center'>
          <a href="https://medium.com/@uditmalhotraa" rel="noreferrer" target="_blank" className='nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Medium</a>
          <a href="https://www.linkedin.com/in/uditmalhotraa/" rel="noreferrer" target="_blank" className='nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Linkedin</a>
          <a href="https://www.instagram.com/uditmalhotraa/" rel="noreferrer" target="_blank" className='nav-item-foot mx-5 my-2 sm:my-0 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Instagram</a>
          <a href="https://open.spotify.com/user/8m59lr39cu8zunxmrd9c2uavb?si=3ab67f739b114717" rel="noreferrer" target="_blank" className='nav-item-foot mx-5 sm:mr-0 my-2 sm:my-0 text-black dark:text-white text-xl transition ease-in-out duration-700 hover:scale-110 select-none'>Spotify</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;