import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const { projects } = portfolioData;

const CATEGORY_FILTERS = [
  { id: 'all',        label: 'All Projects' },
  { id: 'Mobile & Full Stack', label: 'Mobile & Full Stack' },
  { id: 'Mobile & AI',        label: 'AI Powered' },
  { id: 'AI & Tools',         label: 'ML & Tools' },
];

const BADGE_COLOR = {
  'Flagship System': 'badge-indigo',
  'AI Powered':      'badge-violet',
  'Full Stack':      'badge-cyan',
  // Issue 6: 'Machine Learning' is 16 chars all-caps — use sentence-case modifier
  'Machine Learning':'badge-emerald badge-sentence-case',
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const visible = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">Featured Work</div>
        <h2 className="section-title">Projects That Ship</h2>
        <p className="section-subtitle">
          Production and client-grade systems demonstrating end-to-end engineering from architecture to deployment.
        </p>

        <div className="skills-filter" style={{ marginTop: 40 }}>
          {CATEGORY_FILTERS.map(f => (
            <button
              key={f.id}
              id={`project-filter-${f.id.replace(/\s+/g, '-').toLowerCase()}`}
              className={`filter-btn${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map(project => (
            <div className="project-card" key={project.id} id={`project-card-${project.id}`}>
              <div className="project-card-header">
                {/* Badge row — sits above the title, never overlaps */}
                <div className="project-badge">
                  <span className={`badge ${BADGE_COLOR[project.badge] || 'badge-indigo'}`}>
                    {project.badge}
                  </span>
                  <span className="badge badge-cyan" style={{ marginLeft: 8, fontSize: '0.7rem' }}>
                    📅 {project.period}
                  </span>
                </div>
                {/* Title — full width, always below the badge row */}
                <h3 className="project-title">{project.title}</h3>
              </div>

              <div className="project-card-body">
                <p className="project-short-desc">{project.shortDesc}</p>

                {project.metrics.length > 0 && (
                  <div className="project-metrics">
                    {project.metrics.slice(0, 3).map((m, i) => (
                      <div className="project-metric" key={i}>
                        <div className="metric-val">{m.value}</div>
                        <div className="metric-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-tech-tags">
                  {project.stack.slice(0, 4).map(s => (
                    <span className="tech-tag" key={s}>{s}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="tech-tag" style={{ color: 'var(--text-muted)', borderColor: 'var(--glass-border)' }}>
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="project-actions">
                  <button
                    className="btn-view-details"
                    id={`btn-view-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Issue 9: replaced 🔍 search icon with layout/expand icon — less ambiguous for 'View Architecture' */}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    View Architecture
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    id={`btn-github-${project.id}`}
                    style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
