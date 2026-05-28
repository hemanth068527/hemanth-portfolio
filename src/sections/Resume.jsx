import { motion } from 'framer-motion';
import { Download, GraduationCap, ShieldCheck } from 'lucide-react';
import SectionShell from '../components/SectionShell.jsx';
import { education, resumeHighlights } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Resume() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Resume Node"
      title="Resume preview and education profile."
      subtitle="A real resume preview connected to Hemanth's ECE background, IoT project work, skills, and 365-day embedded learning challenge."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div className="resume-preview" variants={fadeUp}>
          <div className="resume-toolbar">
            <span />
            <span />
            <span />
          </div>
          <a href="/resume-hemanth-k.png" className="block p-3" aria-label="Open Hemanth K resume preview">
            <img
              src="/resume-hemanth-k.png"
              alt="Hemanth K resume preview"
              className="resume-image"
              loading="lazy"
            />
          </a>
        </motion.div>

        <motion.div className="panel-surface" variants={fadeUp}>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Resume summary</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-white">ECE + IoT Learning Profile</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Second-year ECE student interested in embedded systems, IoT, web development, microcontroller-based
            system design, sensor integration, and sustainable electronic solutions.
          </p>

          <div className="mt-6 space-y-3">
            {resumeHighlights.map((item) => (
              <div key={item} className="flex gap-3 rounded border border-white/10 bg-white/[0.035] p-3">
                <ShieldCheck className="mt-0.5 flex-none text-matrix" size={17} />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-3">
            {education.map((item) => (
              <div key={item.degree} className="rounded border border-cyanCore/15 bg-cyanCore/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-1 flex-none text-cyanCore" size={18} />
                  <div>
                    <h4 className="font-display text-base font-bold text-white">{item.degree}</h4>
                    <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
                    <p className="mt-2 font-mono text-xs text-matrix">
                      {item.detail} | {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="/resume-hemanth-k.png" download="Hemanth-K-Resume.png" className="cta-button primary mt-7 w-fit">
            <Download size={17} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </SectionShell>
  );
}
