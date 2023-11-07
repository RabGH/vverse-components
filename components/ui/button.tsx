import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Root component of the button. Can be found on shadcn-ui or through the types of primitives on radix.
 * All button variants are mostly located here.
 * @component
 */


const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background 
  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: "vBlue text-primary-foreground",
        defaultNoBg: "text-primary-foreground",
        destructive: "vRed text-destructive-foreground",
        outline:
          "border border-input bg-background hover:vBlue hover:text-white",
        secondary: "vPurple text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        ghostCalendar:
          "hover:bg-accent hover:text-accent-foreground rounded-full", // remove 
        largeFilled:
          "vhrBlue text-background rounded-lg hover:border hover:text-primary",
        largeOutline:
          "border border-input bg-background hover:vBlue hover:text-white hover:border-0 rounded-lg",
        blueRedSlash: "vBlueRedSlash",
        blueRedStraight: "vBlueRedStraight",
        bannerBlue: "vBlue text-primary-foreground p-2",
        bannerRed: "vRed text-primary-foreground p-2",
        bannerBlueRed: "vBlueRedSlash text-primary-foreground p-2",
        userPurple: "vPurple text-primary-foreground p-2",
        notificationCenter:
          "bg-none text-primary hover:bg-blue-300/50 rounded-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        md: "h-9 w-32 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        banner: "h-9 px-8 w-36",
        featured: "h-7 px-3",
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
