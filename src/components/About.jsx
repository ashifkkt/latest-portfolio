import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              With 3+ years of professional experience, I've architected and built React applications
              serving hundreds of thousands of users across various industries. My approach centers on
              solving real business challenges through well-structured code, scalable architecture, and
              data-driven decision making.
            </p>
            <p>
              I specialize in building maintainable, performant React applications that scale. This includes
              establishing robust component architectures, implementing efficient state management patterns,
              and optimizing for performance at scale. I write code that other developers can understand,
              extend, and maintain long-term.
            </p>
            <p>
              I work closely with cross-functional teams—product managers, designers, and backend engineers—to
              deliver features that align technical excellence with business objectives. I've led code reviews,
              mentored junior developers, and established coding standards that improve team velocity and code quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

