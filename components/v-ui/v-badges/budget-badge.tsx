import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconBudget } from "@/components/icons/logo-icons";
import { cn, formatPriceTag } from "@/lib/utils";

type BudgetBadgeProps = {
  budget?: number;
  badgeClassName?: string;
  iconClassName?: string;
};

const BudgetBadge = ({
  budget,
  badgeClassName,
  iconClassName,
}: BudgetBadgeProps) => {
  return budget ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconBudget className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatPriceTag(budget)}
    </Badge>
  ) : null;
};

export default BudgetBadge;
