import { InputHTMLAttributes } from "react";

const inputVariants = ["standard"] as const;

type InputVariant = (typeof inputVariants)[number];

export const VARIANT_MAP: Record<InputVariant, string> = {
  standard: "h-12 outline-none b-none color-black placeholder:text-black-200",
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}
