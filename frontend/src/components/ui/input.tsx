import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-[#b5bcc3] bg-white px-3 py-2 text-sm text-[#204558] shadow-sm placeholder:text-[#7f8c8c] focus:outline-none focus:ring-2 focus:ring-[#6da4be] focus:border-transparent",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
