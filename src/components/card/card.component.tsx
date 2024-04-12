import { cn } from "@/utils";
import { forwardRef, HTMLProps } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {}

export const CardHeader = ({
  className,
  ...rest
}: HTMLProps<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-400", className)} {...rest} />
);

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={cn([
          "block w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow min-h-[10.625rem]",
          "hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
          className,
        ])}
      />
    );
  }
);

export default Card;
