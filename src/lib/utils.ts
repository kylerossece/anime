import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function capitalize(val: string) {
  const str = String(val).toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date: string | number) {
  return moment(date).format("MMMM YYYY");
}

function formatDateWithDay(date: string | number) {
  return moment(date, "D/M/YYYY").format("MMMM D, YYYY");
}

export { cn, capitalize, formatDate, formatDateWithDay };
