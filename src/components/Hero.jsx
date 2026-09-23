import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import avatarImg from '../assets/avatar.png';

const { personal, stats } = portfolioData;

const GITHUB_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
);
const LINKEDIN_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const LEETCODE_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.519c-.569-.569-1.244-.96-1.959-1.171l2.497-2.497c.496-.496.496-1.3 0-1.796l-.54-.54c-.496-.497-1.3-.497-1.796 0l-14.79 14.79c-.496.496-.496 1.3 0 1.796l.54.54c.496.497 1.3.497 1.796 0l2.698-2.698c.211.715.602 1.39 1.171 1.959l4.332 4.364c.935.936 2.136 1.403 3.334 1.403.915 0 1.83-.282 2.606-.845l.97-.97c.535-.536.554-1.387.039-1.901-.514-.515-1.365-.497-1.9.039z"/></svg>
);
const MAIL_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState(personal.roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => {
        const next = (prev + 1) % personal.roles.length;
        setDisplayRole(personal.roles[next]);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-inner">
          {/* Left: Text */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot" />
              {personal.status}
            </div>

            <p className="hero-greeting">Hello World, I&apos;m</p>
            <h1 className="hero-name">{personal.name}</h1>

            <div className="hero-role-container">
              <span className="hero-role-prefix">I build →&nbsp;</span>
              <span className="hero-role-text" key={roleIndex}>{displayRole}</span>
            </div>

            <p className="hero-summary">{personal.summary}</p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Explore Projects
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Get in Touch
              </button>
            </div>

            <div className="hero-socials">
              <a className="social-btn" href={personal.github} target="_blank" rel="noopener noreferrer" title="GitHub" id="hero-github-link">
                {GITHUB_SVG}
              </a>
              <a className="social-btn" href={personal.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" id="hero-linkedin-link">
                {LINKEDIN_SVG}
              </a>
              <a className="social-btn" href={personal.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode" id="hero-leetcode-link">
                {LEETCODE_SVG}
              </a>
              <span className="social-divider" />
              <a className="social-btn" href={`mailto:${personal.email}`} title="Email" id="hero-email-link">
                {MAIL_SVG}
              </a>
              <a className="social-btn" href={`tel:${personal.phone}`} title="Phone" id="hero-phone-link" style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '-0.5px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23 19.79 19.79 0 0 1 1.61 4.6 2 2 0 0 1 3.6 2.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.88-1.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Avatar + Stats */}
          <div className="hero-avatar-wrap">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
              <div className="hero-avatar-ring">
                <img
                  src={avatarImg}
                  alt="Raj Bugalia"
                  className="hero-avatar"
                  id="hero-avatar-img"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.insertAdjacentHTML('beforeend',
                      `<div style="width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:900;color:white;font-family:sans-serif;position:relative;z-index:1;">R</div>`
                    );
                  }}
                />
              </div>

              <div className="hero-stats-grid">
                {stats.map((s, i) => (
                  <div className="hero-stat-card" key={i}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-sub">{s.subtext}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
