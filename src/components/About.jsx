import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a React developer with 3+ years of experience building production SaaS applications at Texol iCohort, 
              where I've worked on large-scale products serving enterprise clients. I hold a B.Tech in Computer Science 
              from MES College of Engineering, Kuttipuram (2017–2021) and completed a MERN Stack internship at Tseep Academy 
              before joining Texol iCohort in September 2022.
            </p>
            <p>
              My focus is on building scalable React frontends with clean architecture patterns. I specialize in implementing 
              role-based access control, real-time features with Socket.io, comprehensive dashboards, and complex admin panels. 
              I work with modern UI libraries including Ant Design, Material UI, Shadcn UI, and Tailwind CSS, and have experience 
              integrating third-party APIs, Google Maps, and regulatory compliance systems like ZATCA.
            </p>
            <p>
              I collaborate effectively with backend teams, product managers, and designers to deliver features that balance 
              technical excellence with business requirements. My familiarity with Node.js, Python, and basic Go helps me 
              make informed architectural decisions and work seamlessly across the stack when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

