import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <nav className="flex justify-between items-center text-white bg-black">
            <h1 className='text-3xl font-bold text-[#00df9a] p-6 hover:cursor-pointer'>React.</h1>
            <ul className='hidden md:flex items-center uppercase mr-4' >
                <li className='p-4 hover:border-b ease-in-out duration-300  hover:cursor-pointer'>Home</li>
                <li className='p-4 hover:border-b ease-in-out duration-300  hover:cursor-pointer'>Company</li>
                <li className='p-4 hover:border-b ease-in-out duration-300  hover:cursor-pointer'>Resoures</li>
                <li className='p-4 hover:border-b ease-in-out duration-300  hover:cursor-pointer'>About</li>
                <li className='p-4 hover:border-b ease-in-out duration-300  hover:cursor-pointer'>Contact</li>
            </ul>

            <div onClick={handleNav} className='mr-6 block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} cla />}

            </div>

            <div className={!nav ? 'fixed top-0 left-0 w-[60%] h-screen bg-[#000300] border-r border-gray-950 ease-in-out duration-500' : 'fixed left-[-100%]  duration-1000'}>
                <h1 className='text-3xl font-bold text-[#00df9a] p-6 hover:cursor-pointer'>React.</h1>
                <ul className=' items-center uppercase'>
                    <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Home</li>
                    <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Company</li>
                    <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Resoures</li>
                    <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>About</li>
                    <li className='p-5 border-b border-gray-800 hover:bg-[#e6e6fa57] ease-in-out duration-300 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;