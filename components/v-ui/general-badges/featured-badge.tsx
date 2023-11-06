import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconZap } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type FeaturedBadgeProps = {
  isFeatured?: string;
  badgeClassName?: string;
  iconClassName?: string;
};

const FeaturedBadge = ({
  isFeatured,
  badgeClassName,
  iconClassName,
}: FeaturedBadgeProps) => {
  return isFeatured ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconZap className={cn("w-4 h-4 text-primary", iconClassName)} />}
      className={cn(badgeClassName)}
    >
      Featured
    </Badge>
  ) : null;
};

export default FeaturedBadge;
