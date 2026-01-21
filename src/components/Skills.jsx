import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS']
    },
    {
      category: 'State Management',
      skills: ['Redux', 'Context API', 'Zustand', 'React Query']
    },
    {
      category: 'Build Tools',
      skills: ['Vite', 'Webpack', 'npm', 'Yarn']
    },
    {
      category: 'Testing',
      skills: ['Jest', 'React Testing Library', 'Cypress']
    },
    {
      category: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab']
    },
    {
      category: 'Other',
      skills: ['REST APIs', 'GraphQL', 'Responsive Design', 'Accessibility']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

