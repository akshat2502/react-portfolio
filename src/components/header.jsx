import React from 'react'
import { HERO_CONTENT } from '../constants';
import myprofile from '../assets/canva3.png'
import { motion } from 'framer-motion';


const container = (delay)=> ({
  hidden: {x: -100, opacity:0},
  visible: { 
    x: 0, 
    opacity:1, 
    transition: {duration:0.6, delay:delay},
   }

})

function Header() {
  return (
      <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap gap-40'>
          <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
      {/* <h1 className='text-6xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl'>
      Akshat Arora
      </h1> */}
      <motion.span 
      variants={container(0)}
      initial='hidden'
      animate='visible'
      className='bg-gradient-to-r text-6xl from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
        Full Stack Developer
      </motion.span>
      <motion.p 
      variants={container(0.4)}
      initial='hidden'
      animate='visible'
      className='my-5 max-w-xl font-light py-9 tracking-tight'>{HERO_CONTENT}</motion.p>
      </div>
        <motion.button 
         variants={container(0.5)}
         initial='hidden'
         animate='visible'
         whileHover={{scale:1.1}}
        className=' text-white rounded px-4 shadow-lg shadow-indigo-500/60 py-2 border-neutral-100 outline outline-offset-2 outline-purple-400'>
          <a href='https://drive.google.com/file/d/1kEWENQFeTyd06UloKuFj4NQmI2vGAvaB/view?usp=sharing'>View Resume {' >'}</a></motion.button>
      </div>
      <div className='w-full lg:w-1/3 lg:py-1'>
      <div className='flex justify-center'>
        <motion.img
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, delay:0.5}}
        src={myprofile} alt="My Profile" className=''/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Header
