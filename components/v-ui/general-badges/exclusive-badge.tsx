import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconCrownExclusive } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type ExclusiveBadgeProps = {
  isExclusive?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

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
