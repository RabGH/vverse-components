import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconCalendarEvent } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type EventHowSoonBadgeProps = {
  eventHowSoon?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a badge component based on the eventHowSoon prop value.
 *
 * @param {EventHowSoonBadgeProps} eventHowSoon - The eventHowSoon prop value.
 * @param {string} iconClassName - The class name for the icon.
 * @param {string} badgeClassName - The class name for the badge.
 * @return {JSX.Element | null} The rendered badge component or null if eventHowSoon is falsy.
 */

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
