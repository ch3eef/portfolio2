import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Eze Emmanuel</motion.span>
        <motion.div className="social" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>
          <a href="https://github.com/ch3eef"><img src="/github.png" alt="" /></a>
          <a href="https://twitter.com/chief_immhi"><img src="/twitter.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/eze-emmanuel-0467252a5/"><img src="/linkedn-2.jpg" alt="" /></a>
          <a href="https://www.youtube.com/@ezecodes"><img src="/youtube.png" alt="" /></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar