import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Vanforces (Admin Panel)',
      overview:
        'A comprehensive SaaS application based on van sales concept, featuring complete admin-side functionality for managing sales operations, tracking salesmen, and handling transactions.',
      problem:
        'Van sales businesses needed a centralized admin system to manage sales operations, track field salesmen in real-time, handle transactions, and generate invoices with regulatory compliance.',
      features: [
        'Role-based authentication and access control',
        'Real-time salesman tracking via mobile app settings with Google Maps integration',
        'Live chat functionality using Socket.io for instant communication',
        'Real-time notifications system',
        'Invoice printing and generation using react-pdf',
        'Transaction management for sales, collection, and load operations',
        'E-invoicing integration with ZATCA for regulatory compliance',
        'Custom report creation UI with dynamic column selection and report generation'
      ],
      techStack: ['React', 'Ant Design', 'Socket.io', 'Google Maps API', 'REST APIs', 'react-pdf', 'ZATCA Integration'],
      liveDemo: 'https://admin.dev.vanforces.com/',
      github: '#'
    },
    {
      id: 2,
      title: 'Vanforces – Super Admin',
      overview:
        'Office-level super admin system for managing plans, pricing, user subscriptions, and overall platform administration with scalable architecture.',
      problem:
        'The platform required a centralized super admin system to manage multiple tenants, subscription plans, pricing tiers, and user management at the organizational level.',
      features: [
        'Plan and pricing management system',
        'User and subscription management',
        'Multi-tenant administration',
        'Scalable and maintainable architecture',
        'Clean, professional UI layouts'
      ],
      techStack: ['React', 'TypeScript', 'Shadcn UI', 'REST APIs', 'State Management'],
      liveDemo: 'https://admin.dev.vanforces.com/',
      github: '#'
    },
    {
      id: 3,
      title: 'Skipee (Restaurant Management System)',
      overview:
        'A comprehensive restaurant management application for handling orders, table management, staff coordination, and complete restaurant workflow operations.',
      problem:
        'Restaurants needed an integrated system to manage daily operations including order processing, table assignments, staff management, and workflow coordination.',
      features: [
        'Order management and processing system',
        'Table assignment and management',
        'Staff management and coordination',
        'Complete restaurant workflow management',
        'Production-ready, detailed system design'
      ],
      techStack: ['React', 'Material UI', 'REST APIs', 'State Management'],
      liveDemo: 'https://spstg-skippy.texol.work/',
      github: '#'
    },
    {
      id: 4,
      title: 'Skipee Admin',
      overview:
        'Admin panel for managing multiple restaurants under the Skipee platform, providing centralized management and comprehensive reporting capabilities.',
      problem:
        'The platform required a centralized admin system to manage multiple restaurant locations, track performance across venues, and provide unified reporting.',
      features: [
        'Multi-restaurant management',
        'Centralized reporting and analytics',
        'Restaurant performance tracking',
        'Unified dashboard for platform administration'
      ],
      techStack: ['React', 'Tailwind CSS', 'REST APIs', 'State Management'],
      liveDemo: 'https://skippy-stg.texol.work/',
      github: '#'
    },
    {
      id: 5,
      title: 'Alamawasil Web Portal',
      overview:
        'A web portal for bulk invoice management, digital signing, and ZATCA integration, with comprehensive admin features for customer and invoice tracking.',
      problem:
        'Businesses needed a system to handle bulk invoice processing, digital signing workflows, ZATCA compliance, and comprehensive invoice management with detailed reporting.',
      features: [
        'Bulk invoice upload and processing',
        'Digital signing functionality',
        'ZATCA integration for regulatory compliance',
        'Customer management system',
        'Invoice tracking and status monitoring',
        'Detailed reporting on uploaded invoices and processing status'
      ],
      techStack: ['React', 'TypeScript', 'Shadcn UI', 'REST APIs', 'ZATCA Integration'],
      liveDemo: 'https://admin.almawasil.com/',
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

