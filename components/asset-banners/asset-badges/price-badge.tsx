import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTagDollar } from "@/components/icons/logo-icons";

type PriceBadgeProps = {
  price?: number;
};

const PriceBadge = ({ price }: PriceBadgeProps) => {
  return price ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconTagDollar className="w-4 h-4" />}
    >
      ${price}
    </Badge>
  ) : null;
};

export default PriceBadge;
