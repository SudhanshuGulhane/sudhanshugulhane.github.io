import React from 'react'
import { motion } from "framer-motion";
import { projectPageVariant } from '../../animations/animations';

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={projectPageVariant}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div>Projects</div>
    </motion.div>
  )
}

export default Projects