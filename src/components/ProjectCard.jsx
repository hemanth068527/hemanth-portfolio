import { motion } from 'framer-motion';
import { ExternalLink, Github, Gauge, GitCommit, Layers, Timer } from 'lucide-react';

function ProjectThumbnail({ project }) {
  return (
    <div className="project-thumb">
      <div className="thumb-top">
        <span>{project.signal}</span>
        <span>{project.category}</span>
      </div>
      <svg viewBox="0 0 360 170" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`thumb-${project.signal}`} x1="0%" x2="100%">
            <stop offset="0%" stopColor="#27e8ff" stopOpacity="0.2" />
            <stop offset="55%" stopColor="#66ff99" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#b46cff" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path d="M20 130H94L120 68H178L202 102H272L302 42H340" fill="none" stroke={`url(#thumb-${project.signal})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 38H122V82H48zM224 94H318V132H224z" fill="rgba(39,232,255,0.08)" stroke="rgba(39,232,255,0.35)" />
        <circle cx="120" cy="68" r="7" fill="#66ff99" />
        <circle cx="302" cy="42" r="7" fill="#27e8ff" />
      </svg>
    </div>
  );
}

export default function ProjectCard({ project, onPreview }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      data-cursor="interactive"
    >
      <ProjectThumbnail project={project} />
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="status-badge">{project.status}</span>
          <span className="difficulty-badge">{project.difficulty}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="metric-mini">
            <Layers size={13} />
            {project.stats.files}
          </span>
          <span className="metric-mini">
            <Gauge size={13} />
            {project.stats.lines}
          </span>
          <span className="metric-mini">
            <GitCommit size={13} />
            {project.stats.commits}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-400">
            <Timer size={14} />
            {project.timeline}
          </span>
          <div className="flex gap-2">
            <a href={project.github} className="icon-link" aria-label={`${project.title} GitHub`}>
              <Github size={16} />
            </a>
            <button type="button" className="icon-link" onClick={() => onPreview(project)} aria-label={`${project.title} preview`}>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
