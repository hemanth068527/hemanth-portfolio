import { useMemo } from 'react';
import { motion } from 'framer-motion';

function pointFor(index, total, radius, center) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius,
  };
}

export default function RadarChart({ data }) {
  const size = 270;
  const center = size / 2;
  const maxRadius = 102;

  const polygon = useMemo(
    () =>
      data
        .map((item, index) => {
          const radius = (item.value / 100) * maxRadius;
          const point = pointFor(index, data.length, radius, center);
          return `${point.x},${point.y}`;
        })
        .join(' '),
    [center, data],
  );

  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto w-full max-w-[19rem]" aria-label="Skill radar chart">
      {rings.map((ring) => (
        <polygon
          key={ring}
          points={data
            .map((_, index) => {
              const point = pointFor(index, data.length, maxRadius * ring, center);
              return `${point.x},${point.y}`;
            })
            .join(' ')}
          fill="none"
          stroke="rgba(39,232,255,0.14)"
          strokeWidth="1"
        />
      ))}
      {data.map((item, index) => {
        const outer = pointFor(index, data.length, maxRadius, center);
        const label = pointFor(index, data.length, maxRadius + 24, center);
        return (
          <g key={item.axis}>
            <line x1={center} y1={center} x2={outer.x} y2={outer.y} stroke="rgba(102,255,153,0.12)" />
            <text
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#cbd5e1"
              fontSize="10"
              fontFamily="JetBrains Mono, monospace"
            >
              {item.axis}
            </text>
          </g>
        );
      })}
      <motion.polygon
        points={polygon}
        fill="rgba(39,232,255,0.18)"
        stroke="#27e8ff"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.86, transformOrigin: 'center' }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <circle cx={center} cy={center} r="3" fill="#66ff99" />
    </svg>
  );
}
