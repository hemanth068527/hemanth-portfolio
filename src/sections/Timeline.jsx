import { motion } from 'framer-motion';
import SectionShell from '../components/SectionShell.jsx';
import { timeline } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Timeline() {
  return (
    <SectionShell
      id="timeline"
      eyebrow="Experience Timeline"
      title="Neon path from C foundations to firmware systems."
      subtitle="A concise engineering timeline that shows momentum, discipline, and the next target: internship-ready embedded work."
    >
      <div className="timeline-shell">
        {timeline.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article key={item.title} className="timeline-item" variants={fadeUp}>
              <div className="timeline-node">
                <Icon size={18} />
              </div>
              <div className="timeline-panel">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyanCore">{item.date}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
              <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
