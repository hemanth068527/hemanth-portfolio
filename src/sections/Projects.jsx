import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import SectionShell from '../components/SectionShell.jsx';
import { projectCategories, projects } from '../data/portfolio.js';
import { fadeUp } from '../animations/motion.js';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const matchesQuery =
        !normalized ||
        [project.title, project.summary, project.category, ...project.tech].some((item) =>
          item.toLowerCase().includes(normalized),
        );
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Firmware Project Bay"
      title="Premium engineering project showcase."
      subtitle="Searchable project cards with status telemetry, code statistics, technical stacks, and modal previews for embedded and C programming work."
    >
      <motion.div className="mb-7 grid gap-4 lg:grid-cols-[1fr_auto]" variants={fadeUp}>
        <label className="search-field">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, protocols, tech..."
            aria-label="Search projects"
          />
        </label>
        <div className="filter-strip" aria-label="Project categories">
          {projectCategories.map((item) => (
            <button key={item} type="button" className={item === category ? 'active' : ''} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" variants={fadeUp}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} onPreview={setSelectedProject} />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="rounded border border-cyanCore/20 bg-cyanCore/5 p-8 text-center font-mono text-sm text-slate-300">
          No matching projects in this firmware bay.
        </div>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </SectionShell>
  );
}
