import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTicket } from "@/components/icons/logo-icons";
import { cn, formatNumber } from "@/lib/utils";

type TicketsBadgeProps = {
  tickets?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

const TicketsBadge = ({
  tickets,
  iconClassName,
  badgeClassName,
}: TicketsBadgeProps) => {
  return tickets ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconTicket className={cn("w-4 h-4 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatNumber(tickets)}
    </Badge>
  ) : null;
};

export default TicketsBadge;
