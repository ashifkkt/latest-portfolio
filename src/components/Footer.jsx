import './Footer.css';
import { LINKS } from '../data/links';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>&copy; {new Date().getFullYear()} Mohamed Ashif. Built with React.</p>
      <div className="footer-links">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon /></a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a>
        <a href="#hero" className="footer-top">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
