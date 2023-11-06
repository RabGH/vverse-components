import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStatusCalendar } from "@/components/icons/logo-icons";
import { formatCapitalLetters } from "@/lib/utils";

type StockBadgeProps = {
  stock: "In Stock" | "Out of Stock";
};

const StockBadge = ({ stock }: StockBadgeProps) => {
  return stock ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconStatusCalendar className="w-4 h-4 text-primary" />}
    >
      {formatCapitalLetters(stock)}
    </Badge>
  ) : null;
};

export default StockBadge;
