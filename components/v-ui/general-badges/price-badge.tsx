import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTagDollar } from "@/components/icons/logo-icons";
import { cn, formatPriceTag } from "@/lib/utils";

type PriceBadgeProps = {
  price?: number;
  badgeClassName?: string;
  iconClassName?: string;
};

const PriceBadge = ({
  price,
  iconClassName,
  badgeClassName,
}: PriceBadgeProps) => {
  return price ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconTagDollar className={cn("w-4 h-4 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatPriceTag(price)}
    </Badge>
  ) : null;
};

export default PriceBadge;
