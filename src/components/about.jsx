import React from 'react'
import aboutimg from '../assets/f3.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>About Me</motion.h2>
      <div className='flex flex-wrap'>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-9'>
        <div className='flex items-center justify-between px-6'>
          <img className='rounded-xl w-72 h-96' src={aboutimg}/>
        </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>
              {ABOUT_TEXT.map((about,index)=> (
                <span key={index} className='mr-2 my-1 px-2 py-5 text-sm flex font-medium'>
                  {about}
                </span>
              ))}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
