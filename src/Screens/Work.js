import { React, useEffect } from 'react';
import { gsap } from 'gsap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Arrow } from '../Assets/Arrow';
import { fontSize } from '@mui/system';

const Work = () => {

    useEffect(() => {

        gsap.to(".work-wrapper", {
            scrollTrigger: {
                trigger: ".work-wrapper",
                toggleActions: 'restart pause reverse pause',
                markers: false,
                start: "top top",
                pin: true,
                pinSpacing: false,
                scrub: true
            },
            opacity: 1,
        });

        let sections = gsap.utils.toArray(".work");
        // let panelsContainer = document.querySelector(".work-wrapper");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".work-wrapper",
                toggleActions: 'restart pause reverse pause',
                start: "top top",
                markers: false,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                // snap: {
                //     snapTo: 1 / (sections.length - 1),
                //     inertia: false,
                //     duration: { min: 0.1, max: 0.1 }
                // },
                //end: () => "+=" + (panelsContainer.offsetWidth)
            },
        });
    })

    function createData( company, project, date, expand, linked ) {
        return { company, project, date, expand, linked };
    }

    const rows = [
        createData('Spenda', "Various Products", "Jan 2022 - Present", "Read More", ""),
        createData('IQVIA', "Digital Suite", "Apr 2021 - Dec 2021", "Read More", ""),
        createData('IQVIA', "Patient Community", "Apr 2021 - Dec 2021", "Read More", ""),
        createData('Sanofi', "eConsent Management", "Apr 2021 - Dec 2021", "Read More", ""),
        createData('TradingView', "Sentiment Table", "Apr 2021 - Dec 2021", "Read More", ""),
    ];

    function createKnowledge( lang ) {
        return { lang };
    }

    const box = [
        createKnowledge("React JS"),
        createKnowledge("CSS, SCSS"),
        createKnowledge("Tailwind"),
        createKnowledge("Bootstrap, MUI"),
        createKnowledge("Js, TS"),
        createKnowledge("GSAP"),
        createKnowledge("Git"),
        createKnowledge("Data Analytics"),
        createKnowledge("UI Design"),
        createKnowledge("Figma, XD"),
        createKnowledge("Illustator"),
        createKnowledge("SQL"),
        createKnowledge("Java, Python"),
        createKnowledge("C, C++, Data Structure"),
        createKnowledge("Window, Mac"),
    ];

    return (
        <div className='work-wrapper overflow-hidden w-tripple overscroll-none flex flex-row flex-nowrap'>
            <div id="work" className='overflow-hidden relative w-screen work h-screen min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 py-8 border-t border-r border-black dark:border-white bg-slate dark:bg-black'>
                <h1 className='text-black dark:text-white text-2xl sm:text-5xl select-none'>Knowledge Base</h1>
                <div className='w-[100%] sm:w-[90%] flex flex-row justify-center items-center flex-wrap m-auto'>
                {box.map((box) => (
                    <div className='flex flex-row items-start justify-start bg-white dark:bg-black p-2 w-[12%] h-14 sm:h-28 basis-1/3 md:basis-1/6 m-1 sm:m-2 shadow-boxy hover:shadow-boxy2 border-b-2 border-darkgray dark:border-slate'><p className='text-sm sm:text-lg select-none text-black dark:text-slate dark:hover:text-white tracking-wider'>{box.lang}</p></div>
                    ))}
                </div>
            </div>

            <div id="work" className='overflow-hidden relative w-screen work h-screen min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 py-8 border-t border-r border-black dark:border-white bg-slate dark:bg-black'>
                <h1 className='text-black dark:text-white text-2xl sm:text-5xl select-none'>Work</h1>
                <TableContainer component={Paper} className="m-auto dark:bg-black">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                        <TableHead >
                            <TableRow >
                                <TableCell style={{fontWeight: 700, fontSize: '1rem'}} className=" dark:bg-black dark:text-white">Brand</TableCell>
                                <TableCell style={{fontWeight: 700, fontSize: '1rem'}} align="right" className=" dark:bg-black dark:text-white">Project</TableCell>
                                <TableCell style={{fontWeight: 700, fontSize: '1rem'}} align="right" className=" dark:bg-black dark:text-white">Period</TableCell>
                                <TableCell style={{fontWeight: 700, fontSize: '1rem'}} align="right" className=" dark:bg-black dark:text-white">Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='dark:bg-black dark:text-white'>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.company}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, }} 
                                >
                                    <TableCell component="th" scope="row" style={{fontSize: '1rem'}} className='dark:text-white dark:border-slate'>
                                        {row.company}
                                    </TableCell>
                                    <TableCell style={{fontSize: '1rem'}} align="right" className='dark:text-white dark:border-slate'>{row.project}</TableCell>
                                    <TableCell style={{fontSize: '1rem'}} align="right" className='dark:text-white dark:border-slate'>{row.date}</TableCell>
                                    <TableCell style={{fontSize: '1rem'}} align="right" className='dark:text-white dark:border-slate'><a href={row.linked} target="_blank" rel="noreferrer" className=' hover:text-darkgray hover:dark:text-lightgray'>{row.expand}</a></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* <div id="work" className='overflow-hidden relative w-screen work h-screen min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 py-8 border-t border-r border-black dark:border-white bg-slate dark:bg-black'>
                <div className='w-full flex flex-col lg:flex-row items-top justify-between'>
                    <h1 className='text-black dark:text-white text-2xl sm:text-5xl drop-shadow-dark dark:drop-shadow-light select-none'>Spenda</h1>
                    <p className='w-full lg:w-1/2 mt-0 sm:mt-2 l:mt-0 text-black dark:text-white text-xl sm:text-2xl font-thin lg:text-end drop-shadow-dark dark:drop-shadow-light select-none'>Developed various products and modules at Spenda which enables new ways for modern B2B payment solutions</p>
                </div>
                <img className=' w-[95%] h-auto lg:w-[80%] my-6' alt="Work" src={WorkImage} />
                <div className='w-full flex flex-col md:flex-row items-top justify-between'>
                    <div className='w-auto lg:w-2/3 flex flex-col lg:flex-row items-top justify-between'>
                        <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light select-none'>DATE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>JAN 2022 - Present</span></p>
                        <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light select-none'>TYPE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>UI/UX Development</span></p>
                    </div>
                    <div className='cursor-pointer w-auto flex flex-row items-center'>
                        <a href="https://spenda.co/" target="_blank" rel="noreferrer" className='text-black mr-4 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-105 select-none'>READ MORE</a>
                        <Arrow />
                    </div>
                </div>
            </div> */}

            {/* <div id="work" className='overflow-hidden relative w-screen work h-screen min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 py-8 border-t border-r border-black dark:border-white bg-slate dark:bg-black'>
                <div className='w-full flex flex-col lg:flex-row items-top justify-between'>
                    <h1 className='text-black dark:text-white text-2xl sm:text-5xl drop-shadow-dark dark:drop-shadow-light select-none'>IQVIA</h1>
                    <p className='w-full lg:w-1/2 mt-0 sm:mt-2 l:mt-0 text-black dark:text-white text-xl sm:text-2xl font-thin lg:text-end drop-shadow-dark dark:drop-shadow-light select-none'>Developed IQVIA Project Suite and IQVIA Patient Community program for leading healthcare giant</p>
                </div>
                <img className='w-[95%] h-auto lg:w-[80%] my-6' alt="Work" src={WorkImage} />
                <div className='w-full flex flex-col md:flex-row items-top justify-between'>
                    <div className='w-auto lg:w-2/3 flex flex-col lg:flex-row items-top justify-between'>
                        <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light select-none'>DATE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>JUN 2021 - Nov 2021</span></p>
                        <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light select-none'>TYPE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>UI/UX DEVELOPMENT</span></p>
                    </div>
                    <div className='cursor-pointer w-auto flex flex-row items-center'>
                        <a href="https://www.iqvia.com/" target="_blank" rel="noreferrer" className='text-black mr-4 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-105 select-none'>READ MORE</a>
                        <Arrow />
                    </div>
                </div>
            </div > */}

            {/* <div id="work" className='overflow-hidden relative w-screen work h-screen min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 py-8 border-t border-black dark:border-white bg-slate dark:bg-black'>
                <div className='w-full flex flex-col lg:flex-row items-top justify-between'>
                    <h1 className='text-black dark:text-white text-2xl sm:text-5xl drop-shadow-dark dark:drop-shadow-light select-none'>Sanofi</h1>
                    <p className='w-full lg:w-1/2 mt-0 sm:mt-2 l:mt-0 text-black dark:text-white text-xl sm:text-2xl font-thin lg:text-end drop-shadow-dark dark:drop-shadow-light select-none'>Developed Sanofi Portal which is an eConsent portal and helped making onboarding fast & paperless</p>
                </div>
                <img className='w-[95%] h-auto lg:w-[80%] my-6' alt="Work" src={WorkImage} />
                <div className='w-full flex flex-col md:flex-row items-top justify-between'>
                    <div className='w-auto lg:w-2/3 flex flex-col lg:flex-row items-top justify-between'>
                        <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light select-none'>DATE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>Nov 2021 - DEC 2021</span></p>
                        <p className='text-black mb-1 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light select-none'>TYPE: <span className='text-darkgray dark:text-lightgray text-2xl font-light'>DESIGN & DEVELOPMENT</span></p>
                    </div>
                    <div className='cursor-pointer w-auto flex flex-row items-center'>
                        <a href="https://www.sanofi.com/" target="_blank" rel="noreferrer" className='text-black mr-4 dark:text-white text-xl sm:text-2xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-105 select-none'>READ MORE</a>
                        <Arrow />
                    </div>
                </div>
            </div > */}
        </div>
    );
}

export default Work;