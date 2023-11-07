import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconGlobeDefined } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type CountryBadgeProps = {
  country?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Generates a country badge component.
 *
 * @param {CountryBadgeProps} country - The country object.
 * @param {string} badgeClassName - The class name for the badge.
 * @param {string} iconClassName - The class name for the icon.
 * @return {JSX.Element | null} The country badge component.
 */

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
