import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.8}}
      className='text-center text-4xl my-10'>Get in Touch</motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.8}}
        className='my-4'> {CONTACT.address} </motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.8}}
        className='my-4'> {CONTACT.phoneNo} </motion.p>
        <a href='mailto:akshatarora411@gmail.com' className='border-b text-slate-100'> {CONTACT.email} </a>
      </div>
    </div>
  )
}

export default Contact
