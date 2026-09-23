export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape
  const handleKey = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} onKeyDown={handleKey} tabIndex={-1}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ marginBottom: 8 }}>
              <span className={`badge badge-${project.category.includes('AI') ? 'violet' : project.category.includes('Full Stack') ? 'cyan' : 'indigo'}`}>
                {project.badge}
              </span>
            </div>
            <h2 className="modal-title" id="modal-title">{project.title}</h2>
            <p className="modal-subtitle">
              <span style={{ marginRight: 12 }}>📅 {project.period}</span>
              <span>🏷️ {project.category}</span>
            </p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-desc">{project.longDesc}</p>

          <p className="modal-section-title">⚡ Architecture Highlights</p>
          <ul className="modal-highlights">
            {project.architectureHighlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          {project.metrics && project.metrics.length > 0 && (
            <>
              <p className="modal-section-title">📊 Technical Metrics</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
                {project.metrics.map((m, i) => (
                  <div key={i} style={{
                    padding: '12px 20px',
                    background: 'rgba(99,102,241,0.07)',
                    border: '1px solid rgba(99,102,241,0.15)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    minWidth: 120
                  }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>{m.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          <p className="modal-section-title">🛠️ Technology Stack</p>
          <div className="modal-tech">
            {project.stack.map(s => (
              <span className="tech-tag" key={s}>{s}</span>
            ))}
          </div>

          <div className="modal-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id={`modal-github-${project.id}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
              View on GitHub
            </a>
            <button className="btn btn-ghost" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
