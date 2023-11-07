import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconGender } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";
import { formatCapitalLetters } from "../../../lib/utils";

type GenderBadgeProps = {
  gender?: string;
  badgeClassName?: string;
  iconClassName?: string;
};

const GenderBadge = ({
  gender,
  badgeClassName,
  iconClassName,
}: GenderBadgeProps) => {
  return gender ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconGender className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(gender)}
    </Badge>
  ) : null;
};

export default GenderBadge;
