import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Set of utility function to work with multiple file systems (Mac, Win, Linux)

export function isWin() {
  return window.xploreAPI.isWin();
}

export const initialPath = isWin() ? "C:\\" : "/";

export function isHidden(file: string) {
  return file.startsWith(".");
}

export function joinPath(paths: string[]) {
  return paths.join(isWin() ? "\\" : "/");
}
