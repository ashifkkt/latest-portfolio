import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodeSamples from './components/CodeSamples';
import TechMarquee from './components/TechMarquee';
import CursorGlow from './components/CursorGlow';
import Assistant from './components/Assistant';
import CaseStudy from './components/CaseStudy';
import useCaseSlug from './hooks/useCaseSlug';
import useRevealOnScroll from './hooks/useRevealOnScroll';
import './App.css';

function App() {
  useRevealOnScroll();
  const caseSlug = useCaseSlug();

  return (
    <>
    <div className="App" inert={Boolean(caseSlug)}>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <CodeSamples />
      <Experience />
      <Contact />
      </main>
      <Footer />
      <CursorGlow />
      <Assistant />
    </div>
    {caseSlug && <CaseStudy slug={caseSlug} />}
    </>
  );
}

export default App;
