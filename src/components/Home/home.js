import React from 'react'
import './home.css'
import profile from '../../assets/profile.jpg'
import { useTheme } from '../../contexts/ThemeContext';
import {motion} from 'framer-motion'
import { homePageVariant } from '../../animations/animations';

const Home = () => {

  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={homePageVariant}
      transition={{ duration: 0.8 }}>
      <div className='home-div'>
          <div className='intro-content'>
              <span className={`hello ${isDarkMode}`}>Hello,</span>
              <span className={`intro-text ${isDarkMode}`}>I'm <span className={`intro-name ${isDarkMode}`}>Sudhanshu</span><br/>Full Stack Developer</span>
              <p className={`intro-para ${isDarkMode}`}>and a master's student at UC Riverside who loves turning complex challenges into impactful solutions. With a passion for software engineering, machine learning, and all things data, I enjoy crafting efficient, real-world applications. Let's team up and shape the future of technology together!</p>
              <div className='profile-links'>
                  <a href='https://www.linkedin.com/in/sudhanshu-gulhane' target='_blank' rel='noopener noreferrer' className={`link ${isDarkMode}`}>
                      <i className='fab fa-linkedin'></i> LinkedIn
                  </a>
                  <a href='https://github.com/SudhanshuGulhane' target='_blank' rel='noopener noreferrer' className={`link ${isDarkMode}`}>
                      <i className={`fab fa-github ${isDarkMode}`}></i> GitHub
                  </a>
                  <a href='https://leetcode.com/u/sudhanshungulhane/' target='_blank' rel='noopener noreferrer' className={`link ${isDarkMode}`}>
                      <i className='fas fa-code'></i> LeetCode
                  </a>
                  <a href='mailto:sgulh001@ucr.edu' className={`link ${isDarkMode}`}>
                      <i className={`fas fa-envelope ${isDarkMode}`}></i> Gmail
                  </a>
              </div>
          </div>
          <img src={profile} alt='Profile' className='profile-pic'/>
      </div>
    </motion.div>
  )
}

export default Home