import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2, LucideIcon } from "lucide-react";

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background 
  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: "vBlue text-primary-foreground",
        destructive: "vRed text-destructive-foreground",
        outline:
          "border border-input bg-background hover:vBlue hover:text-white",
        secondary: "vPurple text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ghostCalendar:
          "hover:bg-accent hover:text-accent-foreground rounded-full",
        LGFilled:
          "vhrBlue text-background rounded-lg hover:border hover:text-primary",
        LGOutline:
          "border border-input bg-background hover:vBlue hover:text-white hover:border-0 rounded-lg",
        BlueRedSlash: "vBlueRedSlash",
        BlueRedStraight: "vBlueRedStraight",
      },
      size: {
        default: "w-24 h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, icon, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
