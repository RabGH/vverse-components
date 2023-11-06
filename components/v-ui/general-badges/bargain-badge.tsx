import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconPriceType } from "@/components/icons/logo-icons";
import { formatCapitalLetters } from "@/lib/utils";

type BargainBadgeProps = {
  bargain?: string;
};

const BargainBadge = ({ bargain }: BargainBadgeProps) => {
  return bargain ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconPriceType className="w-4 h-4 text-primary" />}
    >
      {formatCapitalLetters(bargain)} Price
    </Badge>
  ) : null;
};

export default BargainBadge;
