"use client"
import React from 'react'
import Projectcard from '../sub/Projectcard'

const Projects = ()  => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>

        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <Projectcard 
            src="/project1.png"
            title="Project One"
            description="This is a brief description of Project One."
          />
          <Projectcard  
            src="/project2.jpg"
            title="Project Two"
            description="This is a brief description of Project Two."
          />
          <Projectcard  
            src="/project3.jpg"
            title="Project Three"
            description="This is a brief description of Project Three."
          />

        </div>
    
    
    </div>
  )
}

export default Projects
