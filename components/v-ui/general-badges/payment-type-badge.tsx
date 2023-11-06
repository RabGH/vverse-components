import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconWorkType } from "@/components/icons/logo-icons";

type PaymentTypeBadgeProps = {
  paymentType?: "fixed" | "paid";
};

const PaymentTypeBadge = ({ paymentType }: PaymentTypeBadgeProps) => {
  return paymentType ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconWorkType className="w-4 h-4 text-primary" />}
    >
      {paymentType.toUpperCase()}
    </Badge>
  ) : null;
};

export default PaymentTypeBadge;
