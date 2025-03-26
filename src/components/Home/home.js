import React, { useState, useEffect } from 'react'
import './home.css'
import profile from '../../assets/profile.webp'
import { useTheme } from '../../contexts/ThemeContext';
import {motion} from 'framer-motion'
import { homePageVariant } from '../../animations/animations';

const Home = () => {

  const { isDarkMode } = useTheme();
  const roles = ["Full Stack Developer...", "Machine Learning Engineer...", "Software Engineer..."];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 1000;

  useEffect(()=>{
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if(!isDeleting && displayText.length<currentRole.length){
        timeout = setTimeout(()=>{
            setDisplayText(currentRole.substring(0, displayText.length+1));
        }, typingSpeed);
    }
    else if(isDeleting && displayText.length>0){
        timeout = setTimeout(()=>{
            setDisplayText(currentRole.substring(0, displayText.length-1));
        }, deletingSpeed);
    }
    else if(!isDeleting && displayText.length===currentRole.length){
        timeout = setTimeout(() => setIsDeleting(true), delay);
    }
    else if(isDeleting && displayText.length===0){
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev+1)%roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roles, currentRoleIndex]);


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
              <span className={`intro-text ${isDarkMode}`}>I'm <span className={`intro-name ${isDarkMode}`}>Sudhanshu</span>
                <br/>{displayText}
                <span className="cursor">|</span>
              </span>
              <p className={`intro-para ${isDarkMode}`}>and a master's student at UC Riverside who loves turning complex challenges into impactful solutions. With a passion for software engineering in AI/ML, I enjoy developing efficient, real-world applications. Let's team up and shape the future of technology together!</p>
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
                  <a href='https://link.springer.com/chapter/10.1007/978-3-031-24848-1_18' target='_blank' rel='noopener noreferrer' className={`link ${isDarkMode}`}>
                      <i className={`fas fa-paper-plane ${isDarkMode}`}></i> Publication
                  </a>
              </div>
          </div>
          <img src={profile} alt='Profile' className={`profile-pic ${isDarkMode}`} />
      </div>
    </motion.div>
  )
}

export default Home