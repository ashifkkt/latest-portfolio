import './CodeSamples.css';
import { LINKS } from '../data/links';

// Curated public repositories (client work is private). Edit this list as better repos appear.
const REPOS = [
  { name: 'Todo-Backend', language: 'Node.js', description: 'Backend for a todo app built with Node.js and MongoDB.' },
  { name: 'NextJs-Dashboard', language: 'TypeScript', description: 'Dashboard application built with Next.js and TypeScript.' },
  { name: 'Calorie-Tracker', language: 'React', description: 'React-based web application for tracking calorie intake.' },
];

const CodeSamples = () => (
  <section id="code" className="code-samples">
    <div className="container">
      <h2 className="section-title reveal">Public Code</h2>
      <p className="section-subtitle reveal">Client work is private, so here are repositories you can read.</p>
      <div className="code-grid">
        {REPOS.map((r, i) => (
          <a
            key={r.name}
            className="code-card reveal"
            style={{ '--i': i }}
            href={`${LINKS.github}/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="code-lang">{r.language}</span>
            <h3>{r.name}</h3>
            <p>{r.description}</p>
            <span className="code-link">View code →</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CodeSamples;
