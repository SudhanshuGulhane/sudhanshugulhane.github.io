import React, {useState} from 'react'
import './contactme.css'
import { useTheme } from '../../contexts/ThemeContext'
import emailjs from '@emailjs/browser';

const ContactMe = () => {

  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        'service_x2bw2ms',
        'template_ph96dlu',
        {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        },
        'V1rs-u61pvBlhLWio'
    )
    .then(
        (response) => {
            setStatusMessage("Email sent successfully");
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatusMessage(''), 5000);
        },
        (err) => {
            setStatusMessage('Failed to send email. Please try again later.');
            setTimeout(() => setStatusMessage(''), 5000);
        }
    );
  };

  return (
    <div className="contact-me-page">
      <h2 className={`contact-me-heading ${isDarkMode}`}>Contact Me</h2>
      <p className={`contact-me-subheading ${isDarkMode}`}>
        Let's discuss any work opportunities.
      </p>
      <form className="contact-me-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Your name" className="form-input" onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} placeholder="Your Email" className="form-input" onChange={handleChange} required/>
        <textarea name="message" placeholder="Your Message" className="form-textarea" rows="5" value={formData.message} onChange={handleChange} required/>
        <button type="submit" className={`form-submit-button ${isDarkMode}`}>
          Submit
        </button>
      </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  )
}

export default ContactMe