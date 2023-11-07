import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconDiscountTag } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type DiscountPercentageBadgeProps = {
  discountPercentage?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a discount percentage badge component.
 *
 * @param {DiscountPercentageBadgeProps} props - The props object containing the discount percentage, icon class name, and badge class name.
 * @return {JSX.Element | null} The rendered discount percentage badge component or null if the discount percentage is falsy.
 */

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
