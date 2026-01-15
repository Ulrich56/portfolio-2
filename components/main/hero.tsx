import React from 'react'
import HeroComments from '../sub/HeroComments'
import BackgroundStars from '../sub/BackgroundStars'

const Hero = () => {
  return (
    <div className="flex flex-col h-full w-full relative">
      <BackgroundStars />
      <HeroComments />
    </div>
  )
}

export default Hero
