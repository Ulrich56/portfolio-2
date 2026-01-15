import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Socials } from '@/constants/index'

const Navbar = () => {
  return (
    <div className='w-full h-16.25 fixed top-0 shadow-lg shadow-[#1d0946] bg-[#03001417] backdrop-blur-md z-50 px-10 '>
        <div className='w-full h-full flex flex-row justify-between items-center m-auto px-2.5'>
            <Link rel="stylesheet" href="#about-me" className='h-auto w-auto flex flex-row items-center'>
             <span className='text-white font-semibold ml-2.5 hidden md:block cursor-pointer mr-10'>
                Ulrich P.
             </span>
            </Link>
            <div className='w-125 h-full flex flex-row items-center justify-between md:mx-auto mx-auto'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] backdrop-blur-md mr-3.75 px-5 py-2.5 hover:bg-[#7042f88b] hover:border-[#7042f8] transition-all duration-300 cursor-pointer rounded-full text-gray-300'>
                    <Link href="#about-me" className='cursor-pointer'>About me</Link>
                    <Link href="#skills" className='cursor-pointer'>Skills</Link>
                    <Link href="#projects" className='cursor-pointer'>Projects</Link>
                </div>
            </div>

            <div className="flex flex-row gap-5">
                {Socials.map((social) => (
                <Link href="#" key={social.name}>
                    {social.icon}
                </Link>
                ))}
            </div>


        </div>
      
    </div>
  )
}

export default Navbar
