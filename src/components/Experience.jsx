import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Texol iCohort',
      position: 'Frontend Developer',
      period: 'Sep 2022 - Present',
      description: [
        'Working on large-scale SaaS and product-based applications, building and maintaining complex React frontends with clean architecture',
        'Implementing role-based access control, real-time features using Socket.io, comprehensive dashboards, and admin panels for enterprise clients',
        'Building production-ready features including real-time tracking, Google Maps integration, invoice management, and custom reporting systems',
        'Collaborating with backend teams, product managers, and designers to deliver scalable solutions that meet business requirements and user needs',
        'Focusing on performance optimization, code maintainability, and user experience while working with modern React patterns and best practices'
      ]
    },
    {
      id: 2,
      company: 'Tseep Academy',
      position: 'MERN Stack Intern',
      period: 'May 2022 - Sep 2022',
      description: [
        'Completed comprehensive MERN stack internship, gaining hands-on experience in full-stack development',
        'Worked on real-world projects using React, Node.js, MongoDB, and Express, building end-to-end web applications',
        'Learned industry best practices for frontend architecture, API integration, and database design',
        'Developed foundational skills in building scalable applications and collaborating in a professional development environment'
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

