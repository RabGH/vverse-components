import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconDiscountTag } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type DiscountPercentageBadgeProps = {
  discountPercentage?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

const DiscountPercentageBadge = ({
  discountPercentage,
  iconClassName,
  badgeClassName,
}: DiscountPercentageBadgeProps) => {
  return discountPercentage ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconDiscountTag className={cn("w-5 h-5", iconClassName)} />}
      className={cn(badgeClassName)}
    >
      {discountPercentage}% OFF
    </Badge>
  ) : null;
};

export default DiscountPercentageBadge;
