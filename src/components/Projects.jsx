import { useState } from 'react';
import './Projects.css';
import { projects } from '../data/projects';

const VISIBLE_TAGS = 4;

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const detailsId = `project-details-${project.id}`;
  const hasRepo = Boolean(project.github);
  const extra = project.techStack.length - VISIBLE_TAGS;

  return (
    <article
      className="project-card reveal"
      style={{ '--i': index % 3 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
        e.currentTarget.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 8}deg`);
        e.currentTarget.style.setProperty('--rx', `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty('--rx', '0deg');
        e.currentTarget.style.setProperty('--ry', '0deg');
      }}
    >
      {project.image ? (
        <img className="project-cover" src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      ) : (
        <div className="project-cover project-cover-placeholder" aria-hidden="true">
          <span>{project.category}</span>
        </div>
      )}
      {project.company && <p className="project-company">{project.company}</p>}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-text">{project.overview}</p>

      <div className="project-technologies">
        {project.techStack.slice(0, VISIBLE_TAGS).map((tech) => (
          <span key={tech} className="project-tech-tag">{tech}</span>
        ))}
        {extra > 0 && <span className="project-tech-tag project-tech-more">+{extra}</span>}
      </div>

      <button
        type="button"
        className="project-toggle"
        aria-expanded={open}
        aria-controls={detailsId}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Hide details' : 'Problem, features & full stack'}
        <span className={`project-toggle-icon ${open ? 'open' : ''}`} aria-hidden="true">▾</span>
      </button>

      <div id={detailsId} className="project-details" hidden={!open}>
        {project.role && (
          <>
            <h4 className="project-section-label">My Role</h4>
            <p className="project-text">{project.role}</p>
          </>
        )}
        {project.impact && project.impact.length > 0 && (
          <>
            <h4 className="project-section-label">Impact</h4>
            <ul className="project-features-list">
              {project.impact.map((i) => (
                <li key={i} className="project-feature-item project-impact-item">{i}</li>
              ))}
            </ul>
          </>
        )}
        <h4 className="project-section-label">Problem Solved</h4>
        <p className="project-text">{project.problem}</p>
        <h4 className="project-section-label">Key Features</h4>
        <ul className="project-features-list">
          {project.features.map((feature) => (
            <li key={feature} className="project-feature-item">{feature}</li>
          ))}
        </ul>
        {project.architecture && (
          <>
            <h4 className="project-section-label">Architecture</h4>
            <p className="project-text">{project.architecture}</p>
          </>
        )}
        <h4 className="project-section-label">Full Tech Stack</h4>
        <div className="project-technologies">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      {project.caseStudy && (
        <a href={`#/case/${project.caseStudy}`} className="project-case-link">Read the case study →</a>
      )}

      <div className="project-links">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
            Live Demo
          </a>
        )}
        {hasRepo ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">
            GitHub
          </a>
        ) : (
          <span className="project-private">Private client project</span>
        )}
      </div>
    </article>
  );
};

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title reveal">Projects</h2>
      <p className="section-subtitle reveal">Production applications built at Techon Innovations and Texol iCohort.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
