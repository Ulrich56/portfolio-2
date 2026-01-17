"use client"
import React, { JSX } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Props {
  icon: JSX.Element
  index: number
}

const SkillDataProvider = ({ icon, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const delay = 0.3

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ duration: 0.6, delay: index * delay }}
      className="flex items-center justify-center"
    >
      {icon}
    </motion.div>
  )
}

export default SkillDataProvider
