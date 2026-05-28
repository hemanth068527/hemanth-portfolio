import { AnimatePresence, motion } from 'framer-motion';
import { Download, X } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[75] grid place-items-center bg-black/72 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} certificate preview`}
        >
          <motion.div
            className="w-full max-w-2xl rounded border border-cyanCore/30 bg-void p-5 shadow-neon"
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyanCore">{certificate.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{certificate.title}</h3>
              </div>
              <button type="button" className="icon-button" onClick={onClose} aria-label="Close certificate preview">
                <X size={17} />
              </button>
            </div>
            <div className="certificate-preview">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-matrix">Certificate upload bay</span>
              <strong>{certificate.issuer}</strong>
              <p>Replace this placeholder with the final certificate image or PDF link.</p>
            </div>
            <button type="button" className="cta-button secondary mt-5">
              <Download size={17} />
              Download
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
