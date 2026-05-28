import { motion } from 'framer-motion';
import { Quote, Radar } from 'lucide-react';
import CountUp from '../components/CountUp.jsx';
import SectionShell from '../components/SectionShell.jsx';
import { currentlyLearning, engineeringQuote, profileStats } from '../data/portfolio.js';
import { fadeUp, panelTransition } from '../animations/motion.js';

export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="Engineering Profile"
      title="Firmware mindset, systems discipline, and public learning velocity."
      subtitle="Hemanth is building the foundation expected from embedded engineers: low-level C fluency, protocol understanding, Linux tooling, and the patience to debug what software and hardware do together."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div className="profile-card" variants={fadeUp} transition={panelTransition}>
          <div className="profile-chip">
            <span>HK</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyanCore">Embedded systems candidate</p>
          <h3 className="mt-4 font-display text-2xl font-bold text-white">Professional Engineering Summary</h3>
          <p className="mt-5 leading-8 text-slate-300">
            Passionate embedded systems and low-level programming student focused on Embedded C, microcontrollers,
            RTOS, Linux systems, firmware development, and hardware-software integration. The work is practice-heavy,
            version-controlled, and shaped around the habits of real firmware teams.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {['Embedded C', 'Microcontrollers', 'RTOS', 'Linux systems', 'Firmware development', 'Hardware-software integration'].map(
              (item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ),
            )}
          </div>
          <div className="mt-7 rounded border border-matrix/25 bg-matrix/10 p-4">
            <div className="flex gap-3">
              <Quote className="mt-1 flex-none text-matrix" size={18} />
              <p className="font-mono text-sm leading-7 text-matrix/90">{engineeringQuote}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          <motion.div className="grid gap-4 sm:grid-cols-2" variants={fadeUp}>
            {profileStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-card">
                  <Icon size={22} className="text-cyanCore" />
                  <strong className="mt-4 block font-display text-3xl text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <span className="mt-1 block text-sm text-slate-400">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div className="panel-surface" variants={fadeUp}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Live panel</p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">Currently Learning</h3>
              </div>
              <Radar className="text-matrix" size={25} />
            </div>
            <div className="space-y-4">
              {currentlyLearning.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-mono text-cyanCore">{item.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyanCore to-matrix"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
