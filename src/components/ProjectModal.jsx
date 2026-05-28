import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[75] grid place-items-center bg-black/72 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project preview`}
        >
          <motion.div
            className="w-full max-w-3xl rounded border border-cyanCore/30 bg-void p-5 shadow-neon"
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <button type="button" className="icon-button" onClick={onClose} aria-label="Close project preview">
                <X size={17} />
              </button>
            </div>
            <div className="rounded border border-white/10 bg-white/[0.03] p-4">
              <p className="leading-8 text-slate-300">{project.summary}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="metric-box">
                  <span>Files</span>
                  <strong>{project.stats.files}</strong>
                </div>
                <div className="metric-box">
                  <span>Lines</span>
                  <strong>{project.stats.lines}</strong>
                </div>
                <div className="metric-box">
                  <span>Commits</span>
                  <strong>{project.stats.commits}</strong>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <a href={project.github} className="cta-button secondary">
                <Github size={17} />
                GitHub
              </a>
              <a href={project.preview} className="cta-button primary">
                <ExternalLink size={17} />
                Live Preview
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
