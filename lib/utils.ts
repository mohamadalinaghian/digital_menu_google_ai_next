import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Language, LocalizedString } from "@/types/menu";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert western digits to Persian digits
export function toPersianDigits(n: number | string): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n
    .toString()
    .replace(/\d/g, (char) => persianDigits[parseInt(char, 10)]);
}

// Convert western digits to Arabic-Indic digits
export function toArabicDigits(n: number | string): string {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return n
    .toString()
    .replace(/\d/g, (char) => arabicDigits[parseInt(char, 10)]);
}

// Format numbers with comma grouping according to language
export function formatNumber(num: number, lang: Language): string {
  const formatted = new Intl.NumberFormat("en-US").format(num);
  if (lang === "fa") {
    return toPersianDigits(formatted);
  }
  if (lang === "ar") {
    return toArabicDigits(formatted);
  }
  return formatted;
}

// Format currency with proper localization
export function formatPrice(price: number, lang: Language): string {
  const formattedNum = formatNumber(price, lang);
  if (lang === "fa") {
    return `${formattedNum} تومان`;
  }
  if (lang === "ar") {
    return `${formattedNum} تومان`;
  }
  return `${formattedNum} Tomans`;
}

// Helper to get text by language from a LocalizedString
export function getLocalizedText(
  item: LocalizedString | undefined,
  lang: Language,
  fallback = ""
): string {
  if (!item) return fallback;
  return item[lang] || item.fa || item.en || fallback;
}

export function getDirection(lang: Language): "rtl" | "ltr" {
  return lang === "en" ? "ltr" : "rtl";
}
