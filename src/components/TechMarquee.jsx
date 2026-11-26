import './TechMarquee.css';

const TECH = ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'Go', 'Python', 'PostgreSQL', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Ant Design', 'Shadcn UI', 'Claude Code', 'Prompt Engineering'];

const TechMarquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[...TECH, ...TECH].map((t, i) => (
        <span key={i} className="marquee-item">{t}</span>
      ))}
    </div>
  </div>
);

export default TechMarquee;
