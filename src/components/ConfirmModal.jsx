import { useEffect, useRef } from 'react';
import { animate } from 'motion';

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = 'Review & Confirm Care Inquiry',
  message,
  confirmLabel = 'Confirm & Send Inquiry',
  cancelLabel = 'Edit Information',
  summary = null,
  isSubmitting = false,
}) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open && panelRef.current) {
      animate(panelRef.current, { opacity: [0, 1], scale: [0.96, 1], y: [14, 0] }, { duration: 0.24, ease: [0.16, 1, 0.3, 1] });
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open && !isSubmitting) {
        onClose();
      }
    };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, isSubmitting]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current && !isSubmitting) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div ref={panelRef} className="modal-dialog modal-dialog--blue">
        {/* Top Decorative Gradient Line */}
        <div className="modal-accent-bar" aria-hidden="true" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          className="modal-close-btn"
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Brand Header */}
        <div className="modal-header-brand">
          <div className="modal-icon-badge" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <span className="modal-badge-tag">LOVELEAD SECURE INTAKE</span>
            <h3 id="modal-title" className="modal-title">
              {title}
            </h3>
          </div>
        </div>

        {message && <p className="modal-desc">{message}</p>}

        {/* Structured Summary Dossier (Icons Only - Zero Emojis) */}
        {summary && (
          <div className="modal-summary-dossier">
            <div className="modal-summary-header">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Inquiry Summary
              </span>
              <span className="modal-dossier-pill">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '3px' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Verified Intake
              </span>
            </div>

            <div className="modal-summary-grid">
              <div className="modal-summary-item">
                <span className="summary-label">Full Name</span>
                <strong className="summary-value">{summary.name || 'Not provided'}</strong>
              </div>
              <div className="modal-summary-item">
                <span className="summary-label">Phone</span>
                <strong className="summary-value">{summary.phone || 'Not provided'}</strong>
              </div>
              <div className="modal-summary-item">
                <span className="summary-label">Email</span>
                <strong className="summary-value summary-value--email">{summary.email || 'Not provided'}</strong>
              </div>
              <div className="modal-summary-item">
                <span className="summary-label">Relationship</span>
                <strong className="summary-value">{summary.relationship || 'Prospective Resident'}</strong>
              </div>
              <div className="modal-summary-item" style={{ gridColumn: '1 / -1' }}>
                <span className="summary-label">Preferred Contact Method</span>
                <span className="summary-contact-badge">
                  {summary.preferredContact === 'phone' ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Direct Phone Call</span>
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>Email Follow-up</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            {summary.message && (
              <div className="modal-summary-msg">
                <span className="summary-label">Inquiry Message:</span>
                <p className="summary-msg-content">"{summary.message}"</p>
              </div>
            )}
          </div>
        )}

        <div className="modal-security-notice">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Encrypted dispatch to <strong>nnadesh@loveleadal.com</strong>. Confidential under HIPAA guidelines.</span>
        </div>

        {/* Modal Actions */}
        <div className="modal-actions">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="btn btn-outline-dark btn-sm"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isSubmitting}
            className="btn btn-primary btn-sm modal-confirm-btn"
          >
            {isSubmitting ? (
              <span className="btn-spinner-content">
                <span className="btn-spinner" aria-hidden="true" />
                Sending Inquiry...
              </span>
            ) : (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <span>{confirmLabel}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
