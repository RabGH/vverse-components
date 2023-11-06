import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconPriceType } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type BargainBadgeProps = {
  bargain?: string;
  badgeClassName?: string;
  iconClassName?: string;
};

const BargainBadge = ({
  bargain,
  iconClassName,
  badgeClassName,
}: BargainBadgeProps) => {
  return bargain ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconPriceType className={cn("w-4 h-4 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(bargain)} Price
    </Badge>
  ) : null;
};

export default BargainBadge;
