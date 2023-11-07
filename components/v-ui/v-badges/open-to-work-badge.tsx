import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconWorkExperienceBtn } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type OpenToWorkBadgeProps = {
  isOpenToWork?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

const OpenToWorkBadge = ({
  isOpenToWork,
  badgeClassName,
  iconClassName,
}: OpenToWorkBadgeProps) => {
  return isOpenToWork ? (
    <Badge
      size="featured"
      variant="success"
      icon={<IconWorkExperienceBtn className={cn("w-5 h-5", iconClassName)} />}
      className={cn("w-36",badgeClassName)}
    >
      {isOpenToWork}
    </Badge>
  ) : null;
};

export default OpenToWorkBadge;
