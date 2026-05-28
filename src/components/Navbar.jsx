import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolio.js';
import { isExternalLink, scrollToHash } from '../utils/scroll.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .filter((item) => item.href.startsWith('#'))
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.12, 0.25, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (event, href) => {
    if (isExternalLink(href)) return;
    event.preventDefault();
    scrollToHash(href);
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded border px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-cyanCore/25 bg-void/78 shadow-neon backdrop-blur-xl'
            : 'border-white/10 bg-void/42 backdrop-blur-md'
        }`}
      >
        <a
          href="#home"
          onClick={(event) => navigate(event, '#home')}
          className="group flex items-center gap-3 rounded px-2 py-1"
          aria-label="Hemanth K home"
        >
          <span className="grid h-9 w-9 place-items-center rounded border border-cyanCore/45 bg-cyanCore/10 font-display text-sm font-bold text-cyanCore shadow-neon">
            HK
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-bold text-white">Hemanth K</span>
            <span className="block font-mono text-[0.66rem] uppercase tracking-[0.22em] text-matrix/80">Firmware OS</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => navigate(event, item.href)}
                className={`nav-link ${active === id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button type="button" className="icon-button lg:hidden" onClick={() => setOpen((current) => !current)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 grid max-w-7xl gap-2 rounded border border-cyanCore/20 bg-void/92 p-3 shadow-neon backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => navigate(event, item.href)}
              className="rounded border border-white/5 px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyanCore/40 hover:text-cyanCore"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
