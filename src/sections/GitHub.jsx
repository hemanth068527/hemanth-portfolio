import { motion } from 'framer-motion';
import { Github, GitPullRequest, RadioTower } from 'lucide-react';
import ContributionHeatmap from '../components/ContributionHeatmap.jsx';
import SectionShell from '../components/SectionShell.jsx';
import { githubAnalytics } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function GitHub() {
  return (
    <SectionShell
      id="github"
      eyebrow="GitHub Telemetry"
      title="Real engineering analytics dashboard."
      subtitle="Repository cards, language distribution, contribution activity, and commit-streak telemetry designed to make public progress feel technical and credible."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyanCore">Commit streak</p>
              <h3 className="mt-2 font-display text-4xl font-bold text-white">{githubAnalytics.streak} days</h3>
            </div>
            <Github className="text-cyanCore" size={28} />
          </div>
          <ContributionHeatmap compact />
          <div className="mt-6 rounded border border-matrix/25 bg-matrix/10 p-4 font-mono text-sm text-matrix">
            @{githubAnalytics.username} - embedded practice stream online
          </div>
        </motion.div>

        <motion.div className="panel-surface" variants={fadeUp}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-matrix">Language usage</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">Repository Mix</h3>
            </div>
            <RadioTower className="text-matrix" size={24} />
          </div>
          <div className="space-y-4">
            {githubAnalytics.languages.map((language) => (
              <div key={language.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-300">{language.name}</span>
                  <span className="font-mono text-cyanCore">{language.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: language.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.value}%` }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3" variants={fadeUp}>
        {githubAnalytics.repositories.map((repo) => {
          const Icon = repo.icon;
          return (
            <article key={repo.name} className="repo-card">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded border border-cyanCore/25 bg-cyanCore/10 text-cyanCore">
                  <Icon size={22} />
                </span>
                <span className="status-badge">{repo.activity}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{repo.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{repo.description}</p>
              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-matrix">
                <GitPullRequest size={14} />
                Recent repository
              </div>
            </article>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
