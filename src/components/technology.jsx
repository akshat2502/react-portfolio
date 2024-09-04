import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { TbBrandCpp } from 'react-icons/tb'
import { SiMysql } from 'react-icons/si';
import { animate, motion } from 'framer-motion'
import { SiTailwindcss } from 'react-icons/si'

const iconvariant = (duration) => ({
  initial: {y:-10},
  animate: {
    y:0,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
}) 

function Technology() {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.2}}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.2}}
      className='flex flex-wrap items-center gap-6 justify-center'>
          <motion.div 
          variants={iconvariant(2)}
          initial="initial"
          animate="animate"
          className='rounded-full border-4 border-neutral-800 p-4'>
            <RiReactjsFill className='text-7xl text-cyan-400' />
          </motion.div>

          <motion.div 
          variants={iconvariant(3)}
          initial="initial"
          animate="animate"
          className='rounded-full border-4 border-neutral-800 p-4'>
            <TbBrandNextjs className='text-7xl text-white' />
          </motion.div>

          <motion.div
          variants={iconvariant(4)}
          initial="initial"
          animate="animate"
          className='rounded-full border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-600' />
          </motion.div>

          <motion.div 
          variants={iconvariant(3)}
          initial="initial"
          animate="animate"
          className='rounded-full border-4 border-neutral-800 p-4'>
            <SiTailwindcss className='text-7xl text-sky-500' />
          </motion.div>

          <motion.div 
          variants={iconvariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4">
            <TbBrandCpp className="text-7xl" />
          </motion.div>

          <motion.div 
          variants={iconvariant(3)}
          initial="initial"
          animate="animate"
          className='rounded-full border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-600' />
          </motion.div>

          <motion.div 
          variants={iconvariant(4)}
          initial="initial"
          animate="animate"
          className='rounded-full border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-sky-700' />
          </motion.div>

          <motion.div 
          variants={iconvariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-full border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-amber-800" />
          </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology
