'use clent'

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

const instructors = [
  {
    id: 1,
    name: 'Rishika Dubey',
    skills: 'Frontend Developer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QUlrCqSGXBCD00jQ4CM78XkAy3JgOGAzIA&s'
  },
  {
    id: 2,
    name: 'Marcus Reid',
    skills: 'React Developer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobvhV65rLrSblxUDi0Y3WGCBvcJ_CHkfWEg&s'
  },
  {
    id: 3,
    name: 'Espile Raine',
    skills: 'Backend Developer Developer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nLDzygUSUVYtAd2-wfQ4jqeBtirynxZmRQ&s'
  }
]
function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl max-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Intructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your technical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>

    
    </div>
  )
}

export default Instructors
