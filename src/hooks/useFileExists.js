import { useEffect, useState } from 'react';

// True only if the file exists and is really of the expected type (SPA fallbacks return HTML with 200).
export default function useFileExists(url, typeHint) {
  const [exists, setExists] = useState(false);
  useEffect(() => {
    let alive = true;
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || '';
        if (alive) setExists(res.ok && type.includes(typeHint));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [url, typeHint]);
  return exists;
}
