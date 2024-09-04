import React from 'react';
import logo from "../assets/kr.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className='mb-20 flex py-3 items-center justify-between '>
    <div className='flex flex-shrink-2 items-center'>
      <img className='mx-4' src={logo} />
    </div>
    <div className='flex  justify-center items-center gap-4 text-xl'>
      <motion.a 
      whileHover={{scale:1.3}}
      href='https://www.linkedin.com/in/akshat-arora-19a93b1a4/'>
        <FaLinkedinIn />
      </motion.a>

      <motion.a 
      whileHover={{scale:1.3}}
      href='https://github.com/akshat2502'>
      <FaGithub />
      </motion.a>

      <motion.a 
      whileHover={{scale:1.3}}
      href='https://twitter.com/akshatarora03'>
      <FaSquareXTwitter />
      </motion.a>

      <motion.a 
      whileHover={{scale:1.3}}
      href='https://www.instagram.com/_akshat.arora'>
      <FaInstagram />
      </motion.a>

    </div>
    </nav>
  )
}

export default Navbar;
