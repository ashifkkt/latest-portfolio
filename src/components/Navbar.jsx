import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // storage unavailable - fall through to system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [theme, setTheme] = useState(getInitialTheme);
  const navRef = useRef(null);
  const progressRef = useRef(null);

  // Scrolled state + reading progress bar (rAF-throttled, passive)
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const { scrollY } = window;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 50);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    const hero = document.getElementById('hero');
    const heroObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveId(''),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    if (hero) heroObserver.observe(hero);
    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  // Close mobile menu on Escape or outside click
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsMobileMenuOpen(false);
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [isMobileMenuOpen]);

  // Apply + persist theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          Mohamed Ashif
        </a>
        <ul id="primary-menu" className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? 'active' : ''}
                aria-current={activeId === id ? 'true' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true"></div>
    </nav>
  );
};

export default Navbar;
