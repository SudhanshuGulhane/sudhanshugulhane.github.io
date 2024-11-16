import React from 'react'
import './home.css'
import profile from '../../assets/profile.jpg'

const Home = () => {
  return (
    <div className='home-div'>
        <div className='intro-content'>
            <span className='hello'>Hello,</span>
            <span className='intro-text'>I'm <span className='intro-name'>Sudhanshu</span><br/>Full Stack Developer</span>
            <p className='intro-para'>and a master's student at UC Riverside who loves turning complex challenges into impactful solutions. With a passion for software engineering, machine learning, and all things data, I enjoy crafting efficient, real-world applications. Let's team up and shape the future of technology together!</p>
            <div className='profile-links'>
                <a href='https://www.linkedin.com/in/sudhanshu-gulhane' target='_blank' rel='noopener noreferrer' className='link'>
                    <i className='fab fa-linkedin'></i> LinkedIn
                </a>
                <a href='https://github.com/SudhanshuGulhane' target='_blank' rel='noopener noreferrer' className='link'>
                    <i className='fab fa-github'></i> GitHub
                </a>
                <a href='https://leetcode.com/u/sudhanshungulhane/' target='_blank' rel='noopener noreferrer' className='link'>
                    <i className='fas fa-code'></i> LeetCode
                </a>
                <a href='mailto:sgulh001@ucr.edu' className='link'>
                    <i className='fas fa-envelope'></i> Gmail
                </a>
            </div>
        </div>
        <img src={profile} alt='Profile' className='profile-pic'/>
    </div>
  )
}

export default Home