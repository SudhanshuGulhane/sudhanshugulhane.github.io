import React from 'react'
import './navbar.css'
import logo from '../../assets/programmer.png'
import contactMe from '../../assets/contact.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='nav-menu'>
            <Link className='nav-menu-item'>Home</Link>
            <Link className='nav-menu-item'>About me</Link>
            <Link className='nav-menu-item'>Projects</Link>
            <Link className='nav-menu-item'>Experience</Link>
        </div>
        <button className='contact-button'>
            <img src={contactMe} alt='' className='contact-button-img' />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar