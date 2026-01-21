import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Enterprise Software Company',
      position: 'Senior React Developer',
      period: '2022 - Present',
      description: [
        'Architected and built React applications handling 100K+ daily active users, implementing scalable state management and component architectures',
        'Reduced initial load time by 40% through strategic code splitting, lazy loading, and bundle optimization, directly improving user engagement metrics',
        'Established component architecture patterns and coding standards that improved team velocity by 25% and reduced production bugs by 30%',
        'Led technical decisions on state management strategies, performance optimization techniques, and development workflows adopted across multiple teams'
      ]
    },
    {
      id: 2,
      company: 'Digital Agency',
      position: 'React Developer',
      period: '2021 - 2022',
      description: [
        'Developed 8+ production React applications for clients across healthcare, e-commerce, and SaaS industries, each handling 10K+ monthly users',
        'Architected API integration layers for REST APIs and third-party services (payment gateways, analytics, CMS), implementing robust error handling and loading states',
        'Built responsive, mobile-first interfaces that improved client conversion rates by an average of 25% through performance optimization and UX improvements',
        'Refactored legacy React codebases, reducing technical debt by 40% and establishing maintainable patterns for future development'
      ]
    },
    {
      id: 3,
      company: 'Tech Startup',
      position: 'Frontend Developer',
      period: '2020 - 2021',
      description: [
        'Designed and implemented the initial React application architecture from the ground up, establishing scalable patterns for state management and component structure',
        'Built a reusable component library and design system that accelerated feature development by 30% and ensured UI consistency across the platform',
        'Developed critical user-facing features including authentication flows, real-time data dashboards, and complex form workflows handling thousands of daily submissions',
        'Collaborated directly with founders and backend engineers to define API contracts, establish development workflows, and deliver MVP features on aggressive timelines'
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

