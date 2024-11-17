import React from 'react'
import './navbar.css'
import contactMe from '../../assets/contact.png'
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {

  const { isDarkMode, toggleTheme } = useTheme();

  console.log(isDarkMode)

  return (
    <nav className='navbar'>
        <button className={`toggle-button ${isDarkMode}`} onClick={toggleTheme}>
          <i className={isDarkMode==="dark" ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <div className='nav-menu'>
            <Link to="/" className={`nav-menu-item ${isDarkMode}`}>Home</Link>
            <Link to="/aboutme" className={`nav-menu-item ${isDarkMode}`}>About me</Link>
            <Link to="/projects" className={`nav-menu-item ${isDarkMode}`}>Projects</Link>
            <Link to="/experience"className={`nav-menu-item ${isDarkMode}`}>Experience</Link>
        </div>
        <button className='contact-button'>
            <img src={contactMe} alt='' className='contact-button-img' />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar