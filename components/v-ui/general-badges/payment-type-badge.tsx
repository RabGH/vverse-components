import React from "react";

import { Badge } from "@/components/ui/badge";
import {
  IconCellPhoneCard,
  IconProjectCheck,
} from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type PaymentTypeBadgeProps = {
  paymentType?: "fixed" | "paid";
  badgeClassName?: string;
  iconClassName?: string;
};

const PaymentTypeBadge = ({
  paymentType,
  badgeClassName,
  iconClassName,
}: PaymentTypeBadgeProps) => {
  if (paymentType === "fixed") {
    return (
      <Badge
        size="featured"
        variant="violet"
        icon={
          <IconProjectCheck
            className={cn("w-4 h-4 text-primary", iconClassName)}
          />
        }
        className={cn(badgeClassName)}
      >
        {formatCapitalLetters(paymentType)}
      </Badge>
    );
  } else if (paymentType === "paid") {
    return (
      <Badge
        size="featured"
        variant="violet"
        icon={
          <IconCellPhoneCard
            className={cn("w-4 h-4 text-primary", iconClassName)}
          />
        }
        className={cn(badgeClassName)}
      >
        {formatCapitalLetters(paymentType)}
      </Badge>
    );
  }

  return null;
};

export default PaymentTypeBadge;
