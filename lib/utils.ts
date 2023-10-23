import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number) {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return (num / 1000000).toFixed(1) + "M";
  }
}

export function formatJobExperience(years: number) {
  if (years === 1) {
    return years + " Yr";
  } else if (years > 1) {
    return years + " Yrs";
  } else {
    return "";
  }
}
