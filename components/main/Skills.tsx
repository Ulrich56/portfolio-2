"use client"
import { Backend_skill, Frontend_skill, Full_stack, Tools } from "@/constants"
import React from "react"
import SkillDataProvider from "../sub/SkillDataProvider"
import MatrixBackground from "../sub/MatrixBackground"

const Skills = () => {
  return (
    <div>
      <div className="flex justify-center mb-2">
        <h3 className="text-white font-medium cursive text-2xl">I work with modern technologies</h3>
      </div>

      <div className="flex justify-center">
        <p className="text-gray-400 font-serif">My vocation is to create sites that are easy to use and attractive to my users. </p>
      </div>
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden 
     pb-40 py-15 lg:pb-80"
      style={{ transform: "scale(0.9)" }}
    >
      <div className='w-[80%] flex items-start justify-center absolute'>
        <video 
        loop 
        autoPlay 
        muted
        playsInline
        preload='false'
        className='w-full h-auto'
        src="/encryption.webm"/>

      </div>
      
      {/* Backend */}
      <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center relative z-10">
        {Backend_skill.map((skill, index) => (
          <SkillDataProvider key={index} icon={skill.icon} index={index} />
        ))}
      </div>

      {/* Frontend */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center relative z-10">
        {Frontend_skill.map((skill, index) => (
          <SkillDataProvider key={index} icon={skill.icon} index={index} />
        ))}
      </div>

      {/* Full stack */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center relative z-10">
        {Full_stack.map((skill, index) => (
          <SkillDataProvider key={index} icon={skill.icon} index={index} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center relative z-10">
        {Tools.map((skill, index) => (
          <SkillDataProvider key={index} icon={skill.icon} index={index} />
        ))}
      </div>
    </section>

    </div>
  )
}

export default Skills
