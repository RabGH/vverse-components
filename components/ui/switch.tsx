"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

/**
 * Renders a switch input element.
 *
 * @component
 * @param {React.ElementRef<typeof SwitchPrimitives.Root>} ref - Ref for the switch element.
 * @param {string} props.className - Additional CSS classes for the switch.
 * @return {JSX.Element} The rendered Switch component.
 */

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `peer inline-flex h-[22px] w-[44px] shrink-0 cursor-pointer items-center rounded-full 
      border-[1px] border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 
      focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background 
      disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary 
      data-[state=unchecked]:bg-primary-foreground`,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `pointer-events-none block h-5 w-5 rounded-full bg-primary shadow-lg ring-0 
        transition-transform data-[state=checked]:bg-primary-foreground data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0`
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
