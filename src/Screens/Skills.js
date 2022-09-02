import { React, useEffect} from 'react';
import { gsap, Power3 } from 'gsap';
import { SkillsSVGNonMob } from '../Assets/SkillsSVGNonMob';
import { SkillsSVGMob } from '../Assets/SkillsSVGMob';

const Skills = () => {

    useEffect(() => {

        gsap.to(".skills", {
            scrollTrigger: {
              trigger: ".skills",
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

    return (
        <div id="skills" className='skills h-auto min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-8 md:py-24 border-t border-black dark:border-white bg-slate dark:bg-black'>
            <SkillsSVGNonMob/>
            <SkillsSVGMob />
        </div>
    );
}

export default Skills;