import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
          fullWidth && "w-full",
          {
            "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg focus:ring-accent": variant === "primary",
            "bg-primary text-white hover:bg-primary-900 shadow-md hover:shadow-lg focus:ring-primary": variant === "secondary",
            "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary": variant === "outline",
            "bg-transparent text-muted hover:bg-gray-100 hover:text-primary": variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;