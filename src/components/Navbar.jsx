import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20
     text-white bg-black fixed'>
            <div>
                <h1 className='font-signature text-5xl px-5'>Abhishek</h1>
            </div>
            <ul className='text-2xl px-3 hidden md:flex'>

                {links.map(({ id, link }) => {
                    return <li key={id}
                        className='px-3 capitalize cursor-pointer text-gray-500 hover:scale-110 duration-200 hover:text-white'>
                        {link}
                    </li>
                })}
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 hover:scale-110 md:hidden '>

            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
                    bg-gradient-to-b from-black to-gray-800'>
                    {links.map(({link, id }) => {
                        return <li key={id}
                            className='px-4 capitalize cursor-pointer text-gray-500 py-6 text-4xl'>
                            {link}
                        </li>
                    })}
                </ul>
            )}
        </div>
    );
}

export default Navbar