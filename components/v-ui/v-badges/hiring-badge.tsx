import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStatusCalendar } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type HiringBadgeProps = {
  isHiring?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a HiringBadge component based on the provided props.
 *
 * @param {boolean} isHiring - Indicates whether the company is currently hiring.
 * @param {string} iconClassName - The class name for the icon element.
 * @param {string} badgeClassName - The class name for the badge element.
 * @returns {JSX.Element | null} The rendered HiringBadge component or null if isHiring is false.
 */

const HiringBadge = ({
  isHiring,
  iconClassName,
  badgeClassName,
}: HiringBadgeProps) => {
  return isHiring ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconStatusCalendar
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      Hiring
    </Badge>
  ) : null;
};

export default HiringBadge;
