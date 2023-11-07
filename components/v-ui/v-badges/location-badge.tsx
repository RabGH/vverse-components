import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconMapPin } from "@/components/icons/logo-icons";
import { cn } from "@/lib/utils";
import { formatCapitalLetters } from "../../../lib/utils";

type LocationBadgeProps = {
  location?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

const LocationBadge = ({
  location,
  iconClassName,
  badgeClassName,
}: LocationBadgeProps) => {
  return location ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconMapPin className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(location)}
    </Badge>
  ) : null;
};

export default LocationBadge;
