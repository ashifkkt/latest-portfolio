import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript']
    },
    {
      category: 'UI Libraries',
      skills: ['Ant Design', 'Material UI', 'Shadcn UI', 'Tailwind CSS']
    },
    {
      category: 'State & Data',
      skills: ['Redux', 'Context API']
    },
    {
      category: 'Real-Time & Integrations',
      skills: ['Socket.io', 'Google Maps API', 'REST APIs']
    },
    {
      category: 'Backend Knowledge',
      skills: ['Node.js', 'Python', 'Basic Go']
    },
    {
      category: 'Tools & Build',
      skills: ['Git', 'GitHub', 'Vite', 'NPM']
    },
    {
      category: 'Deployment',
      skills: ['Vercel', 'Netlify']
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

