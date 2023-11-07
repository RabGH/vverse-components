import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconPriceType } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type BargainBadgeProps = {
  bargain?: string;
  badgeClassName?: string;
  iconClassName?: string;
};

/**
 * Renders a BargainBadge component.
 *
 * @param {BargainBadgeProps} bargain - A boolean value indicating whether the badge should be rendered or not.
 * @param {string} iconClassName - Additional class name for the icon.
 * @param {string} badgeClassName - Additional class name for the badge.
 * @return {JSX.Element | null} The rendered BargainBadge component.
 */

const BargainBadge = ({
  bargain,
  iconClassName,
  badgeClassName,
}: BargainBadgeProps) => {
  return bargain ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconPriceType className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(bargain)} Price
    </Badge>
  ) : null;
};

export default BargainBadge;
