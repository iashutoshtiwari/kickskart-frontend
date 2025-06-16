import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(input: number | string, showDecimals: boolean = true): string {
  let amount = typeof input === 'string' ? parseFloat(input.replace(/,/g, '')) : input;

  if (isNaN(amount)) return '₹0.00';

  const rounded = parseFloat(amount.toFixed(2));

  return `₹${rounded.toLocaleString('en-IN', {
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  })}`;
}
