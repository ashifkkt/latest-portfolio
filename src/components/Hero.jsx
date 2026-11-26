import './Hero.css';
import { getYearsOfExperience } from '../utils/experience';
import { projects } from '../data/projects';
import useTypewriter from '../hooks/useTypewriter';
import useCountUp from '../hooks/useCountUp';
import useFileExists from '../hooks/useFileExists';
import { LINKS } from '../data/links';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import NeuralBackground from './NeuralBackground';

const ROLES = ['Full Stack Developer', 'React.js Specialist', 'AI-Assisted Developer', 'SaaS & POS Builder'];

const Hero = () => {
  const years = getYearsOfExperience();
  const role = useTypewriter(ROLES);
  const yearsShown = useCountUp(years);
  const projectsShown = useCountUp(projects.length);
  const hasResume = useFileExists('/resume.pdf', 'pdf');

  const stats = [
    { value: `${yearsShown}+`, label: 'Years experience' },
    { value: `${projectsShown}`, label: 'Production apps' },
    { value: 'ZATCA', label: 'E-invoicing integrations' },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-blob hero-blob-a" aria-hidden="true"></div>
      <div className="hero-blob hero-blob-b" aria-hidden="true"></div>
      <NeuralBackground />
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="hero-name">Mohamed Ashif</span>
          </h1>
          <h2 className="hero-subtitle" aria-label={ROLES[0]}>
            <span aria-hidden="true">{role}</span>
            <span className="hero-caret" aria-hidden="true"></span>
          </h2>
          <p className="hero-description">
            I build production SaaS frontends and full-stack products: admin panels, real-time
            dashboards, business software and POS systems, using React, Node.js and TypeScript.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact</a>
            {hasResume && (
              <a href="/resume.pdf" download="Mohamed-Ashif-Resume.pdf" className="btn btn-secondary">Download Resume</a>
            )}
          </div>
          <div className="hero-socials">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a>
          </div>
          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-ring"></div>
          <div className="hero-avatar">MA</div>
          <span className="hero-chip hero-chip-1">React</span>
          <span className="hero-chip hero-chip-2">Node.js</span>
          <span className="hero-chip hero-chip-3">TypeScript</span>
          <span className="hero-chip hero-chip-4">PostgreSQL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
