import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconTicket } from "@/components/icons/logo-icons";
import { cn, formatNumber } from "@/lib/utils";

type TicketsBadgeProps = {
  tickets?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a badge displaying the number of tickets.
 *
 * @component
 *
 * @param {object} props - The component props.
 * @param {number} props.tickets - The number of tickets.
 * @param {string} props.iconClassName - Class name for the ticket icon.
 * @param {string} props.badgeClassName - Class name for the badge.
 *
 * @returns {JSX.Element | null} The rendered badge component or null if no tickets.
 */

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
        <IconTicket className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatNumber(tickets)}
    </Badge>
  ) : null;
};

export default TicketsBadge;
