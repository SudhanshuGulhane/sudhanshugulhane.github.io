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
          <span className={`skillsDesc ${isDarkMode}`}>With expertise in deep learning, AI and web development, I enjoy building scalable applications with robust backends, responsive frontends, and seamless API integrations.
          My strong foundation in programming, data analysis, and cloud technologies enables me to craft user-centric and high-performing solutions. Recently, I delved into <a href='https://www.coursera.org/account/accomplishments/verify/5XRP5B2R514X' target="_blank" rel="noopener noreferrer" className={`resume-link ${isDarkMode}`}><i class="fa-solid fa-link"></i>MLOps</a> and successfully completed an insightful course by DeepLearning.AI. This experience inspired me to enhance one of my machine learning projects by incorporating MLOps principles and best practices.</span>
          <div className='skillsSection'>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Full Stack Development</h3>
                <p>React.js, Vue.js, Spring Boot, Flask, Node.js, RESTful APIs, Docker, Maven, CI/CD, MySQL, PostgreSQL, Hibernate ORM, AWS(EC2, Lambda), Azure, Git (GitHub, Bitbucket), Jira, Apache Hadoop, Hive, Spark, NoSQL</p>
              </div>
            </div>
            <div className={`skillsItem ${isDarkMode}`}>
              <div className='skillItemText'>
                <h3>Machine Learning and AI</h3>
                <p>PyTorch, scikit-learn, TensorFlow,  Hugging Face, LSTM, OpenCV, NLP with BERT, YOLOv4, SVM, Matplotlib, Seaborn, NumPy, Pandas</p>
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