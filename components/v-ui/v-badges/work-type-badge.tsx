import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconWorkType } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type WorkTypeBadgeProps = {
  workType?: "remote" | "hybrid";
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a badge component based on the provided workType.
 *
 * @component
 *
 * @param {object} props - The component props.
 * @param {string} props.workType - The work type to render the badge for. Should be either "remote" or "hybrid".
 * @param {string} props.iconClassName - The CSS class name for the icon.
 * @param {string} props.badgeClassName - The CSS class name for the badge.
 *
 * @returns {JSX.Element | null} The rendered badge component or null if workType is falsy.
 */

const WorkTypeBadge = ({
  workType,
  iconClassName,
  badgeClassName,
}: WorkTypeBadgeProps) => {
  return workType ? (
    <Badge
      size="featured"
      variant="violet"
      icon={
        <IconWorkType className={cn("w-5 h-5 text-primary", iconClassName)} />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(workType)}
    </Badge>
  ) : null;
};

export default WorkTypeBadge;
