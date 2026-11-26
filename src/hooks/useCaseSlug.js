import { useSyncExternalStore } from 'react';

const subscribe = (cb) => {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
};
const getSnapshot = () => window.location.hash;

// Returns "tecbooks" for the URL hash "#/case/tecbooks", otherwise null.
export default function useCaseSlug() {
  const hash = useSyncExternalStore(subscribe, getSnapshot);
  const match = /^#\/case\/([\w-]+)$/.exec(hash);
  return match ? match[1] : null;
}
