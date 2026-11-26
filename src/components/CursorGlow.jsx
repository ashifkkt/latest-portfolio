import { useEffect, useRef } from 'react';

// Soft spotlight that trails the mouse. Skipped on touch devices and for reduced-motion users.
const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const skip =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (skip || !ref.current) return undefined;

    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = '1';
    };
    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
