import { useEffect, useRef } from 'react';
import { animate } from 'motion';

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm Submission',
  cancelLabel = 'Review Again',
}) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open && panelRef.current) {
      animate(panelRef.current, { opacity: [0, 1], scale: [0.97, 1] }, { duration: 0.22 });
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
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
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div ref={panelRef} className="modal-dialog">
        <h3 id="modal-title" className="modal-title">
          {title}
        </h3>
        <p className="modal-desc">{message}</p>
        <div className="modal-actions">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline-dark btn-sm"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="btn btn-primary btn-sm"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
