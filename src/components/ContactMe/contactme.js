import React from 'react'
import './contactme.css'
import { useTheme } from '../../contexts/ThemeContext';

const ContactMe = () => {

  const { isDarkMode } = useTheme();

  return (
    <div className="contact-me-page">
      <h2 className={`contact-me-heading ${isDarkMode}`}>Contact Me</h2>
      <p className={`contact-me-subheading ${isDarkMode}`}>
        Let's discuss any work opportunities.
      </p>
      <form className="contact-me-form">
        <input type="text" placeholder="Your name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <textarea
          placeholder="Your Message"
          className="form-textarea"
          rows="5"
        ></textarea>
        <button type="submit" className={`form-submit-button ${isDarkMode}`}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactMe