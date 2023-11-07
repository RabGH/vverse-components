import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconHourGlass } from "@/components/icons/logo-icons";
import { cn, parseHoursFormat } from "@/lib/utils";

type DeliveryTimeBadgeProps = {
  deliveryTime?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a badge component displaying the delivery time.
 *
 * @param {DeliveryTimeBadgeProps} deliveryTime - The delivery time to be displayed.
 * @param {string} iconClassName - Optional additional CSS classes for the icon.
 * @param {string} badgeClassName - Optional additional CSS classes for the badge.
 * @return {JSX.Element | null} The rendered badge component or null if no delivery time is provided.
 */

const DeliveryTimeBadge = ({
  deliveryTime,
  iconClassName,
  badgeClassName,
}: DeliveryTimeBadgeProps) => {
  return deliveryTime ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconHourGlass className={cn("w-5 h-5", iconClassName)} />}
      className={cn(badgeClassName)}
    >
      {parseHoursFormat(deliveryTime)}
    </Badge>
  ) : null;
};

export default DeliveryTimeBadge;
