import { useState, useEffect } from 'react';

const navItems = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map(n => n.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#home" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="nav-monogram">RB</div>
            <div className="nav-name">
              Raj Bugalia
              <span>Android & Full-Stack Dev</span>
            </div>
          </a>

          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={active === item.href.slice(1) ? 'active' : ''}
                  onClick={e => { e.preventDefault(); scrollTo(item.href); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-resume-btn" href="mailto:rajbugalia0602@gmail.com">
            Hire Me
          </a>

          <button
            className="nav-mobile-toggle"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />
        <div className="drawer-panel">
          <button
            onClick={() => setDrawerOpen(false)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', alignSelf: 'flex-end', marginBottom: 16, padding: 4 }}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {navItems.map(item => (
            <a key={item.href} href={item.href} onClick={e => { e.preventDefault(); scrollTo(item.href); }}>
              {item.label}
            </a>
          ))}
          <a href="mailto:rajbugalia0602@gmail.com" style={{ marginTop: 8, background: 'linear-gradient(135deg, var(--accent-indigo), var(--accent-violet))', color: 'white', borderRadius: 'var(--radius-md)' }}>
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
