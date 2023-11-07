import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconLevel } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";

type ExpertiseBadgeProps = {
  expertise?: "beginner" | "intermediate" | "advanced";
  badgeClassName?: string;
  iconClassName?: string;
};

/**
 * Renders a badge component based on the provided expertise.
 *
 * @param {ExpertiseBadgeProps} expertise - The expertise to be displayed in the badge.
 * @param {string} badgeClassName - Additional class name for the badge element.
 * @param {string} iconClassName - Additional class name for the icon element.
 * @return {ReactElement | null} The rendered badge component if expertise is provided, otherwise null.
 */

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
