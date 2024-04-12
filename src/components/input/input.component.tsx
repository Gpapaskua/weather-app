import { forwardRef, ForwardedRef } from "react";
import { InputProps, VARIANT_MAP } from "./input.config";
import { cn } from "@/utils";

const Input = forwardRef(
  (
    { variant = "standard", className = "", ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const variantStyles = VARIANT_MAP[variant];
    return (
      <input {...rest} className={cn(variantStyles, className)} ref={ref} />
    );
  }
);

export default Input;
