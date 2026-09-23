import { portfolioData } from '../data/portfolioData';

const { education, achievements } = portfolioData;

const ACH_BADGE_CLASS = ['ach-badge-gold', 'ach-badge-blue', 'ach-badge-green'];

export default function EducationAchievements() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-label">Background & Honors</div>
        <h2 className="section-title">Education & Achievements</h2>
        <p className="section-subtitle">
          Academic foundations and recognition that underpin every engineering decision.
        </p>

        <div className="edu-ach-grid" style={{ marginTop: 48 }}>
          {/* Education */}
          <div className="edu-col">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-indigo)" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
              Education
            </h3>
            {education.map((edu, i) => (
              <div className="edu-card" key={i} id={`edu-card-${i}`}>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-meta">
                  <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>{edu.period}</span>
                  <span className="edu-score">{edu.score}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{edu.location}</span>
                </div>
                {edu.details.map((d, j) => (
                  <p className="edu-detail" key={j}>• {d}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="ach-col">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-amber)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              Honors & Leadership
            </h3>
            {achievements.map((ach, i) => (
              <div className="ach-card" key={i} id={`ach-card-${i}`}>
                <div className={`ach-badge-pill ${ACH_BADGE_CLASS[i % ACH_BADGE_CLASS.length]}`}>
                  {ach.badge}
                </div>
                <div className="ach-title">{ach.title}</div>
                <div className="ach-sub">{ach.subtitle} · {ach.organization}</div>
                {ach.period && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>{ach.period}</div>
                )}
                <p className="ach-desc">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
