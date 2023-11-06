import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconGlobeDefined } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type CountryBadgeProps = {
  country?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

const CountryBadge = ({
  country,
  badgeClassName,
  iconClassName,
}: CountryBadgeProps) => {
  return country ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconGlobeDefined
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(country)}
    </Badge>
  ) : null;
};

export default CountryBadge;
