import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPhoneHref(raw: string): string {
  return `tel:${raw.replace(/\s+/g, '').replace(/-/g, '')}`;
}
