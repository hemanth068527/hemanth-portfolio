import { useMouseGlow } from '../hooks/useMouseGlow.js';

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          className="particle-dot"
          key={index}
          style={{
            '--x': `${(index * 37) % 100}%`,
            '--y': `${(index * 53) % 100}%`,
            '--delay': `${(index % 9) * 0.65}s`,
            '--size': `${2 + (index % 4)}px`,
          }}
        />
      ))}
    </div>
  );
}

function TraceLayer() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-45" aria-hidden="true">
      <defs>
        <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#27e8ff" stopOpacity="0" />
          <stop offset="42%" stopColor="#27e8ff" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#66ff99" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path className="trace-path delay-0" d="M-80 180H120L176 236H390L460 166H680" />
      <path className="trace-path delay-1" d="M1180 140H960L900 200H760L700 260H520" />
      <path className="trace-path delay-2" d="M-60 620H180L230 570H430L520 660H770" />
      <path className="trace-path delay-3" d="M1260 740H990L920 670H770L690 590H500" />
    </svg>
  );
}

export default function BackgroundSystem() {
  const position = useMouseGlow();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(39,232,255,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(102,255,153,0.1),transparent_26%),radial-gradient(circle_at_50%_72%,rgba(180,108,255,0.09),transparent_34%)]" />
      <div className="absolute inset-0 bg-grid bg-[length:48px_48px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div
        className="absolute h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanCore/10 blur-3xl transition-opacity duration-300"
        style={{ left: position.x, top: position.y }}
      />
      <TraceLayer />
      <Particles />
      <div className="noise-overlay" />
    </div>
  );
}
