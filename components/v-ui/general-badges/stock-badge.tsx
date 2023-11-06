import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStatusCalendar } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type StockBadgeProps = {
  stock: "In Stock" | "Out of Stock";
  iconClassName?: string;
  badgeClassName?: string;
};

const StockBadge = ({
  stock,
  iconClassName,
  badgeClassName,
}: StockBadgeProps) => {
  return stock ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={
        <IconStatusCalendar
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(stock)}
    </Badge>
  ) : null;
};

export default StockBadge;
