import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with React, Redux, and Node.js. Features include product catalog, shopping cart, user authentication, and payment integration.',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations using a weather API.',
      technologies: ['React', 'CSS3', 'OpenWeatherMap API'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description:
        'An analytics dashboard for social media metrics with data visualization, custom charts, and export functionality.',
      technologies: ['React', 'Chart.js', 'REST API', 'SASS'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

