import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior React Developer',
      period: '2022 - Present',
      description: [
        'Lead development of multiple React applications serving 100K+ users',
        'Mentored junior developers and established coding standards',
        'Optimized application performance, reducing load time by 40%',
        'Implemented CI/CD pipelines and improved deployment processes'
      ]
    },
    {
      id: 2,
      company: 'Digital Agency',
      position: 'React Developer',
      period: '2021 - 2022',
      description: [
        'Developed responsive web applications for various clients',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Integrated third-party APIs and payment gateways',
        'Participated in code reviews and agile development processes'
      ]
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      period: '2020 - 2021',
      description: [
        'Built the initial frontend architecture for the startup',
        'Developed reusable component library',
        'Worked closely with backend team on API integration',
        'Contributed to product decisions and feature planning'
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

