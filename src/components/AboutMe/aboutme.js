import React from 'react'
import './aboutme.css'
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion'
import { aboutmePageVariant } from '../../animations/animations';

const Aboutme = () => {

  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={aboutmePageVariant}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className='skills'>
          <span className={`skillsTitle ${isDarkMode}`}>What I work on</span>
          <span className={`skillsDesc ${isDarkMode}`}>
          Software Engineer with hands-on experience across full-stack development and deep learning applications. Built SaaS plugins, scalable platforms and intelligent document chatbots.
          Skilled in React, Spring Boot, Vue, Docker, PyTorch, LangChain, and cloud technologies. Passionate about building real-world AI systems that blend machine learning with robust software engineering.
          </span>
          <div className='skillsSection'>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Full Stack Development</h3>
                <p>React, Vue, Spring Boot, Flask, Docker, Maven, CI/CD, MySQL, PostgreSQL, Hibernate ORM, AWS(EC2, Lambda), Azure, Git (GitHub, Bitbucket), Jira, Apache Hadoop, Hive, Spark, Chroma</p>
              </div>
            </div>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Machine Learning and AI</h3>
                <p>PyTorch, TensorFlow, Hugging Face, scikit-learn, OpenCV, GPT and Llama-based models, LangChain , Matplotlib, Seaborn, NumPy, Pandas</p>
              </div>
            </div>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Programming Languages and OS</h3>
                <p>C, C++, Python, Java, JavaScript, Linux, Windows</p>
              </div>
            </div>
            
          </div>
      </div>
    </motion.div>
  )
}

export default Aboutme