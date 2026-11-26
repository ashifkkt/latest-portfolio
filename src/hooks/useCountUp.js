import { useEffect, useState } from 'react';
import prefersReducedMotion from './usePrefersReducedMotion';

// Eases a number from 0 to `target` once on mount.
export default function useCountUp(target, duration = 1400, delay = 700) {
  const [value, setValue] = useState(prefersReducedMotion() ? target : 0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let raf;
    let start;
    const step = (now) => {
      if (start === undefined) start = now;
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - (1 - t) ** 3)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    const timer = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay]);

  return value;
}
