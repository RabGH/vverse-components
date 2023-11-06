import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconBudget } from "@/components/icons/logo-icons";
import { formatPriceTag } from "@/lib/utils";

type BudgetBadgeProps = {
  budget?: number;
};

const BudgetBadge = ({ budget }: BudgetBadgeProps) => {
  return budget ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconBudget className="w-4 h-4 text-primary" />}
    >
      {formatPriceTag(budget)}
    </Badge>
  ) : null;
};

export default BudgetBadge;
