import { portfolioData } from '../data/portfolioData';

const { experience } = portfolioData;

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Work History</div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Production-grade engineering under real client constraints and sprint-driven timelines.
        </p>

        <div className="experience-wrap" style={{ marginTop: 48 }}>
          {experience.map((exp, i) => (
            <div className="exp-card glass-card" key={i} style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '36px 36px 28px', borderBottom: '1px solid var(--glass-border)', background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(6,182,212,0.04))' }}>
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-meta">
                      <span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {exp.period}
                      </span>
                      <span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                        {exp.location}
                      </span>
                      <span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="badge badge-indigo">
                    🏢 Internship
                  </div>
                </div>
                <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', margin: 0 }}>{exp.description}</p>
              </div>

              <div style={{ padding: '24px 36px 28px' }}>
                {/* Issue 5: was uppercase – long labels in all-caps are slow to read */}
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-indigo)', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', marginBottom: 14, textTransform: 'none' }}>
                  Key Contributions
                </p>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>

                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', marginBottom: 12, marginTop: 4, textTransform: 'none' }}>
                  Technologies Used
                </p>
                <div className="exp-tech-tags">
                  {exp.technologies.map(t => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
