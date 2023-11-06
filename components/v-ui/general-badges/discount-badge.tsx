import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconPriceType } from "@/components/icons/logo-icons";
import { calculateDiscountedPrice, cn, formatPriceTag } from "@/lib/utils";

type DiscountBadgeProps = {
  price?: number;
  discountPercentage?: number;
  badgeClassName?: string;
  iconClassName?: string;
};

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
          <IconPriceType
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
