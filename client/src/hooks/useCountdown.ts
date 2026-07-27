import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasPassed: boolean;
}

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = targetMs - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, hasPassed: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, hasPassed: false };
}

export function useCountdown(targetIso: string): TimeLeft {
  const targetMs = new Date(targetIso).getTime();
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetMs));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetMs));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetMs]);

  return timeLeft;
}
