import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTagDollar } from "@/components/icons/logo-icons";
import { formatPriceTag } from "@/lib/utils";

type PriceBadgeProps = {
  price?: number;
};

const PriceBadge = ({ price }: PriceBadgeProps) => {
  return price ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconTagDollar className="w-4 h-4 text-primary" />}
    >
      {formatPriceTag(price)}
    </Badge>
  ) : null;
};

export default PriceBadge;
