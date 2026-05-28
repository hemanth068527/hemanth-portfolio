import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { bootLogs } from '../data/portfolio.js';

export default function BootSequence() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('hk-intro-complete'));
  const [lineCount, setLineCount] = useState(0);
  const [muted, setMuted] = useState(true);
  const complete = lineCount >= bootLogs.length;
  const displayedLogs = useMemo(() => bootLogs.slice(0, lineCount), [lineCount]);

  useEffect(() => {
    if (!visible) return undefined;
    if (complete) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('hk-intro-complete', 'true');
        setVisible(false);
      }, 1050);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setLineCount((current) => current + 1), lineCount === 0 ? 260 : 520);
    return () => clearTimeout(timer);
  }, [complete, lineCount, visible]);

  const skip = () => {
    sessionStorage.setItem('hk-intro-complete', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75, ease: 'easeInOut' } }}
        >
          <div className="absolute inset-0 bg-grid bg-[length:38px_38px] opacity-20" />
          <svg className="absolute inset-0 h-full w-full opacity-70" aria-hidden="true">
            <path className="boot-trace" d="M120 520H340L420 440H650L760 330H1080" />
            <path className="boot-trace boot-trace-alt" d="M1120 120H920L850 190H610L510 290H130" />
          </svg>
          <div className="relative mx-4 w-full max-w-3xl rounded border border-cyanCore/30 bg-void/90 p-5 shadow-neon sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-cyanCore/15 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-matrix">Secure Bootloader</p>
                <h1 className="mt-2 font-display text-2xl font-bold text-white sm:text-4xl">HEMANTH_K.OS</h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setMuted((current) => !current)}
                  aria-label={muted ? 'Enable boot sound' : 'Mute boot sound'}
                >
                  {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>
                <button type="button" className="terminal-button" onClick={skip}>
                  Skip intro
                </button>
              </div>
            </div>
            <div className="min-h-[17rem] space-y-3 font-mono text-sm text-slate-200">
              {displayedLogs.map((line) => (
                <motion.p
                  key={line}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="text-cyanCore">&gt;</span>
                  <span>{line}</span>
                </motion.p>
              ))}
              {!complete && <span className="inline-block h-5 w-2 animate-pulse bg-matrix align-middle" />}
              {complete && (
                <motion.div
                  className="mt-6 rounded border border-matrix/40 bg-matrix/10 px-4 py-3 font-mono text-matrix"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  System Status: ONLINE
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
