import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Vanforces (Admin Panel)',
      overview:
        'Production SaaS application for van sales management with complete admin functionality. Built the entire admin interface using React and Ant Design, handling sales operations, real-time tracking, transactions, and regulatory compliance.',
      problem:
        'Van sales businesses required a centralized admin system to manage operations, track field salesmen in real-time, process transactions, and generate compliant invoices with ZATCA integration.',
      features: [
        'Role-based authentication and granular access control',
        'Real-time salesman tracking with Google Maps integration and mobile app synchronization',
        'Socket.io-based live chat and real-time notifications',
        'Invoice generation and printing using react-pdf',
        'Transaction management system for sales, collections, and load operations',
        'ZATCA e-invoicing integration for regulatory compliance',
        'Custom report builder with dynamic column selection and export functionality'
      ],
      techStack: ['React', 'Ant Design', 'Socket.io', 'Google Maps API', 'REST APIs', 'react-pdf', 'ZATCA Integration'],
      liveDemo: 'https://admin.dev.vanforces.com/',
      github: '#'
    },
    {
      id: 2,
      title: 'Vanforces – Super Admin',
      overview:
        'Office-level super admin system built with React, TypeScript, and Shadcn UI. Manages multi-tenant subscriptions, pricing plans, user administration, and platform-wide settings with scalable architecture.',
      problem:
        'The platform needed a centralized super admin system to manage multiple tenants, subscription plans, pricing tiers, and organizational-level user administration.',
      features: [
        'Subscription plan and pricing management',
        'Multi-tenant user and subscription administration',
        'Platform-wide settings and configuration management',
        'Scalable architecture with TypeScript for type safety',
        'Clean, maintainable UI built with Shadcn UI'
      ],
      techStack: ['React', 'TypeScript', 'Shadcn UI', 'REST APIs', 'State Management'],
      liveDemo: 'https://admin.dev.vanforces.com/',
      github: '#'
    },
    {
      id: 3,
      title: 'Skipee (Restaurant Management System)',
      overview:
        'Production restaurant management system built with React and Material UI. Handles order processing, table management, staff coordination, and complete restaurant workflow operations.',
      problem:
        'Restaurants required an integrated system to manage daily operations including real-time order processing, table assignments, staff scheduling, and end-to-end workflow coordination.',
      features: [
        'Real-time order management and processing',
        'Table assignment and reservation management',
        'Staff scheduling and coordination',
        'Complete restaurant workflow automation',
        'Production-ready system with Material UI components'
      ],
      techStack: ['React', 'Material UI', 'REST APIs', 'State Management'],
      liveDemo: 'https://spstg-skippy.texol.work/',
      github: '#'
    },
    {
      id: 4,
      title: 'Skipee Admin',
      overview:
        'Centralized admin panel built with React and Tailwind CSS for managing multiple restaurants. Provides unified administration, performance tracking, and comprehensive reporting across all restaurant locations.',
      problem:
        'The platform needed a centralized admin system to manage multiple restaurant locations, track performance metrics across venues, and provide unified reporting and analytics.',
      features: [
        'Multi-restaurant management and administration',
        'Centralized reporting and analytics dashboard',
        'Restaurant performance tracking and metrics',
        'Unified platform administration interface',
        'Tailwind CSS for responsive, modern UI'
      ],
      techStack: ['React', 'Tailwind CSS', 'REST APIs', 'State Management'],
      liveDemo: 'https://skippy-stg.texol.work/',
      github: '#'
    },
    {
      id: 5,
      title: 'Alamawasil Web Portal',
      overview:
        'Web portal built with React, TypeScript, and Shadcn UI for bulk invoice management, digital signing, and ZATCA integration. Includes comprehensive admin features for customer management, invoice tracking, and detailed reporting.',
      problem:
        'Businesses required a system to handle bulk invoice processing, digital signing workflows, ZATCA regulatory compliance, and comprehensive invoice management with real-time tracking and detailed reporting.',
      features: [
        'Bulk invoice upload and batch processing',
        'Digital signing workflow and document management',
        'ZATCA e-invoicing integration for regulatory compliance',
        'Customer management and relationship tracking',
        'Real-time invoice status monitoring and tracking',
        'Comprehensive reporting on invoice processing and status'
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

