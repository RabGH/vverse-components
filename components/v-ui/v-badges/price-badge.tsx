import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTagDollar } from "@/components/icons/logo-icons";
import { cn, formatPriceTag } from "@/lib/utils";

type PriceBadgeProps = {
  price?: number;
  badgeClassName?: string;
  iconClassName?: string;
};

/**
 * Renders a price badge component based on the given price value.
 *
 * @component
 *
 * @param {object} props - The component props.
 * @param {number} props.price - The price value to be displayed on the badge. Defaults to 0.
 * @param {string} props.iconClassName - The class name for the icon element.
 * @param {string} props.badgeClassName - The class name for the badge element.
 *
 * @returns {JSX.Element | null} The rendered price badge component.
 */

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
        <IconTagDollar className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatPriceTag(price)}
    </Badge>
  ) : null;
};

export default PriceBadge;
