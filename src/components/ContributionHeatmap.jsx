import { contributionLevels } from '../data/portfolio.js';

const levelClass = {
  0: 'bg-white/[0.04]',
  1: 'bg-cyanCore/20',
  2: 'bg-cyanCore/42',
  3: 'bg-matrix/55',
  4: 'bg-matrix shadow-green',
};

export default function ContributionHeatmap({ compact = false }) {
  return (
    <div className="heatmap-wrap">
      <div className={`grid grid-flow-col grid-rows-7 gap-1 ${compact ? 'auto-cols-[0.55rem]' : 'auto-cols-[0.72rem] sm:auto-cols-[0.86rem]'}`}>
        {contributionLevels.map((level, index) => (
          <span
            key={index}
            className={`aspect-square rounded-[2px] border border-white/5 ${levelClass[level]}`}
            title={`Day ${index + 1}: level ${level}`}
          />
        ))}
      </div>
    </div>
  );
}
