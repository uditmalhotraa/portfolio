import React from 'react';

const Contact = () => {
    return (
        <div className='contact h-auto min-h-screen flex flex-col px-6 sm:px-12 py-8 relative'>
            <div className='h-auto sm:h-screen flex flex-col items-start justify-start sm:justify-center'>
                <p className=' text-black dark:text-white text-3xl mb-2 sm:text-6xl drop-shadow-dark dark:drop-shadow-light'>Say hi and let’s work together</p>
                <p className=' text-black dark:text-white border-b-2 pb-2 text-2xl break-all font-semibold md:text-5xl lg:text-6xl drop-shadow-dark dark:drop-shadow-light hover:text-darkgray'>uditmalhotra98@gmail.com</p>
            </div>
            <div className='h-auto pb-6 sm:h-24 w-full absolute bottom-0 px-6 sm:px-12 left-0 flex flex-col sm:flex-row justify-between'>
                <p className='order-last sm:order-first mt-6 sm:mt-0 text-darkgray self-center dark:text-lightgray text-xl drop-shadow-dark dark:drop-shadow-light'>© 2022 Udit Malhotra</p>
                <div className='flex flex-col sm:flex-row items-center'>
                    <p className='mx-5 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Spotify</p>
                    <p className='mx-5 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Medium</p>
                    <p className='mx-5 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Instagram</p>
                    <p className='mx-5 sm:mr-0 my-2 sm:my-0 text-black dark:text-white text-xl drop-shadow-dark dark:drop-shadow-light transition ease-in-out duration-700 hover:scale-110'>Linkedin</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;