"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

/**
 * Renders a separator component. Documentation located in Shadcn-ui
 *
 * @module Separator
 * @category UI Components
 * @component
 * @example
 * const Example = () => {
 *   return (
 *     <Separator />
 *   )
 * }
 *
 * @param {React.ElementRef<typeof SeparatorPrimitive.Root>} ref - The ref for the component.
 * @param {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} props - The props for the component.
 * @param {string} props.className - The class name for the component.
 * @param {string} props.orientation - The orientation of the separator ("horizontal" or "vertical").
 * @param {boolean} props.decorative - Whether the separator is decorative or not.
 * @return {React.ReactNode} The rendered separator component.
 */

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
