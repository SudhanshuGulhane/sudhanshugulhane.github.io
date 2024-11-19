import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {

  const { isDarkMode, toggleTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const experienceSection = document.querySelector('.experience-section h2');
      const aboutmeTitleSection = document.querySelector('.skillsTitle');
      const isScrollingUp = currentScrollPos < prevScrollPos; // scrolling up or down

      if(experienceSection || aboutmeTitleSection){
        var rect;
        if(aboutmeTitleSection){
          rect = aboutmeTitleSection.getBoundingClientRect();
        }
        if(experienceSection){
          rect = experienceSection.getBoundingClientRect();
        }
        const isOverlappingExperience = rect.top <= 0 && rect.bottom >= 0;
        
        if(isScrollingUp && rect.top>=0){
          setIsSticky(true);
        }else if(!isScrollingUp || isOverlappingExperience){
          setIsSticky(false);
        }
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : 'not-sticky'}`}>
        <button className={`toggle-button ${isDarkMode}`} onClick={toggleTheme}>
          <i className={isDarkMode==="dark" ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <div className='nav-menu'>
            <Link to="/" className={`nav-menu-item ${isDarkMode}`}>Home</Link>
            <Link to="/aboutme" className={`nav-menu-item ${isDarkMode}`}>About me</Link>
            <Link to="/projects" className={`nav-menu-item ${isDarkMode}`}>Projects</Link>
            <Link to="/experience"className={`nav-menu-item ${isDarkMode}`}>Experience</Link>
        </div>
        <button className={`contact-button ${isDarkMode}`}>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar