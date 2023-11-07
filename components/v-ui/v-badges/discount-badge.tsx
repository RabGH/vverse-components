import React from "react";

import { Badge } from "@/components/ui/badge";
import {
  IconPriceType,
  IconPriceTypeTags,
} from "@/components/icons/logo-icons";
import { calculateDiscountedPrice, cn, formatPriceTag } from "@/lib/utils";

type DiscountBadgeProps = {
  price?: number;
  discountPercentage?: number;
  badgeClassName?: string;
  iconClassName?: string;
};

/**
 * Renders a discount badge component.
 *
 * @param {DiscountBadgeProps} props - The props object containing the following properties:
 *   - discountPercentage: The percentage of discount.
 *   - price: The original price.
 *   - iconClassName: The class name for the icon.
 *   - badgeClassName: The class name for the badge.
 * @return {JSX.Element | null} The discount badge component.
 */

const DiscountBadge = ({
  discountPercentage,
  price,
  iconClassName,
  badgeClassName,
}: DiscountBadgeProps) => {
  if (discountPercentage && price) {
    const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
    return (
      <Badge
        size="featured"
        variant="violet"
        icon={
          <IconPriceTypeTags
            className={cn("w-5 h-5 text-primary", iconClassName)}
          />
        }
        className={cn("flex flex-row items-center gap-1", badgeClassName)}
      >
        <span className="line-through text-md font-bold">
          {formatPriceTag(price)}
        </span>
        <span className="text-sm font-bold">
          {formatPriceTag(discountedPrice)}
        </span>
      </Badge>
    );
  }
  return null;
};

export default DiscountBadge;
