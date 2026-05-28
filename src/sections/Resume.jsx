import { motion } from 'framer-motion';
import { Download, FileText, ShieldCheck } from 'lucide-react';
import SectionShell from '../components/SectionShell.jsx';
import { resumeHighlights } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Resume() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Resume Node"
      title="Technical resume preview."
      subtitle="A focused resume panel for firmware internship or junior embedded systems roles, with the downloadable PDF path ready for replacement."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div className="resume-preview" variants={fadeUp}>
          <div className="resume-toolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="p-6">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-cyanCore/15 pb-5">
              <div>
                <h3 className="font-display text-3xl font-bold text-white">Hemanth K</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-cyanCore">Embedded Systems Engineer</p>
              </div>
              <FileText className="text-cyanCore" size={30} />
            </div>
            <div className="space-y-4">
              {resumeHighlights.map((item) => (
                <div key={item} className="flex gap-3 rounded border border-white/10 bg-white/[0.035] p-3">
                  <ShieldCheck className="mt-0.5 flex-none text-matrix" size={17} />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="panel-surface" variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Technical summary</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-white">Embedded Learning Readiness</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Hemanth is currently building the foundation: daily C practice, a 365-day embedded challenge, public
            GitHub learning logs, and a roadmap toward microcontroller and firmware projects. The resume should
            emphasize consistency, curiosity, and clear documentation of daily progress.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {['C fundamentals', '365-day challenge', 'Daily notes', 'Firmware roadmap'].map((item) => (
              <span key={item} className="skill-pill">
                {item}
              </span>
            ))}
          </div>
          <a href="/resume-hemanth-k.pdf" className="cta-button primary mt-7 w-fit">
            <Download size={17} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </SectionShell>
  );
}
