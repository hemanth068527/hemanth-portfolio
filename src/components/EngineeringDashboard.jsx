import { motion } from 'framer-motion';
import { Activity, CircleDot, Cpu, RadioTower, Signal, Zap } from 'lucide-react';
import { dashboardSignals } from '../data/portfolio.js';

function Waveform() {
  return (
    <svg viewBox="0 0 520 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="waveGlow" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#27e8ff" stopOpacity="0" />
          <stop offset="45%" stopColor="#27e8ff" />
          <stop offset="100%" stopColor="#66ff99" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <path
        className="scope-grid-line"
        d="M0 40H520M0 80H520M0 120H520M80 0V160M160 0V160M240 0V160M320 0V160M400 0V160"
      />
      <path
        className="wave-path"
        d="M0 108H38L52 58L78 128L104 40L132 108H174L188 78L212 78L226 118L250 118L270 52L296 108H342L360 92L378 92L392 70L414 70L432 108H520"
      />
    </svg>
  );
}

function UartSignal() {
  const bits = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between font-mono text-[0.64rem] uppercase tracking-[0.24em] text-slate-400">
        <span>UART TX</span>
        <span>115200 8N1</span>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {bits.map((bit, index) => (
          <motion.span
            key={`${bit}-${index}`}
            className={`h-7 rounded-sm border ${bit ? 'border-matrix/55 bg-matrix/25' : 'border-cyanCore/30 bg-cyanCore/10'}`}
            animate={{ opacity: bit ? [0.5, 1, 0.7] : [0.25, 0.6, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.08 }}
          />
        ))}
      </div>
    </div>
  );
}

function Microcontroller() {
  const pins = Array.from({ length: 16 });
  return (
    <div className="chip-wrap">
      {pins.map((_, index) => (
        <span key={index} className={`chip-pin pin-${index}`} />
      ))}
      <div className="chip-core">
        <Cpu size={42} />
        <span>HK-MCU</span>
      </div>
    </div>
  );
}

export default function EngineeringDashboard() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <div className="dashboard-frame">
        <div className="dashboard-topbar">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-matrix shadow-green" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-matrix">Firmware workstation</span>
          </div>
          <div className="font-mono text-[0.65rem] text-cyanCore">SYS.ONLINE</div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
          <div className="panel-surface min-h-64">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-slate-400">Oscilloscope</p>
                <h3 className="mt-1 font-display text-lg font-bold text-white">Signal Integrity</h3>
              </div>
              <Activity className="text-cyanCore" size={22} />
            </div>
            <div className="h-40 overflow-hidden rounded border border-cyanCore/15 bg-black/45 p-2">
              <Waveform />
            </div>
            <UartSignal />
          </div>

          <div className="panel-surface flex min-h-64 flex-col justify-between">
            <Microcontroller />
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['PWR', 'TX', 'RX'].map((label, index) => (
                <div key={label} className="rounded border border-white/10 bg-white/[0.03] p-2 text-center">
                  <motion.span
                    className={`mx-auto block h-2.5 w-2.5 rounded-full ${index === 0 ? 'bg-matrix' : 'bg-cyanCore'}`}
                    animate={{ opacity: [0.35, 1, 0.45] }}
                    transition={{ repeat: Infinity, duration: 1 + index * 0.35 }}
                  />
                  <span className="mt-2 block font-mono text-[0.62rem] text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.label} className="signal-tile">
                <Icon size={17} />
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div className="floating-orbit orbit-one" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
        <Zap size={18} />
      </motion.div>
      <motion.div className="floating-orbit orbit-two" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>
        <RadioTower size={18} />
      </motion.div>
      <motion.div className="floating-orbit orbit-three" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5.4 }}>
        <Signal size={18} />
      </motion.div>
      <motion.div className="floating-orbit orbit-four" animate={{ scale: [1, 1.14, 1] }} transition={{ repeat: Infinity, duration: 2.2 }}>
        <CircleDot size={18} />
      </motion.div>
    </motion.div>
  );
}
