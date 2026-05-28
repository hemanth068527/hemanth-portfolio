import { motion } from 'framer-motion';
import { Activity, BookOpenCheck, CalendarClock, TrendingUp } from 'lucide-react';
import ContributionHeatmap from '../components/ContributionHeatmap.jsx';
import SectionShell from '../components/SectionShell.jsx';
import { learningDashboard } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Learning() {
  const maxSessions = Math.max(...learningDashboard.codingTracker.map((item) => item.sessions), 1);

  return (
    <SectionShell
      id="learning"
      eyebrow="Daily Learning Dashboard"
      title="365 Days Embedded Challenge tracker."
      subtitle="This dashboard is intentionally data-driven. Update one small file after each daily session and the portfolio reflects the latest completed day."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyanCore">Contribution signal</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Challenge Heatmap</h3>
            </div>
            <Activity className="text-cyanCore" size={24} />
          </div>
          <ContributionHeatmap />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-slate-400">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <span key={level} className={`h-3 w-3 rounded-[2px] ${level === 0 ? 'bg-white/[0.05]' : level === 4 ? 'bg-matrix' : 'bg-cyanCore/40'}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Streak tracker</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                Day {learningDashboard.completedDays} / {learningDashboard.totalDays}
              </h3>
            </div>
            <CalendarClock className="text-matrix" size={26} />
          </div>
          <div className="mt-6 rounded border border-matrix/25 bg-matrix/10 p-4 font-mono text-sm text-matrix">
            {learningDashboard.currentFocus}
          </div>
          <div className="mt-5 space-y-3">
            {learningDashboard.today.map((item) => (
              <p key={item} className="rounded border border-white/10 bg-white/[0.035] px-3 py-3 text-sm leading-6 text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyanCore">Weekly analytics</p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Challenge Progress</h3>
            </div>
            <TrendingUp className="text-cyanCore" size={23} />
          </div>
          <div className="space-y-4">
            {learningDashboard.weekly.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="font-mono text-cyanCore">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyanCore to-matrix"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Daily coding tracker</p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Sessions Completed</h3>
            </div>
            <BookOpenCheck className="text-matrix" size={23} />
          </div>
          <div className="flex h-56 items-end gap-3">
            {learningDashboard.codingTracker.map((item) => (
              <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  className="w-full rounded-t bg-gradient-to-t from-cyanCore/45 to-matrix shadow-green"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.max(8, (item.sessions / maxSessions) * 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                />
                <span className="font-mono text-[0.65rem] text-slate-400">{item.day}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded border border-cyanCore/15 bg-cyanCore/5 p-3 font-mono text-xs leading-6 text-slate-400">
            {learningDashboard.updateHint}
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
