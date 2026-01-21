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
            <span className="hero-name">Mohamed Ashif</span>
          </h1>
          <h2 className="hero-subtitle">React.js Developer</h2>
          <p className="hero-description">
            React developer with 3+ years of experience building scalable, responsive, and 
            production-ready web applications. I specialize in building SaaS products, admin panels, 
            and complex frontend architectures that handle real-time features, role-based access, 
            and enterprise-level requirements.
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

