import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Texol iCohort',
      position: 'Frontend Developer',
      period: 'Sep 2022 - Present',
      description: [
        'Architecting and building React frontends for large-scale SaaS applications, implementing clean component architecture and scalable state management patterns',
        'Developing production features including role-based access control, real-time communication with Socket.io, Google Maps integration, and custom reporting systems',
        'Building comprehensive admin panels and dashboards using React, TypeScript, Ant Design, Material UI, and Shadcn UI for enterprise clients',
        'Implementing complex workflows including invoice management, e-invoicing with ZATCA integration, transaction processing, and bulk data operations',
        'Collaborating with cross-functional teams to deliver features that meet technical requirements and business objectives, focusing on performance and maintainability'
      ]
    },
    {
      id: 2,
      company: 'Tseep Academy',
      position: 'MERN Stack Intern',
      period: 'May 2022 - Sep 2022',
      description: [
        'Completed MERN stack internship, building full-stack applications with React, Node.js, MongoDB, and Express',
        'Developed end-to-end web applications, gaining practical experience in frontend architecture, REST API integration, and database design',
        'Learned industry-standard development practices, code organization, and collaborative development workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <div className="experience-company-period">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

