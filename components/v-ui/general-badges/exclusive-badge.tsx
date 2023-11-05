import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconCrownExclusive } from "@/components/icons/logo-icons";

type ExclusiveBadgeProps = {
  isExclusive?: string;
};

const ExclusiveBadge = ({ isExclusive }: ExclusiveBadgeProps) => {
  return isExclusive ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconCrownExclusive className="w-4 h-4" />}
    >
      Exclusive
    </Badge>
  ) : null;
};

export default ExclusiveBadge;
