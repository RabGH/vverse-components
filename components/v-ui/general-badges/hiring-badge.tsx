import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStatusCalendar } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type HiringBadgeProps = {
  isHiring?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

const HiringBadge = ({
  isHiring,
  iconClassName,
  badgeClassName,
}: HiringBadgeProps) => {
  return isHiring ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={
        <IconStatusCalendar
          className={cn("w-4 h-4 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      Hiring
    </Badge>
  ) : null;
};

export default HiringBadge;
