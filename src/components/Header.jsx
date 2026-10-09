import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animate } from 'motion';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/gallery', label: 'Facility Tour' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const items = document.querySelectorAll('.mobile-nav-link');
      items.forEach((item, i) => {
        animate(
          item,
          { opacity: [0, 1], x: [-16, 0] },
          { duration: 0.3, delay: i * 0.05 }
        );
      });
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHomePage = location.pathname === '/';
  const headerThemeScrolled = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`site-header no-print ${headerThemeScrolled ? 'site-header--scrolled' : ''}`}
        style={{
          color: headerThemeScrolled ? 'var(--text-main)' : '#ffffff',
        }}
      >
        <div className="container">
          <div className="header-container">
            {/* Brand Logo & Name */}
            <Link to="/" className="brand-link" aria-label="LoveLead Assisted Living Home">
              <img
                src="/logo.png"
                alt="LoveLead Assisted Living - Licensed Residential Senior Care Home in Cottage Grove, MN"
                className="brand-logo-img"
                width="48"
                height="48"
              />
              <div className="brand-text-group">
                <span
                  className="brand-title"
                  style={{ color: headerThemeScrolled ? 'var(--text-main)' : '#ffffff' }}
                >
                  LoveLead
                </span>
                <span
                  className="brand-subtitle"
                  style={{ color: headerThemeScrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.85)' }}
                >
                  Assisted Living
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                    style={{
                      color: isActive
                        ? headerThemeScrolled
                          ? 'var(--color-brand)'
                          : '#ffffff'
                        : headerThemeScrolled
                        ? 'var(--text-muted)'
                        : 'rgba(255, 255, 255, 0.92)',
                      fontWeight: isActive ? '700' : '600',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Header Actions */}
            <div className="header-actions">
              <a
                href="tel:+16122603900"
                className="header-phone-quick"
                title="Call LoveLead"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: headerThemeScrolled ? 'var(--color-brand)' : '#ffffff' }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(612) 260-3900</span>
              </a>

              <ThemeToggle />

              <Link to="/contact" className="btn header-cta-btn btn-sm">
                Schedule a Visit
              </Link>
            </div>

            {/* Mobile Header Controls */}
            <div className="mobile-controls">
              <ThemeToggle className="theme-toggle--mobile" />

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="mobile-menu-btn"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <>
          <div
            className="mobile-drawer-overlay no-print"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-drawer no-print" aria-label="Mobile navigation">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Navigation</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ThemeToggle />
                <button
                  type="button"
                  className="mobile-drawer-close-btn"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
                Schedule a Visit
              </Link>
              <a
                href="tel:+16122603900"
                className="btn btn-outline-dark"
                style={{ width: '100%' }}
              >
                Call (612) 260-3900
              </a>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Cottage Grove, Minnesota
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>
                24/7 Compassionate Care
              </p>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
