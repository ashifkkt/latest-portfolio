import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a React developer with 3+ years of professional experience building product-based SaaS applications.
              I completed my B.Tech in Computer Science from MES College of Engineering, Kuttipuram (2017–2021), followed
              by a MERN Stack internship at Tseep Academy. Since September 2022, I've been working as a Frontend Developer
              at Texol iCohort, where I focus on building scalable frontend architectures for production SaaS applications.
            </p>
            <p>
              My work centers on product-based development—building and maintaining complex React frontends with clean architecture,
              implementing role-based access control, real-time features, comprehensive dashboards, and admin panels. I prioritize
              performance, maintainability, and user experience while collaborating closely with backend teams, product managers,
              and designers to deliver features that meet both technical and business requirements.
            </p>
            <p>
              I have familiarity with backend technologies including Node.js, Python, and basic Go, which helps me collaborate
              effectively with backend teams and make informed architectural decisions. My experience spans from building complete
              admin systems to implementing real-time features, third-party integrations, and complex data management workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

