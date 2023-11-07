import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconCrownExclusive } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type ExclusiveBadgeProps = {
  isExclusive?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders an exclusive badge component.
 *
 * @param {boolean} isExclusive - Indicates whether the badge is exclusive.
 * @param {string} iconClassName - Additional class names for the badge icon.
 * @param {string} badgeClassName - Additional class names for the badge.
 * @returns {JSX.Element | null} The exclusive badge component.
 */

const ExclusiveBadge = ({
  isExclusive,
  iconClassName,
  badgeClassName,
}: ExclusiveBadgeProps) => {
  return isExclusive ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={
        <IconCrownExclusive
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      Exclusive
    </Badge>
  ) : null;
};

export default ExclusiveBadge;
