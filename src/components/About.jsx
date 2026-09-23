import { portfolioData } from '../data/portfolioData';

const { about } = portfolioData;

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <div className="section-label">Who I Am</div>
            <h2 className="section-title">Crafting Systems That <span className="gradient-text">Actually Work</span></h2>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about-highlights">
            {about.highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                {/* Issue 7: was h4 — skipped H2→H4; now H2→H3 for valid outline */}
                <h3 className="highlight-title">{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
