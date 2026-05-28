import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const dotX = gsap.quickTo(dotRef.current, 'x', { duration: 0.08, ease: 'power3.out' });
    const dotY = gsap.quickTo(dotRef.current, 'y', { duration: 0.08, ease: 'power3.out' });
    const ringX = gsap.quickTo(ringRef.current, 'x', { duration: 0.28, ease: 'power3.out' });
    const ringY = gsap.quickTo(ringRef.current, 'y', { duration: 0.28, ease: 'power3.out' });

    const move = (event) => {
      dotX(event.clientX - 4);
      dotY(event.clientY - 4);
      ringX(event.clientX - 19);
      ringY(event.clientY - 19);
    };

    const setHover = (event) => {
      const target = event.target;
      const interactive = target.closest('a, button, input, textarea, [data-cursor="interactive"]');
      document.body.classList.toggle('cursor-active', Boolean(interactive));
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerover', setHover, { passive: true });

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', setHover);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
