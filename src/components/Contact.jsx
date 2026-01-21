import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com',
      icon: '✉️'
    },
    {
      type: 'GitHub',
      value: 'github.com/johndoe',
      link: 'https://github.com/johndoe',
      icon: '💻'
    },
    {
      type: 'Fiverr',
      value: 'View My Services',
      link: 'https://www.fiverr.com/johndoe',
      icon: '🚀'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I help businesses and startups build production-ready React applications that scale.
              Whether you need a new application built from scratch, an existing codebase optimized,
              or a complex feature implemented, I deliver solutions that meet your technical and
              business requirements.
            </p>
            <div className="contact-cta">
              <p className="contact-cta-text">Get in touch via:</p>
              <div className="contact-links">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-link-icon">{info.icon}</span>
                    <div className="contact-link-content">
                      <span className="contact-link-type">{info.type}</span>
                      <span className="contact-link-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            <p className="form-note">
              Prefer email? Reach out directly at{' '}
              <a href="mailto:john.doe@example.com" className="form-email-link">
                john.doe@example.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

