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
          <span className={`skillsDesc ${isDarkMode}`}>I specialize in innovative solutions across machine learning, software engineering, and full-stack development. With expertise in predictive modeling, natural language processing, and computer vision, I build scalable applications with robust backends, responsive frontends, and seamless API integrations. My strong foundation in programming, data analysis, and cloud technologies enables me to craft efficient, user-centric, and high-performing solutions.</span>
          <div className='skillsSection'>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Full Stack Development</h3>
                <p>React.js, Vue.js, Spring Boot, Flask, Node.js, RESTful APIs, Docker, Maven, CI/CD, MySQL, PostgreSQL, Hibernate ORM</p>
              </div>
            </div>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Machine Learning and AI</h3>
                <p>PyTorch, scikit-learn, TensorFlow, LSTM, BERT, YOLOv4, SVM, Matplotlib, Seaborn, NumPy, Pandas</p>
              </div>
            </div>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Programming and Other Tools/Frameworks</h3>
                <p>Python, Java, JavaScript, TypeScript, C, C++, Bash Scripting, Linux, Azure AD, JIRA, AWS, Git, Beautiful Soup</p>
              </div>
            </div>
            
          </div>
      </div>
    </motion.div>
  )
}

export default Aboutme