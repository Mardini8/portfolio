import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

/**
 * CVModal: shows the CV PDF inside an animated overlay.
 */
export default function CVModal({ open, onClose, pdfUrl }) {
  // Close on escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="cv-modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cv-modal-header">
              <div className="cv-modal-title">Curriculum Vitae</div>
              <div className="cv-modal-actions">
                <a href={pdfUrl} download className="cv-action-btn">
                  Download
                </a>
                <a href={pdfUrl} target="_blank" rel="noopener" className="cv-action-btn">
                  Open in tab
                </a>
                <button onClick={onClose} className="cv-close-btn" aria-label="Close">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="cv-modal-body">
              <iframe
                src={pdfUrl}
                title="Christian Mardini CV"
                className="cv-iframe"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
