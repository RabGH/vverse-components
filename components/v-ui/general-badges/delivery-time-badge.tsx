import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconDelivery } from "@/components/icons/logo-icons";
import { parseHoursFormat } from "@/lib/utils";

type DeliveryTimeBadgeProps = {
  deliveryTime?: number;
};

const DeliveryTimeBadge = ({ deliveryTime }: DeliveryTimeBadgeProps) => {
  return deliveryTime ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconDelivery className="w-4 h-4" />}
    >
      {parseHoursFormat(deliveryTime)}
    </Badge>
  ) : null;
};

export default DeliveryTimeBadge;
