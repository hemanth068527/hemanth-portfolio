import { lazy, Suspense } from 'react';
import Hero from '../sections/Hero.jsx';

const About = lazy(() => import('../sections/About.jsx'));
const Skills = lazy(() => import('../sections/Skills.jsx'));
const Projects = lazy(() => import('../sections/Projects.jsx'));
const Learning = lazy(() => import('../sections/Learning.jsx'));
const Certificates = lazy(() => import('../sections/Certificates.jsx'));
const Timeline = lazy(() => import('../sections/Timeline.jsx'));
const GitHub = lazy(() => import('../sections/GitHub.jsx'));
const Resume = lazy(() => import('../sections/Resume.jsx'));
const Contact = lazy(() => import('../sections/Contact.jsx'));

function SectionFallback() {
  return (
    <div className="mx-auto min-h-64 w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-48 animate-pulse rounded border border-cyanCore/10 bg-cyanCore/[0.03]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Certificates />
        <Timeline />
        <GitHub />
        <Resume />
        <Contact />
      </Suspense>
      <footer className="border-t border-cyanCore/10 px-4 py-8 text-center font-mono text-xs uppercase tracking-[0.22em] text-slate-500 sm:px-6 lg:px-8">
        Hemanth K Embedded Systems Portfolio - Firmware interface online
      </footer>
    </main>
  );
}
