import { useEffect, useState } from 'react';
import prefersReducedMotion from './usePrefersReducedMotion';

// Types and deletes each phrase in turn. Shows the first phrase statically for reduced-motion users.
export default function useTypewriter(phrases, { typeMs = 70, deleteMs = 35, holdMs = 1600 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? phrases[0] : '');

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let index = 0;
    let chars = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = phrases[index];
      chars += deleting ? -1 : 1;
      setText(word.slice(0, chars));

      let delay = deleting ? deleteMs : typeMs;
      if (!deleting && chars === word.length) {
        deleting = true;
        delay = holdMs;
      } else if (deleting && chars === 0) {
        deleting = false;
        index = (index + 1) % phrases.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [phrases, typeMs, deleteMs, holdMs]);

  return text;
}
