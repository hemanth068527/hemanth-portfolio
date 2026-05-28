import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Cpu } from 'lucide-react';
import EngineeringDashboard from '../components/EngineeringDashboard.jsx';
import { heroActions } from '../data/portfolio.js';
import { isExternalLink, scrollToHash } from '../utils/scroll.js';

const roles = ['Embedded Learner', 'C Programmer', '365-Day Challenger', 'Future Firmware Developer'];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const doneTyping = visibleText === role;
    const doneDeleting = visibleText === '';
    const delay = doneTyping ? 1300 : deleting ? 42 : 72;

    const timer = setTimeout(() => {
      if (!deleting && doneTyping) {
        setDeleting(true);
        return;
      }
      if (deleting && doneDeleting) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }
      setVisibleText((current) => (deleting ? role.slice(0, current.length - 1) : role.slice(0, current.length + 1)));
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, roleIndex, visibleText]);

  return (
    <span className="inline-flex min-h-8 items-center font-mono text-base text-matrix sm:text-lg">
      {visibleText}
      <span className="ml-1 h-5 w-2 animate-pulse bg-matrix" />
    </span>
  );
}

export default function Hero() {
  const handleAction = (event, href) => {
    if (isExternalLink(href)) return;
    event.preventDefault();
    scrollToHash(href);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded border border-cyanCore/25 bg-cyanCore/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-cyanCore shadow-neon">
            <Cpu size={15} />
            Low-level systems interface
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.96] text-white sm:text-6xl lg:text-7xl">
            Hemanth K
          </h1>

          <p className="mt-5 max-w-3xl font-display text-xl font-semibold text-slate-100 sm:text-2xl">
            Embedded Systems Learner | C Programmer | Firmware Aspirant
          </p>

          <div className="mt-5">
            <TypingRole />
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A technical portfolio built like a firmware workstation: currently tracking Day 5 of a 365-day embedded
            systems challenge, with C fundamentals now and microcontrollers, Linux, protocols, and RTOS on the roadmap.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  onClick={(event) => handleAction(event, action.href)}
                  className={`cta-button ${action.tone}`}
                >
                  <Icon size={17} />
                  <span>{action.label}</span>
                  {action.tone === 'primary' && <ArrowRight size={16} />}
                </a>
              );
            })}
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {[
              ['CORE', 'Embedded C'],
              ['STATUS', 'Day 5/365'],
              ['MODE', 'Learning'],
            ].map(([label, value]) => (
              <div key={label} className="rounded border border-white/10 bg-white/[0.035] p-3">
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">{label}</span>
                <strong className="mt-2 block text-sm text-white">{value}</strong>
              </div>
            ))}
          </div>
        </motion.div>

        <EngineeringDashboard />
      </div>

      <a
        href="#about"
        onClick={(event) => {
          event.preventDefault();
          scrollToHash('#about');
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-slate-400 transition hover:text-cyanCore md:flex"
      >
        Scroll
        <ChevronDown size={15} />
      </a>
    </section>
  );
}
