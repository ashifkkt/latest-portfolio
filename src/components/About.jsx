import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a React developer with over 3 years of experience building modern web applications.
              I specialize in creating responsive, performant, and user-friendly interfaces using
              React and its ecosystem.
            </p>
            <p>
              My expertise includes developing complex state management solutions, optimizing
              application performance, and implementing best practices for code maintainability.
              I'm passionate about writing clean, scalable code and staying up-to-date with the
              latest web technologies.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs,
              and exploring new frameworks and libraries that can improve my development workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

