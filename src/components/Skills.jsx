import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Core Technologies',
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript']
    },
    {
      category: 'State Management',
      skills: ['Redux', 'Context API', 'Custom Hooks', 'State Architecture']
    },
    {
      category: 'Performance & Optimization',
      skills: ['Code Splitting', 'Lazy Loading', 'Bundle Optimization', 'Memoization']
    },
    {
      category: 'APIs & Integration',
      skills: ['REST APIs', 'Error Handling', 'Async Patterns', 'API Architecture']
    },
    {
      category: 'Development Practices',
      skills: ['Component Architecture', 'Code Reviews', 'Testing', 'Git Workflow']
    },
    {
      category: 'Deployment & Tools',
      skills: ['CI/CD', 'Production Deployment', 'Performance Monitoring', 'Debugging']
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

