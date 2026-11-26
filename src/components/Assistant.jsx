import { useState, useRef, useEffect } from 'react';
import './Assistant.css';
import { projects } from '../data/projects';
import { LINKS } from '../data/links';
import { getYearsOfExperience } from '../utils/experience';

const SUGGESTIONS = [
  'What projects have you built?',
  'What is your tech stack?',
  'Are you available for work?',
  'How do you use AI?',
];

const PROJECT_KEYS = [
  [/tecbooks|zoho/, 'Tecbooks'],
  [/bio ?tech|biometric|attendance/, 'Bio Tech'],
  [/tecpos|\bpos\b|point of sale/, 'TecPos'],
  [/vanforces|van sales/, 'Vanforces'],
  [/skipee|restaurant/, 'Skipee'],
  [/alamawasil|invoice|zatca/, 'Alamawasil'],
];

const has = (t, re) => re.test(t);

// Keyword-based answers built from this site's own content. No network calls.
const answer = (q) => {
  const t = q.toLowerCase();
  const years = getYearsOfExperience();

  for (const [re, key] of PROJECT_KEYS) {
    if (has(t, re)) {
      const found = projects.filter((p) => p.title.includes(key));
      if (found.length) {
        return {
          lines: found.map((p) => `${p.title}: ${p.overview}`),
          links: [
          ...found.filter((p) => p.caseStudy).map((p) => ({ label: `${p.title} case study`, href: `#/case/${p.caseStudy}` })),
          { label: 'See all projects', href: '#projects' },
        ],
      };
      }
    }
  }
  if (has(t, /\b(hi|hello|hey)\b/)) {
    return { lines: ["Hello! Ask me about Mohamed's projects, skills, experience or how to reach him."] };
  }
  if (has(t, /project|built|work on|portfolio|app/)) {
    return {
      lines: [`${projects.length} production apps so far, including ${projects.slice(0, 3).map((p) => p.title).join(', ')} and more. Ask about any of them by name.`],
      links: [{ label: 'View projects', href: '#projects' }],
    };
  }
  if (has(t, /\bai\b|llm|gpt|claude|copilot|prompt|machine learning/)) {
    return {
      lines: ['He uses AI tools such as Claude Code in his workflow for prototyping, debugging and code review, and keeps final architecture, security and quality decisions in human hands.'],
    };
  }
  if (has(t, /skill|stack|tech|language|framework|react|node|typescript|database|mongo|postgres/)) {
    return {
      lines: [
        'Frontend: React, TypeScript, JavaScript (ES6+), Ant Design, Material UI, Shadcn UI, Tailwind CSS.',
        'Backend and data: Node.js with Express and NestJS, Python, basic Go; MongoDB, PostgreSQL, Prisma and SQLite.',
        'Also: Redux, Socket.io (real-time), Google Maps API, REST APIs.',
      ],
      links: [{ label: 'See skills', href: '#skills' }],
    };
  }
  if (has(t, /experience|company|job|current|techon|texol|career|years/)) {
    return {
      lines: [
        `About ${years} years of experience. Currently a Full Stack Developer at Techon Innovations (since Feb 2025).`,
        'Before that: Frontend Developer at Texol iCohort (Sep 2022 - Feb 2025) and a MERN Stack intern at Tseep Academy.',
      ],
      links: [{ label: 'See experience', href: '#experience' }],
    };
  }
  if (has(t, /educat|degree|college|study|b\.?tech/)) {
    return { lines: ['B.Tech in Computer Science from MES College of Engineering, Kuttipuram (2017-2021).'] };
  }
  if (has(t, /hire|available|freelance|contact|email|reach|work together|fiverr/)) {
    return {
      lines: [`The best way is email: ${LINKS.email}. He also takes freelance work through Fiverr.`],
      links: [
        { label: 'Contact section', href: '#contact' },
        { label: 'Fiverr', href: LINKS.fiverr, external: true },
      ],
    };
  }
  if (has(t, /github|code|repo|source/)) {
    return { lines: ['His public code is on GitHub. Most client projects are private.'], links: [{ label: 'GitHub', href: LINKS.github, external: true }] };
  }
  if (has(t, /linkedin|profile/)) {
    return { lines: ['You can connect on LinkedIn.'], links: [{ label: 'LinkedIn', href: LINKS.linkedin, external: true }] };
  }
  return {
    lines: ["I can only answer from what's on this site. Try asking about projects, skills, experience, or how to get in touch."],
  };
};

const SparkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z" />
    <path d="M19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z" opacity=".7" />
  </svg>
);

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', lines: ["Hi! I'm the portfolio assistant. Ask me about Mohamed's projects, skills or experience."] },
  ]);
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = (text) => {
    const q = text.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { from: 'user', lines: [q] }]);
    setInput('');
    setTyping(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...answer(q) }]);
      setTyping(false);
    }, 650);
  };

  return (
    <div className="assistant">
      {open && (
        <div className="assistant-panel" role="dialog" aria-label="Portfolio assistant">
          <div className="assistant-header">
            <span className="assistant-avatar"><SparkIcon /></span>
            <div>
              <strong>Portfolio Assistant</strong>
              <small>Answers from this site's content</small>
            </div>
            <button type="button" className="assistant-close" onClick={() => setOpen(false)} aria-label="Close assistant">×</button>
          </div>

          <div className="assistant-log" ref={logRef} role="log" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`assistant-msg assistant-msg-${m.from}`}>
                {m.lines.map((l, k) => <p key={k}>{l}</p>)}
                {m.links && (
                  <div className="assistant-links">
                    {m.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : { onClick: () => setOpen(false) })}
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="assistant-msg assistant-msg-bot assistant-typing" aria-label="Assistant is typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>

          <div className="assistant-chips">
            {SUGGESTIONS.map((s) => (
              <button type="button" key={s} onClick={() => ask(s)}>{s}</button>
            ))}
          </div>

          <form className="assistant-form" onSubmit={(e) => { e.preventDefault(); ask(input); }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills..."
              aria-label="Your question"
              maxLength={200}
            />
            <button type="submit" disabled={!input.trim() || typing}>Send</button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`assistant-fab ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        aria-expanded={open}
      >
        <SparkIcon />
      </button>
    </div>
  );
};

export default Assistant;
