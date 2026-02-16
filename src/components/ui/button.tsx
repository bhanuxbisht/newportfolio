import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center px-4 py-2 transition-all duration-300 font-mono text-sm tracking-wide rounded-md",
                    "hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",

                    // Variants
                    variant === "primary" && "bg-white text-black hover:bg-neutral-200 font-medium",
                    variant === "secondary" && "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800",
                    variant === "outline" && "bg-transparent border border-dashed border-neutral-600 text-neutral-400 hover:text-white hover:border-white",
                    variant === "ghost" && "bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-900",

                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
