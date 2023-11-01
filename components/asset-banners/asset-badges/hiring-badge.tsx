import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStatusCalendar } from "@/components/icons/logo-icons";

type HiringBadgeProps = {
  isHiring?: string;
};

const HiringBadge = ({ isHiring }: HiringBadgeProps) => {
  return isHiring ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconStatusCalendar className="w-4 h-4" />}
    >
      Featured
    </Badge>
  ) : null;
};

export default HiringBadge;
