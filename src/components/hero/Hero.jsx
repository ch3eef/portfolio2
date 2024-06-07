import React from 'react'
import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggeredChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  },
};

const sliderVariants = {
  initial:{
    x:0,
    
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <motion.div className='hero'>
      <motion.div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>EZE EMMANUEL</motion.h2>
          <motion.h1 variants={textVariants}>Front End Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} ><a href="#Portfolio">View CV</a></motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
      Explore my World
        </motion.div>

        <div className="imageContainer">
         <img src="https://i.ibb.co/YbL8xLx/me2.png" alt="me2" border="0" />
        </div>
    </motion.div>
    
  )
}

export default Hero
