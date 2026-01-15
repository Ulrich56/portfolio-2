"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/nextjs.png", alt: "Next.js" },
  { src: "/logos/tailwind.png", alt: "Tailwind CSS" },
  { src: "/logos/node.png", alt: "Node.js" },
  { src: "/logos/nest.png", alt: "Nest.js" },
  { src: "/logos/mongo.png", alt: "MongoDB" },
  { src: "/logos/laravel.png", alt: "Laravel" },
  { src: "/logos/typescript.png", alt: "TypeScript" },
]

const LogoWheel = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="relative w-64 h-64 rounded-full flex items-center justify-center"
    >
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * 2 * Math.PI
        const x = Math.cos(angle) * 100
        const y = Math.sin(angle) * 100

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ transform: `translate(${x}px, ${y}px)` }}
            whileInView={{ scale: 1.2, filter: "drop-shadow(0 0 10px #b49bff)" }}
          >
            <Image src={logo.src} alt={logo.alt} width={40} height={40} />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default LogoWheel
