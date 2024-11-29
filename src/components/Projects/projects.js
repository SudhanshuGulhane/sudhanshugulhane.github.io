import React from 'react'
import { motion } from "framer-motion";
import { projectPageVariant } from '../../animations/animations';
import { projectsData } from './projects_data';
import './projects.css';
import { useTheme } from '../../contexts/ThemeContext';

const Projects = () => {

  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className="projects"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={projectPageVariant}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className={`projects-heading ${isDarkMode}`}>Projects</h2>
      <p className={`projects-subheading ${isDarkMode}`}>
        Here are some of my recent projects showcasing my skills and experience.
      </p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <img src={project.image}/>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects