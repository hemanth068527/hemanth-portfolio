import { useScrollProgress } from '../hooks/useScrollProgress.js';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[90] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyanCore via-matrix to-plasma shadow-neon"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
