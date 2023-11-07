import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const badgeVariants = cva(
  `inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs 
  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "vGreen text-primary-foreground border-none",
        info: "vBlue text-primary-foreground border-none font-normal",
        infoDorment: "vPurple text-primary-foreground border-none font-normal",
        violet: "bg-violet text-primary-foreground border-none",
        bannerRed: "vRed text-primary-foreground p-2 border-none",
      },
      size: {
        default: "w-28 h-11",
        sm: "h-9 px-3",
        lg: "w-40 h-11",
        md: "h-9 p-4",
        icon: "w-32 h-10",
        featured: "h-7 px-3",
        numberTag: "w-6 h-6 rounded-md",
        label: "rounded-md w-40 h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

function Badge({
  className,
  variant,
  isLoading,
  icon,
  size,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)}>
      {icon && <span className="mr-1">{icon}</span>}
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {props.children}
    </div>
  );
}

export { Badge, badgeVariants };
