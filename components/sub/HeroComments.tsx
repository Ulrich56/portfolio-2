"use client"

import React from "react"
import { motion } from "framer-motion"
import { CodeBracketIcon } from "@heroicons/react/20/solid"
import { slideInFromLeft, slideInFromTop } from "@/utils/motion"



const HeroComments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={slideInFromTop}
      className="flex flex-col md:flex-row px-6 md:px-20 mt-10 md:mt-20 w-full z-10 justify-between items-center gap-10 h-auto md:h-150"
    >
      {/* Texte à gauche */}
      <div className="flex flex-col top-60 gap-5 w-full md:w-1/2 max-w-3xl text-start">
        <div className="py-2 px-3 border border-[#7042f88b] backdrop-blur-md bg-[#1a1a2e]/60 rounded-3xl flex items-center gap-2 w-fit mt-6">
          <CodeBracketIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="text-sm md:text-base text-[#b49bff] font-medium">
            Fullstack Developer Portfolio
          </h1>
        </div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-4 text-5xl md:text-6xl font-bold text-white"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
            Providing the best
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-2 font-thin"
        >
          I&apos;m a passionate fullstack developer specializing in creating
          dynamic and responsive web applications. Explore my portfolio to see
          my latest projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-6 border-[#7042f88b] backdrop-blur-md bg-purple-600/60 text-center text-white cursor-pointer rounded-lg max-w-50 font-medium hover:from-purple-600/80 hover:to-cyan-600/80 transition-all duration-300"
        >
          Learn more
        </motion.a>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 italic text-sm md:text-base mt-4"
        >
          &quot;Transforming ideas into reality, one line of code at a time.&quot;
        </motion.div>
      </div>

    </motion.div>
  )
}

export default HeroComments