import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our Services' },
  { to: '/benefits', label: 'Resident Benefits' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/gallery', label: 'Facility Photo Tour' },
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
              <Link to="/contact" className="btn btn-warm btn-sm">
                Schedule a Visit
              </Link>
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
              <img src="/logo.png" alt="LoveLead" style={{ height: '2.5rem', width: 'auto' }} />
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
          <p>
            Serving Cottage Grove &amp; Twin Cities East Metro Communities
          </p>
        </div>
      </div>
    </footer>
  );
}
