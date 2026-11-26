import { useEffect, useRef } from 'react';
import './CaseStudy.css';
import { caseStudies } from '../data/caseStudies';
import { TecbooksDiagram, TecposDiagram } from './CaseDiagrams';

const diagrams = { tecbooks: TecbooksDiagram, tecpos: TecposDiagram };

const close = () => {
  window.location.hash = '#projects';
};

const CaseStudy = ({ slug }) => {
  const study = caseStudies[slug];
  const headingRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!study) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.title = `${study.title} case study | Mohamed Ashif`;
    headingRef.current?.focus();
    if (rootRef.current) rootRef.current.scrollTop = 0;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.title = 'Mohamed Ashif - Full Stack Developer | Portfolio';
      document.removeEventListener('keydown', onKey);
    };
  }, [study]);

  if (!study) return null;
  const Diagram = diagrams[study.diagram];

  return (
    <div className="case" ref={rootRef} role="dialog" aria-modal="true" aria-label={`${study.title} case study`}>
      <div className="case-inner">
        <button type="button" className="case-back" onClick={close}>← Back to projects</button>

        <header className="case-header cs-in">
          <p className="case-eyebrow">Case study · {study.company}</p>
          <h1 ref={headingRef} tabIndex={-1}>{study.title}</h1>
          <p className="case-tagline">{study.tagline}</p>
          <p className="case-role"><strong>My role:</strong> {study.role}</p>
          <ul className="case-stack">
            {study.stack.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </header>

        <ul className="case-facts cs-in" style={{ '--i': 1 }}>
          {study.facts.map((f) => (
            <li key={f.label}><strong>{f.value}</strong><span>{f.label}</span></li>
          ))}
        </ul>

        <section className="cs-in" style={{ '--i': 2 }}>
          <h2>The problem</h2>
          <p>{study.problem}</p>
          <h3>What it covers</h3>
          <ul className="case-list">
            {study.scope.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section className="cs-in" style={{ '--i': 3 }}>
          <h2>How it fits together</h2>
          <figure className="case-diagram"><Diagram /></figure>
        </section>

        <section>
          <h2>Engineering decisions</h2>
          <div className="case-decisions">
            {study.decisions.map((d, i) => (
              <article key={d.title} className="case-decision cs-in" style={{ '--i': i % 4 }}>
                <span className="case-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-in">
          <h2>Front end</h2>
          <p>{study.frontend}</p>
        </section>

        <footer className="case-footer">
          <button type="button" className="btn btn-primary" onClick={close}>Back to projects</button>
          <a href="#contact" className="btn btn-secondary" onClick={() => { window.location.hash = '#contact'; }}>Get in touch</a>
        </footer>
      </div>
    </div>
  );
};

export default CaseStudy;
