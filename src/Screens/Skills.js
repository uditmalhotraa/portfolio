import React from 'react';
import { SkillsSVGNonMob } from '../Assets/SkillsSVGNonMob';
import { SkillsSVGMob } from '../Assets/SkillsSVGMob';

const Skills = () => {
    return (
        <div className='skills h-auto min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-8 md:py-24'>
            <SkillsSVGNonMob/>
            <SkillsSVGMob />
        </div>
    );
}

export default Skills;