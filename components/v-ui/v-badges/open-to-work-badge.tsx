import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconWorkExperienceBtn } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type OpenToWorkBadgeProps = {
  isOpenToWork?: string;
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders an "Open to Work" badge based on the isOpenToWork prop.
 *
 * @component
 *
 * @param {object} props - The component props.
 * @param {string} props.isOpenToWork - Indicates whether the user is open to work or not. Defaults to an empty string.
 * @param {string} props.badgeClassName - Additional CSS class name for the badge element.
 * @param {string} props.iconClassName - Additional CSS class name for the icon element.
 *
 * @returns {JSX.Element | null} The rendered badge element if isOpenToWork is true, otherwise null.
 */

const OpenToWorkBadge = ({
  isOpenToWork,
  badgeClassName,
  iconClassName,
}: OpenToWorkBadgeProps) => {
  return isOpenToWork ? (
    <Badge
      size="featured"
      variant="success"
      icon={<IconWorkExperienceBtn className={cn("w-5 h-5", iconClassName)} />}
      className={cn("w-36", badgeClassName)}
    >
      {isOpenToWork}
    </Badge>
  ) : null;
};

export default OpenToWorkBadge;
