import { useState } from 'react';
import { useMediaQuery } from '../hooks/useAnimations';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState('');
  const isMobile = useMediaQuery('(max-width: 640px)');

  const copyNumber = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(''), 2000);
    });
  };

  return (
    <div
      className="floating-contact-root no-print"
      style={{
        transform: isMobile ? 'scale(0.92)' : 'scale(1)',
        transformOrigin: 'bottom right',
      }}
    >
      {/* Expanded Contact Popover Panel */}
      {open && (
        <div className="floating-contact-panel" role="dialog" aria-label="Quick contact channels">
          <div className="floating-panel-header">
            <h4 className="floating-panel-title">Speak with LoveLead</h4>
            <p className="floating-panel-subtitle">We are here 24/7 for you and your family</p>
          </div>

          <div className="floating-panel-body">
            {/* Phone */}
            <div className="floating-panel-link">
              <div className="floating-icon-box" style={{ backgroundColor: 'var(--color-brand-pale)', color: 'var(--color-brand)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', color: 'var(--text-light)', display: 'block' }}>Call Direct</span>
                <a href="tel:+16122603900" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  (612) 260-3900
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyNumber('6122603900', 'phone')}
                className="copy-pill-btn"
                title="Copy phone"
              >
                {copiedLabel === 'phone' ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Email */}
            <div className="floating-panel-link">
              <div className="floating-icon-box" style={{ backgroundColor: 'var(--color-sage-pale)', color: 'var(--color-sage)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', color: 'var(--text-light)', display: 'block' }}>Email Team</span>
                <a href="mailto:info@loveleadal.com" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>
                  info@loveleadal.com
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyNumber('info@loveleadal.com', 'email')}
                className="copy-pill-btn"
                title="Copy email"
              >
                {copiedLabel === 'email' ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Fax */}
            <div className="floating-panel-link">
              <div className="floating-icon-box" style={{ backgroundColor: 'var(--color-terracotta-pale)', color: 'var(--color-terracotta)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', color: 'var(--text-light)', display: 'block' }}>Medical Fax</span>
                <a href="tel:+16514019411" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                  (651) 401-9411
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyNumber('6514019411', 'fax')}
                className="copy-pill-btn"
                title="Copy fax"
              >
                {copiedLabel === 'fax' ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div style={{ marginTop: '0.4rem' }}>
              <a
                href="/contact"
                className="btn btn-primary btn-sm"
                style={{ width: '100%', fontSize: '0.8rem' }}
                onClick={() => setOpen(false)}
              >
                Schedule Tour / Inquiry Form
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`floating-btn-toggle ${open ? 'floating-btn-toggle--active' : ''}`}
        aria-label={open ? 'Close quick contact options' : 'Open quick contact options'}
        aria-expanded={open}
        title="Contact LoveLead"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        )}
      </button>
    </div>
  );
}
