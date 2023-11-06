import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconWorkType } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type WorkTypeBadgeProps = {
  workType?: "remote" | "hybrid";
  iconClassName?: string;
  badgeClassName?: string;
};

const WorkTypeBadge = ({
  workType,
  iconClassName,
  badgeClassName,
}: WorkTypeBadgeProps) => {
  return workType ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconWorkType className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(workType)}
    </Badge>
  ) : null;
};

export default WorkTypeBadge;
