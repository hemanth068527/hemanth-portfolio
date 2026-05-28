import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { terminalCommands } from '../data/portfolio.js';
import { scrollToHash } from '../utils/scroll.js';

const initialLines = [
  'Embedded command terminal ready.',
  'Type "help" for available commands.',
];

const commandRoutes = {
  skills: '#skills',
  projects: '#projects',
  github: '#github',
  resume: '#resume',
  contact: '#contact',
};

export default function TerminalMode() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState(initialLines);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeys = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  const runCommand = (event) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    if (command === 'clear') {
      setLines(initialLines);
      setInput('');
      return;
    }

    const response = terminalCommands[command] || `Command not found: ${command}. Type "help".`;
    setLines((current) => [...current, `> ${command}`, response]);
    setInput('');

    if (commandRoutes[command]) {
      setTimeout(() => scrollToHash(commandRoutes[command]), 160);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-3xl rounded border border-cyanCore/35 bg-black/90 p-4 shadow-neon backdrop-blur-xl"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
        >
          <div className="mb-3 flex items-center justify-between border-b border-cyanCore/15 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-cyanCore">
              <Terminal size={16} />
              Embedded engineer terminal
            </div>
            <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close terminal">
              <X size={16} />
            </button>
          </div>
          <div className="max-h-72 overflow-auto rounded bg-cyanCore/[0.03] p-3 font-mono text-xs leading-6 text-slate-200 sm:text-sm">
            {lines.map((line, index) => (
              <p key={`${line}-${index}`} className={line.startsWith('>') ? 'text-matrix' : 'text-slate-300'}>
                {line}
              </p>
            ))}
          </div>
          <form onSubmit={runCommand} className="mt-3 flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-2">
            <span className="font-mono text-matrix">&gt;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="help"
              aria-label="Terminal command"
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
