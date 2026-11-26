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
      category: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'Python', 'Basic Go']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'SQLite']
    },
    {
      category: 'Tools & Build',
      skills: ['Git', 'GitHub', 'Vite', 'NPM', 'Docker', 'Turborepo']
    },
    {
      category: 'AI & Tooling',
      skills: ['Claude Code', 'Prompt Engineering', 'AI-Assisted Development']
    },
    {
      category: 'Deployment',
      skills: ['Vercel', 'Netlify']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category reveal" style={{ '--i': index % 4 }}>
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

