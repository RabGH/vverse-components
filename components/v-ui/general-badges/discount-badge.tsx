import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconPriceType } from "@/components/icons/logo-icons";
import { calculateDiscountedPrice, formatPriceTag } from "@/lib/utils";

type DiscountBadgeProps = {
  price?: number;
  discountPercentage?: number;
};

const DiscountBadge = ({ discountPercentage, price }: DiscountBadgeProps) => {
  if (discountPercentage && price) {
    const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
    return (
      <Badge
        size="featured"
        variant="violet"
        icon={<IconPriceType className="w-4 h-4 text-primary" />}
        className="flex flex-row items-center gap-2"
      >
        <span className="line-through text-sm font-bold">
          {formatPriceTag(price)}
        </span>
        <span className="text-md font-bold">
          {formatPriceTag(discountedPrice)}
        </span>
      </Badge>
    );
  }
  return null;
};

export default DiscountBadge;
