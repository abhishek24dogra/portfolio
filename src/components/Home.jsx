import React from 'react'
import {TiArrowRightThick} from 'react-icons/ti'
import heroImage from "../heroImage.jpg"

const Home = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black 
    to-gray-800' name="home">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
         h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a FrontEnd React Developer</h2>
            <p className='text-gray-100 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                In, impedit maxime? Adipisci maxime libero excepturi, 
                </p>
            
            <div className='my-3'>
                <button className='text-white bg-gradient-to-br from-cyan-400 to-blue-600
                px-8 py-4 flex w-fit rounded-md items-center group'>Portfolio
                    <span className='ml-1 group-hover:rotate-90 duration-300 '>
                        <TiArrowRightThick size={20}/>
                    </span>
                </button>
            </div>

            </div>
            <div className='w-60 h-60'>
                <img src={heroImage} alt='profilePic'
                className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home