import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStopwatchDuration } from "@/components/icons/logo-icons";
import { parseDurationFormat } from "@/lib/utils";

type EventDurationBadgeProps = {
  eventDuration?: number;
};

const EventDurationBadge = ({ eventDuration }: EventDurationBadgeProps) => {
  return eventDuration ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconStopwatchDuration className="w-4 h-4 text-primary" />}
    >
      {parseDurationFormat(eventDuration)}
    </Badge>
  ) : null;
};

export default EventDurationBadge;
