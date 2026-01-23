import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg shadow-amber-200 p-3.75'>
      <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-around flex-wrap gap-5'>

            <div className='min-w-50 h-auto flex flex-col items-center justify-start'>
                <div className='font-bold text-[16px] text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-teal-500'>Contact me</div>
                <p className='flex items-center my-3.75 cursor-pointer'>
                    <FaWhatsapp className='mr-2.5 text-green-500'/> +225 0501103521
                </p>

                <p className='flex items-center my-3.75 cursor-pointer'>
                    <FaGithub className='mr-2.5'/>
                </p>

                <p className='flex items-center my-3.75 cursor-pointer'>
                    <FaLinkedin className='mr-2.5 text-blue-600'/>
                </p>
            
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
