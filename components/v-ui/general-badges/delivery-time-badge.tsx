import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconDelivery } from "@/components/icons/logo-icons";
import { cn, parseHoursFormat } from "@/lib/utils";

type DeliveryTimeBadgeProps = {
  deliveryTime?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

const DeliveryTimeBadge = ({
  deliveryTime,
  iconClassName,
  badgeClassName,
}: DeliveryTimeBadgeProps) => {
  return deliveryTime ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconDelivery className={cn("w-4 h-4")} />}
      className={cn(badgeClassName)}
    >
      {parseHoursFormat(deliveryTime)}
    </Badge>
  ) : null;
};

export default DeliveryTimeBadge;
