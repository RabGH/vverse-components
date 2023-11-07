/**
 * Combines multiple class values and returns a merged class string.
 *
 * @param inputs - Class values to be combined.
 * @returns Merged class string.
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number to a human-readable string, adding 'K' or 'M' for thousands and millions.
 *
 * @param num - The number to be formatted.
 * @returns Formatted string.
 */
export function formatNumber(num: number) {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return (num / 1000000).toFixed(1) + "M";
  }
}

/**
 * Formats a number as currency with a specified currency symbol.
 *
 * @param num - The number to be formatted.
 * @param currencySymbol - The currency symbol (default is '$').
 * @returns Formatted currency string.
 */
export function formatCurrency(num: number, currencySymbol: string = "$") {
  if (num < 1000) {
    return currencySymbol + num.toString();
  } else if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return (num / 1000000).toFixed(1) + "M";
  }
}

/**
 * Formats a price as a currency string with two decimal places.
 *
 * @param price - The price to be formatted.
 * @returns Formatted price string.
 */
export const formatPriceTag = (price: number): string => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

/**
 * Formats job experience years as 'Yr.' or 'Yrs.'.
 *
 * @param years - The number of years of job experience.
 * @returns Formatted string.
 */
export function formatJobExperience(years: number) {
  if (years === 1) {
    return years + " Yr.";
  } else if (years > 1) {
    return years + "Yrs.";
  } else {
    return "";
  }
}

/**
 * Parses hours format and converts it to a human-readable string.
 *
 * @param hours - The number of hours to be parsed.
 * @returns Parsed duration string.
 */
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

/**
 * Parses hours into a duration format (D:H:M).
 *
 * @param hours - The number of hours to be parsed.
 * @returns Parsed duration string.
 */
export function parseDurationFormat(hours: number) {
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  const minutes = Math.floor((hours - Math.floor(hours)) * 60);

  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = remainingHours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedDays}D:${formattedHours}H:${formattedMinutes}M`;
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The input string.
 * @returns Capitalized string.
 */
export function formatCapitalLetters(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Calculates the discounted price based on the original price and discount percentage.
 *
 * @param originalPrice - The original price.
 * @param discountPercentage - The discount percentage.
 * @returns Discounted price.
 */
export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
) => {
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  return discountedPrice;
};
