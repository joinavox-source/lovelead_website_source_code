import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/benefits', label: 'Resident Benefits' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/gallery', label: 'Facility Photo Tour' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact & Tours' },
];

const SERVICES_LINKS = [
  { to: '/services#adl', label: 'ADL & IADL Assistance' },
  { to: '/services#wound', label: 'Wound Care Support' },
  { to: '/services#medication', label: 'Medication Management' },
  { to: '/services#diabetic', label: 'Diabetic Care' },
  { to: '/services#respiratory', label: 'Respiratory Care' },
  { to: '/services#supervision', label: '24/7 Supervision' },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    label: 'LoveLead on Facebook',
    url: 'https://www.facebook.com/profile.php?id=61595785694675',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    label: 'LoveLead on Instagram',
    url: 'https://www.instagram.com/loveleadal_official/',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer no-print" role="contentinfo">
      {/* Top CTA Banner */}
      <div className="footer-cta-strip">
        <div className="container">
          <div className="footer-cta-container">
            <div>
              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                Ready to Experience Compassionate Care?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '0.95rem' }}>
                Take the first step toward a peaceful, loving, and supportive home for your loved one.
              </p>
            </div>
            <div className="btn-group">
              <a href="https://maps.app.goo.gl/UV4FXMzEXSJtGuBF8" target="_blank" rel="noopener noreferrer" className="btn btn-warm btn-sm">
                Visit Us
              </a>
              <a href="tel:+16122603900" className="btn btn-outline-white btn-sm">
                Call (612) 260-3900
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Col */}
          <div>
            <Link to="/" className="brand-link" style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo.png"
                alt="LoveLead Assisted Living Logo - Compassionate Senior Care Community in Cottage Grove, MN"
                style={{ height: '2.5rem', width: 'auto' }}
                width="40"
                height="40"
              />
              <div className="brand-text-group">
                <span className="brand-title" style={{ color: '#ffffff' }}>LoveLead</span>
                <span className="brand-subtitle" style={{ color: 'var(--text-inverse-muted)' }}>Assisted Living</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.65', color: 'var(--text-inverse-muted)', maxWidth: '320px', marginBottom: '1.5rem' }}>
              A licensed, caring community in Cottage Grove, Minnesota dedicated to resident-centered care, dignity, independence, and heartfelt hospitality.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div className="footer-contact-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-brand-soft)', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+16122603900">Phone: (612) 260-3900</a>
              </div>
              <div className="footer-contact-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-brand-soft)', flexShrink: 0 }}>
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <a href="tel:+16514019411">Fax: (651) 401-9411</a>
              </div>
              <div className="footer-contact-row">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-brand-soft)', flexShrink: 0 }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@loveleadal.com">info@loveleadal.com</a>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="footer-social-wrapper">
              <span className="footer-social-title">Connect With Us</span>
              <div className="footer-social-list">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links Col */}
          <div>
            <h4 className="footer-heading">Care Services</h4>
            <ul className="footer-links-list">
              {SERVICES_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Facility Information */}
          <div>
            <h4 className="footer-heading">Visiting & Hours</h4>
            <div style={{ fontSize: '0.88rem', lineHeight: '1.65', color: 'var(--text-inverse-muted)' }}>
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: 12:00 PM - 4:00 PM</p>
              <p style={{ marginTop: '0.75rem', color: 'var(--color-brand-soft)', fontSize: '0.82rem', fontWeight: '600' }}>
                24/7 Professional Supervision On-Site
              </p>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <h4 className="footer-heading" style={{ marginBottom: '0.65rem' }}>Compliance & Legal</h4>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem' }}>
                <Link to="/privacy-policy" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'underline' }}>
                  Privacy Policy
                </Link>
                <Link to="/terms" style={{ color: 'var(--text-inverse-muted)', textDecoration: 'underline' }}>
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>
            &copy; {currentYear} LoveLead Assisted Living Program. All rights reserved.
          </p>
          <div className="footer-bottom-social-links">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-bottom-social-link"
                aria-label={s.label}
              >
                {s.name}
              </a>
            ))}
          </div>
          <p>
            Serving Cottage Grove &amp; Twin Cities East Metro Communities
          </p>
        </div>
      </div>
    </footer>
  );
}
