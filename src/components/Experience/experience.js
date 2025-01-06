import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import timelineElements from './timeline_data'
import './experience.css'
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase } from "react-icons/fa";
import { useTheme } from '../../contexts/ThemeContext';
import { homePageVariant } from '../../animations/animations'
import { motion } from 'framer-motion'

const Experience = () => {

  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={homePageVariant}
      transition={{ duration: 0.8 }}>
      <div className={`experience-section ${isDarkMode}`}>
        <h2 className={`section-title ${isDarkMode}`}>Experience</h2>
        <VerticalTimeline>
          {timelineElements.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName={`custom-date-style ${isDarkMode}`}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaBriefcase />}
            > 
              <h3 className="vertical-timeline-element-title">{element.title} - {element.company_name}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>
              <p id="description" dangerouslySetInnerHTML={{ __html: element.description }}></p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Experience