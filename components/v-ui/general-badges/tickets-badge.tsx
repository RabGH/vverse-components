import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTicket } from "@/components/icons/logo-icons";
import { formatNumber } from "@/lib/utils";

type TicketsBadgeProps = {
  tickets?: number;
};

const TicketsBadge = ({ tickets }: TicketsBadgeProps) => {
  return tickets ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconTicket className="w-4 h-4 text-primary" />}
    >
      {formatNumber(tickets)}
    </Badge>
  ) : null;
};

export default TicketsBadge;
