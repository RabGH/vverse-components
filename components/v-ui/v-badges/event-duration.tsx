import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStopwatchDuration } from "@/components/icons/logo-icons";
import { cn, parseDurationFormat } from "@/lib/utils";

type EventDurationBadgeProps = {
  eventDuration?: number;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Render a badge component that displays the duration of an event.
 *
 * @param {EventDurationBadgeProps} eventDuration - The duration of the event.
 * @param {string} iconClassName - The class name for the icon.
 * @param {string} badgeClassName - The class name for the badge.
 * @return {JSX.Element | null} The rendered badge component.
 */

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
