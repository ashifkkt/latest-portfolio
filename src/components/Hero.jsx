import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-name">John Doe</span>
          </h1>
          <h2 className="hero-subtitle">Senior React.js Developer</h2>
          <p className="hero-description">
            I architect and build enterprise-grade React applications that scale to serve 
            hundreds of thousands of users. With 3+ years of experience in complex state management, 
            performance optimization, and modern development practices, I deliver production-ready 
            solutions that drive measurable business outcomes.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

