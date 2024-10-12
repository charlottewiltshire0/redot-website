import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPlatform = () => {
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent;

    if (/Windows/i.test(userAgent)) {
      return 'Windows';
    }
    if (/Mac/i.test(userAgent)) {
      return 'macOS';
    }
    if (/Linux/i.test(userAgent)) {
      return 'Linux';
    }
  }
  return 'Unknown';
};
