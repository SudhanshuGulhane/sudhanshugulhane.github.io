import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {

  const { isDarkMode, toggleTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 620);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 620);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const experienceSection = document.querySelector('.experience-section h2');
      const aboutmeTitleSection = document.querySelector('.skillsTitle');
      const projectsSection = document.querySelector('.projects-heading');
      const isScrollingUp = currentScrollPos < prevScrollPos; // scrolling up or down

      if(experienceSection || aboutmeTitleSection || projectsSection){
        var rect;
        if(aboutmeTitleSection){
          rect = aboutmeTitleSection.getBoundingClientRect();
        }
        if(experienceSection){
          rect = experienceSection.getBoundingClientRect();
        }
        if(projectsSection){
          rect = projectsSection.getBoundingClientRect();
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

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleLinkClick = () => {
    if (window.innerWidth <= 620) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : 'not-sticky'}`}>
        <button className={`toggle-button ${isDarkMode}`} onClick={toggleTheme}>
          <i className={isDarkMode==="dark" ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <div className={`hamburger-menu ${isMenuOpen ? 'open': ''} ${isDarkMode}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'show': ''} ${isDarkMode}`}>
            <Link to="/" className={`nav-menu-item ${isDarkMode}`} onClick={handleLinkClick}>Home</Link>
            <Link to="/aboutme" className={`nav-menu-item ${isDarkMode}`} onClick={handleLinkClick}>About me</Link>
            <Link to="/projects" className={`nav-menu-item ${isDarkMode}`} onClick={handleLinkClick}>Projects</Link>
            <Link to="/experience"className={`nav-menu-item ${isDarkMode}`} onClick={handleLinkClick}>Experience</Link>
            {isSmallScreen && (
              <Link to="/contact" className={`nav-menu-item ${isDarkMode}`} onClick={handleLinkClick}>Contact Me</Link>
            )}
        </div>
        {!isSmallScreen &&(
          <Link to="/contact" className={`contact-button ${isDarkMode}`} onClick={handleLinkClick}>Contact Me</Link>
        )}
    </nav>
  )
}

export default Navbar