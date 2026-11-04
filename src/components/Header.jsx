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
  { to: '/careers', label: 'Careers' },
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

              <a href="https://maps.app.goo.gl/UV4FXMzEXSJtGuBF8" target="_blank" rel="noopener noreferrer" className="btn header-cta-btn btn-sm">
                Visit Us
              </a>
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
              <a href="https://maps.app.goo.gl/UV4FXMzEXSJtGuBF8" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
                Visit Us
              </a>
              <a
                href="tel:+16122603900"
                className="btn btn-outline-dark"
                style={{ width: '100%' }}
              >
                Call (612) 260-3900
              </a>
            </div>

            <div className="mobile-drawer-social-wrapper">
              <span className="mobile-drawer-social-title">
                Follow Our Community
              </span>
              <div className="mobile-drawer-social-grid">
                <a
                  href="https://www.facebook.com/profile.php?id=61595785694675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer-social-btn"
                  aria-label="LoveLead on Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/loveleadal_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer-social-btn"
                  aria-label="LoveLead on Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
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
