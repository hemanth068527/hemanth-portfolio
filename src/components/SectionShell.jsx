import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/motion.js';

export default function SectionShell({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {(eyebrow || title || subtitle) && (
          <motion.div className="mb-9 max-w-3xl" variants={fadeUp}>
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-cyanCore/80">{eyebrow}</p>
            )}
            {title && <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
