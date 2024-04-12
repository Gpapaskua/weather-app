import { DIRECTIONS } from "@/constants";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const getDirectionFromDegrees = (degrees: number) => {
  const index = Math.round((degrees % 360) / 22.5);
  return DIRECTIONS[index % 16];
};

export const getHumidityStatus = (humidity: number): string => {
  if (humidity < 30) {
    return "🔥 Low humidity";
  } else if (humidity >= 30 && humidity <= 60) {
    return "👌 Normal humidity";
  } else {
    return "💧 High humidity";
  }
};

export const getKilometersFromMeters = (meters: number): number =>
  meters / 1000;

export const evaluateVisibility = (visibilityMeters: number): string => {
  if (visibilityMeters >= 1000) {
    return "👀 Good visibility";
  } else if (visibilityMeters >= 500 && visibilityMeters < 1000) {
    return "🙂 Normal visibility";
  } else {
    return "😞 Poor visibility";
  }
};

export const evaluatePressure = (pressure: number): string => {
  if (pressure >= 1013.25) {
    return "⬆️ High pressure";
  } else if (pressure < 1013.25 && pressure >= 1000) {
    return "🟢 Normal pressure";
  } else {
    return "⬇️ Low pressure";
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
