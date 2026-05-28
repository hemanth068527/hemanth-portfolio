import { useEffect, useState } from 'react';

export function useMouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;

    const handleMove = (event) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return position;
}
