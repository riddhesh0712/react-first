import React from 'react'


export const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-4'>
                <p className='sm:text-2xl text-lg font-bold text-[#00df9a] uppercase'>growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-5xl font-extrabold sm:py-8 py-4'>Grow with data.</h1>
                <div>
                    <p className='sm:text-3xl text-2xl font-bold '>Fast, flecible financing for BTB, BTC & SASS</p>
                </div>
                <p className='sm:text-3xl text-2xl text-gray-500 font-bold'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <div className='py-6'>
                    <button className='py-4 px-8 bg-[#00df9a] w-[35%] rounded-lg text-2xl font-bold hover:bg-[#02c98a]'>Get Started</button>
                </div>

            </div>
        </div>
    );
}

export default Hero