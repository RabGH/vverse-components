import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconLevel } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type ExpertiseBadgeProps = {
  expertise?: "beginner" | "intermediate" | "advanced";
  badgeClassName?: string;
  iconClassName?: string;
};

const ExpertiseBadge = ({
  expertise,
  badgeClassName,
  iconClassName,
}: ExpertiseBadgeProps) => {
  return expertise ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconLevel className={cn("w-5 h-5 text-primary", iconClassName)} />}
      className={cn(badgeClassName)}
    >
      {expertise}
    </Badge>
  ) : null;
};

export default ExpertiseBadge;
