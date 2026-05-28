import { motion } from 'framer-motion';
import RadarChart from '../components/RadarChart.jsx';
import SectionShell from '../components/SectionShell.jsx';
import { radarSkills, skillGroups } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capability Matrix"
      title="Interactive firmware skill map."
      subtitle="A practical matrix of low-level programming, microcontroller interfaces, and tools that support embedded engineering work."
    >
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div className="panel-surface flex flex-col justify-between" variants={fadeUp}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyanCore">Radar telemetry</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">Embedded Readiness</h3>
          </div>
          <div className="mt-6">
            <RadarChart data={radarSkills} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {['Debug loops', 'Register logic', 'Protocol traces', 'Version control'].map((item) => (
              <span key={item} className="rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-center font-mono text-xs text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.title} className={`skill-matrix-card accent-${group.accent}`} variants={fadeUp}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded border border-cyanCore/25 bg-cyanCore/10 text-cyanCore">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">Module</p>
                      <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-matrix">{group.skills.length} nodes</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-node">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        <span className="font-mono text-xs text-cyanCore">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyanCore via-matrix to-plasma"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.85, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
