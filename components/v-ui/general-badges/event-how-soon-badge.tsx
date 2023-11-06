import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconCalendarEvent } from "@/components/icons/logo-icons";
import { formatCapitalLetters } from "@/lib/utils";

type EventHowSoonBadgeProps = {
  eventHowSoon?: string;
};

const EventHowSoonBadge = ({ eventHowSoon }: EventHowSoonBadgeProps) => {
  return eventHowSoon ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconCalendarEvent className="w-4 h-4 text-primary" />}
    >
      {formatCapitalLetters(eventHowSoon)}
    </Badge>
  ) : null;
};

export default EventHowSoonBadge;
