import { cn } from "@/lib/utils"

/**
 * Renders a skeleton component.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the component.
 * @param {string} props.className - The class name for the component.
 * @return {React.ReactNode} The rendered skeleton component.
 */

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
