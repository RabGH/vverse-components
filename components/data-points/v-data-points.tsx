import { cn, formatNumber } from "@/lib/utils";
import { Loader2, LucideIcon } from "lucide-react";

import React from "react";

export interface VDataPointProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  icon: LucideIcon;
  number: number;
  description: string;
  currency?: string;
  isExperience?: boolean;
  experience?: number;
  isRated?: boolean;
  rating?: number;
}

const VDataPoint = React.forwardRef<HTMLDivElement, VDataPointProps>(
  (
    {
      number,
      description,
      className,
      isLoading,
      isExperience,
      experience,
      isRated,
      icon: Icon,
      currency,
      rating,
      ...props
    },
    ref
  ) => (
    <figure
      {...props}
      ref={ref}
      data-disabled={isLoading}
      aria-label={`${description}: ${number}`}
      tabIndex={0}
      className={cn(
        `w-[100px] h-[80px] border border-primary flex flex-col rounded-xl bg-card text-card-foreground 
        shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
        hover:shadow-lg hover:-translate-y-1 hover:scale-101 transition-all duration-300`,
        className
      )}
    >
      <div>
        <div className="flex-start p-1">
          <Icon className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col text-center justify-center items-center mt-[-10px]">
        {isLoading ? (
          <Loader2 className="h-11 w-11 animate-spin" />
        ) : (
          <>
            {isRated ? (
              <p className="font-extrabold text-xl leading-[120%]">
                {rating?.toFixed(1)}({formatNumber(number)})
              </p>
            ) : isExperience ? (
              <p className="font-extrabold text-xl leading-[120%]">
                {experience?.toFixed(1)}({formatNumber(number)})
              </p>
            ) : (
              <p className="font-extrabold text-xl leading-[120%]">
                {currency}
                {formatNumber(number)}
              </p>
            )}
          </>
        )}
        <p className="font-medium text-sm">{description}</p>
      </div>
    </figure>
  )
);

VDataPoint.displayName = "VDataPoint";

export { VDataPoint };
