import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStopwatchDuration } from "@/components/icons/logo-icons";
import { cn, parseDurationFormat } from "@/lib/utils";

type EventDurationBadgeProps = {
  eventDuration?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

const EventDurationBadge = ({
  eventDuration,
  iconClassName,
  badgeClassName,
}: EventDurationBadgeProps) => {
  return eventDuration ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconStopwatchDuration
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      {parseDurationFormat(eventDuration)}
    </Badge>
  ) : null;
};

export default EventDurationBadge;
