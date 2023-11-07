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

/**
 * Renders a location badge with an icon and formatted location name.
 *
 * @param {LocationBadgeProps} location - The location object.
 * @param {string} iconClassName - The class name for the icon.
 * @param {string} badgeClassName - The class name for the badge.
 * @returns {JSX.Element | null} - The rendered location badge or null if location is falsy.
 */

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
