import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const { skillCategories } = portfolioData;

const SKILL_ICONS = {
  kotlin: '🟣', java: '☕', compose: '🎨', android: '🤖', database: '🗄️',
  player: '▶️', camera: '📷', network: '🌐', dependency: '🔗', code: '💻',
  spring: '🍃', api: '⚡', firebase: '🔥', mysql: '🐬', schema: '📊',
  python: '🐍', c: '©️', sql: '📋', tree: '🌳', cpu: '🧠', layers: '🏗️',
  git: '🔀', tool: '🔧', brain: '🤖',
};

const allSkills = skillCategories.flatMap(cat =>
  cat.skills.map(s => ({ ...s, category: cat.id }))
);
const filters = [{ id: 'all', title: 'All' }, ...skillCategories.map(c => ({ id: c.id, title: c.title }))];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visible = activeFilter === 'all' ? allSkills : allSkills.filter(s => s.category === activeFilter);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title">My Tech Toolkit</h2>
        <p className="section-subtitle">
          A curated matrix of technologies I use to architect production-grade mobile and backend systems.
        </p>

        <div className="skills-filter">
          {filters.map(f => (
            <button
              key={f.id}
              id={`skill-filter-${f.id}`}
              className={`filter-btn${activeFilter === f.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.title}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visible.map((skill, i) => (
            <div className="skill-chip" key={`${skill.name}-${i}`} style={{ animationDelay: `${i * 35}ms` }}>
              <div className="skill-icon-wrap" title={skill.category}>
                {SKILL_ICONS[skill.icon] || '⚙️'}
              </div>
              <div className="skill-info">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
