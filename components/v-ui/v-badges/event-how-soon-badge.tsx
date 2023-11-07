import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconCalendarEvent } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type EventHowSoonBadgeProps = {
  eventHowSoon?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

const EventHowSoonBadge = ({
  eventHowSoon,
  iconClassName,
  badgeClassName,
}: EventHowSoonBadgeProps) => {
  return eventHowSoon ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconCalendarEvent
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(eventHowSoon)}
    </Badge>
  ) : null;
};

export default EventHowSoonBadge;
