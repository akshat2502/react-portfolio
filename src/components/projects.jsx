import React from 'react'
import { EXPERIENCES, PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
          <motion.h2
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.8}}
          className='text-center text-4xl my-20'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.8}}
            whileHover={{scale:1.1}}
            className='w-full lg:w-1/4'>  
            <img src={project.image} height={210} width={209} className='rounded mb-6 shadow-lg shadow-indigo-500/30'/>
            <motion.a 
            initial={{opacity:0}}
            whileHover={{opacity:1}}
            href={project.link} 
            className="absolute top-0 left-0.5 w-48 h-40 flex items-center justify-center text-center rounded-sm bg-black bg-opacity-40 transform -translate-x-0 -translate-y-0"
              >View Project<br/>{'->'}</motion.a>
            </motion.div>

            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.8}}
            className='w-full max-w-xl lg:w-3/4'>
              <h5 className='mb-2 font-semibold'>{project.title}</h5>
              <p className='mb-4 text-neutral-400'> {project.description} </p>
              {project.technologies.map((tech,index)=> (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-400 font-medium'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
