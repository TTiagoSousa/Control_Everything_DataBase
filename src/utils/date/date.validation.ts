import { z } from "zod";

export function isValidDate(str: string): boolean {
  const stringSchema = z.string();

  const zodResult = stringSchema.safeParse(str);

  if (!zodResult.success) {
    return false;
  }

  // Regex for date format DD-MM-YYYY
  const regex = /^\d{2}-\d{2}-\d{4}$/;

  if (!regex.test(str)) {
    return false;
  }

  // Extract day, month, and year parts
  const [day, month, year] = str.split("-").map(Number);

  // Check if it's a valid date
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
}