import './About.css';
import { getYearsOfExperience } from '../utils/experience';

const About = () => {
  const years = getYearsOfExperience();
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about-content">
          <div className="about-text reveal">
            <p>
              I'm a React developer with {years}+ years of experience building production SaaS applications at Texol iCohort, 
              where I've worked on large-scale products serving enterprise clients. I hold a B.Tech in Computer Science 
              from MES College of Engineering, Kuttipuram (2017–2021) and completed a MERN Stack internship at Tseep Academy 
              before joining Texol iCohort in September 2022. Since February 2025 I've been a Full Stack Developer at Techon Innovations, building a Zoho-style business suite, a biometric system and POS software.
            </p>
            <p>
              My focus is on building scalable React frontends with clean architecture patterns. I specialize in implementing 
              role-based access control, real-time features with Socket.io, comprehensive dashboards, and complex admin panels. 
              I work with modern UI libraries including Ant Design, Material UI, Shadcn UI, and Tailwind CSS, and have experience 
              integrating third-party APIs, Google Maps, and regulatory compliance systems like ZATCA.
            </p>
            <p>
              I collaborate effectively with backend teams, product managers, and designers to deliver features that balance 
              technical excellence with business requirements. At Techon Innovations I build backends with Node.js (Express and NestJS) on MongoDB, and my familiarity with Python and basic Go helps me 
              make informed architectural decisions and work seamlessly across the stack when needed. I also use AI tools such as Claude Code to speed up prototyping, debugging and code review, while keeping architecture and quality decisions firmly my own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

