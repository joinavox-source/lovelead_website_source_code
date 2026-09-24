import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lovelead_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('lovelead_cookie_consent', 'all');
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('lovelead_cookie_consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner no-print" role="region" aria-label="Cookie consent banner">
      <div className="cookie-card">
        <p className="cookie-text">
          LoveLead Assisted Living uses necessary cookies to ensure optimal site navigation and secure care inquiries. Review our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> for complete details.
        </p>
        <div className="cookie-actions">
          <button
            type="button"
            onClick={acceptEssential}
            className="btn btn-outline-white btn-sm"
            style={{ fontSize: '0.78rem', padding: '0.45rem 0.9rem' }}
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="btn btn-primary btn-sm"
            style={{ fontSize: '0.78rem', padding: '0.45rem 1rem' }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
