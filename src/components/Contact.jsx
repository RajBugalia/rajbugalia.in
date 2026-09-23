import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const { personal } = portfolioData;

const CONTACT_CARDS = [
  {
    id: 'email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    id: 'phone',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23 19.79 19.79 0 0 1 1.61 4.6 2 2 0 0 1 3.6 2.4h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.88-1.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    id: 'linkedin',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/raj-bugalia',
    href: personal.linkedin,
  },
  {
    id: 'github',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/RajBugalia',
    href: personal.github,
  },
];

function validate(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Name is required';
  if (!form.email.trim()) errs.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
  if (!form.subject.trim()) errs.subject = 'Subject is required';
  if (!form.message.trim()) errs.message = 'Message is required';
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // Simulate submission - opens mailto
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi Raj,\n\nI'm ${form.name} (${form.email}).\n\n${form.message}`)}`;
    setSubmitted(true);
  };

  const handleCopy = (val, id) => {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let&apos;s Build Something Together</h2>
        <p className="section-subtitle">
          Open to internship extensions, full-time roles, freelance projects, and technical collaborations.
        </p>

        <div className="contact-inner" style={{ marginTop: 48 }}>
          {/* Left: Direct contact channels */}
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
              Available for roles across <strong style={{ color: 'var(--text-primary)' }}>Android Engineering</strong>, <strong style={{ color: 'var(--text-primary)' }}>Full-Stack Mobile</strong>, and <strong style={{ color: 'var(--text-primary)' }}>Backend Development</strong>.
            </p>
            <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', marginBottom: 24 }}>
              📍 Vadodara / Noida / Remote · Immediate availability
            </p>

            <div className="contact-cards">
              {CONTACT_CARDS.map(card => (
                <a
                  key={card.id}
                  id={`contact-${card.id}`}
                  className="contact-card"
                  href={card.href}
                  target={card.id === 'linkedin' || card.id === 'github' ? '_blank' : undefined}
                  rel={card.id === 'linkedin' || card.id === 'github' ? 'noopener noreferrer' : undefined}
                  onClick={card.id === 'email' || card.id === 'phone' ? (e) => { e.preventDefault(); handleCopy(card.value, card.id); window.location.href = card.href; } : undefined}
                  title={copied === card.id ? 'Copied!' : `Open ${card.label}`}
                >
                  <div className="contact-card-icon">{card.icon}</div>
                  <div>
                    <div className="contact-card-label">{card.label}</div>
                    <div className="contact-card-value">
                      {copied === card.id ? '✅ Copied!' : card.value}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--text-muted)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🚀</div>
                <h3>Message Sent!</h3>
                <p>Your email client has been opened with the message pre-filled. Thank you for reaching out, Raj will get back to you soon!</p>
                <button className="btn btn-secondary" style={{ marginTop: 16 }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate id="contact-form">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">I respond within 24 hours on weekdays.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input id="contact-name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Your Email</label>
                    <input id="contact-email" name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input id="contact-subject" name="subject" type="text" placeholder="Hiring opportunity / Project collaboration..." value={form.subject} onChange={handleChange} className={errors.subject ? 'error' : ''} />
                  {errors.subject && <div className="form-error">{errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} placeholder="Tell me about the role, project, or collaboration you have in mind..." value={form.message} onChange={handleChange} className={errors.message ? 'error' : ''} />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <button type="submit" id="contact-submit-btn" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
