import { useEffect, useState } from 'react';

/** Cosmetic countdown for dashboard ETA display */
export function useResponseTimer(initialMinutes: number) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeconds((s) => (s <= 0 ? initialMinutes * 60 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [initialMinutes]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
