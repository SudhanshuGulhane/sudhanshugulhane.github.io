import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import timelineElements from './timeline_data'
import './experience.css'
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="custom-date-style"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.location}
            </h4>
            <p id="description">{element.description}</p>
            {element.buttonText && (
              <a
                className="button"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                {element.buttonText}
              </a>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience