"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";


/**
 * Renders a dialog component.
 * 
 */
const Dialog = DialogPrimitive.Root;


/**
 * Renders a dialog component.
 */
const DialogTrigger = DialogPrimitive.Trigger;


/**
 * Renders a dialog portal component.
 */
const DialogPortal = DialogPrimitive.Portal;


/**
 * Renders a dialog close component.
 */
const DialogClose = DialogPrimitive.Close;


/**
 * Renders a dialog overlay component.
 *
 * @param {type} className - The class name for the overlay.
 * @return {JSX.Element} The rendered dialog overlay component.
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      `fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in 
      data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;


/**
 * Renders a dialog content component.
 *
 * @param {type} className - The class name for the content.
 * @param {type} children - The children elements.
 * @return {JSX.Element} The rendered dialog content component.
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] 
        gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in 
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
        data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] 
        data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
        sm:rounded-lg border-none`,
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={`absolute right-4 top-3 rounded-sm opacity-70 
      ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 
      focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent 
      data-[state=open]:text-muted-foreground`}
      >
        <X className="h-4 w-4 text-white mt-1" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;


/**
 * Renders a dialog header component.
 *
 * @param {type} className - The class name for the header.
 * @return {JSX.Element} The rendered dialog header component.
 */
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";


/**
 * Renders a dialog footer component.
 *
 * @param {type} className - The class name for the footer.
 * @return {JSX.Element} The rendered dialog footer component.
 */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";


/**
 * Renders a dialog title component.
 *
 * @param {type} className - The class name for the title.
 * @return {JSX.Element} The rendered dialog title component.
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-sm font-normal leading-6 vgBlue p-3 text-white rounded-t-lg",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;


/**
 * Renders a dialog description component.
 *
 * @param {type} className - The class name for the description.
 * @return {JSX.Element} The rendered dialog description component.
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
