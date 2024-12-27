import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 lg:mt-16">
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>for developers</span></h1>
        <p className='text-md lg:text-lg text-center text-gray-400 mt-10 max-w-4xl'>Empower your creativiy and bring VR app ideas to life with our intuitive development tools. Get started today and turn you imagination into immersive reality</p>
        <div className='flex justify-center mt-10 space-x-2'>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md'>Start for Free</a>
            <a href="#" className='py-3 px-4 border rounded-md hover:bg-white hover:text-black'>Documentation</a>
        </div>
        <div className='flex flex-col sm:flex-row mt-10 justify-center items-center'>
            <video autoPlay loop muted className='rounded-lg border border-orange-700 w-full sm:w-1/2 shadow-orange-400 mx-2 my-2'><source src={video1} type='video/mp4' />Your Browser cant play videos</video>
            <video autoPlay loop muted className='rounded-lg border border-orange-700 w-full sm:w-1/2 shadow-orange-400 my-2 mx-2'><source src={video2} type='video/mp4' />Your Browser cant play videos</video>
        </div>
    </div>
  )
}

export default HeroSection