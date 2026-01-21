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
            Building production-ready SaaS applications and enterprise admin panels with React, TypeScript, 
            and modern UI libraries. 3+ years of experience architecting scalable frontends, implementing 
            real-time features, and delivering complex dashboards for product-based companies.
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

