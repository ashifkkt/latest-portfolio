import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SaaS Analytics Dashboard',
      overview:
        'A comprehensive analytics platform for SaaS companies to track user engagement, revenue metrics, and product performance in real-time.',
      problem:
        'SaaS businesses needed a unified dashboard to monitor key metrics across multiple data sources without switching between tools.',
      features: [
        'Real-time data visualization with custom charts',
        'Multi-tenant architecture with role-based access',
        'Export reports in PDF and CSV formats',
        'Customizable dashboard widgets and filters',
        'WebSocket integration for live updates'
      ],
      techStack: ['React', 'Redux', 'TypeScript', 'REST APIs', 'Chart.js', 'WebSockets', 'Performance Optimization'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Client Portal Platform',
      overview:
        'A white-label client portal that enables service businesses to manage client relationships, projects, and communications in one place.',
      problem:
        'Service agencies were using multiple disconnected tools for client management, leading to inefficiency and poor client experience.',
      features: [
        'Project tracking with status workflows',
        'Secure file sharing and document management',
        'Integrated messaging and notification system',
        'Invoice generation and payment processing',
        'Responsive design for mobile and desktop'
      ],
      techStack: ['React', 'Custom Hooks', 'Context API', 'REST APIs', 'Responsive Design', 'Performance Optimization'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Admin Panel',
      overview:
        'A full-featured admin dashboard for e-commerce businesses to manage inventory, orders, customers, and analytics.',
      problem:
        'E-commerce store owners required an intuitive admin interface to handle complex inventory management and order processing efficiently.',
      features: [
        'Product catalog management with bulk operations',
        'Order processing and fulfillment tracking',
        'Customer relationship management (CRM)',
        'Sales analytics and reporting dashboard',
        'Inventory alerts and low-stock notifications'
      ],
      techStack: ['React', 'Redux', 'TypeScript', 'REST APIs', 'State Architecture', 'CI/CD'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Healthcare Appointment System',
      overview:
        'A patient management system for healthcare clinics to handle appointments, patient records, and clinic scheduling.',
      problem:
        'Healthcare clinics needed a reliable system to manage appointments, reduce no-shows, and streamline patient check-in processes.',
      features: [
        'Appointment scheduling with calendar integration',
        'Patient record management with search and filters',
        'Automated SMS and email reminders',
        'Waitlist management and appointment rescheduling',
        'HIPAA-compliant data handling and security'
      ],
      techStack: ['React', 'JavaScript (ES6+)', 'Context API', 'REST APIs', 'Responsive Design', 'Error Handling'],
      liveDemo: '#',
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
              <div className="project-overview">
                <h4 className="project-section-label">Overview</h4>
                <p className="project-text">{project.overview}</p>
              </div>
              <div className="project-problem">
                <h4 className="project-section-label">Problem Solved</h4>
                <p className="project-text">{project.problem}</p>
              </div>
              <div className="project-features">
                <h4 className="project-section-label">Key Features</h4>
                <ul className="project-features-list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="project-feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-tech">
                <h4 className="project-section-label">Tech Stack</h4>
                <div className="project-technologies">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-primary"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-secondary"
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

