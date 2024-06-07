import React, { useRef } from 'react'
import "./services.scss"
import { motion, useInView  } from "framer-motion"

const variants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggeredChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div className='services' variants={variants} initial="initial"
        // whileInView="animate"
        ref={ref}
        animate={ "animate"}
        >
      <motion.div className="textContainer" variants={variants}>
        <p>
            I focus on helping your brand grow
            <br />and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b> Websites</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business</h1>
            <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box"whileHover={{ background: "lightgray", color: "black"}}>
            <h2>Frontend Development</h2>
            <p>Experienced Frontend Web Developer skilled in creating beautiful and user-friendly digital experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js and Vue.js</p>
            <button>GO</button>
        </motion.div>
        <motion.div className="box"whileHover={{ background: "lightgray", color: "black"}}>
            <h2>Backend Development</h2>
            <p>Experienced backend developer proficient in Express.js, MongoDB, and Firebase. Skilled in crafting secure, scalable solutions with a focus on authentication and real-time data management.</p>         
            <button>GO</button>
        </motion.div>
        {/* <motion.div className="box"whileHover={{ background: "lightgray", color: "black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere porro beatae dicta sequi ducimus voluptates, harum laudantium nostrum cupiditate fugit! Ratione quis quasi sunt est assumenda velit temporibus voluptate!</p>
            <button>GO</button>
        </motion.div> */}
        <motion.div className="box"whileHover={{ background: "lightgray", color: "black"}}>
            <h2>FullStack Development</h2>
            <p>As a full-stack web developer, I specialize in creating seamless web experiences from design to deployment. With expertise in HTML, CSS, JavaScript, Node.js, and Django, I bring ideas to life while ensuring optimal functionality and user experience.</p>
            <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
