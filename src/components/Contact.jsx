import { useState } from 'react';
import './Contact.css';
import { LINKS } from '../data/links';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const EMAIL = LINKS.email;
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const icons = {
  Email: (<Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>),
  LinkedIn: <LinkedInIcon />,
  GitHub: <GitHubIcon />,
  Fiverr: (<Icon><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></Icon>),
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botcheck) return; // honeypot: bots fill hidden field

    // No form backend configured: fall back to the visitor's email client
    if (!FORM_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n- ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `Portfolio enquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
      setStatus('success');
      setFormData({ name: '', email: '', message: '', botcheck: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'ashifkkt1010@gmail.com',
      link: 'mailto:ashifkkt1010@gmail.com',
      icon: icons.Email
    },
    {
      type: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: LINKS.linkedin,
      icon: icons.LinkedIn
    },
    {
      type: 'GitHub',
      value: 'View My Code',
      link: LINKS.github,
      icon: icons.GitHub
    },
    {
      type: 'Fiverr',
      value: 'View My Services',
      link: LINKS.fiverr,
      icon: icons.Fiverr
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title reveal">Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I build production-ready React applications for SaaS products, admin panels, and enterprise dashboards.
              I specialize in scalable frontend architecture, real-time features, third-party API integrations, and 
              complex admin systems. Let's discuss how I can help deliver your project.
            </p>
            <div className="contact-cta">
              <p className="contact-cta-text">Get in touch via:</p>
              <div className="contact-links">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-link-icon" aria-hidden="true">{info.icon}</span>
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
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              className="form-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p className={`form-status form-status-${status}`} role="status" aria-live="polite">
              {status === 'success' && "Thanks! Your message was sent. I'll get back to you soon."}
              {status === 'error' && `Something went wrong. Please email me directly at ${EMAIL}.`}
            </p>
            <p className="form-note">
              Prefer email? Reach out directly at{' '}
              <a href="mailto:ashifkkt1010@gmail.com" className="form-email-link">
                ashifkkt1010@gmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

