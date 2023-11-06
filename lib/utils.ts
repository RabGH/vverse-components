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

export const formatPriceTag = (price: number): string => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

export function formatJobExperience(years: number) {
  if (years === 1) {
    return years + " Yr.";
  } else if (years > 1) {
    return years + "Yrs.";
  } else {
    return "";
  }
}

export const parseHoursFormat = (hours: number): string => {
  if (hours < 1) {
    return `${hours * 60} minutes`;
  }
  if (hours < 24) {
    return `${hours} hours`;
  }
  if (hours < 24 * 7) {
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""}`;
  }
  if (hours < 24 * 7 * 4) {
    const weeks = Math.floor(hours / (24 * 7));
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  }
  if (hours < 24 * 7 * 4 * 12) {
    const months = Math.floor(hours / (24 * 7 * 4));
    return `${months} month${months > 1 ? "s" : ""}`;
  }
  if (hours < 24 * 7 * 4 * 12 * 5) {
    const years = Math.floor(hours / (24 * 7 * 4 * 12));
    return `${years} year${years > 1 ? "s" : ""}`;
  }
  return "Over 5 years"; // or adjust this threshold as needed
};

export function parseDurationFormat(hours: number) {
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  const minutes = Math.floor((hours - Math.floor(hours)) * 60);

  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = remainingHours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedDays}D:${formattedHours}H:${formattedMinutes}M`;
}

export function formatCapitalLetters(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
) => {
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  return discountedPrice;
};
