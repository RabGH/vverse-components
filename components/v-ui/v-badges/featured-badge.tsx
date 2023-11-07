import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconZap } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type FeaturedBadgeProps = {
  isFeatured?: string;
  badgeClassName?: string;
  iconClassName?: string;
};

/**
 * Renders a featured badge if the item is featured.
 *
 * @param {boolean} isFeatured - Indicates whether the item is featured or not.
 * @param {string} badgeClassName - CSS class name for the badge.
 * @param {string} iconClassName - CSS class name for the icon.
 * @return {JSX.Element | null} The rendered featured badge or null.
 */

const FeaturedBadge = ({
  isFeatured,
  badgeClassName,
  iconClassName,
}: FeaturedBadgeProps) => {
  return isFeatured ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconZap className={cn("w-5 h-5 text-primary", iconClassName)} />}
      className={cn(badgeClassName)}
    >
      Featured
    </Badge>
  ) : null;
};

export default FeaturedBadge;
